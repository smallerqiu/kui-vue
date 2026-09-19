import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/visual",
  snapshotPathTemplate: "{testDir}/__screenshots__/{arg}{ext}",
  expect: {
    toHaveScreenshot: {
      animations: "disabled",
      // Keep layout regressions strict while tolerating small cross-platform font rasterization.
      maxDiffPixelRatio: 0.03,
    },
  },
  use: {
    ...devices["Desktop Chrome"],
    // Use installed Chrome locally; CI uses Playwright's pinned Chromium.
    channel: process.env.CI ? undefined : "chrome",
    baseURL: "http://127.0.0.1:7010",
    colorScheme: "light",
  },
  webServer: {
    command: "./node_modules/.bin/vite --config vite.config.visual.ts",
    url: "http://127.0.0.1:7010/tests/visual/fixture.html",
    reuseExistingServer: !process.env.CI,
  },
});
