export const SESSION_COOKIE_NAME = '__Host-restricted_session'
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7

export type AuthEnv = {
  // `<iterations>:<salt hex>:<hash hex>` の形。scripts/hash-password.mjs で作る。
  PASSWORD_HASH?: string
  SESSION_SECRET?: string
}

const encoder = new TextEncoder()

const hexToBytes = (hex: string) => {
  if (!/^(?:[0-9a-f]{2})+$/i.test(hex)) {
    return null
  }
  return Uint8Array.from(hex.match(/../g) ?? [], (byte) => parseInt(byte, 16))
}

const bytesToHex = (bytes: ArrayBuffer) =>
  Array.from(new Uint8Array(bytes), (byte) => byte.toString(16).padStart(2, '0')).join('')

// 秘密鍵が短いと署名を総当たりされるので、足りないときは設定されていないものとして扱う。
const isConfigured = (env: AuthEnv): env is Required<AuthEnv> =>
  !!env.PASSWORD_HASH && !!env.SESSION_SECRET && env.SESSION_SECRET.length >= 32

export const verifyPassword = async (password: string, env: AuthEnv): Promise<boolean> => {
  if (!isConfigured(env)) {
    return false
  }
  const [iterationsText, saltHex, hashHex] = env.PASSWORD_HASH.split(':')
  const iterations = Number(iterationsText)
  const salt = hexToBytes(saltHex ?? '')
  const expected = hexToBytes(hashHex ?? '')
  if (!Number.isInteger(iterations) || !salt || !expected) {
    return false
  }

  const key = await crypto.subtle.importKey('raw', encoder.encode(password), 'PBKDF2', false, [
    'deriveBits'
  ])
  const actual = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', hash: 'SHA-256', salt, iterations },
    key,
    expected.length * 8
  )
  return crypto.subtle.timingSafeEqual(actual, expected)
}

const importHmacKey = (secret: string) =>
  crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [
    'sign',
    'verify'
  ])

// パスワードのハッシュも署名に含めて、パスワードを変えたら発行済みのセッションが無効になるようにする。
const sessionPayload = (expiresAt: number, env: Required<AuthEnv>) =>
  encoder.encode(`${expiresAt}.${env.PASSWORD_HASH}`)

export const createSessionToken = async (env: AuthEnv): Promise<string | null> => {
  if (!isConfigured(env)) {
    return null
  }
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_MAX_AGE_SECONDS
  const signature = await crypto.subtle.sign(
    'HMAC',
    await importHmacKey(env.SESSION_SECRET),
    sessionPayload(expiresAt, env)
  )
  return `${expiresAt}.${bytesToHex(signature)}`
}

export const verifySessionToken = async (
  token: string | undefined,
  env: AuthEnv
): Promise<boolean> => {
  if (!isConfigured(env) || !token) {
    return false
  }
  const [expiresAtText, signatureHex] = token.split('.')
  const expiresAt = Number(expiresAtText)
  const signature = hexToBytes(signatureHex ?? '')
  if (!Number.isInteger(expiresAt) || expiresAt < Date.now() / 1000 || !signature) {
    return false
  }
  // crypto.subtle.verify は一定時間で比べる。
  return crypto.subtle.verify(
    'HMAC',
    await importHmacKey(env.SESSION_SECRET),
    signature,
    sessionPayload(expiresAt, env)
  )
}

export const readSessionCookie = (request: Request) =>
  request.headers
    .get('Cookie')
    ?.split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${SESSION_COOKIE_NAME}=`))
    ?.slice(SESSION_COOKIE_NAME.length + 1)

export const serializeSessionCookie = (value: string, maxAge: number) =>
  `${SESSION_COOKIE_NAME}=${value}; Path=/; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`
