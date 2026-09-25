import { createHmac, scrypt, timingSafeEqual } from 'node:crypto'
import { promisify } from 'node:util'

// このファイルはサーバー側 (getServerSideProps と API Routes) からだけ読み込む。

const scryptAsync = promisify(scrypt) as (
  password: string,
  salt: Buffer,
  keylen: number
) => Promise<Buffer>

export const SESSION_COOKIE_NAME = 'restricted_session'
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7

type Config = {
  passwordHash: string
  sessionSecret: string
}

const readConfig = (): Config | null => {
  const passwordHash = process.env.RESTRICTED_PASSWORD_HASH
  const sessionSecret = process.env.RESTRICTED_SESSION_SECRET
  // 秘密鍵が短いと署名を総当たりされるので、足りないときは設定されていないものとして扱う。
  if (!passwordHash || !sessionSecret || sessionSecret.length < 32) {
    return null
  }
  return { passwordHash, sessionSecret }
}

const safeEqual = (a: Buffer, b: Buffer) => a.length === b.length && timingSafeEqual(a, b)

// RESTRICTED_PASSWORD_HASH は scripts/hash-restricted-password.mjs が出力する `<salt hex>:<hash hex>` の形。
export const verifyPassword = async (password: string): Promise<boolean> => {
  const config = readConfig()
  if (!config) {
    return false
  }
  const [saltHex, hashHex] = config.passwordHash.split(':')
  if (!saltHex || !hashHex) {
    return false
  }
  const expected = Buffer.from(hashHex, 'hex')
  const actual = await scryptAsync(password, Buffer.from(saltHex, 'hex'), expected.length)
  return safeEqual(actual, expected)
}

// パスワードのハッシュも署名に含めて、パスワードを変えたら発行済みのセッションが無効になるようにする。
const sign = (expiresAt: number, config: Config) =>
  createHmac('sha256', config.sessionSecret)
    .update(`${expiresAt}.${config.passwordHash}`)
    .digest('hex')

export const createSessionToken = (): string | null => {
  const config = readConfig()
  if (!config) {
    return null
  }
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_MAX_AGE_SECONDS
  return `${expiresAt}.${sign(expiresAt, config)}`
}

export const verifySessionToken = (token: string | undefined): boolean => {
  const config = readConfig()
  if (!config || !token) {
    return false
  }
  const [expiresAtText, signature] = token.split('.')
  const expiresAt = Number(expiresAtText)
  if (!Number.isInteger(expiresAt) || expiresAt < Date.now() / 1000 || !signature) {
    return false
  }
  return safeEqual(Buffer.from(signature, 'hex'), Buffer.from(sign(expiresAt, config), 'hex'))
}

export const serializeSessionCookie = (value: string, maxAge: number) =>
  [
    `${SESSION_COOKIE_NAME}=${value}`,
    'Path=/',
    `Max-Age=${maxAge}`,
    'HttpOnly',
    'SameSite=Lax',
    ...(process.env.NODE_ENV === 'production' ? ['Secure'] : [])
  ].join('; ')
