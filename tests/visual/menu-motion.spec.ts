import { expect, test } from "@playwright/test";

test("inline menu keeps its anchor and restores nested height smoothly", async ({ page }) => {
  await page.goto("/tests/visual/menu-motion.html");
  const sample = async () =>
    page.evaluate(async () => {
      const menu = document.querySelector<HTMLElement>(".k-menu-inline")!;
      const item = menu.querySelector<HTMLElement>(":scope > .k-menu-item")!;
      const icon = item.querySelector<HTMLElement>(".k-menu-item-icon")!;
      const title = item.querySelector<HTMLElement>(".k-menu-title-content")!;
      const rows: { x: number; height: number; opacity: number; same: boolean }[] = [];
      const started = performance.now();
      document.querySelector<HTMLButtonElement>("#toggle")!.click();
      while (performance.now() - started < 450) {
        await new Promise(requestAnimationFrame);
        rows.push({
          x: icon.getBoundingClientRect().x,
          height: menu.getBoundingClientRect().height,
          opacity: Number(getComputedStyle(title).opacity),
          same: menu.querySelector(":scope > .k-menu-item") === item,
        });
      }
      return rows;
    });
  await expect(page.locator(".k-menu-inline").first()).toBeVisible();
  const initialHeight = await page
    .locator(".k-menu-inline")
    .first()
    .evaluate((el) => el.getBoundingClientRect().height);
  const collapse = await sample();
  expect(collapse.every((row) => row.same)).toBe(true);
  expect(collapse.some((row) => row.opacity > 0 && row.opacity < 1)).toBe(true);
  expect(
    Math.max(...collapse.map((row) => row.x)) - Math.min(...collapse.map((row) => row.x)),
  ).toBeLessThan(12);
  const expand = await sample();
  expect(expand.every((row) => row.same)).toBe(true);
  expect(Math.abs(expand.at(-1)!.height - initialHeight)).toBeLessThan(1);
  // Once the height transition has settled, releasing its measured height must not jump.
  expect(
    Math.max(...expand.slice(1).map((row, index) => Math.abs(row.height - expand[index].height))),
  ).toBeLessThan(45);
  const tail = expand.slice(-8).map((row) => row.height);
  expect(Math.max(...tail) - Math.min(...tail)).toBeLessThan(1);
  await expect(
    page.locator('.k-menu-inline .k-menu-submenu-title[aria-expanded="true"]'),
  ).toHaveCount(3);
});
