import { mount } from "@vue/test-utils";
import fs from "node:fs/promises";
import path from "node:path";
import less from "less";
import { h } from "vue";
import { describe, expect, it } from "vitest";
import { colors } from "../components/const/var";
import Tooltip from "../components/tooltip";
import { isColor } from "../components/utils/color";

/**
 * Tooltip 的 `color` 契约（kui-vue 侧，与 kui-react/tests/tooltip-color.test.tsx 断言同一件事）：
 * 气泡有两条臂——浏览器读得出的颜色写内联，色板里读不出的名字（`volcano`）由 `.k-tooltip-<name>` 画。
 * 两边都不认的字符串不能再拼类名：那个类没人定义过，气泡会连自己那层表面一起丢掉。
 */

// Structural classes the panel always carries, plus the motion pair the popup adds while it opens.
// Anything else starting with `k-tooltip-` was painted from a `color` string.
const STATIC = ["k-tooltip-has-arrow"];

const panel = (color?: string) => {
  const wrapper = mount(Tooltip, {
    attachTo: document.body,
    props: { show: true, trigger: "manual", color, title: "提示" },
    slots: { default: () => h("button", "触发") },
  });
  const root = document.querySelector(".k-tooltip");
  const classes = [...(root?.classList ?? [])];
  const result = {
    classes,
    colorClasses: classes
      .filter((cls) => cls.startsWith("k-tooltip-"))
      .filter((cls) => !STATIC.includes(cls) && !/-(?:enter|leave)-(?:active|to)$/.test(cls)),
    contentPaint: document.querySelector(".k-tooltip-content")?.getAttribute("style") ?? "",
    arrowPaint: document.querySelector(".k-tooltip-arrow svg")?.getAttribute("style") ?? "",
  };
  wrapper.unmount();
  return result;
};

describe("Tooltip color vocabulary", () => {
  it("paints a palette name the browser cannot read through the stylesheet", () => {
    const { colorClasses, contentPaint } = panel("volcano");

    // `volcano` 是色板名字、不是 CSS 关键字 ⇒ 只能靠类名，内联那条臂读不出这个值
    expect(colorClasses).toEqual(["k-tooltip-volcano"]);
    expect(contentPaint).not.toContain("background-color");
  });

  it("paints a preset name the browser can read inline, from the palette token", () => {
    const { colorClasses, contentPaint, arrowPaint } = panel("blue");

    // 名字优先于「浏览器也认识它」：写 token 而不是写死一个色值，换主题才跟着走
    expect(colorClasses).toEqual(["k-tooltip-has-color"]);
    expect(contentPaint).toContain("background-color: var(--kui-color-blue)");
    expect(arrowPaint).toContain("fill: var(--kui-color-blue)");
  });

  it("paints a colour outside the palette inline", () => {
    const { colorClasses, contentPaint } = panel("tomato");

    expect(colorClasses).toEqual(["k-tooltip-has-color"]);
    expect(contentPaint).toContain("background-color: tomato");
  });

  it("emits no shell class for a colour string neither arm can use", () => {
    for (const color of ["brand-blue", "default"]) {
      const result = panel(color);

      // 拼一个没人定义的类名会把气泡的表面一起带走；不写颜色时它本来长什么样就还长什么样
      expect(result.colorClasses, color).toEqual([]);
      expect(result.contentPaint, color).not.toContain("background-color");
      expect(result.arrowPaint, color).toContain("currentcolor");

      expect(result.classes.join(" "), color).toBe(panel(undefined).classes.join(" "));
    }
  });
});

describe("Tooltip palette coverage", () => {
  const root = path.resolve(import.meta.dirname, "..");

  // Flatten the compiled sheet into the order the rules came out in, so a block pasted twice shows up
  // as two identical selectors instead of silently folding into one map entry.
  const selectors = async () => {
    const filename = path.join(root, "components/tooltip/styles/index.less");
    const css = (await less.render(await fs.readFile(filename, "utf8"), { filename })).css;
    return [...css.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/([^{}]+)\{([^{}]*)\}/g)].map(
      (match) => (match[1].split("}").pop() ?? "").replace(/\s+/g, " ").trim(),
    );
  };

  it("covers every palette name the browser cannot read with its own rule", async () => {
    const list = await selectors();

    // 组件只给读不出的名字发类名，样式表就得恰好认这些；其余名字走内联，留不留规则都不影响这一臂
    for (const name of colors) {
      if (isColor(name)) continue;
      const painted = list.filter(
        (selector) => selector === `.k-tooltip-${name} .k-tooltip-content`,
      );
      expect(painted, `.k-tooltip-${name} 缺少规则`).toHaveLength(1);
    }
  });

  it("declares each colour class once", async () => {
    const list = await selectors();

    for (const name of [...colors, "brand-blue", "default"]) {
      const painted = list.filter(
        (selector) => selector === `.k-tooltip-${name} .k-tooltip-content`,
      );
      expect(painted.length, `.k-tooltip-${name} 出现 ${painted.length} 次`).toBeLessThanOrEqual(1);
    }
  });
});
