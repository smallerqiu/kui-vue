import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { render } from "less";
import { describe, expect, it } from "vitest";

// 死 CSS 守卫：③-3d-戊、③-3d-己、③-3d-庚、③-3d-辛 扫掉的那批规则不许悄悄长回来。
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

/**
 * ③-3d-庚：输入框家族（input / input-number / input-otp / input-tag / color-picker）里压焦点（或展开）
 * 光晕的那 28 行。判据仍是两条 —— 库里没有别的规则画阴影、以及压制选择器选不中画光晕的那个元素 ——
 * 但这一族的抽屉有三种挂载点，而且档位类名不一定和抽屉在同一个元素上（OTP 的档写在组上、光晕画在
 * 内层格子上），所以名单逐组件点名，不能按前缀生成。
 *   · `input`：包裹层 `[data-multiple]` 挂 `k-input-focus`，裸 `<input>` 与 `<textarea>` 走 `:focus`；
 *     `<textarea>` 只发 `k-textarea` / `k-textarea-<档>`，所以 `.k-textarea-*.k-input-focus` 那种形状
 *     从来选不中，它不是任何一档"压住光晕"的理由。
 *   · `input-number` 的抽屉本来就带排除名单，那 5 行一行都不落地。
 *   · 每个 underlined 档的**根**规则仍然写着 `box-shadow: none` —— 那是共用 mixin
 *     `.kui-theme-value(underlined)` 画的，删它要跨组件一起裁定，留到下一轮；因此这里只点它的状态臂，
 *     不点根，免得守卫把一条还活着的声明判成死的。
 * 源码里是 28 行，编译后展开成下面 48 个选择器名（一行嵌套 `&:focus, &:hover, &.k-input-focus`
 * 套在三种挂载形状下就变成六七个名字）。其中 input-number 的
 * `.k-input-number-fill:focus` / `.k-input-number-fill.k-input-number-focus` 现在已经没有规则承载
 * （那两行删掉后整个 fill 块只剩 mixin 调用），所以这两条只有"带着 box-shadow 长回来"才会红 ——
 * 这正是它们该有的判据：补一条不含 box-shadow 的 fill 规则是合法写法，不该被守卫生吞。
 */
const CONTROL_FAMILY_SUPPRESSORS: { component: string; selector: string }[] = [
  // `input`：fill / solid / underlined / plain 四个档各补过压制，外加禁用包裹层自己那一行。
  ...[
    ".k-input-fill[data-multiple]:focus",
    ".k-input-fill[data-multiple]:hover",
    ".k-input-fill[data-multiple].k-input-focus",
    ".k-input-fill[data-single]:focus",
    ".k-textarea-fill:focus",
    ".k-input-solid[data-multiple]:not(.k-input-disabled):hover",
    ".k-input-solid[data-single]:not(:disabled):hover",
    ".k-textarea-solid:not(:disabled):hover",
    ".k-input-underlined[data-multiple]:not(.k-input-disabled):hover",
    ".k-input-underlined[data-multiple]:not(.k-input-disabled):focus",
    ".k-input-underlined[data-multiple]:not(.k-input-disabled).k-input-focus",
    ".k-textarea-underlined:not(:disabled):focus",
    ".k-input-disabled[data-multiple]",
    ".k-input.k-input-plain[data-single]:not(.k-input-disabled)",
    ".k-input.k-input-plain[data-multiple]:not(.k-input-disabled)",
    ".k-textarea.k-textarea-plain:not(:disabled)",
    ".k-input.k-input-plain[data-multiple]:not(.k-input-disabled):hover",
    ".k-input.k-input-plain[data-multiple]:not(.k-input-disabled):focus",
    ".k-input.k-input-plain[data-multiple]:not(.k-input-disabled).k-input-focus",
    ".k-textarea.k-textarea-plain:not(:disabled):focus",
  ].map((selector) => ({ component: "input", selector })),
  ...[
    ".k-input-number-fill:focus",
    ".k-input-number-fill.k-input-number-focus",
    ".k-input-number-plain:not(.k-input-number-disabled)",
    ".k-input-number-plain:not(.k-input-number-disabled):focus",
    ".k-input-number-solid:not(.k-input-number-disabled):hover",
    ".k-input-number-underlined:not(.k-input-number-disabled):focus",
  ].map((selector) => ({ component: "input-number", selector })),
  ...[
    ".k-input-otp-fill .k-input-otp-item:hover",
    ".k-input-otp-fill .k-input-otp-item:focus",
    ".k-input-otp-solid:not(.k-input-otp-disabled) .k-input-otp-item:hover",
    ".k-input-otp-solid:not(.k-input-otp-disabled) .k-input-otp-item:focus",
    ".k-input-otp-plain:not(.k-input-otp-disabled) .k-input-otp-item",
    ".k-input-otp-plain:not(.k-input-otp-disabled) .k-input-otp-item:focus",
    ".k-input-otp-underlined:not(.k-input-otp-disabled) .k-input-otp-item:focus",
  ].map((selector) => ({ component: "input-otp", selector })),
  ...[
    ".k-input-tag-fill:hover",
    ".k-input-tag-fill:focus-within",
    ".k-input-tag-solid:not(.k-input-tag-disabled):hover",
    ".k-input-tag-solid:not(.k-input-tag-disabled):focus-within",
    ".k-input-tag-plain:not(.k-input-tag-disabled)",
    ".k-input-tag-plain:not(.k-input-tag-disabled):focus-within",
    ".k-input-tag-underlined:not(.k-input-tag-disabled):focus-within",
  ].map((selector) => ({ component: "input-tag", selector })),
  // color-picker 的"展开"光晕原来写在无条件的那条复合规则上，所以那条规则本身也要点名：
  // 光晕只能由下面 `GUARDED_DRAWERS` 里带名单的那条画。
  ...[
    ".k-color-picker.k-color-picker-opened",
    ".k-color-picker-fill:not(.k-color-picker-disabled):hover",
    ".k-color-picker-fill:not(.k-color-picker-disabled).k-color-picker-opened",
    ".k-color-picker-solid:not(.k-color-picker-disabled):hover",
    ".k-color-picker-solid:not(.k-color-picker-disabled).k-color-picker-opened",
    ".k-color-picker-plain:not(.k-color-picker-disabled)",
    ".k-color-picker-plain:not(.k-color-picker-disabled).k-color-picker-opened",
    ".k-color-picker-underlined:not(.k-color-picker-disabled):hover",
  ].map((selector) => ({ component: "color-picker", selector })),
];

/**
 * ③-3d-辛：date-picker 里压 hover / focus / 展开光晕的那 8 行（编译后 14 个选择器名）。
 * **这一族和 己/庚 的判据不一样**：它自己从来没有光晕抽屉 —— 全库唯一给 `.k-datepicker` 画阴影的规则
 * 在另一个文件里，`components/form/styles/index.less` 的报错作用域：
 * `.k-form .k-form-item-error .k-datepicker:hover / :focus`（(0,4,0)）与
 * `.k-form .k-form-item-error .k-datepicker-opened`（(0,3,0)）。这里每一行压制的特异度最多 (0,3,0)
 * （`.k-datepicker-plain:not(.k-datepicker-disabled).k-datepicker-opened`）：**跨文件只看特异度，
 * 特异度打平时看打包顺序**，而 `components/styles/components.less` 先 import date-picker、后 import
 * form，所以报错态那圈红环一行也压不住；非报错态又根本没人画阴影 ⇒ 八行两头都没有存在理由。
 * 判据是 216 个 fixture / 2376 个读数：逐条删各 0 处变化，**八行一起删也是 0 处**，
 * 删完的样式和删之前的样式在同一套 fixture 上读数完全一致（带阴影的 150 个读数全在报错作用域里，值没动）。
 * 逐条删永远只是初判 —— 同一个档的基座行和状态行写的是同一个值（plain、borderless 各一组），
 * underlined 那行还被共用 mixin 的基座顶着，单删一行有另一行兜着，八行一起删才可能把光晕放回来；
 * 反向对照 = 往基座注一条 (0,1,0) 的阴影，八行里立刻有五行的读数动起来，说明分类器不是空转。
 * 计算值零变化 ⇒ 这一笔**不写更新日志**。
 * `underlined` 的**基座**那条仍然写着 `box-shadow: none`，那行来自共用 mixin
 * `.kui-theme-value(underlined)`，属于跨组件裁定，跟 己/庚 一样留到下一轮，所以这里只点它的状态臂。
 */
const DATE_PICKER_SUPPRESSORS = [
  ".k-datepicker-fill:hover",
  ".k-datepicker-fill:focus",
  ".k-datepicker-plain:not(.k-datepicker-disabled)",
  ".k-datepicker-plain:not(.k-datepicker-disabled):hover",
  ".k-datepicker-plain:not(.k-datepicker-disabled):focus",
  ".k-datepicker-plain:not(.k-datepicker-disabled).k-datepicker-opened",
  ".k-datepicker-solid:not(.k-datepicker-disabled):hover",
  ".k-datepicker-solid:not(.k-datepicker-disabled).k-datepicker-opened",
  ".k-datepicker-underlined:not(.k-datepicker-disabled):hover",
  ".k-datepicker-underlined:not(.k-datepicker-disabled).k-datepicker-opened",
  ".k-datepicker-opened.k-datepicker-fill",
  ".k-datepicker-borderless",
  ".k-datepicker-borderless:hover",
  ".k-datepicker-borderless:focus",
].map((selector) => ({ component: "date-picker", selector }));

/**
 * 辛 的总闸：date-picker 编译结果里今天还允许出现 `box-shadow` 的地方只有两处 ——
 *   · `.k-datepicker-overlay` 的弹层阴影，那条是真在画；
 *   · `underlined` 基座那一行 `box-shadow: none`，它来自共用 mixin `.kui-theme-value(underlined)`，
 *     要删得跨组件一起裁定，跟 己/庚 一样留到下一轮。
 * 上面那张压制名单逐条点名，改个嵌套形状就能躲过去；这一条不认选择器名，只认"这个文件里还有谁写了
 * box-shadow"，所以任何一处压制长回来（哪怕换了写法）都红。断言按 `选择器 + 值` 整对比较：值也钉住，
 * 免得有人把 `none` 改成一条真的光晕再靠上面那张名单蒙过去。
 */
const DATE_PICKER_SHADOW_ALLOW_LIST = [
  ".k-datepicker-overlay { box-shadow: var(--kui-popup-shadow, var(--kui-pop-shadow)) }",
  ".k-datepicker-underlined:not(.k-datepicker-disabled) { box-shadow: none }",
];

/**
 * 辛 判据的前提，同时也是它不敢顺手删掉的东西：全库唯一给 `.k-datepicker` 画阴影的规则在另一个文件里
 * —— `components/form/styles/index.less` 的报错作用域。它一旦不画了，date-picker 的错误态会静悄悄
 * 丢掉那圈红环，而这正是"档规则不需要压制"的理由成立的那个世界里的代价，所以单独守一条。
 */
const DATE_PICKER_ERROR_DRAWERS = [
  ".k-form .k-form-item-error .k-datepicker:hover",
  ".k-form .k-form-item-error .k-datepicker:focus",
  ".k-form .k-form-item-error .k-datepicker-opened",
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
  ...CONTROL_FAMILY_SUPPRESSORS.map(({ component, selector }) => ({
    component,
    selector,
    property: "box-shadow",
  })),
  ...DATE_PICKER_SUPPRESSORS.map(({ component, selector }) => ({
    component,
    selector,
    property: "box-shadow",
  })),
];

/**
 * 反向对照里最承重的一种形状：光晕必须还是"一条带排除名单的规则"画出来的。
 * 只写 `not.toContain` 会漏掉两件事 —— 名单少一项，那一档就在 hover（或 tree-select 展开）时重新发光；
 * 有人把压制行"修"回去而不动这条臂，也照样咬不到。所以这里点名：这样的规则必须有且只有一条，
 * 必须真的声明 `box-shadow`，且 `:not()` 里每一项一个不能少。断言按前缀/后缀匹配，不写死换行后的空格。
 *
 * 输入框家族（庚）比这一条更吃重：那 28 行压制的存在理由就是"抽屉没带名单"。名单少一项，
 * 对应那一档就得补回一行压制才不发光；名单整条去掉，则每个档都要补 —— 无论哪种，删除线都会在这里红。
 * input-number 是唯一本来带名单的那族，庚 删掉的 5 行全靠它，所以也点名。
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
  // 包裹层（多选 / tag 形态）挂 `k-input-focus`，档类名同元素，所以五个档一次排完。
  {
    component: "input",
    prefix: ".k-input[data-multiple].k-input-focus:not(",
    suffix: ")",
    exclusions: [
      ".k-input-disabled",
      ".k-input-fill",
      ".k-input-plain",
      ".k-input-solid",
      ".k-input-underlined",
    ],
  },
  // 裸 `<input>` 与 `<textarea>` 走 `:focus`：同一个作用域块里三者共用一套 `:not()`，
  // 而 `<textarea>` 只发 `k-textarea-<档>`，所以两个前缀都得在名单里；禁用用 `:disabled` 而不是类名。
  {
    component: "input",
    prefix: ".k-input[data-single]:focus:not(",
    suffix: ")",
    exclusions: [
      ":disabled",
      ".k-input-fill",
      ".k-textarea-fill",
      ".k-input-plain",
      ".k-textarea-plain",
      ".k-input-solid",
      ".k-textarea-solid",
      ".k-input-underlined",
      ".k-textarea-underlined",
    ],
  },
  {
    component: "input-number",
    prefix: ".k-input-number-focus:not(",
    suffix: ")",
    exclusions: [
      ".k-input-number-disabled",
      ".k-input-number-fill",
      ".k-input-number-plain",
      ".k-input-number-solid",
      ".k-input-number-underlined",
    ],
  },
  // OTP 的档类名写在组上、光晕画在内层格子的 `:focus` 上，所以名单只能整条挂在组元素那一侧。
  // `readonly` 有意不在名单里：只读的格子该继续对焦点有反应。
  {
    component: "input-otp",
    prefix: ".k-input-otp:not(",
    suffix: ".k-input-otp-item:focus",
    exclusions: [
      ".k-input-otp-disabled",
      ".k-input-otp-fill",
      ".k-input-otp-plain",
      ".k-input-otp-solid",
      ".k-input-otp-underlined",
    ],
  },
  {
    component: "input-tag",
    prefix: ".k-input-tag:focus-within:not(",
    suffix: ")",
    exclusions: [
      ".k-input-tag-disabled",
      ".k-input-tag-fill",
      ".k-input-tag-plain",
      ".k-input-tag-solid",
      ".k-input-tag-underlined",
    ],
  },
  // 色选框的"展开"态是类名不是伪类，作者裁定跟别的档共用同一套名单（禁用 + 受控展开的禁用也不发光）。
  {
    component: "color-picker",
    prefix: ".k-color-picker.k-color-picker-opened:not(",
    suffix: ")",
    exclusions: [
      ".k-color-picker-disabled",
      ".k-color-picker-fill",
      ".k-color-picker-plain",
      ".k-color-picker-solid",
      ".k-color-picker-underlined",
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
  // 庚 同理：从这些规则里只摘走 `box-shadow: none` 一行，换边、铺底、焦点环还都压在它们身上。
  { component: "input", selector: ".k-input[data-multiple].k-input-focus" },
  { component: "input", selector: ".k-input[data-single]:focus" },
  { component: "input", selector: ".k-input-disabled[data-multiple]" },
  { component: "input", selector: ".k-input-solid[data-multiple]:not(.k-input-disabled):focus" },
  { component: "input", selector: ".k-textarea.k-textarea-plain:not(:disabled)" },
  { component: "input-number", selector: ".k-input-number-fill" },
  {
    component: "input-otp",
    selector: ".k-input-otp-solid:not(.k-input-otp-disabled) .k-input-otp-item:focus",
  },
  {
    component: "input-otp",
    selector: ".k-input-otp-plain:not(.k-input-otp-disabled) .k-input-otp-item",
  },
  {
    component: "input-tag",
    selector: ".k-input-tag-solid:not(.k-input-tag-disabled):focus-within",
  },
  { component: "input-tag", selector: ".k-input-tag-fill:focus-within" },
  // 色选框展开态现在只画边；`k-color-picker-opened` 这条规则本身还在（`theme-variants` 靠它认档）。
  { component: "color-picker", selector: ".k-color-picker.k-color-picker-opened" },
  { component: "color-picker", selector: ".k-color-picker-plain:not(.k-color-picker-disabled)" },
  // 辛 同理：八行里只摘走 `box-shadow: none`，换边、铺底、反白焦点环全压在那些规则身上。
  { component: "date-picker", selector: ".k-datepicker-fill:hover" },
  { component: "date-picker", selector: ".k-datepicker-fill:focus" },
  { component: "date-picker", selector: ".k-datepicker-opened.k-datepicker-fill" },
  { component: "date-picker", selector: ".k-datepicker-plain:not(.k-datepicker-disabled)" },
  {
    component: "date-picker",
    selector: ".k-datepicker-plain:not(.k-datepicker-disabled).k-datepicker-opened",
  },
  {
    component: "date-picker",
    selector: ".k-datepicker-solid:not(.k-datepicker-disabled):hover",
  },
  {
    component: "date-picker",
    selector: ".k-datepicker-underlined:not(.k-datepicker-disabled):hover",
  },
  { component: "date-picker", selector: ".k-datepicker-borderless" },
  { component: "date-picker", selector: ".k-datepicker-borderless:hover" },
  // 弹层阴影是活的，别跟着根元素一起清。
  { component: "date-picker", selector: ".k-datepicker-overlay" },
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
      // 属性名够"这条声明不能回来"那类断言用；`declarations` 带上值，是给 辛 那条总闸用的 ——
      // 它要钉住"这个文件里还有谁写了 box-shadow、写的是什么值"，只看属性名会被 `none` 换成真光晕绕过。
      const declarations = chunk
        .slice(open + 1, -1)
        .split(";")
        .map((declaration) => {
          const colon = declaration.indexOf(":");
          return [
            declaration.slice(0, colon).trim(),
            declaration.slice(colon + 1).trim().replace(/\s+/g, " "),
          ] as const;
        })
        .filter(([property]) => property);
      return {
        fullSelector: selectorText,
        selectors: splitSelectorList(selectorText),
        declarations,
        properties: declarations.map(([property]) => property),
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

  it("date-picker: 只有弹层阴影和共用 mixin 那行 none 还能声明 box-shadow", async () => {
    const painted = (await compile("date-picker")).flatMap((rule) =>
      rule.declarations
        .filter(([property]) => property === "box-shadow")
        .flatMap(([, value]) =>
          rule.selectors.map((selector) => `${selector} { box-shadow: ${value} }`),
        ),
    );
    expect(painted.sort()).toEqual([...DATE_PICKER_SHADOW_ALLOW_LIST].sort());
  });

  DATE_PICKER_ERROR_DRAWERS.forEach((selector) => {
    it(`form: 报错作用域还在给 ${selector} 画红环（辛 判据的前提）`, async () => {
      const rules = (await compile("form")).filter((rule) => rule.selectors.includes(selector));
      expect(rules, `${selector} 的规则没了`).toHaveLength(1);
      expect(rules[0]!.properties).toContain("box-shadow");
    });
  });
});
