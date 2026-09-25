// 色と文字の大きさは portfolio の src/styles/globals.css (DESIGN.md) に合わせる。
const styles = `
:root {
  --text: #1e2126;
  --text-muted: #636e7d;
  --accent: #255fb1;
  --accent-muted: #578edb;
  --border: #dde0e4;
  --surface: #ffffff;
  --surface-subtle: #f9f9fa;
}
*, *::before, *::after { box-sizing: border-box; }
body {
  margin: 0;
  background: var(--surface);
  color: var(--text);
  font-family: "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic UI", "Noto Sans JP", Roboto, "Segoe UI", sans-serif;
  font-size: 17px;
  line-height: 1.9;
  overflow-wrap: break-word;
}
main { max-width: 48rem; margin: 0 auto; padding: 32px 16px; }
h1.title { margin: 0 0 40px; text-align: center; color: var(--accent); font-size: 28px; line-height: 1.4; }
@media (min-width: 640px) {
  main { padding-top: 48px; padding-bottom: 48px; }
  h1.title { margin-bottom: 48px; font-size: 34px; }
}
:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.login { display: flex; flex-direction: column; gap: 16px; max-width: 24rem; margin: 0 auto; }
.login label { font-size: 15px; line-height: 1.25; }
.login input { border: 1px solid var(--border); border-radius: 4px; padding: 8px 12px; font: inherit; }
.login button { border: 0; border-radius: 4px; padding: 8px 16px; background: var(--accent); color: #fff; font: inherit; font-size: 15px; cursor: pointer; }
.message { margin: 0; color: var(--text-muted); font-size: 15px; }
.logout { margin-top: 48px; text-align: center; }
.logout button { border: 0; background: none; padding: 0; color: var(--accent); font: inherit; font-size: 15px; text-decoration: underline; text-underline-offset: 0.2em; cursor: pointer; }
.markdown > * + * { margin-top: 1.25em; }
.markdown > :first-child { margin-top: 0; }
.markdown p, .markdown ul, .markdown ol, .markdown pre, .markdown blockquote, .markdown table { margin-bottom: 0; }
.markdown :is(h1, h2, h3, h4) { margin: 2em 0 0; line-height: 1.4; }
.markdown h1 { font-size: 28px; }
.markdown h2 { font-size: 24px; }
.markdown h3 { font-size: 20px; }
.markdown h4 { font-size: 17px; }
.markdown :is(ul, ol) { padding-left: 1.5em; }
.markdown a { color: var(--accent); text-decoration-color: var(--accent-muted); text-underline-offset: 0.2em; }
.markdown blockquote { margin-left: 0; margin-right: 0; border-left: 4px solid var(--border); padding-left: 1em; color: var(--text-muted); }
.markdown :not(pre) > code { border-radius: 4px; background: var(--surface-subtle); padding: 0.1em 0.3em; font-size: 0.9em; }
.markdown pre { overflow-x: auto; border: 1px solid var(--border); border-radius: 8px; background: var(--surface-subtle); padding: 1em; font-size: 15px; line-height: 1.6; }
.markdown table { display: block; overflow-x: auto; border-collapse: collapse; font-size: 15px; }
.markdown :is(th, td) { border-bottom: 1px solid var(--border); padding: 0.5em 1em; text-align: left; }
.markdown hr { border: 0; border-top: 1px solid var(--border); }
.markdown img { max-width: 100%; height: auto; }
`

const layout = (body: string) => `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>restricted - p1ass's portfolio</title>
<style>${styles}</style>
</head>
<body>
<main>
<h1 class="title">Restricted</h1>
${body}
</main>
</body>
</html>`

export const loginPage = (message?: string) =>
  layout(`<form method="post" action="/login" class="login">
<label for="password">パスワード</label>
<input id="password" name="password" type="password" autocomplete="current-password" required autofocus>
${message ? `<p role="alert" class="message">${message}</p>` : ''}
<button type="submit">表示する</button>
</form>`)

export const contentPage = (html: string) =>
  layout(`<article class="markdown">${html}</article>
<form method="post" action="/logout" class="logout"><button type="submit">ログアウト</button></form>`)
