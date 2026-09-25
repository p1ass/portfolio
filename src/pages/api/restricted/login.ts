import type { NextApiRequest, NextApiResponse } from 'next'

import {
  createSessionToken,
  serializeSessionCookie,
  SESSION_MAX_AGE_SECONDS,
  verifyPassword
} from '../../../lib/restricted/auth'

// 間違えたときに少し待たせて、総当たりを遅くする。
const FAILURE_DELAY_MS = 1000

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    res.status(405).end()
    return
  }

  const password = typeof req.body?.password === 'string' ? req.body.password : ''
  const token = password && (await verifyPassword(password)) ? createSessionToken() : null

  if (!token) {
    await new Promise((resolve) => setTimeout(resolve, FAILURE_DELAY_MS))
    res.redirect(303, '/restricted?error=1')
    return
  }

  res.setHeader('Set-Cookie', serializeSessionCookie(token, SESSION_MAX_AGE_SECONDS))
  res.redirect(303, '/restricted')
}
