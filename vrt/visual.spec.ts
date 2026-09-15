import { expect, type Page, test } from '@playwright/test'

const pages = [
  { name: 'top', path: '/' },
  { name: 'salary', path: '/salary' },
]

// 固有サイズを持たない SVG にすると、img の width/height 属性の比率で描画されるので、本物の画像と同じレイアウトになる。
const placeholderSvg =
  '<svg xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#c0c4ca"/></svg>'

test.beforeEach(async ({ page }) => {
  // 外部の応答で撮影が揺れないよう通信を止める。画像を abort すると描画が実行ごとに揺れるので、決まったプレースホルダを返す。
  await page.route('**/*', (route) => {
    const url = new URL(route.request().url())
    const isLocal = url.hostname === '127.0.0.1' || url.hostname === 'localhost'
    // next/image はサーバー側で外部の画像を取りに行くので、ブラウザからの要求の段階で差し替える。
    const isExternalImage = isLocal
      ? url.pathname === '/_next/image' && /^https?:/.test(url.searchParams.get('url') ?? '')
      : route.request().resourceType() === 'image'

    if (isExternalImage) {
      return route.fulfill({ status: 200, contentType: 'image/svg+xml', body: placeholderSvg })
    }
    if (isLocal) {
      return route.continue()
    }
    return route.abort()
  })
})

for (const { name, path } of pages) {
  test(name, async ({ page }) => {
    const response = await page.goto(path, { waitUntil: 'load' })

    expect(response?.status(), `${path} が 200 を返さない`).toBe(200)

    await expandViewportToPage(page)
    await page.waitForFunction(() => Array.from(document.images).every((image) => image.complete))
    await page.evaluate(() => document.fonts.ready)
    await expandViewportToPage(page)

    await waitForStableRendering(page)

    await expect(page).toHaveScreenshot(`${name}.png`, {
      fullPage: true,
      timeout: 30_000,
    })
  })
}

// fullPage の撮影はビューポートを一時的にページの高さへ広げる。recharts はそのリサイズで描画アニメーションをやり直すので、撮影前に広げておく。
// 広げると loading="lazy" の画像も可視域に入り、すべて読み込まれる。
async function expandViewportToPage(page: Page) {
  const viewport = page.viewportSize()
  if (!viewport) {
    return
  }
  const height = await page.evaluate(() => document.documentElement.scrollHeight)
  if (height !== viewport.height) {
    await page.setViewportSize({ width: viewport.width, height })
  }
}

// recharts の描画アニメーションは requestAnimationFrame で SVG の属性を書き換えるので、DOM が動かなくなるまで待つ。
async function waitForStableRendering(page: Page) {
  await page.waitForFunction(
    () =>
      new Promise((resolve) => {
        let previous = ''
        let stableCount = 0
        const tick = () => {
          const current = `${document.documentElement.scrollHeight}:${document.body.innerHTML}`
          stableCount = current === previous ? stableCount + 1 : 0
          previous = current
          if (stableCount >= 10) {
            resolve(true)
            return
          }
          requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }),
    undefined,
    { timeout: 30_000 }
  )
}
