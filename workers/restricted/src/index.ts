import {
  type AuthEnv,
  createSessionToken,
  readSessionCookie,
  serializeSessionCookie,
  SESSION_MAX_AGE_SECONDS,
  verifyPassword,
  verifySessionToken
} from './auth'
import { contentPage, loginPage } from './html'
import { escapeHtml, renderMarkdown } from './markdown'

type Env = AuthEnv & {
  BUCKET: R2Bucket
  LOGIN_LIMITER: RateLimit
}

// 表示する Markdown は R2 のこのキーに置く。
const CONTENT_KEY = 'index.md'

const ERROR_MESSAGES: Record<string, string> = {
  password: 'パスワードが違います。',
  'rate-limit': '試行回数が多すぎます。しばらくしてから試してください。'
}

const securityHeaders = {
  'Cache-Control': 'private, no-store',
  'X-Robots-Tag': 'noindex, nofollow',
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff',
  'Content-Security-Policy':
    "default-src 'none'; style-src 'unsafe-inline'; img-src https: data:; form-action 'self'; frame-ancestors 'none'; base-uri 'none'"
}

const html = (body: string, status = 200) =>
  new Response(body, {
    status,
    headers: { 'Content-Type': 'text/html; charset=utf-8', ...securityHeaders }
  })

const redirect = (location: string, cookie?: string) =>
  new Response(null, {
    status: 303,
    headers: { Location: location, ...securityHeaders, ...(cookie ? { 'Set-Cookie': cookie } : {}) }
  })

const handleLogin = async (request: Request, env: Env) => {
  // 同じ IP からの試行を 1 分に 5 回までにして、総当たりを防ぐ。
  const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown'
  const { success } = await env.LOGIN_LIMITER.limit({ key: ip })
  if (!success) {
    return redirect('/?error=rate-limit')
  }

  const form = await request.formData().catch(() => null)
  const password = form?.get('password')
  const token =
    typeof password === 'string' && password && (await verifyPassword(password, env))
      ? await createSessionToken(env)
      : null
  if (!token) {
    return redirect('/?error=password')
  }
  return redirect('/', serializeSessionCookie(token, SESSION_MAX_AGE_SECONDS))
}

const handleIndex = async (request: Request, env: Env) => {
  if (!(await verifySessionToken(readSessionCookie(request), env))) {
    const error = new URL(request.url).searchParams.get('error') ?? ''
    return html(loginPage(ERROR_MESSAGES[error]))
  }

  const object = await env.BUCKET.get(CONTENT_KEY)
  if (!object) {
    return html(contentPage(`<p>${escapeHtml(`R2 に ${CONTENT_KEY} がありません。`)}</p>`))
  }
  return html(contentPage(renderMarkdown(await object.text())))
}

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url)

    if (pathname === '/' && (request.method === 'GET' || request.method === 'HEAD')) {
      return handleIndex(request, env)
    }
    if (pathname === '/login' && request.method === 'POST') {
      return handleLogin(request, env)
    }
    if (pathname === '/logout' && request.method === 'POST') {
      return redirect('/', serializeSessionCookie('', 0))
    }
    if (pathname === '/robots.txt') {
      return new Response('User-agent: *\nDisallow: /\n', {
        headers: { 'Content-Type': 'text/plain' }
      })
    }
    return new Response('Not Found', { status: 404, headers: securityHeaders })
  }
} satisfies ExportedHandler<Env>
