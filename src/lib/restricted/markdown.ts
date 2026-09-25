import { Marked } from 'marked'

// Markdown はサーバー側で HTML にして、Markdown のライブラリをブラウザに送らないようにする。

const escapeHtml = (text: string) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const marked = new Marked({
  gfm: true,
  renderer: {
    // Markdown に書いた生の HTML はそのまま出さず、文字として表示する。
    html: ({ text }) => escapeHtml(text)
  }
})

export const renderMarkdown = (markdown: string): string => marked.parse(markdown, { async: false })
