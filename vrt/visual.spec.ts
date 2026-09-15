import { expect, type Page, test } from '@playwright/test'

// /salary は公開していないページなので対象にしない。
const pages = [{ name: 'top', path: '/' }]

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

    await waitForStableHeight(page)

    await expect(page).toHaveScreenshot(`${name}.png`, {
      fullPage: true,
      timeout: 30_000,
    })
  })
}

// next/image は loading="lazy" なので、ビューポートをページの高さまで広げて、すべての画像を可視域に入れて読み込ませる。
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

async function waitForStableHeight(page: Page) {
  await page.waitForFunction(
    () =>
      new Promise((resolve) => {
        let previous = -1
        let stableCount = 0
        const tick = () => {
          const current = document.documentElement.scrollHeight
          stableCount = current === previous ? stableCount + 1 : 0
          previous = current
          if (stableCount >= 5) {
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
