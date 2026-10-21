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

const mountButton = (props: Record<string, unknown>) =>
  mount(Button, { props: { ...props }, slots: { default: "按钮" } });

const inlinePaint = (element: Element) =>
  (element.getAttribute("style") ?? "").includes("background-color");

type Rgb = [number, number, number];

const BLACK: Rgb = [0, 0, 0];
const WHITE: Rgb = [255, 255, 255];

// WCAG 2.1 的那套算法：这里只用来核对样式表写的标签色，不引入依赖
const toRgb = (hex: string): Rgb => {
  const digits = hex.replace("#", "");
  const widened = digits.length === 3 ? digits.replace(/./g, (d) => d + d) : digits;
  const value = Number.parseInt(widened.slice(0, 6), 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
};

const linear = (channel: number) => {
  const ratio = channel / 255;
  return ratio <= 0.04045 ? ratio / 12.92 : ((ratio + 0.055) / 1.055) ** 2.4;
};

const luminance = ([red, green, blue]: Rgb) =>
  0.2126 * linear(red) + 0.7152 * linear(green) + 0.0722 * linear(blue);

const contrast = (a: Rgb, b: Rgb) => {
  const [high, low] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (high + 0.05) / (low + 0.05);
};

// `color-mix(in srgb, A n%, B)` 的那一步：A 留 n%，B 留剩下的
const mix = (a: Rgb, b: Rgb, percent: number): Rgb =>
  a.map((channel, index) => (channel * percent + b[index] * (100 - percent)) / 100) as Rgb;

// 调色板里有 `lighten(red, 5%)` 这种算出小数的写法，比对时留出半个通道的余量
const sameRgb = (a: Rgb, b: Rgb) =>
  a.every((channel, index) => Math.abs(channel - b[index]!) < 0.5);

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
      const wrapper = mountButton({ type: "primary", color });
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
    const withName = mountButton({ type: "primary", color: "default" });
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

  it("emits no tier class when the caller writes none", () => {
    const wrapper = mountButton({ color: "blue" });
    // 元素上挂的是完整的 `k-btn-<档>`，所以比对的必须也是整串：只拿档位词比，谁都落不进这个过滤器，断言恒过
    const tiers = ["fill", "outline", "plain", "solid", "dashed"].map((tier) => `k-btn-${tier}`);
    try {
      // 「不写档位」那条臂挂在这五颗类名都不出现的前提上：组件哪天顺手发一颗档，名字就又不涂色了
      expect(wrapper.classes()).toContain("k-btn-blue");
      expect(wrapper.classes().filter((cls) => tiers.includes(cls))).toEqual([]);
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

  // 调色板的值在 `components/styles/less-var.less`，而 `@orange: orange` 这类写成 CSS 关键字的取值 LESS
  // 会原样吐出来。对比度要的是数字，所以让 LESS 自己拆通道 —— 名字怎么写的都不影响这里。
  const palette = async () => {
    const body = colors
      .map((name) => `  ${name}: red(@${name}), green(@${name}), blue(@${name});`)
      .join("\n");
    // `filename` 不能也指向 `less-var.less`：LESS 把根文件记在已访问集合里，自引用那条 import 会被整条丢掉
    const css = (
      await less.render(
        `@import (reference) "../components/styles/less-var.less";\nprobe {\n${body}\n}\n`,
        { filename: path.join(root, "tests/palette-probe.less") },
      )
    ).css;
    const tokens = new Map<string, Rgb>(
      [...css.matchAll(/([a-z]+): ([\d.]+), ([\d.]+), ([\d.]+)/g)].map((match) => [
        match[1] as string,
        [Number(match[2]), Number(match[3]), Number(match[4])] as Rgb,
      ]),
    );
    for (const name of colors) expect(tokens.has(name), `${name} 不在调色板里`).toBe(true);
    return tokens;
  };

  // `type` 在「不写档位」时自己长出一张实心表面（`.k-btn-primary:not(...)`），名字也要有同一条臂。
  // 这条选择器把五档全排掉，比 `type` 那份多一档：`solid` 对名字有自己的 `::before` 画法，
  // 根上再吃一条底色就不是同一个色了 —— 谁照抄成四档，这条精确 key 立刻查不到规则。
  const bare = (name: string) =>
    `.k-btn-${name}:not(.k-btn-outline, .k-btn-dashed, .k-btn-fill, .k-btn-solid, .k-btn-plain)`;

  // 名字当表面用的那两条臂（不写档位、`solid` 的 `::before`）颜色相同，标签也就必须相同
  const ink = (name: string) => `.k-btn-solid.k-btn-${name}`;

  // 标签写在 `--kui-color-text-on-<name>` 后面那个字面量里：这条 hook 留给自带色阶的主题，库里不定义它，
  // 所以静置时读到的就是这里写的这一支
  const inkVar = (name: string) => `color: var(--kui-color-text-on-${name}, `;

  const labelArms = (name: string) => [
    bare(name),
    ink(name),
    ...["hover", "active"].map((state) => `${bare(name)}:not(:disabled):${state}`),
    ...["hover", "active"].map(
      (state) => `.k-btn-solid.k-btn-${name}:${state}:not(:disabled)::before`,
    ),
  ];

  const forms = (name: string) => [
    bare(name),
    `.k-btn-outline.k-btn-${name}, .k-btn-dashed.k-btn-${name}`,
    `.k-btn-solid.k-btn-${name}::before`,
    `.k-btn-plain.k-btn-${name}`,
    `.k-btn-fill.k-btn-${name}`,
  ];

  it("paints every palette name in all five paths the component can ask for", async () => {
    const { rules } = await sheet();

    // 组件认这个名字，样式表就得跟满：不写档位时自己长成实心、`outline`/`dashed` 共用一块、`solid` 涂在 `::before`、`plain` 只染文字、`fill` 把名字放进字里
    for (const name of colors) {
      for (const selector of forms(name)) {
        const declarations = rules.get(selector);
        expect(declarations, `${selector} 缺少规则`).toBeTypeOf("string");
        expect(declarations, `${selector} 没读自己的 token`).toContain(`--kui-color-${name}`);
      }
    }
  });

  it("gives the tier-free path a whole surface, not a half paint", async () => {
    const { rules } = await sheet();

    for (const name of colors) {
      const declarations = rules.get(bare(name)) ?? "";

      // 只染文字的那条臂是 `plain` 的画法；不写档位要的是和 `type` 一样的实心：底、字、边一起上，边框收掉
      expect(declarations, `${name} 没画实心底`).toContain(`background: var(--kui-color-${name})`);
      expect(declarations, `${name} 没换文字色`).toContain(inkVar(name));
      expect(declarations, `${name} 没收掉边框`).toContain("border: none");

      // 交互态也得跟着：`type` 那条有 hover/active，名字这条不能只画静置
      for (const state of ["hover", "active"]) {
        expect(
          rules.has(`${bare(name)}:not(:disabled):${state}`),
          `${name} 少了 :${state} 那档`,
        ).toBe(true);
      }
    }
  });

  it("paints the solid tier with the same surface and label as the tier-free path", async () => {
    const { rules } = await sheet();

    for (const name of colors) {
      const surface = rules.get(`.k-btn-solid.k-btn-${name}::before`) ?? "";
      const label = rules.get(ink(name)) ?? "";

      // 这一档的颜色涂在 `::before` 上，档位自己在那层加 `filter: brightness()`。名字这条得把同一支色画进
      // 底层、把同一个标签写回元素上，两条路才不会一个是实心一个是洗色
      expect(surface, `${name} 的 solid 表面不是那支名字`).toContain(
        `background-color: var(--kui-color-${name})`,
      );
      expect(label, `${name} 的 solid 标签没跟着走`).toContain(inkVar(name));

      // 标签换成黑的时候，那层往下压黑的滤镜花的正是黑标签要的对比度 ⇒ 名字这条臂把它摘掉，靠底色自己走
      for (const state of ["hover", "active"]) {
        const step = rules.get(`.k-btn-solid.k-btn-${name}:${state}:not(:disabled)::before`) ?? "";
        expect(step, `${name} 的 solid :${state} 没摘掉滤镜`).toContain("filter: none");
      }
    }
  });

  it("moves the name into the label on the fill tier", async () => {
    const { rules } = await sheet();

    for (const name of colors) {
      const declarations = rules.get(`.k-btn-fill.k-btn-${name}`) ?? "";

      // `fill` 的表面是那层灰洗色，名字进来只换字：这条臂再涂一层底就会盖掉档位自己的洗色，
      // 那也正是三个语义类型在这一档已有的读法
      expect(declarations, `${name} 没把名字放进字里`).toContain(`color: var(--kui-color-${name})`);
      expect(declarations, `${name} 在 fill 档又涂了一层底`).not.toContain("background");
    }
  });

  // 状态那一步从编译产物里读：百分比和混过去的那一端都写在样式表里，写死在这里的人改了式子不会知道
  const stepPercent = (declarations: string) => {
    const percent = declarations.match(/ (\d+(?:\.\d+)?)%,/)?.[1];
    expect(percent, "这条臂里没有 color-mix 的百分比").not.toBeUndefined();
    return Number(percent!);
  };

  it("keeps the label above 4.5:1 on every surface a name paints", async () => {
    const { rules } = await sheet();
    const tokens = await palette();

    // `type` 那条的步进幅度是这条臂的参照：作者裁的是「照 `type` 那条路走」，混向哪一端由对比度管，混多少照它抄
    const typeTier = ".k-btn-primary:not(.k-btn-outline, .k-btn-dashed, .k-btn-fill, .k-btn-plain)";
    const typeSteps = Object.fromEntries(
      ["hover", "active"].map((state) => [
        state,
        rules.get(`${typeTier}:not(:disabled):${state}`) ?? "",
      ]),
    );

    for (const name of colors) {
      const surface = tokens.get(name)!;
      const authored = (rules.get(bare(name)) ?? "").match(
        /color: var\(--kui-color-text-on-\w+, (#\w+)\)/,
      );
      expect(
        authored,
        `${name} 的标签没写成 var(--kui-color-text-on-<name>, <字面量>)`,
      ).not.toBeNull();
      const label = toRgb(authored![1]!);

      // 一张表服务不了整族：白字在 `yellow` 上只有 1.72、`orange` 1.97、`violet` 2.32，
      // 17 个名字里只有 `teal` 4.77 和 `purple` 4.70 过得去
      expect(
        sameRgb(label, BLACK) || sameRgb(label, WHITE),
        `${name} 的标签既不是纯黑也不是纯白`,
      ).toBe(true);
      expect(contrast(label, surface), `${name} 静置读不出字`).toBeGreaterThanOrEqual(4.5);

      const other = sameRgb(label, WHITE) ? BLACK : WHITE;
      expect(contrast(label, surface), `${name} 没选黑白里更高的那头`).toBeGreaterThanOrEqual(
        contrast(other, surface),
      );

      for (const state of ["hover", "active"]) {
        const declarations = rules.get(`${bare(name)}:not(:disabled):${state}`) ?? "";
        const mixed = declarations.match(
          /color-mix\(in srgb, var\(--kui-color-\w+\) (\d+(?:\.\d+)?)%, (#\w+)\)/,
        );
        expect(mixed, `${name} 的 :${state} 不是往一支实色里混`).not.toBeNull();
        const shade = toRgb(mixed![2]!);
        expect(sameRgb(shade, other), `${name} 的 :${state} 把表面朝标签那边推了`).toBe(true);
        expect(stepPercent(declarations), `${name} 的 :${state} 步进幅度和 type 那条不一样`).toBe(
          stepPercent(typeSteps[state]!),
        );
        expect(
          contrast(label, mix(surface, shade, stepPercent(declarations))),
          `${name} 的 :${state} 读不出字`,
        ).toBeGreaterThanOrEqual(4.5);
      }
    }
  });

  it("declares each palette name once per tier", async () => {
    const { selectors } = await sheet();

    // 同一条规则写两遍时后一份赢、前一份没人能看见，改 token 的人只改得动其中一份
    for (const name of colors) {
      for (const selector of [...forms(name), ...labelArms(name)]) {
        expect(
          selectors.filter((item) => item === selector),
          selector,
        ).toHaveLength(1);
      }
    }
  });

  it("keeps the name arms ahead of the disabled arm", async () => {
    const { selectors } = await sheet();
    const disabled = selectors.indexOf(".k-btn:disabled");
    expect(disabled, "样式表里没有 .k-btn:disabled 这条参照").toBeGreaterThan(-1);

    for (const name of colors) {
      for (const selector of [bare(name), ink(name)]) {
        const index = selectors.indexOf(selector);
        expect(index, selector).toBeGreaterThan(-1);

        // 禁用那条是 `.k-btn:disabled`、特异度 (0,2,0)，这里两条臂打平 ⇒ 写在后面的赢。
        // 名字要是排到它后面，禁用的按钮会带着色板标签、把库里那支灰字顶掉
        expect(index, `${selector} 排在 .k-btn:disabled 之后`).toBeLessThan(disabled);
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
