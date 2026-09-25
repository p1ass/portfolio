# p1ass/portfolio

🏠 My portfolio
https://p1ass.com

## Getting Started

1. Install Node and pnpm.
1. Run `pnpm install`
1. Run `pnpm dev`

## Technical Stack

- TypeScript
- Next.js
- Tailwind CSS
- Vercel

## Restricted page

`/restricted` shows Markdown only to people who know the password. The content and the password are not in this repository; set them as environment variables on Vercel (or in `.env.local` for local development).

| Name | Value |
| --- | --- |
| `RESTRICTED_MARKDOWN` | The Markdown to show |
| `RESTRICTED_PASSWORD_HASH` | Output of `node scripts/hash-restricted-password.mjs` |
| `RESTRICTED_SESSION_SECRET` | Output of `node scripts/hash-restricted-password.mjs` (random, 32+ chars) |

Changing the password logs out everyone who is logged in.
