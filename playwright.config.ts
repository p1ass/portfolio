import { defineConfig, devices } from '@playwright/test'

const port = 4174

export default defineConfig({
  testDir: './vrt',
  outputDir: './vrt/.results',
  // {platform} を入れて、macOS で撮った画像が Linux の基準画像を上書きしないようにする。
  snapshotPathTemplate: '{testDir}/__screenshots__/{projectName}/{arg}-{platform}{ext}',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  // 再試行があると、撮影の揺れとデザインの変更を区別できない。
  retries: 0,
  // CI と揃えるため Apple Silicon でも amd64 のエミュレーションで動かすので、既定の 30 秒では足りない。
  timeout: 60_000,
  reporter: process.env.CI ? 'github' : 'list',

  use: {
    baseURL: `http://127.0.0.1:${port}`,
  },

  expect: {
    toHaveScreenshot: {
      animations: 'disabled',
      caret: 'hide',
      threshold: 0,
      maxDiffPixels: 0,
    },
  },

  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile',
      use: {
        ...devices['Pixel 7'],
        // 確かめたいのは CSS ピクセル上のレイアウトなので、プリセットの 2.625 倍で撮らない。
        deviceScaleFactor: 1,
      },
    },
  ],

  webServer: {
    command: `pnpm start --hostname 127.0.0.1 --port ${port}`,
    url: `http://127.0.0.1:${port}/`,
    reuseExistingServer: !process.env.CI,
  },
})
