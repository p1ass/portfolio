import type { GetServerSideProps } from 'next'
import Head from 'next/head'

import { SectionTitle } from '../components/shared/SectionTitle'
import { SESSION_COOKIE_NAME, verifySessionToken } from '../lib/restricted/auth'
import { renderMarkdown } from '../lib/restricted/markdown'

type Props = { authenticated: true; html: string } | { authenticated: false; hasError: boolean }

// 中身はリポジトリに置かず、環境変数 RESTRICTED_MARKDOWN から読む。
// 認証が通らない限り props に入れないので、ブラウザには届かない。
export const getServerSideProps: GetServerSideProps<Props> = async ({ req, res, query }) => {
  res.setHeader('Cache-Control', 'private, no-store')
  res.setHeader('X-Robots-Tag', 'noindex, nofollow')

  if (!verifySessionToken(req.cookies[SESSION_COOKIE_NAME])) {
    return { props: { authenticated: false, hasError: query.error === '1' } }
  }

  return {
    props: { authenticated: true, html: renderMarkdown(process.env.RESTRICTED_MARKDOWN ?? '') }
  }
}

export default function Restricted(props: Props) {
  return (
    <>
      <Head>
        <title>restricted - p1ass&apos;s portfolio</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
        <SectionTitle title="Restricted" />
        {props.authenticated ? (
          <>
            <article
              className="restricted-markdown"
              dangerouslySetInnerHTML={{ __html: props.html }}
            />
            <form method="post" action="/api/restricted/logout" className="mt-12 text-center">
              <button type="submit" className="link-body text-body-sm">
                ログアウト
              </button>
            </form>
          </>
        ) : (
          <form
            method="post"
            action="/api/restricted/login"
            className="mx-auto flex max-w-sm flex-col gap-4"
          >
            <label htmlFor="password" className="text-label">
              パスワード
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              autoFocus
              className="rounded-sm border border-border bg-surface px-3 py-2"
            />
            {props.hasError && (
              <p role="alert" className="text-body-sm text-text-muted">
                パスワードが違います。
              </p>
            )}
            <button
              type="submit"
              className="rounded-sm bg-brand-surface px-4 py-2 text-label text-text-on-brand"
            >
              表示する
            </button>
          </form>
        )}
      </main>
    </>
  )
}
