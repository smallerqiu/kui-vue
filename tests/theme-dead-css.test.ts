import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { render } from "less";
import { describe, expect, it } from "vitest";

// 死 CSS 守卫：逐条点名"这条规则 / 这条声明 / 这个类名不该存在"，同时点名它们旁边真在用的东西 ——
// 只列前者分不清哪一半是承重的，删过头时也没有任何东西会变红。
//
// 形状和 `tests/tree-styles.test.ts` 不一样，因为那一个在这里用不了 —— 它拿"编译出来的类名"去反查
// "组件真的会输出的类名集合"，而这里的三种死法反查都抓不住：
//   1. 规则有效、但声明的属性没有需要被压制的更早规则：`.k-card-plain { box-shadow: none }`
//      —— card 的样式里没有一处画阴影（阴影只在 feature-card 的 hover 上，那条是 (0,3,0)）；
//   2. 类名是活的、只有某几种挂载作用域是死的：`.k-color-picker-arrow` 挂在弹层上，而弹层是触发框的
//      兄弟节点不是后代，所以 `.k-color-picker .k-color-picker-arrow` 永远选不中；
//   3. 类名不再输出：`.k-page-options-action`、`.k-color-picker-key`、`.k-image-panel-enter-active`
//      —— 把类名当成一"堆"来比对，组件侧改动照样咬不到，只能点名。
// 所以这里按三种形状逐条点名，并且带上反向对照（活着的规则必须还在），免得守卫空转。

/**
 * 选择框家族（select / tree-select / cascader）里那些逐档压 hover / focus 光晕的压制。
 * 三个样式文件是同文镜像，所以按前缀生成名单，不手写编译后的选择器；名单仍然逐条点名 ——
 * 把嵌套形状改一个字（多包一层 `.k-x >`、把 `:hover` 换成 `:focus-within`）就落在名单外，算新增。
 * 为什么它们都不落地：这个家族只有两种阴影，一种在根元素、一种在弹层。根上那条 hover 光晕是
 * `(0,2,0)` 的 `:not()` 臂，名单里已经把 `disabled / fill / borderless / plain / solid / underlined`
 * 全排除；库里没有一条规则给内层 `.k-x-selection` 画过阴影；而 `&:focus .k-x` 这种后代写法永远选不中，
 * 因为档类名和 `k-x` 就在同一个根元素上。剩下的 outline / dashed 由那条臂自己发光，不需要谁压制。
 * tree-select 的"展开中"光晕跟 hover 共用同一张排除名单（见 `GUARDED_DRAWERS`），所以也没有哪一档需要
 * 自己补一行压制。
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
 * 输入框家族（input / input-number / input-otp / input-tag / color-picker）里压焦点（或展开）光晕的
 * 压制名单。判据是两条 —— 库里没有别的规则画阴影、以及压制选择器选不中画光晕的那个元素 —— 但这一族
 * 的抽屉有三种挂载点，而且档位类名不一定和抽屉在同一个元素上（OTP 的档写在组上、光晕画在内层格子上），
 * 所以名单逐组件点名，不能按前缀生成。
 *   · `input`：包裹层 `[data-multiple]` 挂 `k-input-focus`，裸 `<input>` 与 `<textarea>` 走 `:focus`；
 *     `<textarea>` 只发 `k-textarea` / `k-textarea-<档>`，所以 `.k-textarea-*.k-input-focus` 那种形状
 *     从来选不中，它不是任何一档"压住光晕"的理由。
 *   · `input-number` 的抽屉本来就带排除名单，所以那一族的逐档压制一行都不落地。
 *   · underlined 档的**根**规则不写压制：那行来自共用 mixin `.kui-theme-value(underlined)`，属于跨组件
 *     裁定，落点名字见 `UNDERLINED_BASE_DEAD_DECLARATIONS`。
 * 名单里的形状是编译后展开的选择器名（一行嵌套 `&:focus, &:hover, &.k-input-focus` 套在三种挂载形状下
 * 就变成六七个名字）。其中 input-number 的
 * `.k-input-number-fill:focus` / `.k-input-number-fill.k-input-number-focus` 现在没有规则承载，所以这两条
 * 只有"带着 box-shadow 长回来"才会红 —— 这正是它们该有的判据：补一条不含 box-shadow 的 fill 规则是合法
 * 写法，不该被守卫生吞。
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
 * date-picker 里压 hover / focus / 展开光晕的压制（编译后 14 个选择器名）。
 * **这一族和上面两族的判据不一样**：它自己从来没有光晕抽屉 —— 全库唯一给 `.k-datepicker` 画阴影的规则
 * 在另一个文件里，`components/form/styles/index.less` 的报错作用域：
 * `.k-form .k-form-item-error .k-datepicker:hover / :focus`（(0,4,0)）与
 * `.k-form .k-form-item-error .k-datepicker-opened`（(0,3,0)）。这里每一行压制的特异度最多 (0,3,0)：
 * **跨文件只看特异度，特异度打平时看打包顺序**，而 `components/styles/components.less` 先 import
 * date-picker、后 import form，所以报错态那圈红环一行也压不住；非报错态又根本没人画阴影 ⇒ 这些压制
 * 两头都没有存在理由。
 * 逐条删在这里只是初判：同一个档的基座行和状态行写的是同一个值（plain、borderless 各有一组），
 * 一起删才可能把光晕放回来。反向对照是 `DATE_PICKER_ERROR_DRAWERS` 和下面那条按值比较的总闸。
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
 * date-picker 编译结果里今天还允许出现 `box-shadow` 的地方只剩一处 —— `.k-datepicker-overlay` 的弹层
 * 阴影，那条是真在画。上面那张压制名单逐条点名，改个嵌套形状就能躲过去；这一条不认选择器名，只认
 * "这个文件里还有谁写了 box-shadow"，所以任何一处压制长回来（哪怕换了写法）都红。断言按 `选择器 + 值`
 * 整对比较：值也钉住，免得有人把 `none` 改成一条真的光晕再靠上面那张名单蒙过去。
 */
const DATE_PICKER_SHADOW_ALLOW_LIST = [
  ".k-datepicker-overlay { box-shadow: var(--kui-popup-shadow, var(--kui-pop-shadow)) }",
];

/**
 * 上面那判据的前提，同时也是不敢顺手删掉的东西：全库唯一给 `.k-datepicker` 画阴影的规则在另一个文件里
 * —— `components/form/styles/index.less` 的报错作用域。它一旦不画了，date-picker 的错误态会静悄悄
 * 丢掉那圈红环，而这正是"档规则不需要压制"的理由成立的那个世界里的代价，所以单独守一条。
 */
const DATE_PICKER_ERROR_DRAWERS = [
  ".k-form .k-form-item-error .k-datepicker:hover",
  ".k-form .k-form-item-error .k-datepicker:focus",
  ".k-form .k-form-item-error .k-datepicker-opened",
];

/**
 * 弹层 / 按钮 / 徽标这三族的阴影压制。**这三族不能整批扫净**，得逐条判 —— 判据只有两条：库里有没有别的
 * 规则给这个元素画阴影（阴影不继承），以及压制选择器选不选得中那个画阴影的元素：
 *   · `.k-dropdown-has-arrow .k-dropdown-content`：库里没有一条规则给 `.k-dropdown-content` 写阴影（这个
 *     文件的两条画在 `.k-dropdown-menu` / `.k-dropdown-menu-submenu-sub` 与 `.k-dropdown-arrow` 上，而阴影
 *     不继承）⇒ 死。同一条规则里的 `background: none` 留着，它压的是 `.k-dropdown .k-dropdown-content`
 *     那条铺底（同特异度、靠源码顺序赢），是真在承重。
 *   · `.k-btn-plain`：整个 button 样式文件不声明 `box-shadow`，库内也没有规则给 `.k-btn` 画阴影
 *     ⇒ 死；所以 button 的总闸名单是空的。
 *   · `.k-badge-pill .k-badge-status-active`：徽标全族不画阴影，那颗点没有环可压 ⇒ 死。它只有这一句声明，
 *     去掉它整条规则就空，所以走 `DEAD_SELECTORS`（不许再出现）而不是 `DEAD_DECLARATIONS`（规则可以留着）。
 *     判据前提由下面那份空总闸守着：徽标家族还能声明 `box-shadow` 的规则一份都没有。
 *   · `.k-badge-mark`：全库唯一给徽标画阴影的是它那圈描边，而这个类名两仓都不输出
 *     （发出去的是 `k-badge-count` / `-dot` / `-status-dot` / `-status-text`），所以连规则一起不许存在；
 *     判据前提"状态档只有那四个值"单独点名，`mark` 哪天进了 `BadgeStatusType` 就得跟着重新裁定。
 *   · `.k-dropdown-menu-submenu-popup .k-dropdown-menu-submenu-sub`：**活的，必须留着**，是这三族里唯一
 *     活着的压制。画光晕那条 (0,1,0) 的选择器名单里就有 `.k-dropdown-menu-submenu-sub`，而包着它的
 *     `.k-dropdown-menu-submenu-popup` 自己也在画 ⇒ 删掉这行子面板发光两次（内层从 `none` 变成弹层阴影）。
 *     所以反过来点名：它必须在。
 */
const SCATTERED_DEAD_DECLARATIONS = [
  { component: "dropdown", selector: ".k-dropdown-has-arrow .k-dropdown-content" },
  { component: "button", selector: ".k-btn-plain" },
].map(({ component, selector }) => ({ component, selector, property: "box-shadow" }));

/** 这些文件里今天还允许出现 `box-shadow` 的规则，按 `选择器 { 值 }` 整对钉住（少一条、多一条都红）。 */
const SHADOW_PAINT_ALLOW_LISTS: { component: string; allow: string[] }[] = [
  {
    component: "dropdown",
    allow: [
      // 面板自己的光晕。
      ".k-dropdown-menu { box-shadow: var(--kui-popup-shadow, var(--kui-pop-shadow)) }",
      ".k-dropdown-menu-submenu-sub { box-shadow: var(--kui-popup-shadow, var(--kui-pop-shadow)) }",
      ".k-dropdown-menu-submenu-popup { box-shadow: var(--kui-popup-shadow, var(--kui-pop-shadow)) }",
      // 这条活压制同时就是"子面板不重复发光"的画法。
      ".k-dropdown-menu-submenu-popup .k-dropdown-menu-submenu-sub { box-shadow: none }",
      '.k-dropdown-has-arrow[k-placement^="left"] .k-dropdown-arrow { box-shadow: 3px -3px 7px var(--kui-color-shadow) }',
      '.k-dropdown-has-arrow[k-placement^="right"] .k-dropdown-arrow { box-shadow: -3px 3px 7px var(--kui-color-shadow) }',
    ],
  },
  // button 全家不声明任何阴影。
  { component: "button", allow: [] },
  // badge 全家不声明任何阴影：唯一画在徽标上的那圈描边属于 `k-badge-mark`，而那个类名不由任何代码输出。
  { component: "badge", allow: [] },
];

/**
 * 共用 mixin `.kui-theme-value(underlined)` 的落点：九个组件调用它（input 一份调用摊成裸 input /
 * 包裹层 / textarea 三个名字），编译后一共 11 个选择器名。这一族不许在里面声明 `box-shadow`，
 * **理由是"任何世界都压不到东西"，不是"某一族没对手"**：
 *   · 每个族的光晕抽屉都写着 `:not(..., -underlined)`，所以档基座根本没有更早的阴影可压 —— 名单逐条由
 *     `GUARDED_DRAWERS` 守着，少一项那档就得重新裁定；
 *   · 唯一还能把阴影画到 underlined 盒子上的规则在 `components/form/styles/index.less` 的报错作用域里，
 *     `(0,4,0)`/`(0,5,0)`，而这一档最多 `(0,3,0)`：报错态那圈红环一直是赢的那个。
 * 承重分布：这 11 个名字管"这些落点不许声明阴影"，`LIVE_SELECTORS` 里同一批名字管"规则本身不许被顺手
 * 删掉"，`GUARDED_DRAWERS` 管"光晕还是带名单的那条臂画的"，最后两条全库普查管"别在任何地方再写一行压制"。
 */
const UNDERLINED_BASE_DEAD_DECLARATIONS: {
  component: string;
  selector: string;
  property: string;
}[] = [
  // 一份 mixin 调用摊在三种挂载形状上：档要落裸 input / 包裹层 / textarea。
  ...[
    ".k-input-underlined[data-multiple]:not(.k-input-disabled)",
    ".k-input-underlined[data-single]:not(:disabled)",
    ".k-textarea-underlined:not(:disabled)",
  ].map((selector) => ({ component: "input", selector })),
  ...[
    {
      component: "input-number",
      selector: ".k-input-number-underlined:not(.k-input-number-disabled)",
    },
    {
      component: "input-otp",
      selector: ".k-input-otp-underlined:not(.k-input-otp-disabled) .k-input-otp-item",
    },
    { component: "input-tag", selector: ".k-input-tag-underlined:not(.k-input-tag-disabled)" },
    {
      component: "color-picker",
      selector: ".k-color-picker-underlined:not(.k-color-picker-disabled)",
    },
    { component: "select", selector: ".k-select-underlined:not(.k-select-disabled)" },
    {
      component: "tree-select",
      selector: ".k-tree-select-underlined:not(.k-tree-select-disabled)",
    },
    { component: "cascader", selector: ".k-cascader-underlined:not(.k-cascader-disabled)" },
    { component: "date-picker", selector: ".k-datepicker-underlined:not(.k-datepicker-disabled)" },
  ],
].map(({ component, selector }) => ({ component, selector, property: "box-shadow" }));

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
  ...SCATTERED_DEAD_DECLARATIONS,
  ...UNDERLINED_BASE_DEAD_DECLARATIONS,
];

/**
 * 反向对照里最承重的一种形状：光晕必须还是"一条带排除名单的规则"画出来的。
 * 只写 `not.toContain` 会漏掉两件事 —— 名单少一项，那一档就在 hover（或 tree-select 展开）时重新发光；
 * 有人把压制行"修"回去而不动这条臂，也照样咬不到。所以这里点名：这样的规则必须有且只有一条，
 * 必须真的声明 `box-shadow`，且 `:not()` 里每一项一个不能少。断言按前缀/后缀匹配，不写死换行后的空格。
 * 名单少一项，对应那一档就得补回一行压制才不发光；名单整条去掉，则每个档都要补 —— 无论哪种，这里都会红。
 * 逐档压制之所以全死，靠的就是这些名单；所以名单的每一项都是承重的，input-number 这类"本来就有名单"的
 * 族也一样要点名。
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
  // badge 那条压制只有 `box-shadow: none` 一句声明，摘掉它整条规则就空了，所以点的是规则本身不能回来
  // （`DEAD_DECLARATIONS` 那种"规则可以留着、声明不能回来"的形状在这里不适用）。
  { component: "badge", selector: ".k-badge-pill .k-badge-status-active" },
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
  // 徽标那个带描边的独立标记从来没人上这个类名，所以它连规则一起不许存在（判据见 `SCATTERED_...`）。
  { component: "badge", token: "k-badge-mark" },
];

/** 反向对照：被清理的东西旁边，那些真在用的规则不能被顺手删掉。 */
const LIVE_SELECTORS: { component: string; selector: string }[] = [
  { component: "color-picker", selector: ".k-color-picker-dropdown .k-color-picker-arrow" },
  { component: "feature-card", selector: ".k-feature-card-bordered .k-feature-card-icon" },
  // image 唯一的过渡基名是 `k-image-fade`，底部那条 `panel-hidden` 是常驻类。
  { component: "image", selector: ".k-image-fade-enter-active" },
  { component: "image", selector: ".k-image-preview-panel-hidden" },
  // 只摘 `box-shadow: none` 这一行：同一条规则里的 `border-color` / `background-color` 都还在承重
  // （那些才是 fill / plain / borderless 不换边、不铺底的画法），顺手删掉整条规则要在这里红。
  { component: "select", selector: ".k-select-fill:hover" },
  { component: "select", selector: ".k-select-opened.k-select-fill .k-select-selection" },
  { component: "select", selector: ".k-select-borderless .k-select-selection" },
  // 展开环对所有档都在：这里收掉的只是逐档的光晕压制，`outline` 那圈还得留着。
  { component: "tree-select", selector: ".k-tree-select-opened" },
  { component: "tree-select", selector: ".k-tree-select-plain:not(.k-tree-select-disabled)" },
  { component: "cascader", selector: ".k-cascader-borderless .k-cascader-selection" },
  { component: "cascader", selector: ".k-cascader-solid:not(.k-cascader-disabled):hover" },
  // 同理：从这些规则里只摘走 `box-shadow: none` 一行，换边、铺底、焦点环还都压在它们身上。
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
  // 同理：这里只摘走 `box-shadow: none`，换边、铺底、反白焦点环全压在那些规则身上。
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
  // 弹层阴影是活的，不跟着根元素那几条一起走。
  { component: "date-picker", selector: ".k-datepicker-overlay" },
  // 摘掉的是声明，不是规则：箭头态那条还压着铺底、`.k-btn-plain` 还压着边框和表面、
  // `.k-badge-pill` 还带着整颗胶囊的形状 —— 把整条规则连着删掉时这里要红。
  { component: "dropdown", selector: ".k-dropdown-has-arrow .k-dropdown-content" },
  { component: "button", selector: ".k-btn-plain" },
  { component: "badge", selector: ".k-badge-pill" },
  // 那条活压制的对手：外层面板自己在画光晕，内盒也是。两个名字任何一个从规则里掉出去，
  // "子面板不重复发光"就换了画法，那条压制得跟着重新裁定。
  { component: "dropdown", selector: ".k-dropdown-menu-submenu-popup" },
  // underlined 的基座还得继续画那条下沿、圆角和铺底：`UNDERLINED_BASE_DEAD_DECLARATIONS` 只说
  // "这条声明不许回来"，规则整个不见了它咬不到，所以这里逐个点名。
  ...UNDERLINED_BASE_DEAD_DECLARATIONS.map(({ component, selector }) => ({ component, selector })),
];

const compileFile = async (filename: string) => {
  const result = await render(readFileSync(join(process.cwd(), filename), "utf8"), { filename });
  return (result.css.replace(/\/\*[^]*?\*\//g, "").match(/[^{}]+\{[^{}]*\}/g) ?? []).map(
    (chunk) => {
      const open = chunk.indexOf("{");
      // `fullSelector` 保留 `:not(a, b, …)` 里那些逗号：按逗号切开是给"选择器必须逐字存在"那类断言用的，
      // 而多参数的 `:not()` 一切就碎，只能整条比对（见 `GUARDED_DRAWERS`）。
      const selectorText = chunk.slice(0, open).trim().replace(/\s+/g, " ");
      // 属性名够"这条声明不能回来"那类断言用；`declarations` 带上值，是给按值比较的那几条总闸用的 ——
      // 它要钉住"这个文件里还有谁写了 box-shadow、写的是什么值"，只看属性名会被 `none` 换成真光晕绕过。
      const declarations = chunk
        .slice(open + 1, -1)
        .split(";")
        .map((declaration) => {
          const colon = declaration.indexOf(":");
          return [
            declaration.slice(0, colon).trim(),
            declaration
              .slice(colon + 1)
              .trim()
              .replace(/\s+/g, " "),
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

// 一个组件的样式文件；另有两条总闸按整库看（`compileFile("components/styles/components.less")`），
// 因为共用 mixin 的落点和"全库还剩几处压制"只有在打包出来的那份 CSS 里才说得上。
const compile = (component: string) => compileFile(`components/${component}/styles/index.less`);

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

const sourceOfComponentFile = (file: string) => readFileSync(join(process.cwd(), file), "utf8");

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

/**
 * 函数型伪类里的类名是"排除名单"，不是这条规则选中的东西。
 * 按值普查认的是"这条规则真的落在 underlined 上"，所以先把 `:not()` / `:is()` / `:where()` 的内容挖空
 * 再找 `-underlined` —— 九个家族那条 hover/focus 光晕臂的名单里就写着 `.k-x-underlined`，
 * 按整串文本判会把一堆活规则误判成 offender（它们声明的正是被名单挡掉的那圈光晕）。
 */
const withoutFunctionContents = (text: string) => {
  const fn = /:(?:not|is|where|any)\(/y;
  let out = "";
  let i = 0;
  while (i < text.length) {
    fn.lastIndex = i;
    const match = fn.exec(text);
    if (match) {
      i += match[0].length;
      let depth = 1;
      while (i < text.length && depth > 0) {
        if (text[i] === "(") depth += 1;
        if (text[i] === ")") depth -= 1;
        i += 1;
      }
      continue;
    }
    out += text[i];
    i += 1;
  }
  return out;
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

  it("date-picker: 只有弹层阴影还能声明 box-shadow", async () => {
    const painted = (await compile("date-picker")).flatMap((rule) =>
      rule.declarations
        .filter(([property]) => property === "box-shadow")
        .flatMap(([, value]) =>
          rule.selectors.map((selector) => `${selector} { box-shadow: ${value} }`),
        ),
    );
    expect(painted.sort()).toEqual([...DATE_PICKER_SHADOW_ALLOW_LIST].sort());
  });

  SHADOW_PAINT_ALLOW_LISTS.forEach(({ component, allow }) => {
    // 形状同上：不认选择器名、只认"这个文件里还有谁写了 box-shadow、写的是什么值"。
    // 它一次咬住三件事 —— 不该存在的压制长回来（哪怕换了嵌套写法）、有人在别处补一条新阴影、以及把
    // 那条活压制的 `none` 改成真光晕（名单里 `.k-dropdown-menu-submenu-popup .k-dropdown-menu-submenu-sub`
    // 这一对钉的就是值，不是选择器）。button 与 badge 的名单是空的：它们全家不声明阴影。
    it(`${component}: 还能声明 box-shadow 的规则一份不多、一份不少`, async () => {
      const painted = (await compile(component)).flatMap((rule) =>
        rule.declarations
          .filter(([property]) => property === "box-shadow")
          .flatMap(([, value]) =>
            rule.selectors.map((selector) => `${selector} { box-shadow: ${value} }`),
          ),
      );
      expect(painted.sort()).toEqual([...allow].sort());
    });
  });

  it("dropdown: 子菜单那层内盒的光晕仍被外层压着", async () => {
    const rules = (await compile("dropdown")).filter(
      (rule) => rule.fullSelector === ".k-dropdown-menu-submenu-popup .k-dropdown-menu-submenu-sub",
    );
    expect(rules, "这条压制没了：子菜单面板现在发光两次").toHaveLength(1);
    expect(rules[0]!.declarations).toContainEqual(["box-shadow", "none"]);
    // 前提：外层和内盒各自都在画，才谈得上"压一层"。内盒那个名字要是从画光晕那条里摘掉，
    // 这条压制立刻变成死的，得跟着撤。
    const painters = (await compile("dropdown")).filter(
      (rule) =>
        rule.declarations.some(
          ([property, value]) =>
            property === "box-shadow" && value.startsWith("var(--kui-popup-shadow"),
        ),
      // `selectors` 已经按顶层逗号切过，`.k-dropdown-menu, .k-dropdown-menu-submenu-sub` 是两个名字。
    );
    expect(painters.flatMap((rule) => rule.selectors)).toContain(".k-dropdown-menu-submenu-sub");
  });

  DATE_PICKER_ERROR_DRAWERS.forEach((selector) => {
    it(`form: 报错作用域还在给 ${selector} 画红环`, async () => {
      const rules = (await compile("form")).filter((rule) => rule.selectors.includes(selector));
      expect(rules, `${selector} 的规则没了`).toHaveLength(1);
      expect(rules[0]!.properties).toContain("box-shadow");
    });
  });

  /**
   * 承重的那条总闸：整库看，`box-shadow: none` 只剩 dropdown 子菜单那一条。
   * 为什么这条比上面那批名字更管用 —— "压制"这件事在库里已经没有系统性写法了，任何人再写一行
   * （不管挂在哪个组件、用什么嵌套形状）都会让这里红，而他必须先答"这条压的是谁的阴影"。
   * `UNDERLINED_BASE_DEAD_DECLARATIONS` 那 11 条点名守的是共用 mixin 长回来这一种，这一条守的是所有种。
   */
  it("全库：还声明 box-shadow: none 的规则只剩 dropdown 子菜单那一条", async () => {
    const rules = await compileFile("components/styles/components.less");
    const suppressed = rules
      .filter((rule) =>
        rule.declarations.some(
          ([property, value]) => property === "box-shadow" && value === "none",
        ),
      )
      .flatMap((rule) => rule.selectors);
    expect(suppressed.sort()).toEqual([
      ".k-dropdown-menu-submenu-popup .k-dropdown-menu-submenu-sub",
    ]);
    // 前提：那一条压的是真在画的光晕，不是又一行死代码 —— 外层和内盒都在声明同一个弹层阴影。
    const painters = rules.filter(
      (rule) =>
        rule.selectors.length > 0 &&
        rule.declarations.some(
          ([property, value]) =>
            property === "box-shadow" && value.startsWith("var(--kui-popup-shadow"),
        ),
    );
    expect(painters.flatMap((rule) => rule.selectors)).toContain(".k-dropdown-menu-submenu-sub");
    expect(painters.flatMap((rule) => rule.selectors)).toContain(".k-dropdown-menu-submenu-popup");
  });

  // `.k-badge-mark` 的死判据靠"状态档只有那四个值"：`mark` 哪天进了 `BadgeStatusType`，那颗点就真的会
  // 发光，上面 `DEAD_CLASS_TOKENS` 里那条得撤、徽标那份空总闸也得跟着重新裁定。
  it("badge: 状态档只有那四个值，`mark` 发不出来", () => {
    const declared = ["components/badge/index.tsx", "components/const/types.ts"].filter((file) =>
      sourceOfComponentFile(file).includes("BadgeStatusType ="),
    );
    expect(declared).toHaveLength(1);
    const line = sourceOfComponentFile(declared[0]!)
      .split("\n")
      .find((entry) => entry.includes("BadgeStatusType ="))!
      .trim();
    expect(line).toBe('export type BadgeStatusType = "default" | "success" | "error" | "warning";');
  });

  it("全库：任何带 -underlined 的选择器都不声明 box-shadow", async () => {
    const rules = await compileFile("components/styles/components.less");
    const offenders = rules
      .filter(
        (rule) =>
          rule.selectors.some((selector) =>
            /-underlined/.test(withoutFunctionContents(selector)),
          ) && rule.declarations.some(([property]) => property === "box-shadow"),
      )
      .map((rule) => rule.fullSelector);
    // 认的是选择器里有没有 `-underlined`（名单除外，见 `withoutFunctionContents`），不是那批名字，
    // 所以状态臂（`:hover` / `.k-x-opened`）想重新补一行压制也在这里红 —— 逐档压制那批清理
    // 等于又加了一道总闸。
    expect(offenders).toEqual([]);
  });
});
