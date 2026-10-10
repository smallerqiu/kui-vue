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
      const collapsing = !menu.classList.contains("k-menu-inline-collapsed");
      let settledFrames = 0;
      let previousHeight = Number.NaN;
      const started = performance.now();
      document.querySelector<HTMLButtonElement>("#toggle")!.click();
      // Vue 在微任务里才把 class 写进 DOM，先等一次微任务，再强制一次布局/样式重算。
      // 这样淡出过渡必定已经创建，不必指望 rAF 恰好采到中间帧。
      await Promise.resolve();
      title.getBoundingClientRect();
      const opacityTransition = title
        .getAnimations()
        .some((animation) => (animation as CSSTransition).transitionProperty === "opacity");
      // Wall time alone is not an animation clock: under load the first frame can
      // arrive after 450ms. Require the target state and several settled frames.
      while (performance.now() - started < 3000) {
        await new Promise(requestAnimationFrame);
        const height = menu.getBoundingClientRect().height;
        const opacity = Number(getComputedStyle(title).opacity);
        rows.push({
          x: icon.getBoundingClientRect().x,
          height,
          opacity,
          same: menu.querySelector(":scope > .k-menu-item") === item,
        });
        const reachedMode = menu.classList.contains("k-menu-inline-collapsed") === collapsing;
        const reachedOpacity = Math.abs(opacity - (collapsing ? 0 : 1)) < 0.001;
        const animating = menu
          .getAnimations({ subtree: true })
          .some((animation) => animation.playState === "running" || animation.pending);
        const measuredHeight = [...menu.querySelectorAll<HTMLElement>(".k-menu-submenu-sub")].some(
          (element) => element.style.height !== "",
        );
        settledFrames =
          reachedMode &&
          reachedOpacity &&
          !animating &&
          !measuredHeight &&
          Math.abs(height - previousHeight) < 0.1
            ? settledFrames + 1
            : 0;
        previousHeight = height;
        if (performance.now() - started >= 450 && settledFrames >= 8) break;
      }
      return { rows, settledFrames, opacityTransition };
    });
  await expect(page.locator(".k-menu-inline").first()).toBeVisible();
  const initialHeight = await page
    .locator(".k-menu-inline")
    .first()
    .evaluate((el) => el.getBoundingClientRect().height);
  const collapsedSample = await sample();
  expect(
    collapsedSample.settledFrames,
    "collapse must finish before expansion starts",
  ).toBeGreaterThanOrEqual(8);
  const collapse = collapsedSample.rows;
  expect(collapse.every((row) => row.same)).toBe(true);
  // 淡出过渡在点击后立刻可测，比"某一帧的 opacity 落在 0 和 1 之间"稳定：
  // 后者依赖 rAF 是否恰好命中中间帧，冷启动或高负载时会误报。
  expect(
    collapsedSample.opacityTransition,
    "collapse must start an opacity transition on the item title",
  ).toBe(true);
  expect(collapse.at(-1)!.opacity).toBeLessThan(0.001);
  expect(
    Math.max(...collapse.map((row) => row.x)) - Math.min(...collapse.map((row) => row.x)),
  ).toBeLessThan(12);
  const expandedSample = await sample();
  expect(
    expandedSample.settledFrames,
    "expansion must finish and release measured heights",
  ).toBeGreaterThanOrEqual(8);
  const expand = expandedSample.rows;
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
