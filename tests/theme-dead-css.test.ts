import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { render } from "less";
import { describe, expect, it } from "vitest";

// 死 CSS 守卫：③-3d-戊、③-3d-己 扫掉的那批规则不许悄悄长回来。
//
// 形状和 `tests/tree-styles.test.ts` 不一样，因为那一个在这里用不了 —— 它拿"编译出来的类名"去反查
// "组件真的会输出的类名集合"，而这个单元删的三种东西反查都抓不住：
//   1. 规则有效、但声明的属性没有需要被压制的更早规则：`.k-card-plain { box-shadow: none }`
//      —— card 的样式里没有一处画阴影（阴影只在 feature-card 的 hover 上，那条是 (0,3,0)）；
//   2. 类名是活的、只有某几种挂载作用域是死的：`.k-color-picker-arrow` 挂在弹层上，而弹层是触发框的
//      兄弟节点不是后代，所以 `.k-color-picker .k-color-picker-arrow` 永远选不中；
//   3. 类名不再输出：`.k-page-options-action`、`.k-color-picker-key`、`.k-image-panel-enter-active`
//      —— 把类名当成一"堆"来比对，组件侧改动照样咬不到，只能点名。
// 所以这里按三种形状逐条点名，并且带上反向对照（活着的规则必须还在），免得守卫空转。

/**
 * ③-3d-己：选择框家族（select / tree-select / cascader）里压 hover / focus 光晕的那 32 行。
 * 三个样式文件是同文镜像，所以按前缀生成名单，不手写 47 行编译后选择器；名单仍然逐条点名 ——
 * 把嵌套形状改一个字（多包一层 `.k-x >`、把 `:hover` 换成 `:focus-within`）就落在名单外，算新增。
 * 为什么每一行都不落地：这个家族只有两种阴影，一种在根元素、一种在弹层。根上那条 hover 光晕是
 * `(0,2,0)` 的 `:not()` 臂，名单里已经把 `disabled / fill / borderless / plain / solid / underlined`
 * 全排除；库里没有一条规则给内层 `.k-x-selection` 画过阴影；而 `&:focus .k-x` 这种后代写法永远选不中，
 * 因为档类名和 `k-x` 就在同一个根元素上。剩下的 outline / dashed 由那条臂自己发光，不需要谁压制。
 * tree-select 是唯一例外：它的"展开中"光晕曾经无条件画，所以每个别的档都得补一行压制 —— 现在改成
 * 跟 hover 同一张排除名单（见 `GUARDED_DRAWERS`），压制也就没有存在理由了。
 */
const SELECTION_BOX_COMPONENTS = ["select", "tree-select", "cascader"];

const suppressedShadowSelectors = (prefix: string) => [
  `.k-${prefix}-fill:hover`,
  `.k-${prefix}-fill:focus .k-${prefix}`,
  `.k-${prefix}-plain:not(.k-${prefix}-disabled)`,
  `.k-${prefix}-plain:not(.k-${prefix}-disabled):hover`,
  `.k-${prefix}-plain:not(.k-${prefix}-disabled):focus`,
  `.k-${prefix}-plain:not(.k-${prefix}-disabled).k-${prefix}-opened`,
  `.k-${prefix}-plain:not(.k-${prefix}-disabled) .k-${prefix}-selection`,
  `.k-${prefix}-solid:not(.k-${prefix}-disabled):hover`,
  `.k-${prefix}-solid:not(.k-${prefix}-disabled).k-${prefix}-opened`,
  `.k-${prefix}-underlined:not(.k-${prefix}-disabled):hover`,
  `.k-${prefix}-underlined:not(.k-${prefix}-disabled).k-${prefix}-opened`,
  `.k-${prefix}-borderless`,
  `.k-${prefix}-borderless:hover`,
  `.k-${prefix}-borderless:focus`,
  `.k-${prefix}-borderless .k-${prefix}-selection`,
];

/** 规则还在、但这条声明不能回来。 */
const DEAD_DECLARATIONS: { component: string; selector: string; property: string }[] = [
  { component: "card", selector: ".k-card-plain", property: "box-shadow" },
  { component: "stat-card", selector: ".k-stat-card-plain", property: "box-shadow" },
  { component: "feature-card", selector: ".k-feature-card-plain", property: "box-shadow" },
  {
    component: "collapse",
    selector: ".k-collapse-sample .k-collapse-item .k-collapse-content",
    property: "background",
  },
  // 两仓共用一份 collapse 样式，`will-change` 曾是 react 多出来的一行。
  {
    component: "collapse",
    selector: ".k-collapse > .k-collapse-item .k-collapse-content",
    property: "will-change",
  },
  // tree-select 的展开环（`outline`）那条规则：光晕只能由下面 `GUARDED_DRAWERS` 里带名单的那条画。
  { component: "tree-select", selector: ".k-tree-select-opened", property: "box-shadow" },
  // 开着的时候给内层盒子补的那行压制：`.k-*-selection` 上没有阴影可压（见上面那段判据），
  // 而且这个组合只存在于 select / tree-select —— cascader 的展开态不铺底。
  {
    component: "select",
    selector: ".k-select-opened.k-select-fill .k-select-selection",
    property: "box-shadow",
  },
  {
    component: "tree-select",
    selector: ".k-tree-select-opened.k-tree-select-fill .k-tree-select-selection",
    property: "box-shadow",
  },
  ...SELECTION_BOX_COMPONENTS.flatMap((component) =>
    suppressedShadowSelectors(component).map((selector) => ({
      component,
      selector,
      property: "box-shadow",
    })),
  ),
];

/**
 * 反向对照里最承重的一种形状：光晕必须还是"一条带排除名单的规则"画出来的。
 * 只写 `not.toContain` 会漏掉两件事 —— 名单少一项，那一档就在 hover（或 tree-select 展开）时重新发光；
 * 有人把压制行"修"回去而不动这条臂，也照样咬不到。所以这里点名：这样的规则必须有且只有一条，
 * 必须真的声明 `box-shadow`，且 `:not()` 里六项一个不能少。断言按前缀/后缀匹配，不写死换行后的空格。
 */
const GUARDED_DRAWERS: {
  component: string;
  prefix: string;
  suffix: string;
  exclusions: string[];
}[] = [
  ...SELECTION_BOX_COMPONENTS.map((component) => ({
    component,
    prefix: `.k-${component}:not(`,
    suffix: ":hover",
    exclusions: [
      `.k-${component}-disabled`,
      `.k-${component}-fill`,
      `.k-${component}-borderless`,
      `.k-${component}-plain`,
      `.k-${component}-solid`,
      `.k-${component}-underlined`,
    ],
  })),
  // tree-select 独有的"展开中"光晕：作者裁定跟 hover 共用一张名单，而不是每个档各补一行压制。
  {
    component: "tree-select",
    prefix: ".k-tree-select-opened:not(",
    suffix: "",
    exclusions: [
      ".k-tree-select-disabled",
      ".k-tree-select-fill",
      ".k-tree-select-borderless",
      ".k-tree-select-plain",
      ".k-tree-select-solid",
      ".k-tree-select-underlined",
    ],
  },
];

/** 整条规则不能以这个选择器出现（写死成编译后的形状，改嵌套也算新增）。 */
const DEAD_SELECTORS: { component: string; selector: string }[] = [
  { component: "color-picker", selector: ".k-color-picker .k-color-picker-arrow" },
  {
    component: "color-picker",
    selector: ".k-color-picker.k-color-picker-opened .k-color-picker-arrow",
  },
  { component: "color-picker", selector: ".k-color-picker-lg .k-color-picker-arrow" },
  { component: "color-picker", selector: ".k-color-picker-sm .k-color-picker-arrow" },
];

/**
 * 不能存在"只有这一个选择器"的规则，但允许它作为某条共用规则的一员。
 * `bordered` 只是 `theme="outline"` 的旧写法：和 outline 共用那条档规则才是它的画法，
 * 自己单独一条 `.k-feature-card-bordered { border-color; background }` 会被后半段同特异度、
 * 更靠后的档规则原地覆盖；它该剩下的只有"给图标块换底色"那条后代规则。
 */
const DEAD_STANDALONE_RULES: { component: string; selector: string }[] = [
  { component: "feature-card", selector: ".k-feature-card-bordered" },
];

/** 组件不输出的类名：CSS 里不该出现，源码里也不该开始输出。 */
const DEAD_CLASS_TOKENS: { component: string; token: string }[] = [
  { component: "page", token: "k-page-options-action" },
  { component: "color-picker", token: "k-color-picker-key" },
  { component: "color-picker", token: "k-color-picker-mode-label" },
  { component: "image", token: "k-image-panel-enter-active" },
  { component: "image", token: "k-image-panel-leave-active" },
];

/** 反向对照：被清理的东西旁边，那些真在用的规则不能被顺手删掉。 */
const LIVE_SELECTORS: { component: string; selector: string }[] = [
  { component: "color-picker", selector: ".k-color-picker-dropdown .k-color-picker-arrow" },
  { component: "feature-card", selector: ".k-feature-card-bordered .k-feature-card-icon" },
  // image 唯一的过渡基名是 `k-image-fade`，底部那条 `panel-hidden` 是常驻类。
  { component: "image", selector: ".k-image-fade-enter-active" },
  { component: "image", selector: ".k-image-preview-panel-hidden" },
  // 己 只删 `box-shadow: none` 这一行：同一条规则里的 `border-color` / `background-color` 都还在承重
  // （那些才是 fill / plain / borderless 不换边、不铺底的画法），顺手删掉整条规则要在这里红。
  { component: "select", selector: ".k-select-fill:hover" },
  { component: "select", selector: ".k-select-opened.k-select-fill .k-select-selection" },
  { component: "select", selector: ".k-select-borderless .k-select-selection" },
  // 展开环对所有档都在：己 收掉的只是光晕，`outline` 那圈还得留着。
  { component: "tree-select", selector: ".k-tree-select-opened" },
  { component: "tree-select", selector: ".k-tree-select-plain:not(.k-tree-select-disabled)" },
  { component: "cascader", selector: ".k-cascader-borderless .k-cascader-selection" },
  { component: "cascader", selector: ".k-cascader-solid:not(.k-cascader-disabled):hover" },
];

const compile = async (component: string) => {
  const filename = `components/${component}/styles/index.less`;
  const result = await render(readFileSync(join(process.cwd(), filename), "utf8"), { filename });
  return (result.css.replace(/\/\*[^]*?\*\//g, "").match(/[^{}]+\{[^{}]*\}/g) ?? []).map(
    (chunk) => {
      const open = chunk.indexOf("{");
      // `fullSelector` 保留 `:not(a, b, …)` 里那些逗号：按逗号切开是给"选择器必须逐字存在"那类断言用的，
      // 而多参数的 `:not()` 一切就碎，只能整条比对（见 `GUARDED_DRAWERS`）。
      const selectorText = chunk.slice(0, open).trim().replace(/\s+/g, " ");
      return {
        fullSelector: selectorText,
        selectors: splitSelectorList(selectorText),
        properties: chunk
          .slice(open + 1, -1)
          .split(";")
          .map((declaration) => declaration.split(":")[0]!.trim())
          .filter(Boolean),
      };
    },
  );
};

const walk = (directory: string, files: string[] = []): string[] => {
  readdirSync(join(process.cwd(), directory), { withFileTypes: true }).forEach((entry) => {
    const relative = join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "styles") walk(relative, files);
      return;
    }
    if (/\.(tsx|ts|vue)$/.test(entry.name)) files.push(relative);
  });
  return files;
};

const sourceOf = (component: string) =>
  walk(`components/${component}`)
    .map((file) => readFileSync(join(process.cwd(), file), "utf8"))
    .join("\n");

const simpleSelectors = (rules: Awaited<ReturnType<typeof compile>>) =>
  new Set(rules.flatMap((rule) => rule.selectors));

/**
 * 括号里的逗号不算选择器分隔符 —— `:not(a, b, …)` 在库里是真会出现的形状（那条 hover 光晕臂），
 * 按逗号硬切会切出 `.k-select-borderless` 这种假选择器，然后被"这条声明不能回来"的断言当成
 * 那条臂本身，红得不讲道理。
 */
const splitSelectorList = (text: string) => {
  const parts: string[] = [];
  let depth = 0;
  let current = "";
  text.split("").forEach((character) => {
    if (character === "(") depth += 1;
    if (character === ")") depth -= 1;
    if (character === "," && depth === 0) {
      parts.push(current);
      current = "";
      return;
    }
    current += character;
  });
  parts.push(current);
  return parts.map((part) => part.trim()).filter(Boolean);
};

describe("theme 死 CSS 守卫", () => {
  DEAD_DECLARATIONS.forEach(({ component, selector, property }) => {
    it(`${component}: ${selector} 不再声明 ${property}`, async () => {
      const rules = (await compile(component)).filter((rule) => rule.selectors.includes(selector));
      expect(rules.flatMap((rule) => rule.properties)).not.toContain(property);
    });
  });

  DEAD_SELECTORS.forEach(({ component, selector }) => {
    it(`${component}: 编译结果里没有单独的 ${selector} 规则`, async () => {
      expect([...simpleSelectors(await compile(component))]).not.toContain(selector);
    });
  });

  DEAD_STANDALONE_RULES.forEach(({ component, selector }) => {
    it(`${component}: ${selector} 只能跟着别的档规则一起画，不能自己一条`, async () => {
      const rules = await compile(component);
      expect(rules.filter((rule) => rule.selectors.join(",") === selector)).toEqual([]);
    });
  });

  DEAD_CLASS_TOKENS.forEach(({ component, token }) => {
    it(`${component}: ${token} 既不写进样式也不由代码输出`, async () => {
      const compiled = [...simpleSelectors(await compile(component))];
      expect(compiled.filter((selector) => selector.includes(token))).toEqual([]);
      expect(sourceOf(component)).not.toContain(token);
    });
  });

  GUARDED_DRAWERS.forEach(({ component, prefix, suffix, exclusions }) => {
    it(`${component}: ${prefix}…${suffix} 这条光晕还在，且排除名单一项不少`, async () => {
      const drawers = (await compile(component)).filter(
        (rule) =>
          rule.fullSelector.startsWith(prefix) &&
          rule.fullSelector.endsWith(suffix) &&
          rule.properties.includes("box-shadow"),
      );
      // 只许有一条：多出一条（比如把 tree-select 的无条件光晕加回来）同样算回归。
      expect(drawers.map((rule) => rule.fullSelector)).toHaveLength(1);
      exclusions.forEach((exclusion) => expect(drawers[0]!.fullSelector).toContain(exclusion));
    });
  });

  LIVE_SELECTORS.forEach(({ component, selector }) => {
    it(`${component}: 还在用的 ${selector} 没被顺手删掉`, async () => {
      expect([...simpleSelectors(await compile(component))]).toContain(selector);
    });
  });
});
