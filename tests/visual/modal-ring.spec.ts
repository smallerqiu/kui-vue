import { expect, test, type Page } from "@playwright/test";

/**
 * Modal 里的焦点环不能被 `.k-modal-body` 裁掉。
 *
 * 缺陷来自 body 的 `overflow: auto`：outline 画在控件盒子外面，而滚动容器一定在
 * padding box 处裁剪，于是贴着边缘的控件只剩三条边——这就是"input 放进 Modal
 * 聚焦后 outline 显示不全"。修复给 body 留了一圈焦点环宽度的内边距，再用等量负
 * margin 抵掉，所以这里断言的是几何不变量而不是像素：
 *   1. 环的盒子必须整个落在 body 的 padding box 内；
 *   2. 控件确实贴着边缘（留白不超过一圈环宽），否则第 1 条就成了空测；
 *   3. 内容宽度还是卡片内容宽，钉住"负 margin 把 padding 全抵掉了"。
 *
 * react 侧共用同一份 LESS（components/modal/styles/index.less 双仓 cmp 一致），
 * 所以用例只放在 vue。
 */

type Ring = {
  /** outline 画到控件盒子外的距离：outline-width + outline-offset */
  inflate: number;
  outlineStyle: string;
  /** 环外沿到 body 裁剪框（padding box）的距离，负数就是被裁掉的像素 */
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
};

async function measureRing(page: Page, selector: string): Promise<Ring> {
  return page.evaluate((selector) => {
    const control = document.querySelector<HTMLElement>(selector);
    if (!control) throw new Error(`missing ${selector}`);
    const body = control.closest(".k-modal-body") as HTMLElement;
    const cs = getComputedStyle(control);
    const bs = getComputedStyle(body);
    const inflate = parseFloat(cs.outlineWidth) + parseFloat(cs.outlineOffset);
    const r = control.getBoundingClientRect();
    const b = body.getBoundingClientRect();
    // 滚动容器在 padding box 处裁剪，所以把 border 扣掉再比。
    const clip = {
      left: b.left + parseFloat(bs.borderLeftWidth),
      top: b.top + parseFloat(bs.borderTopWidth),
      right: b.right - parseFloat(bs.borderRightWidth),
      bottom: b.bottom - parseFloat(bs.borderBottomWidth),
    };
    return {
      inflate,
      outlineStyle: cs.outlineStyle,
      width: r.width,
      left: r.left - inflate - clip.left,
      top: r.top - inflate - clip.top,
      right: clip.right - (r.right + inflate),
      bottom: clip.bottom - (r.bottom + inflate),
    };
  }, selector);
}

async function focusRing(page: Page, placeholder: string): Promise<Ring> {
  await page.click(`input[placeholder="${placeholder}"]`);
  const ring = await measureRing(page, `.k-input:has(input[placeholder="${placeholder}"])`);
  // 环没画出来就等于什么都没测：先确认这次真的有一个 outline 要检查
  expect(ring.outlineStyle, "focused control should paint an outline ring").toBe("solid");
  expect(ring.inflate).toBeGreaterThan(0);
  return ring;
}

function expectWholeRing(ring: Ring) {
  for (const side of ["left", "top", "right", "bottom"] as const) {
    expect(ring[side], `${side} is cut by the modal body clip`).toBeGreaterThanOrEqual(0);
  }
}

test.describe("modal focus ring", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/tests/visual/modal-ring.html");
    await page.waitForSelector(".k-modal-body .k-input");
  });

  test("keeps the ring of the first input whole on all four sides", async ({ page }) => {
    const ring = await focusRing(page, "ring-first");
    expectWholeRing(ring);
    // 留白超过一圈环宽就说明控件没贴着边缘，这条用例也就没在测裁剪
    expect(Math.min(ring.left, ring.right, ring.top)).toBeLessThanOrEqual(ring.inflate);
  });

  test("keeps the ring of the last input whole against the footer edge", async ({ page }) => {
    const ring = await focusRing(page, "ring-last");
    expectWholeRing(ring);
    expect(Math.min(ring.left, ring.right, ring.bottom)).toBeLessThanOrEqual(ring.inflate);
  });

  test("keeps the widest ring in the library whole", async ({ page }) => {
    // 夹具里那个 5px（2px outline + 3px offset）的盒子是库里最宽的一圈焦点环（Steps）。
    const ring = await measureRing(page, '[data-ring="worst"]');
    expect(ring.inflate).toBe(5);
    expectWholeRing(ring);
    expect(Math.min(ring.left, ring.right, ring.bottom)).toBeLessThan(ring.inflate);
  });

  test("keeps the ring whole when the body itself scrolls", async ({ page }) => {
    // 弹窗有两个滚动源：整窗滚的遮罩层（上面的用例）和限高后自己滚的 body。
    // 后者才是真正一路滚到底的那条路，滚到底以后最后一行的环必须还是完整的。
    await page.evaluate(() => {
      document.querySelector<HTMLElement>(".k-modal")!.classList.add("k-modal-maximized");
      const inputs = [...document.querySelectorAll<HTMLElement>(".k-modal-body .k-input")];
      inputs[1].style.margin = "1200px 0";
    });
    await page.click('input[placeholder="ring-last"]');
    const scrolled = await page.evaluate(() => {
      const body = document.querySelector<HTMLElement>(".k-modal-body")!;
      body.scrollTop = body.scrollHeight;
      return body.scrollTop;
    });
    // 没滚起来就说明这个夹具没在测 body 自己滚的那条路
    expect(scrolled).toBeGreaterThan(0);
    const ring = await measureRing(page, '.k-input:has(input[placeholder="ring-last"])');
    expect(ring.outlineStyle, "focused control should paint an outline ring").toBe("solid");
    expectWholeRing(ring);
  });

  test("leaves the content width alone", async ({ page }) => {
    const ring = await focusRing(page, "ring-middle");
    // 卡片宽 520，减左右 1px 边框和 content 的 20px 内边距：padding 全部由负 margin 抵掉
    expect(ring.width).toBeCloseTo(478, 0.5);
  });
});
