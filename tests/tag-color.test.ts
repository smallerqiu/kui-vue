import { mount } from "@vue/test-utils";
import fs from "node:fs/promises";
import path from "node:path";
import type { VueWrapper } from "@vue/test-utils";
import less from "less";
import { describe, expect, it } from "vitest";
import { colors } from "../components/const/var";
import { Tag } from "../components";

// The chip itself, not the `transition-stub` the test renderer puts around it.
const tagOf = (wrapper: VueWrapper) => wrapper.find(".k-tag").element;
const classesOf = (wrapper: VueWrapper) => [...tagOf(wrapper).classList];
const inlineBackground = (wrapper: VueWrapper) =>
  (tagOf(wrapper).getAttribute("style") ?? "").includes("background-color");

// The palette's neutral slot: it takes the greys the theme re-maps instead of a tint of a hue, so its
// declarations differ from the other sixteen on purpose.
const NEUTRAL = ["gray"];

const mountTag = (props: Record<string, unknown>) =>
  mount(Tag, { props, slots: { default: "tag" } });

describe("Tag color vocabulary", () => {
  it("paints from a preset name through the palette, not an inline value", () => {
    const wrapper = mountTag({ color: "blue" });
    try {
      // 预设名走色板：换个主题只改 token，写死在 style 里的颜色永远改不动
      expect(classesOf(wrapper)).toContain("k-tag-blue");
      expect(inlineBackground(wrapper)).toBe(false);
    } finally {
      wrapper.unmount();
    }
  });

  it("prefers the palette when a preset name is also a CSS color keyword", () => {
    const wrapper = mountTag({ color: "gray" });
    try {
      // `gray` 既能被浏览器读成颜色，也是色板里的一个名字 ⇒ 名字优先，否则拿到的是浏览器的灰
      expect(classesOf(wrapper)).toContain("k-tag-gray");
      expect(inlineBackground(wrapper)).toBe(false);
    } finally {
      wrapper.unmount();
    }
  });

  it("reads a colour the browser understands as a custom colour", () => {
    const wrapper = mountTag({ color: "tomato" });
    try {
      // 色板之外的可读色走内联那条臂，而不是拼成一个没人定义过的类名
      expect(tagOf(wrapper).getAttribute("style")).toContain("tomato");
      expect(classesOf(wrapper)).toContain("k-tag-has-color");
      expect(classesOf(wrapper)).not.toContain("k-tag-tomato");
    } finally {
      wrapper.unmount();
    }
  });

  it("keeps a hex colour inline", () => {
    const wrapper = mountTag({ color: "#f0f0f0" });
    try {
      expect(tagOf(wrapper).getAttribute("style")).toContain("rgb(240, 240, 240)");
      expect(classesOf(wrapper)).not.toContain("k-tag-f0f0f0");
    } finally {
      wrapper.unmount();
    }
  });

  it("paints nothing when the colour string is neither a name nor a colour", () => {
    const wrapper = mountTag({ color: "brand-blue" });
    try {
      // 两边都不认时标签回到 `theme` 的表面：发一个没有规则定义的类名只会画一个不存在的颜色
      expect(classesOf(wrapper)).not.toContain("k-tag-brand-blue");
      expect(inlineBackground(wrapper)).toBe(false);
    } finally {
      wrapper.unmount();
    }
  });

  it("keeps its tier class next to a colour", () => {
    const wrapper = mountTag({ color: "blue", theme: "solid" });
    try {
      // 档与颜色各发各的类名，谁压住谁由样式表的书写顺序决定，见下面那条
      expect(classesOf(wrapper)).toContain("k-tag-solid");
      expect(classesOf(wrapper)).toContain("k-tag-blue");
    } finally {
      wrapper.unmount();
    }
  });

  it("reads `default` as no colour at all, not as a palette name", () => {
    const withName = mountTag({ color: "default" });
    const without = mountTag({});
    try {
      // 不传 color 用的就是组件自己的那张表面 ⇒ `default` 不再占一个色板名字，写了它和没写一样
      expect(classesOf(withName)).not.toContain("k-tag-default");
      expect(inlineBackground(withName)).toBe(false);
      expect(classesOf(withName)).toEqual(classesOf(without));
    } finally {
      withName.unmount();
      without.unmount();
    }
  });
});

describe("Tag palette coverage", () => {
  const root = path.resolve(import.meta.dirname, "..");

  // Flatten the compiled sheet into `selector -> declarations`, whitespace-normalised, and keep the
  // order the rules came out in. Reading values is what catches a copy-paste that points the wrong
  // token at a palette name; reading order is what catches a colour losing the (0,2,0) tie to a tier.
  const sheet = async () => {
    const filename = path.join(root, "components/tag/styles/index.less");
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

  // A chip's three stops are mixed at build time, so the expectation mixes them the same way instead of
  // copying a string: LESS resolves the palette variable here exactly as the stylesheet does, which
  // still fails when `index.less` points the wrong base colour or the wrong share at a name.
  const STOPS: Array<[property: string, stop: string, share: number]> = [
    ["color", "3", 70],
    ["border-color", "6", 40],
    ["background-color", "9", 10],
  ];

  const shades = async () => {
    const palette = path.join(root, "components/styles/less-var.less");
    const snippet =
      `@import (reference) ${JSON.stringify(palette)};\n.kui-shades {\n` +
      colors
        .filter((name) => !NEUTRAL.includes(name))
        .map((name) =>
          STOPS.map(([, stop, share]) => `  ${name}-${stop}: fade(@${name}, ${share}%);`).join(
            "\n",
          ),
        )
        .join("\n") +
      "\n}";
    const css = (await less.render(snippet)).css;
    const built = new Map(
      [...css.matchAll(/([-\w]+):\s*([^;]+);/g)].map(
        (match) => [match[1], match[2].trim()] as const,
      ),
    );
    for (const name of colors.filter((n) => !NEUTRAL.includes(n)))
      for (const [, stop] of STOPS)
        if (!built.has(`${name}-${stop}`))
          throw new Error(`no build-time shade for ${name}-${stop}`);
    return built;
  };

  const painted = (name: string, built: Map<string, string>) =>
    NEUTRAL.includes(name)
      ? "color: var(--kui-color-text); border-color: var(--kui-color-border); background-color: var(--kui-color-bg-2)"
      : STOPS.map(
          ([property, stop]) =>
            `${property}: var(--kui-color-${name}-${stop}, ${built.get(`${name}-${stop}`)})`,
        ).join("; ");

  it("every palette name paints the chip with its own token", async () => {
    const { rules } = await sheet();
    const built = await shades();

    // 色板加了名字而标签的样式表忘了跟进，这里就红：组件认这个名字，样式表不认
    for (const name of colors) {
      expect(rules.get(`.k-tag.k-tag-${name}`), `.k-tag.k-tag-${name}`).toBe(painted(name, built));
    }
  });

  it("keeps `default` out of the stylesheet", async () => {
    const { rules } = await sheet();

    // 组件不再发 `k-tag-default`，样式表也不该留一条没人调用的颜色档
    expect(rules.has(".k-tag.k-tag-default"), ".k-tag.k-tag-default").toBe(false);
  });

  it("lets a colour outrank the tier it is written next to", async () => {
    const { selectors } = await sheet();
    const indexOf = (name: string) => selectors.indexOf(`.k-tag.k-tag-${name}`);

    // 两者都是 (0,2,0)，谁赢只看书写顺序 ⇒ 颜色必须排在每一档之后，否则 `color` 会被 `theme` 重新画过
    for (const tier of ["fill", "outline", "plain", "solid", "dashed"]) {
      expect(indexOf(tier), `.k-tag-${tier} 必须排在颜色之前`).toBeLessThan(indexOf("blue"));
    }
  });

  it("shows every palette name in the colorful demo", async () => {
    const demo = await fs.readFile(path.join(root, "components/tag/demo/color.vue"), "utf8");

    for (const name of colors) {
      expect(demo.includes(`"${name}"`), `${name} 没出现在多彩 demo 里`).toBe(true);
    }
  });

  it("counts the palette the way the docs do", async () => {
    const zh = await fs.readFile(path.join(root, "components/tag/index.md"), "utf8");
    const en = await fs.readFile(path.join(root, "components/tag/index.en_US.md"), "utf8");

    // 色板改名字，文档里那句"同一套 N 个"也得跟着改，不然写的是数量、画的是另一套
    expect(zh.includes(`共用同一套 ${colors.length} 个`), "index.md 的色板数量").toBe(true);
    expect(en.includes(`the same ${colors.length} \`Badge\` uses`), "index.en_US.md 的数量").toBe(
      true,
    );
  });
});
