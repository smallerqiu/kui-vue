import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { render } from "less";
import { describe, expect, it } from "vitest";

// 死 CSS 守卫：③-3d-戊 扫掉的那批规则不许悄悄长回来。
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
];

const compile = async (component: string) => {
  const filename = `components/${component}/styles/index.less`;
  const result = await render(readFileSync(join(process.cwd(), filename), "utf8"), { filename });
  return (result.css.replace(/\/\*[^]*?\*\//g, "").match(/[^{}]+\{[^{}]*\}/g) ?? []).map(
    (chunk) => {
      const open = chunk.indexOf("{");
      return {
        selectors: chunk
          .slice(0, open)
          .trim()
          .replace(/\s+/g, " ")
          .split(",")
          .map((part) => part.trim())
          .filter(Boolean),
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

  LIVE_SELECTORS.forEach(({ component, selector }) => {
    it(`${component}: 还在用的 ${selector} 没被顺手删掉`, async () => {
      expect([...simpleSelectors(await compile(component))]).toContain(selector);
    });
  });
});
