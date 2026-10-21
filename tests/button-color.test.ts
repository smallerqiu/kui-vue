import { mount } from "@vue/test-utils";
import fs from "node:fs/promises";
import path from "node:path";
import less from "less";
import { describe, expect, it } from "vitest";
import { Button } from "../components/button";
import { colors } from "../components/const/var";

/**
 * Button 的 `color` 契约（kui-vue 侧，与 kui-react/tests/button-color.test.tsx 断言同一件事）：
 * 按钮只有一条约上就涂色的臂——`button/styles/index.less` 里的那套共享色板。这里没有内联臂，
 * 所以色板之外的字符串不能算「一种颜色」：算上的话它会把 `type` 顶掉，只剩一颗没涂面的裸 `.k-btn`。
 */

// vue 的 `color` 类型就是那 17 个名字，react 的是 `string`；这里要喂类型之外的字符串，只能绕开检查。
const outside = (value: string) => value as unknown as (typeof colors)[number];

const mountButton = (props: Record<string, unknown>) =>
  mount(Button, { props: { ...props }, slots: { default: "按钮" } });

const inlinePaint = (element: Element) =>
  (element.getAttribute("style") ?? "").includes("background-color");

describe("Button color vocabulary", () => {
  it("paints from a preset name and lets it outrank the semantic type", () => {
    const wrapper = mountButton({ type: "primary", color: "blue" });
    try {
      // 色板的名字自己就是一档配色，写它的时候不再发 `k-btn-primary`，否则两张表面会打架
      expect(wrapper.classes()).toContain("k-btn-blue");
      expect(wrapper.classes()).not.toContain("k-btn-primary");
      expect(inlinePaint(wrapper.element)).toBe(false);
    } finally {
      wrapper.unmount();
    }
  });

  it("paints a preset name the browser cannot read as a colour", () => {
    const wrapper = mountButton({ type: "primary", color: "volcano" });
    try {
      // `volcano` 不是 CSS 关键字，浏览器读不出，但色板认它：只能走类名那条臂
      expect(wrapper.classes()).toContain("k-btn-volcano");
      expect(wrapper.classes()).not.toContain("k-btn-primary");
    } finally {
      wrapper.unmount();
    }
  });

  it("reads a colour outside the palette as no colour written", () => {
    for (const color of ["tomato", "#f00", "brand-blue", "default"]) {
      const wrapper = mountButton({ type: "primary", color: outside(color) });
      try {
        // 样式表涂不出这个名字，内联臂又不存在 ⇒ 拼类名只会得到一个空壳，把 `type` 顶掉则整颗按钮没表面
        expect(wrapper.classes(), color).toContain("k-btn-primary");
        expect(wrapper.classes(), color).not.toContain(`k-btn-${color}`);
        expect(inlinePaint(wrapper.element), color).toBe(false);
      } finally {
        wrapper.unmount();
      }
    }
  });

  it("keeps `default` equal to writing no colour at all", () => {
    const withName = mountButton({ type: "primary", color: outside("default") });
    const without = mountButton({ type: "primary" });
    try {
      expect(withName.classes()).toEqual(without.classes());
    } finally {
      withName.unmount();
      without.unmount();
    }
  });

  it("keeps the tier class next to a colour", () => {
    const wrapper = mountButton({ type: "primary", color: "blue", theme: "solid" });
    try {
      expect(wrapper.classes()).toContain("k-btn-solid");
      expect(wrapper.classes()).toContain("k-btn-blue");
    } finally {
      wrapper.unmount();
    }
  });
});

describe("Button palette coverage", () => {
  const root = path.resolve(import.meta.dirname, "..");

  // Flatten the compiled sheet into `selector -> declarations`, whitespace-normalised, and keep the
  // order the rules came out in. The order list (not the map) is what catches a name whose block was
  // pasted twice: the later copy silently wins the (0,2,0) tie and the earlier one becomes dead CSS.
  const sheet = async () => {
    const filename = path.join(root, "components/button/styles/index.less");
    const css = (await less.render(await fs.readFile(filename, "utf8"), { filename })).css;
    const entries = [...css.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/([^{}]+)\{([^{}]*)\}/g)].map(
      (match) =>
        [
          (match[1].split("}").pop() ?? "").replace(/\s+/g, " ").trim(),
          match[2].replace(/\s+/g, " ").trim().replace(/;$/, ""),
        ] as const,
    );
    return { rules: new Map(entries), selectors: entries.map(([selector]) => selector) };
  };

  const forms = (name: string) => [
    `.k-btn-outline.k-btn-${name}, .k-btn-dashed.k-btn-${name}`,
    `.k-btn-solid.k-btn-${name}::before`,
    `.k-btn-plain.k-btn-${name}`,
  ];

  it("paints every palette name in all three tiers the component can ask for", async () => {
    const { rules } = await sheet();

    // 组件认这个名字，样式表就得跟满：`outline`/`dashed` 共用一块、`solid` 涂在 `::before`、`plain` 只染文字
    for (const name of colors) {
      for (const selector of forms(name)) {
        const declarations = rules.get(selector);
        expect(declarations, `${selector} 缺少规则`).toBeTypeOf("string");
        expect(declarations, `${selector} 没读自己的 token`).toContain(`--kui-color-${name}`);
      }
    }
  });

  it("declares each palette name once per tier", async () => {
    const { selectors } = await sheet();

    // 同一条规则写两遍时后一份赢、前一份没人能看见，改 token 的人只改得动其中一份
    for (const name of colors) {
      for (const selector of forms(name)) {
        expect(
          selectors.filter((item) => item === selector),
          selector,
        ).toHaveLength(1);
      }
    }
  });

  it("keeps names outside the palette out of the stylesheet", async () => {
    const { rules } = await sheet();

    // 色板之外的名字不该留一条没人能调用的颜色档；组件也不会再为它们发类名
    for (const name of ["tomato", "brand-blue", "hot-pink"]) {
      for (const selector of forms(name)) {
        expect(rules.has(selector), selector).toBe(false);
      }
    }
  });

  it("shows every palette name in the colorful demo", async () => {
    const demo = await fs.readFile(path.join(root, "components/button/demo/color.vue"), "utf8");

    for (const name of colors) {
      expect(demo.includes(`"${name}"`), `${name} 没出现在多彩 demo 里`).toBe(true);
    }
  });
});
