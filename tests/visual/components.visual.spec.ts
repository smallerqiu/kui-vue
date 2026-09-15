import { expect, test } from "@playwright/test";

const cases = [
  { name: "medium-fill-light-zh", query: "size=medium&theme=fill&lang=zh" },
  { name: "small-outline-dark-en", query: "size=small&theme=outline&lang=en&dark=1" },
  { name: "large-plain-light-de", query: "size=large&theme=plain&lang=de" },
];

for (const visualCase of cases) {
  test(visualCase.name, async ({ page }) => {
    await page.goto(`/tests/visual/fixture.html?${visualCase.query}`);
    await expect(page.locator(".visual-fixture")).toHaveScreenshot(`${visualCase.name}.png`);
  });
}

test("date-picker-time-overlay", async ({ page }) => {
  await page.goto("/tests/visual/fixture.html?size=medium&theme=fill&lang=en&dark=1");
  await page.locator(".k-datepicker").nth(1).click();
  await expect(page.locator('.k-datepicker-overlay[mode="time"]')).toBeVisible();
  await expect(page).toHaveScreenshot("time-picker-overlay.png");
});
