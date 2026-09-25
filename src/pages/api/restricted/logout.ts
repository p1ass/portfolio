import type { NextApiRequest, NextApiResponse } from 'next'

import { serializeSessionCookie } from '../../../lib/restricted/auth'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    res.status(405).end()
    return
  }

  res.setHeader('Set-Cookie', serializeSessionCookie('', 0))
  res.redirect(303, '/restricted')
}
