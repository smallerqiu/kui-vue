import fs from "node:fs/promises";
import path from "node:path";
import less from "less";
import { describe, expect, it } from "vitest";
import { colors } from "../components/const/var";

/**
 * 色板名当文字用的那一档：`--kui-color-<name>-text`（kui-vue 侧，与 kui-react/tests/palette-text.test.ts
 * 断言同一件事）。
 *
 * `Button` 的 fill / outline / dashed / plain、三个语义类型在同三档上的标签、还有 `Tag` 的预设色片都不带
 * 自己的表面 —— 字压在页面给的那块浅底上，或者压在名字自己洗出来的按压色上。整支基色在那圈底上过不到
 * 4.5（最差的是 `yellow` 压在 `fill` 那层灰洗色上：1.33），所以 token 层按主题各烘一份「把基色推向本主题正文墨色」
 * 的字面量，组件裸读它。这里逐名、逐底复核那一份，再核对每一条把名字当字的臂读的都是它。
 */

const root = path.resolve(import.meta.dirname, "..");

// 语义三档写在色板 17 名之前。`success` 不在这一族里：库里没有任何一条臂把它当字写，
// 给它发一档只会多一条没人读的规则。
const NAMES = ["primary", "danger", "warning", ...colors];

// `colors` 是字面量元组，按名字判断在不在色板里得先松成 `string[]`
const PALETTE: string[] = [...colors];

type Rgb = [number, number, number];

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

// 压在底上的那一层：先按 alpha 混，再取整 —— 浏览器画洗出来的按压色就是这个顺序
const over = (top: { rgb: Rgb; alpha: number }, bottom: Rgb): Rgb =>
  top.rgb.map(
    (channel, index) => channel * top.alpha + bottom[index]! * (1 - top.alpha),
  ) as Rgb;

// Flatten a compiled sheet into `selector -> declarations`, whitespace-normalised, keeping the order the
// rules came out in — the same reading `button-color` / `tag-color` use, so an arm is looked up by the
// selector the browser would match.
const flatten = (css: string) => {
  const entries = [...css.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/([^{}]+)\{([^{}]*)\}/g)].map(
    (match) =>
      [
        (match[1] ?? "").split("}").pop()!.replace(/\s+/g, " ").trim(),
        (match[2] ?? "").replace(/\s+/g, " ").trim().replace(/;$/, ""),
      ] as const,
  );
  return { rules: new Map(entries), selectors: entries.map(([selector]) => selector) };
};

const compile = async (entry: string) => {
  const filename = path.join(root, entry);
  const css = (await less.render(await fs.readFile(filename, "utf8"), { filename })).css;
  return flatten(css);
};

// 三个主题块：`:root` 那份就是亮色，`[theme-mode="light"]` 再发一次同一份 mixin，`[theme-mode="dark"]`
// 只重写它要改的那几支。每块摊成 `token -> 声明值`。
const THEME_BLOCKS = [":root", '[theme-mode="light"]', '[theme-mode="dark"]'] as const;
const themeBlocks = async () => {
  const filename = path.join(root, "components/styles/less-css-var.less");
  const css = (await less.render(await fs.readFile(filename, "utf8"), { filename })).css;
  const blocks = new Map<string, Map<string, string>>();
  for (const match of css.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const selector = (match[1] ?? "").split("}").pop()!.replace(/\s+/g, " ").trim();
    if (!(THEME_BLOCKS as readonly string[]).includes(selector)) continue;
    expect(blocks.has(selector), `${selector} 出现了两次，后一份会静默吃掉前一份`).toBe(false);
    blocks.set(
      selector,
      new Map(
        [...(match[2] ?? "").matchAll(/(--[\w-]+)\s*:\s*([^;]+)/g)].map(
          (item) => [item[1]!, item[2]!.trim()] as const,
        ),
      ),
    );
  }
  for (const selector of THEME_BLOCKS)
    expect(blocks.has(selector), `token 层里没有 ${selector} 这一块`).toBe(true);
  return blocks;
};

// 名字与底都从编译产物里读，值有四种写法（`#rgb`、`#rrggbb`、`rgb()`、`rgba()`），而 `@orange: orange`
// 这类写成 CSS 关键字的取值 LESS 会原样吐出来 —— 通道一律交 LESS 拆，这里不许出现第二份换算。
const channels = async (values: string[]) => {
  const body = values
    .map((value, index) => `  v${index}: red(${value}), green(${value}), blue(${value}), alpha(${value});`)
    .join("\n");
  const css = (await less.render(`probe {\n${body}\n}\n`, { filename: "channels.less" })).css;
  return new Map(
    [...css.matchAll(/v(\d+): ([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+);/g)].map((match) => [
      Number(match[1]),
      { rgb: [Number(match[2]), Number(match[3]), Number(match[4])] as Rgb, alpha: Number(match[5]) },
    ]),
  );
};

// 把一支 token 落成可以直接交给 LESS 的颜色字面量。取值按 CSS 的层叠来 —— 后一块赢，块里没有的回到
// `:root`；`var()` 间接顺着层叠里那条声明走过去。
const named = (blocks: Map<string, Map<string, string>>, theme: "light" | "dark") => {
  // 层叠：`[theme-mode="dark"]` 排在 `:root` 之后，同一支 token 它写的那份赢
  const order = [`[theme-mode="${theme}"]`, ":root"];
  const own = (token: string) => {
    for (const selector of order) {
      const value = blocks.get(selector)?.get(token);
      if (value !== undefined) return { selector, value };
    }
    return undefined;
  };
  return (token: string) => {
    const resolve = (name: string, stack: string[]): string => {
      const found = own(name);
      expect(found, `${theme} 下找不到 ${name}`).not.toBeUndefined();
      const value = found!.value.trim();
      expect(stack.includes(name), `${name} 的取值绕回了自己`).toBe(false);
      const indirect = /^var\(\s*(--[\w-]+)\s*\)$/.exec(value);
      if (!indirect) return value;
      return resolve(indirect[1]!, [...stack, name]);
    };
    return resolve(token, []);
  };
};

// 标签能压上去的那圈底：页面的三块实底、档位自己给的两块、`fill` 那层灰洗色、还有名字自己洗出来的
// 10% / 16% 按压色 —— 也就是 `.btn-name` 与 `.tag-preset` 真的会画在字下面的东西。
const SURFACES = [
  "--kui-color-bg",
  "--kui-color-bg-1",
  "--kui-color-bg-2",
  "--kui-color-bg-component-hover",
  "--kui-color-bg-component-active",
];
const PAGES = ["--kui-color-bg", "--kui-color-bg-1", "--kui-color-bg-2"];

describe("Palette text share", () => {
  it("publishes one readable text share per name in each theme", async () => {
    const blocks = await themeBlocks();
    const read = (theme: "light" | "dark") => named(blocks, theme);

    // 两档各发一份：份额随主题变（亮色往黑推、深色往白推），单份字面量在另一档必错
    for (const theme of ["light", "dark"] as const) {
      const values = await channels(NAMES.map((name) => read(theme)(`--kui-color-${name}-text`)));
      const bgs = await channels(
        SURFACES.map((token) => read(theme)(token)).concat([read(theme)("--kui-color-bg-component-overlay")]),
      );
      const surface = Object.fromEntries(SURFACES.map((token, index) => [token, bgs.get(index)!.rgb]));
      const overlay = bgs.get(SURFACES.length)!;
      // 按压色是那支名字自己洗出来的，所以底要按名字各算一份
      const hues = await channels(NAMES.map((name) => read(theme)(`--kui-color-${name}`)));
      const pages = PAGES.map((token) => surface[token]!);

      for (const [index, name] of NAMES.entries()) {
        const label = values.get(index)!.rgb;
        const hue = hues.get(index)!.rgb;
        const painted = [
          ...SURFACES.map((token) => ({ at: token, bg: surface[token]! })),
          ...pages.map((bg, at) => ({ at: `${PAGES[at]}+fill`, bg: over(overlay, bg) })),
          ...[10, 16].flatMap((share) =>
            pages.map((bg, at) => ({
              at: `${PAGES[at]}+${share}%`,
              bg: over({ rgb: hue, alpha: share / 100 }, bg),
            })),
          ),
        ];

        for (const { at, bg } of painted)
          expect(
            contrast(label, bg),
            `${theme} 下 ${name} 的文字档压在 ${at} 上只有 ${contrast(label, bg).toFixed(2)}`,
          ).toBeGreaterThanOrEqual(4.5);
      }
    }
  });

  it("ships the family once per block, for every name the palette can hand a label", async () => {
    const blocks = await themeBlocks();

    // 色板加了名字而 token 层没跟进，这里就红：组件认这个名字，主题发不出它的文字档
    for (const selector of [":root", '[theme-mode="light"]', '[theme-mode="dark"]']) {
      const published = [...(blocks.get(selector)?.keys() ?? [])].filter((token) =>
        /^--kui-color-[\w-]+-text$/.test(token),
      );
      for (const name of NAMES)
        expect(published, `${selector} 少了 --kui-color-${name}-text`).toContain(
          `--kui-color-${name}-text`,
        );

      // `--kui-color-control-thumb-text` / `--kui-color-reverse-text` 是角色的名字，不是色板档位
      expect(
        published.filter((token) => !token.includes("thumb") && !token.includes("reverse")),
        `${selector} 的文字档比色板多出发来的名字`,
      ).toHaveLength(NAMES.length);
    }

    // 亮色发两份（`:root` 是默认，`[theme-mode="light"]` 给显式写了 light 的页面），两处必须一模一样
    for (const name of NAMES)
      expect(
        blocks.get(":root")?.get(`--kui-color-${name}-text`),
        `:root 与 [theme-mode="light"] 的 ${name} 文字档不是同一份`,
      ).toBe(blocks.get('[theme-mode="light"]')?.get(`--kui-color-${name}-text`));
  });

  it("reads the bare token on every arm that paints a name as its label", async () => {
    const button = await compile("components/button/styles/index.less");
    const tag = await compile("components/tag/styles/index.less");

    // 裸读、不留兜底：值由主题发，样式表里再写一个字面量就有两份真相（`css-variables.test.ts` 钉的是
    // 「库里没发这一档时不许有人裸读」，这里钉的是「发了这一档时人人都读它」）
    const arms = (prefix: string, name: string) =>
      prefix === "tag"
        ? [`.k-tag.k-tag-${name}`]
        : [
            `.k-btn-fill.k-btn-${name}`,
            `.k-btn-outline.k-btn-${name}, .k-btn-dashed.k-btn-${name}`,
            `.k-btn-plain.k-btn-${name}`,
          ];

    for (const name of NAMES) {
      // 标签只画色板那 17 名：三个语义名没有 `.k-tag-<名>` 这一档。`gray` 在标签上又不是色相洗色，
      // 走主题那几支灰 —— 见 `tag-color.test.*` 里 `.tag-neutral` 那条
      const readers = PALETTE.includes(name) && name !== "gray" ? arms("tag", name) : [];
      for (const selector of [...arms("button", name), ...readers]) {
        const sheet = selector.startsWith(".k-tag") ? tag : button;
        const declarations = sheet.rules.get(selector);
        expect(declarations, `样式表里没有 ${selector}`).toBeTypeOf("string");
        expect(
          declarations!.match(/(^|; )color: ([^;]+)/)?.[2],
          `${selector} 的标签没裸读 ${name} 的文字档`,
        ).toBe(`var(--kui-color-${name}-text)`);
      }
    }

    // 名字当表面的那两条臂（不写档位的实心、`solid` 的 `::before`）不吃这一档：字压在满色上，
    // 该反过来推的是标签的黑白，见 `button-color.test.*` 里 4.5:1 那一条
    for (const name of colors) {
      expect(
        button.rules.get(
          `.k-btn-${name}:not(.k-btn-outline, .k-btn-dashed, .k-btn-fill, .k-btn-solid, .k-btn-plain)`,
        ) ?? "",
        `${name} 的实心标签不该改读文字档`,
      ).toContain("var(--kui-color-text-on-");
    }
  });
});
