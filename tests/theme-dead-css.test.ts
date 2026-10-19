import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { render } from "less";
import { describe, expect, it } from "vitest";

// 死 CSS 守卫：③-3d-戊、③-3d-己、③-3d-庚、③-3d-辛、③-3d-壬、③-3d-癸 扫掉的那批规则不许悄悄长回来。
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
 *   · 每个 underlined 档的**根**规则当时还写着一行 `box-shadow: none`，那行来自共用 mixin
 *     `.kui-theme-value(underlined)`，属于跨组件裁定，所以 庚 只点它的状态臂、不点根；那一行由
 *     ③-3d-癸 扫掉，九个落点的根规则名现在进了 `GUI_DEAD_DECLARATIONS`。
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
 * `underlined` 的**基座**那行 `box-shadow: none` 来自共用 mixin `.kui-theme-value(underlined)`，
 * 跟 己/庚 一样是跨组件裁定，辛 没顺手删；它由 ③-3d-癸 扫掉，判据和名单见 `GUI_DEAD_DECLARATIONS`。
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
 * 辛 的总闸：date-picker 编译结果里今天还允许出现 `box-shadow` 的地方只剩一处 ——
 *   · `.k-datepicker-overlay` 的弹层阴影，那条是真在画。
 * 上面那张压制名单逐条点名，改个嵌套形状就能躲过去；这一条不认选择器名，只认"这个文件里还有谁写了
 * box-shadow"，所以任何一处压制长回来（哪怕换了写法）都红。断言按 `选择器 + 值` 整对比较：值也钉住，
 * 免得有人把 `none` 改成一条真的光晕再靠上面那张名单蒙过去。
 * 曾与弹层阴影并列的第二处 —— 共用 mixin 给 `underlined` 基座画的那行 `none` —— 由 ③-3d-癸 删掉了，
 * 所以这个名单现在只有一项；它要是因为 mixin 长回来而变成两项，这里先红，`GUI_DEAD_DECLARATIONS`
 * 跟着一起红。
 */
const DATE_PICKER_SHADOW_ALLOW_LIST = [
  ".k-datepicker-overlay { box-shadow: var(--kui-popup-shadow, var(--kui-pop-shadow)) }",
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

/**
 * ③-3d-壬：弹层 / 按钮 / 徽标这三族剩下的 4 行 `box-shadow: none`。**这一批不是整族扫净**，四行里只删得掉
 * 三行 —— 判据还是那两条（库里有没有别的规则给这个元素画阴影、压制选择器选不选得中画阴影的那个元素），
 * 但这次先把整库编译出来数了一遍"谁真的在画"（53 条画 / 13 条压），再逐条删、重编译、比真机计算值：
 *   · `.k-dropdown-has-arrow .k-dropdown-content`：库里没有一条规则给 `.k-dropdown-content` 写阴影（这个
 *     文件的两条画在 `.k-dropdown-menu` / `.k-dropdown-menu-submenu-sub` 与 `.k-dropdown-arrow` 上，而阴影
 *     不继承）⇒ 删。同一条规则里的 `background: none` 留着，它压的是 `.k-dropdown .k-dropdown-content`
 *     那条铺底（同特异度、靠源码顺序赢），是真在承重。
 *   · `.k-btn-plain`：整个 button 样式文件只有这一处写过 `box-shadow`，库内也没有规则给 `.k-btn` 画阴影
 *     ⇒ 删；删完 button 在库里一条 `box-shadow` 都不剩，所以它的总闸名单是空的。
 *   · `.k-badge-pill .k-badge-status-active`：这族唯一的环在 `.k-badge-mark` 上，而 `k-badge-mark` 这个类
 *     两仓都不输出（发出去的是 `k-badge-count` / `-dot` / `-status-dot` / `-status-text`）⇒ 删。那条规则
 *     只剩这一句，所以整条走 `DEAD_SELECTORS`（不许再出现），不是 `DEAD_DECLARATIONS`（规则可以留着）。
 *   · `.k-dropdown-menu-submenu-popup .k-dropdown-menu-submenu-sub`：**活的，留着**，也是这批唯一的例外。
 *     画光晕那条 (0,1,0) 的选择器名单里就有 `.k-dropdown-menu-submenu-sub`，而包着它的 `.k-dropdown-menu-submenu-popup`
 *     自己也在画 ⇒ 删掉这行子面板发光两次（真机：内层 `none` → 弹层阴影）。所以反过来点名：它必须在。
 * 删掉的三行各带一发反向对照：往同族注一条更低（或同）特异度的光晕，删压制后读数必须动 —— button 8 处、
 * badge 4 处、dropdown 4 处 —— 不动就说明分类器只是没摸到那个元素。计算值零变化 ⇒ 这一笔不写更新日志。
 */
const REN_DEAD_DECLARATIONS = [
  { component: "dropdown", selector: ".k-dropdown-has-arrow .k-dropdown-content" },
  { component: "button", selector: ".k-btn-plain" },
].map(({ component, selector }) => ({ component, selector, property: "box-shadow" }));

/** 壬 之后这些文件里还允许出现 `box-shadow` 的规则，按 `选择器 { 值 }` 整对钉住（少一条、多一条都红）。 */
const REN_SHADOW_ALLOW_LISTS: { component: string; allow: string[] }[] = [
  {
    component: "dropdown",
    allow: [
      // 面板自己的光晕，画在两个名字上。
      ".k-dropdown-menu { box-shadow: var(--kui-popup-shadow, var(--kui-pop-shadow)) }",
      ".k-dropdown-menu-submenu-sub { box-shadow: var(--kui-popup-shadow, var(--kui-pop-shadow)) }",
      ".k-dropdown-menu-submenu-popup { box-shadow: var(--kui-popup-shadow, var(--kui-pop-shadow)) }",
      // 壬 留下的那条活压制：它同时就是"子面板不重复发光"的画法。
      ".k-dropdown-menu-submenu-popup .k-dropdown-menu-submenu-sub { box-shadow: none }",
      '.k-dropdown-has-arrow[k-placement^="left"] .k-dropdown-arrow { box-shadow: 3px -3px 7px var(--kui-color-shadow) }',
      '.k-dropdown-has-arrow[k-placement^="right"] .k-dropdown-arrow { box-shadow: -3px 3px 7px var(--kui-color-shadow) }',
    ],
  },
  // 删掉 `.k-btn-plain` 那一行之后，button 全家不再声明任何阴影。
  { component: "button", allow: [] },
  {
    component: "badge",
    allow: [".k-badge-mark { box-shadow: 0 0 0 2px var(--kui-color-bg) }"],
  },
];

/**
 * ③-3d-癸：共用 mixin `.kui-theme-value(underlined)` 里那行 `box-shadow: none`，它是全库最后一处
 * 跨组件的阴影压制 —— 九个组件调用它（input 一份调用摊成裸 input / 包裹层 / textarea 三个名字），
 * 编译后一共 11 个选择器名。**这一条不是"某一族没对手"，而是"这行在任何世界都压不到东西"**：
 *   · 每个族的光晕抽屉都写着 `:not(..., -underlined)`（己/庚/辛 把逐档补的压制换成名单时定下的形状），
 *     所以档基座根本没有更早的阴影可压 —— 名单逐条由 `GUARDED_DRAWERS` 守着，少一项那档就得重新裁定；
 *   · 唯一还能把阴影画到 underlined 盒子上的规则在 `components/form/styles/index.less` 的报错作用域里，
 *     `(0,4,0)`/`(0,5,0)`，而这一行最多 `(0,3,0)`：报错态那圈红环一直是赢的那个，删前删后都在。
 * 判据 = 603 个 fixture / 3042 个计算值读数（九个落点 × underlined/outline/solid × 静置/悬浮/聚焦/展开/禁用
 * × 裸挂、普通 Form 项、报错 Form 项）：删掉那一行 0 处变化，而带阴影的读数 224 个前后一致 ——
 * 其中 16 个是 underlined 档类名自己在发光，全部落在报错作用域，正是"压制一直是输的那个"那批。
 * 反向对照（壬 的形状）：给这九个落点各注一条 `(0,1,0)` 的基座光晕，注了不删时 underlined 只有 94 个读数
 * 发光、注了并删变成 258 个，非 underlined 的档两次都是 516 个不动 —— 这行确实在选中 underlined 并压得住
 * 一条够不着它的阴影，只是真实库里没有人画那样的阴影。计算值零变化 ⇒ 不写更新日志。
 * 变异实测（三发 + 一发对照）：原样加回那一行 = 15 红（这 11 条 + 两条全库普查 + date-picker 那份
 * `选择器 { 值 }` 名单 + `theme-variants` 读 mixin 探针的一条）；把值换成看着不像压制的
 * `0 0 0 2px transparent` 也是 15 红，但**按值数"还剩几条 none"的那条普查是绿的** —— 咬住它的是这 11 条
 * 按**属性名**点的名单和下面那条"任何带 `-underlined` 的选择器都不声明 `box-shadow`"；只往 `&:focus`
 * 那条状态臂里补一行 = 9 红（庚 点过的那批状态臂名字先红，说明共用 mixin 的嵌套臂摊到了它们身上）；
 * 往 solid 臂加一行 = 只有按值的那两条红、"带 `-underlined`"那条绿 —— 它不是"任何阴影变化都红"的空闸。
 * 所以这一族的承重分布是：名字点名管"这 11 个落点"，状态臂名字管"别从嵌套里长回来"，
 * 按值的全库普查管"别在别处再写一行压制"，`theme-variants` 的探针管"共用 mixin 本身不许有这行"。
 */
const GUI_DEAD_DECLARATIONS: {
  component: string;
  selector: string;
  property: string;
}[] = [
  // 一份 mixin 调用摊在三种挂载形状上（庚 记的那条：档要落裸 input / 包裹层 / textarea）。
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
  ...REN_DEAD_DECLARATIONS,
  ...GUI_DEAD_DECLARATIONS,
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
  // 壬：badge 那条压制只有 `box-shadow: none` 一句声明，摘掉它整条规则就空了，所以点的是规则本身不能回来
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
  // 壬 摘的是三行声明，不是三条规则：箭头态那条还压着铺底、`.k-btn-plain` 还压着边框和表面、
  // `.k-badge-pill` 还带着整颗胶囊的形状 —— 谁清扫时顺手把规则一起删掉，这里要红。
  { component: "dropdown", selector: ".k-dropdown-has-arrow .k-dropdown-content" },
  { component: "button", selector: ".k-btn-plain" },
  { component: "badge", selector: ".k-badge-pill" },
  // 壬 留下的那条活压制的对手：外层面板自己在画光晕，内盒也是。两个名字任何一个从规则里掉出去，
  // "子面板不重复发光"就换了画法，那条压制得跟着重新裁定。
  { component: "dropdown", selector: ".k-dropdown-menu-submenu-popup" },
  // 壬 判据的前提：badge 全族唯一的环画在 `.k-badge-mark` 上。它哪天改成画在点上，那颗点就得重新压制，
  // 上面那条 `DEAD_SELECTORS` 也得跟着撤 —— 所以这里点名它还在。
  { component: "badge", selector: ".k-badge-mark" },
  // 癸 摘掉的是一行声明，不是九条规则：underlined 的基座还得继续画那条下沿、圆角和铺底。
  // 上面 `GUI_DEAD_DECLARATIONS` 只说"这条声明不许回来"，规则整个不见了它咬不到，所以这里逐个点名。
  ...GUI_DEAD_DECLARATIONS.map(({ component, selector }) => ({ component, selector })),
];

const compileFile = async (filename: string) => {
  const result = await render(readFileSync(join(process.cwd(), filename), "utf8"), { filename });
  return (result.css.replace(/\/\*[^]*?\*\//g, "").match(/[^{}]+\{[^{}]*\}/g) ?? []).map(
    (chunk) => {
      const open = chunk.indexOf("{");
      // `fullSelector` 保留 `:not(a, b, …)` 里那些逗号：按逗号切开是给"选择器必须逐字存在"那类断言用的，
      // 而多参数的 `:not()` 一切就碎，只能整条比对（见 `GUARDED_DRAWERS`）。
      const selectorText = chunk.slice(0, open).trim().replace(/\s+/g, " ");
      // 属性名够"这条声明不能回来"那类断言用；`declarations` 带上值，是给 辛/壬 那两条总闸用的 ——
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

// 一个组件的样式文件；癸 之后还有一处按整库看（`compileFile("components/styles/components.less")`），
// 因为那一行来自共用 mixin，只有打包出来的那份 CSS 才说得上"全库还剩几处压制"。
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
 * 癸 的总闸认的是"这条规则真的落在 underlined 上"，所以先把 `:not()` / `:is()` / `:where()` 的内容挖空
 * 再找 `-underlined` —— 九个家族那条 hover/focus 光晕臂的名单里就写着 `.k-x-underlined`，
 * 按整串文本判会把 10 条活规则误判成 offender（它们声明的正是被名单挡掉的那圈光晕）。
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

  REN_SHADOW_ALLOW_LISTS.forEach(({ component, allow }) => {
    // 壬 的总闸，形状跟 辛 一样：不认选择器名、只认"这个文件里还有谁写了 box-shadow、写的是什么值"。
    // 它一次咬住三件事 —— 扫掉的压制长回来（哪怕换了嵌套写法）、有人在别处补一条新阴影、以及把
    // 那条活压制的 `none` 改成真光晕（名单里 `.k-dropdown-menu-submenu-popup .k-dropdown-menu-submenu-sub`
    // 这一对钉的就是值，不是选择器）。button 的名单是空的：那一行删掉后它全家不再声明阴影。
    it(`${component}: 壬 之后还能声明 box-shadow 的规则一份不多、一份不少`, async () => {
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

  it("dropdown: 子菜单那层内盒的光晕仍被外层压着（壬 唯一留下的压制）", async () => {
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
    it(`form: 报错作用域还在给 ${selector} 画红环（辛 判据的前提）`, async () => {
      const rules = (await compile("form")).filter((rule) => rule.selectors.includes(selector));
      expect(rules, `${selector} 的规则没了`).toHaveLength(1);
      expect(rules[0]!.properties).toContain("box-shadow");
    });
  });

  /**
   * 癸 的承重那条：整库看，`box-shadow: none` 只剩 壬 留下的那一条。
   * 为什么这条比上面那 11 个名字更管用 —— 共用 mixin 那一行删掉之后，"压制"这件事在库里就没有
   * 系统性写法了，任何人再写一行（不管挂在哪个组件、用什么嵌套形状）都会让这里红，而他必须像
   * 壬 那样先答"这条压的是谁的阴影"。`GUI_DEAD_DECLARATIONS` 那 11 条点名守的是 mixin 长回来这一种，
   * 这一条守的是所有种。
   */
  it("全库：还声明 box-shadow: none 的规则只剩 dropdown 子菜单那一条（癸 之后）", async () => {
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
    // 前提：那一条压的是真在画的光晕，不是又一行死代码 —— 外层和内盒都在声明同一个弹层阴影（壬 点过）。
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

  it("全库：任何带 -underlined 的选择器都不声明 box-shadow（癸）", async () => {
    const rules = await compileFile("components/styles/components.less");
    const offenders = rules
      .filter(
        (rule) =>
          rule.selectors.some((selector) =>
            /-underlined/.test(withoutFunctionContents(selector)),
          ) && rule.declarations.some(([property]) => property === "box-shadow"),
      )
      .map((rule) => rule.fullSelector);
    // 认的是选择器里有没有 `-underlined`（名单除外，见 `withoutFunctionContents`），不是那 11 个名字，
    // 所以状态臂（`:hover` / `.k-x-opened`）想重新补一行压制也在这里红 —— 庚/辛 扫掉的那批状态压制
    // 等于又加了一道总闸。
    expect(offenders).toEqual([]);
  });
});
