# CSS 变量未声明清单

审计日期：2026-10-24。

范围：编译 `components/styles/index.less` 和 `src/assets/css/index.less` 后，比较所有 `var()` 引用（包括 fallback 内的嵌套引用）与声明；另扫描 components/src 中 Less、CSS、TS、TSX、Vue 源码，收集引用与运行时赋值位置。生成目录和第三方依赖不纳入源码扫描。已经由 `:root` / `[theme-mode]` 给出默认值的变量不在清单内；组件自己声明、也只在本组件里读取的变量（如 `--kui-button-gap`）同样不算未声明——它们的读取总能落在本作用域，用不到 fallback。写在 Mixin 里的变量名（`components/button/styles/index.less` 的 `.btn-name()`、`components/tag/styles/index.less` 的 `.tag-preset()`）用 `@{name}` 拼出来，字面搜索看不见，这里按调用点展开后再统计。引用表达式取自编译产物，fallback 已展开为编译值。

复核：2026-10-24 按当前源码重算全表。颜色档位改由编译期出值后新增的 `-hover` / `-active` / `text-on-*` 等钩子由插值展开补入；已零引用的 16 个 `--kui-color-*-3` 删除；`--kui-color-row-hover` 已由 `:root` 声明，移出清单。运行时赋值的判定是「组件或工具在 TS/TSX/Vue 里写这个变量」，因此 `--kui-avatar-group-overlap`、`--kui-scrollbar-width` 等也归入该类。`--kui-color-outline` 只在 `.k-form-item-error` 作用域内声明，全局仍无默认值，保留。

两个项目结果一致：默认 CSS 中未声明 134 项；其中运行时赋值 12 项，可选覆盖项 122 项。所有这些引用均有 fallback。变量“未声明”不等同于最终 CSS 属性失效；本清单不代表每个 DOM 作用域均已通过浏览器验证。

此前无 fallback 的 `--kui-color-table-row`、`--kui-color-table-col` 已修复，故不在下面的现存清单中。

主题设计依据：`components/styles/less-css-var.less` 文件头及 `src/views/theme.md` 的派生 Token 说明。可选覆盖项默认在使用处计算，以继承当前组件作用域中的基础变量。

## fill 背景的实际回退链

```css
background-color: var(--kui-theme-fill-bg,
  var(--kui-control-bg-fill, var(--kui-color-bg-component-overlay)));
```

前两项均无默认声明；未手动覆盖时，使用已定义且随明暗主题变化的 `--kui-color-bg-component-overlay`。

## 完整逐项清单

### `--k-calendar-event-bg`

分类：组件运行时赋值。

赋值相关源码：`components/calendar/index.tsx:75`。

引用表达式（去重）：

- `var(--k-calendar-event-bg, rgba(84, 169, 255, 0.11))`

全部源码引用位置：

- `components/calendar/styles/index.less:116`

### `--k-calendar-event-color`

分类：组件运行时赋值。

赋值相关源码：`components/calendar/index.tsx:74`。

引用表达式（去重）：

- `var(--k-calendar-event-color, var(--kui-color-primary))`

全部源码引用位置：

- `components/calendar/styles/index.less:125`
- `components/calendar/styles/index.less:128`

### `--k-feature-card-color`

分类：组件运行时赋值。

赋值相关源码：`components/feature-card/index.tsx:97`。

引用表达式（去重）：

- `var(--k-feature-card-color, var(--kui-color-primary))`
- `var(--k-feature-card-color, var(--kui-theme-solid-text, var(--kui-color-text-on-solid)))`

全部源码引用位置：

- `components/feature-card/styles/index.less:41`
- `components/feature-card/styles/index.less:148`

### `--k-feature-card-icon-bg`

分类：组件运行时赋值。

赋值相关源码：`components/feature-card/index.tsx:98`。

引用表达式（去重）：

- `var(--k-feature-card-icon-bg, var(--k-feature-card-icon-wash, rgba(84, 169, 255, 0.12)))`
- `var(--k-feature-card-icon-bg, var(--kui-theme-solid-chip))`

全部源码引用位置：

- `components/feature-card/styles/index.less:40`
- `components/feature-card/styles/index.less:147`

### `--k-feature-card-icon-wash`

分类：组件运行时赋值。

赋值相关源码：`components/feature-card/index.tsx:99`。

引用表达式（去重）：

- `var(--k-feature-card-icon-wash, rgba(84, 169, 255, 0.12))`

全部源码引用位置：

- `components/feature-card/styles/index.less:40`

### `--k-kanban-column-width`

分类：组件运行时赋值。

赋值相关源码：`components/kanban/index.tsx:118`。

引用表达式（去重）：

- `var(--k-kanban-column-width, 250px)`

全部源码引用位置：

- `components/kanban/styles/index.less:7`

### `--k-kanban-columns`

分类：组件运行时赋值。

赋值相关源码：`components/kanban/index.tsx:119`。

引用表达式（去重）：

- `var(--k-kanban-columns, 4)`

全部源码引用位置：

- `components/kanban/styles/index.less:6`

### `--k-row-column-gap`

分类：组件运行时赋值。

赋值相关源码：`components/row-col/row.tsx:36`、`components/row-col/row.tsx:39`。

引用表达式（去重）：

- `var(--k-row-column-gap, 0px)`

全部源码引用位置：

- `components/row-col/styles/index.less:25`
- `components/row-col/styles/index.less:26`
- `components/row-col/styles/index.less:32`
- `components/row-col/styles/index.less:42`
- `components/row-col/styles/index.less:48`

### `--k-table-scrollbar-width`

分类：组件运行时赋值。

赋值相关源码：`components/table/index.tsx:608`。

引用表达式（去重）：

- `var(--k-table-scrollbar-width, 0px)`

全部源码引用位置：

- `components/table/styles/index.less:46`

### `--kui-avatar-group-overlap`

分类：组件运行时赋值。

赋值相关源码：`components/avatar/avatar-group.tsx:65`。

引用表达式（去重）：

- `var(--kui-avatar-group-overlap, -8px)`

全部源码引用位置：

- `components/avatar/styles/index.less:78`

### `--kui-card-bg`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-card-bg, var(--kui-color-bg-component))`

全部源码引用位置：

- `components/card/styles/index.less:4`

### `--kui-card-border`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-card-border, var(--kui-color-border))`

全部源码引用位置：

- `components/card/styles/index.less:111`
- `components/card/styles/index.less:129`
- `components/card/styles/index.less:156`

### `--kui-card-padding`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-card-padding, var(--kui-spacing-4))`

全部源码引用位置：

- `components/card/styles/index.less:11`
- `components/card/styles/index.less:37`

### `--kui-card-radius`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-card-radius, var(--kui-border-radius-card))`

全部源码引用位置：

- `components/calendar/styles/index.less:31`
- `components/calendar/styles/index.less:32`
- `components/calendar/styles/index.less:47`
- `components/calendar/styles/index.less:48`
- `components/card/styles/index.less:6`
- `components/card/styles/index.less:118`
- `components/check-card/styles/index.less:12`
- `components/feature-card/styles/index.less:121`
- `components/feedback-panel/styles/index.less:18`
- `components/kanban/styles/index.less:25`
- `components/message/styles/index.less:30`
- `components/modal/styles/index.less:38`
- `components/modal/styles/index.less:189`
- `components/motion/demo/basic.vue:45`
- `components/notice/styles/index.less:36`
- `components/popconfirm/styles/index.less:142`
- `components/poptip/styles/index.less:144`
- `components/ripple/demo/basic.vue:5`
- `components/stat-card/styles/index.less:103`
- `components/tooltip/styles/index.less:22`
- `components/tour/styles/index.less:42`
- `components/transfer/styles/index.less:21`

### `--kui-color-blue-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-blue-6, rgba(0, 128, 255, 0.4))`

全部源码引用位置：

- `components/button/styles/index.less:326`
- `components/tag/styles/index.less:126`

### `--kui-color-blue-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-blue-9, rgba(0, 128, 255, 0.1))`

全部源码引用位置：

- `components/tag/styles/index.less:127`

### `--kui-color-blue-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-blue-active, #3399ff)`

全部源码引用位置：

- `components/button/styles/index.less:284`

### `--kui-color-blue-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-blue-hover, #198dff)`

全部源码引用位置：

- `components/button/styles/index.less:283`

### `--kui-color-brown-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-brown-6, rgba(210, 104, 21, 0.4))`

全部源码引用位置：

- `components/button/styles/index.less:326`
- `components/tag/styles/index.less:126`

### `--kui-color-brown-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-brown-9, rgba(210, 104, 21, 0.1))`

全部源码引用位置：

- `components/tag/styles/index.less:127`

### `--kui-color-brown-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-brown-active, #db8644)`

全部源码引用位置：

- `components/button/styles/index.less:284`

### `--kui-color-brown-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-brown-hover, #d7772c)`

全部源码引用位置：

- `components/button/styles/index.less:283`

### `--kui-color-cyan-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-cyan-6, rgba(0, 204, 204, 0.4))`

全部源码引用位置：

- `components/button/styles/index.less:326`
- `components/tag/styles/index.less:126`

### `--kui-color-cyan-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-cyan-9, rgba(0, 204, 204, 0.1))`

全部源码引用位置：

- `components/tag/styles/index.less:127`

### `--kui-color-cyan-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-cyan-active, #33d6d6)`

全部源码引用位置：

- `components/button/styles/index.less:284`

### `--kui-color-cyan-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-cyan-hover, #19d1d1)`

全部源码引用位置：

- `components/button/styles/index.less:283`

### `--kui-color-danger-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-danger-6, rgba(252, 114, 90, 0.4))`

全部源码引用位置：

- `components/button/styles/index.less:379`

### `--kui-color-danger-8`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-danger-8, rgba(252, 114, 90, 0.2))`

全部源码引用位置：

- `components/alert/styles/index.less:103`

### `--kui-color-danger-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-danger-9, rgba(252, 114, 90, 0.1))`

全部源码引用位置：

- `components/form/styles/index.less:95`

### `--kui-color-danger-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-danger-active, rgba(252, 114, 90, 0.8))`

全部源码引用位置：

- `components/button/styles/index.less:218`

### `--kui-color-danger-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-danger-hover, rgba(252, 114, 90, 0.9))`

全部源码引用位置：

- `components/button/styles/index.less:215`

### `--kui-color-gold-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-gold-6, rgba(179, 151, 0, 0.4))`

全部源码引用位置：

- `components/button/styles/index.less:326`
- `components/tag/styles/index.less:126`

### `--kui-color-gold-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-gold-9, rgba(179, 151, 0, 0.1))`

全部源码引用位置：

- `components/tag/styles/index.less:127`

### `--kui-color-gold-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-gold-active, #c2ac33)`

全部源码引用位置：

- `components/button/styles/index.less:284`

### `--kui-color-gold-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-gold-hover, #bba119)`

全部源码引用位置：

- `components/button/styles/index.less:283`

### `--kui-color-gray-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-gray-active, #999999)`

全部源码引用位置：

- `components/button/styles/index.less:284`

### `--kui-color-gray-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-gray-hover, #8d8d8d)`

全部源码引用位置：

- `components/button/styles/index.less:283`

### `--kui-color-green-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-green-6, rgba(0, 205, 0, 0.4))`

全部源码引用位置：

- `components/button/styles/index.less:326`
- `components/tag/styles/index.less:126`

### `--kui-color-green-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-green-9, rgba(0, 205, 0, 0.1))`

全部源码引用位置：

- `components/tag/styles/index.less:127`

### `--kui-color-green-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-green-active, #33d733)`

全部源码引用位置：

- `components/button/styles/index.less:284`

### `--kui-color-green-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-green-hover, #19d219)`

全部源码引用位置：

- `components/button/styles/index.less:283`

### `--kui-color-item-selected`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-item-selected, rgba(84, 169, 255, 0.2))`

全部源码引用位置：

- `components/cascader/styles/index.less:203`
- `components/check-card/styles/index.less:56`
- `components/date-picker/styles/index.less:402`
- `components/menu/styles/index.less:280`
- `components/menu/styles/index.less:294`
- `components/menu/styles/index.less:442`
- `components/menu/styles/index.less:541`
- `components/page/styles/index.less:168`
- `components/select/styles/index.less:416`
- `components/transfer/styles/index.less:115`
- `components/transfer/styles/index.less:128`
- `components/tree/styles/index.less:133`
- `components/tree/styles/index.less:211`
- `components/typography/styles/index.less:59`

### `--kui-color-lime-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-lime-6, rgba(0, 179, 0, 0.4))`

全部源码引用位置：

- `components/button/styles/index.less:326`
- `components/tag/styles/index.less:126`

### `--kui-color-lime-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-lime-9, rgba(0, 179, 0, 0.1))`

全部源码引用位置：

- `components/tag/styles/index.less:127`

### `--kui-color-lime-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-lime-active, #33c233)`

全部源码引用位置：

- `components/button/styles/index.less:284`

### `--kui-color-lime-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-lime-hover, #19bb19)`

全部源码引用位置：

- `components/button/styles/index.less:283`

### `--kui-color-magenta-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-magenta-6, rgba(255, 0, 255, 0.4))`

全部源码引用位置：

- `components/button/styles/index.less:326`
- `components/tag/styles/index.less:126`

### `--kui-color-magenta-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-magenta-9, rgba(255, 0, 255, 0.1))`

全部源码引用位置：

- `components/tag/styles/index.less:127`

### `--kui-color-magenta-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-magenta-active, #ff33ff)`

全部源码引用位置：

- `components/button/styles/index.less:284`

### `--kui-color-magenta-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-magenta-hover, #ff19ff)`

全部源码引用位置：

- `components/button/styles/index.less:283`

### `--kui-color-olive-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-olive-6, rgba(128, 128, 0, 0.4))`

全部源码引用位置：

- `components/button/styles/index.less:326`
- `components/tag/styles/index.less:126`

### `--kui-color-olive-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-olive-9, rgba(128, 128, 0, 0.1))`

全部源码引用位置：

- `components/tag/styles/index.less:127`

### `--kui-color-olive-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-olive-active, #999933)`

全部源码引用位置：

- `components/button/styles/index.less:284`

### `--kui-color-olive-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-olive-hover, #8d8d19)`

全部源码引用位置：

- `components/button/styles/index.less:283`

### `--kui-color-orange-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-orange-6, rgba(255, 165, 0, 0.4))`

全部源码引用位置：

- `components/button/styles/index.less:326`
- `components/tag/styles/index.less:126`

### `--kui-color-orange-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-orange-9, rgba(255, 165, 0, 0.1))`

全部源码引用位置：

- `components/tag/styles/index.less:127`

### `--kui-color-orange-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-orange-active, #ffb733)`

全部源码引用位置：

- `components/button/styles/index.less:284`

### `--kui-color-orange-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-orange-hover, #ffae19)`

全部源码引用位置：

- `components/button/styles/index.less:283`

### `--kui-color-outline`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-outline, rgba(84, 169, 255, 0.2))`

全部源码引用位置：

- `components/back-top/styles/index.less:22`
- `components/button/styles/index.less:35`
- `components/cascader/styles/index.less:27`
- `components/cascader/styles/index.less:122`
- `components/check-card/styles/index.less:29`
- `components/checkbox/styles/index.less:16`
- `components/date-picker/styles/index.less:41`
- `components/date-picker/styles/index.less:213`
- `components/date-picker/styles/index.less:219`
- `components/input-number/styles/index.less:121`
- `components/input-otp/styles/index.less:50`
- `components/input-tag/styles/index.less:37`
- `components/input-tag/styles/index.less:95`
- `components/input/styles/index.less:86`
- `components/input/styles/index.less:164`
- `components/input/styles/index.less:245`
- `components/input/styles/index.less:289`
- `components/menu/styles/index.less:17`
- `components/page/styles/index.less:43`
- `components/radio/styles/index.less:98`
- `components/segmented/styles/index.less:56`
- `components/select/styles/index.less:22`
- `components/select/styles/index.less:587`
- `components/steps/styles/index.less:79`
- `components/switch/styles/index.less:35`
- `components/tabs/styles/index.less:99`
- `components/transfer/styles/index.less:111`
- `components/tree-select/styles/index.less:28`
- `components/tree-select/styles/index.less:517`
- `components/typography/styles/index.less:97`

### `--kui-color-pink-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-pink-6, rgba(255, 115, 140, 0.4))`

全部源码引用位置：

- `components/button/styles/index.less:326`
- `components/tag/styles/index.less:126`

### `--kui-color-pink-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-pink-9, rgba(255, 115, 140, 0.1))`

全部源码引用位置：

- `components/tag/styles/index.less:127`

### `--kui-color-pink-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-pink-active, #ff8fa3)`

全部源码引用位置：

- `components/button/styles/index.less:284`

### `--kui-color-pink-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-pink-hover, #ff8198)`

全部源码引用位置：

- `components/button/styles/index.less:283`

### `--kui-color-primary-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-primary-6, rgba(84, 169, 255, 0.4))`

全部源码引用位置：

- `components/button/styles/index.less:375`

### `--kui-color-primary-8`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-primary-8, rgba(84, 169, 255, 0.2))`

全部源码引用位置：

- `components/alert/styles/index.less:88`
- `src/assets/css/home.less:95`

### `--kui-color-primary-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-primary-9, rgba(84, 169, 255, 0.1))`

全部源码引用位置：

- `components/color-picker/styles/index.less:91`
- `components/kanban/styles/index.less:52`
- `components/spin/styles/index.less:80`

### `--kui-color-primary-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-primary-active, rgba(84, 169, 255, 0.8))`

全部源码引用位置：

- `components/button/styles/index.less:111`
- `components/button/styles/index.less:205`

### `--kui-color-primary-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-primary-hover, rgba(84, 169, 255, 0.9))`

全部源码引用位置：

- `components/button/styles/index.less:107`
- `components/button/styles/index.less:202`
- `components/cascader/styles/index.less:281`
- `components/cascader/styles/index.less:282`
- `components/color-picker/styles/index.less:27`
- `components/color-picker/styles/index.less:127`
- `components/color-picker/styles/index.less:128`
- `components/date-picker/styles/index.less:159`
- `components/date-picker/styles/index.less:160`
- `components/input-number/styles/index.less:310`
- `components/input-number/styles/index.less:311`
- `components/input-otp/styles/index.less:104`
- `components/input-otp/styles/index.less:105`
- `components/input-tag/styles/index.less:186`
- `components/input-tag/styles/index.less:187`
- `components/input/styles/index.less:471`
- `components/input/styles/index.less:472`
- `components/select/styles/index.less:279`
- `components/select/styles/index.less:280`
- `components/tree-select/styles/index.less:285`
- `components/tree-select/styles/index.less:286`
- `components/typography/styles/index.less:92`

### `--kui-color-purple-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-purple-6, rgba(205, 0, 204, 0.4))`

全部源码引用位置：

- `components/button/styles/index.less:326`
- `components/tag/styles/index.less:126`

### `--kui-color-purple-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-purple-9, rgba(205, 0, 204, 0.1))`

全部源码引用位置：

- `components/tag/styles/index.less:127`

### `--kui-color-purple-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-purple-active, #a400a3)`

全部源码引用位置：

- `components/button/styles/index.less:284`

### `--kui-color-purple-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-purple-hover, #b900b8)`

全部源码引用位置：

- `components/button/styles/index.less:283`

### `--kui-color-red-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-red-6, rgba(255, 26, 26, 0.4))`

全部源码引用位置：

- `components/button/styles/index.less:326`
- `components/tag/styles/index.less:126`

### `--kui-color-red-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-red-9, rgba(255, 26, 26, 0.1))`

全部源码引用位置：

- `components/tag/styles/index.less:127`

### `--kui-color-red-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-red-active, #ff4848)`

全部源码引用位置：

- `components/button/styles/index.less:284`

### `--kui-color-red-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-red-hover, #ff3131)`

全部源码引用位置：

- `components/button/styles/index.less:283`

### `--kui-color-success-8`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-success-8, rgba(0, 187, 93, 0.2))`

全部源码引用位置：

- `components/alert/styles/index.less:93`

### `--kui-color-teal-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-teal-6, rgba(0, 128, 128, 0.4))`

全部源码引用位置：

- `components/button/styles/index.less:326`
- `components/tag/styles/index.less:126`

### `--kui-color-teal-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-teal-9, rgba(0, 128, 128, 0.1))`

全部源码引用位置：

- `components/tag/styles/index.less:127`

### `--kui-color-teal-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-teal-active, #006666)`

全部源码引用位置：

- `components/button/styles/index.less:284`

### `--kui-color-teal-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-teal-hover, #007373)`

全部源码引用位置：

- `components/button/styles/index.less:283`

### `--kui-color-text-on-blue`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-text-on-blue, #000)`

全部源码引用位置：

- `components/button/styles/index.less:288`
- `components/button/styles/index.less:302`

### `--kui-color-text-on-brown`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-text-on-brown, #000)`

全部源码引用位置：

- `components/button/styles/index.less:288`
- `components/button/styles/index.less:302`

### `--kui-color-text-on-cyan`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-text-on-cyan, #000)`

全部源码引用位置：

- `components/button/styles/index.less:288`
- `components/button/styles/index.less:302`

### `--kui-color-text-on-gold`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-text-on-gold, #000)`

全部源码引用位置：

- `components/button/styles/index.less:288`
- `components/button/styles/index.less:302`

### `--kui-color-text-on-gray`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-text-on-gray, #000)`

全部源码引用位置：

- `components/button/styles/index.less:288`
- `components/button/styles/index.less:302`

### `--kui-color-text-on-green`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-text-on-green, #000)`

全部源码引用位置：

- `components/button/styles/index.less:288`
- `components/button/styles/index.less:302`

### `--kui-color-text-on-lime`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-text-on-lime, #000)`

全部源码引用位置：

- `components/button/styles/index.less:288`
- `components/button/styles/index.less:302`

### `--kui-color-text-on-magenta`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-text-on-magenta, #000)`

全部源码引用位置：

- `components/button/styles/index.less:288`
- `components/button/styles/index.less:302`

### `--kui-color-text-on-olive`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-text-on-olive, #000)`

全部源码引用位置：

- `components/button/styles/index.less:288`
- `components/button/styles/index.less:302`

### `--kui-color-text-on-orange`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-text-on-orange, #000)`

全部源码引用位置：

- `components/button/styles/index.less:288`
- `components/button/styles/index.less:302`

### `--kui-color-text-on-pink`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-text-on-pink, #000)`

全部源码引用位置：

- `components/button/styles/index.less:288`
- `components/button/styles/index.less:302`

### `--kui-color-text-on-purple`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-text-on-purple, #fff)`

全部源码引用位置：

- `components/button/styles/index.less:288`
- `components/button/styles/index.less:302`

### `--kui-color-text-on-red`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-text-on-red, #000)`

全部源码引用位置：

- `components/button/styles/index.less:288`
- `components/button/styles/index.less:302`

### `--kui-color-text-on-teal`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-text-on-teal, #fff)`

全部源码引用位置：

- `components/button/styles/index.less:288`
- `components/button/styles/index.less:302`

### `--kui-color-text-on-violet`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-text-on-violet, #000)`

全部源码引用位置：

- `components/button/styles/index.less:288`
- `components/button/styles/index.less:302`

### `--kui-color-text-on-volcano`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-text-on-volcano, #000)`

全部源码引用位置：

- `components/button/styles/index.less:288`
- `components/button/styles/index.less:302`

### `--kui-color-text-on-yellow`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-text-on-yellow, #000)`

全部源码引用位置：

- `components/button/styles/index.less:288`
- `components/button/styles/index.less:302`

### `--kui-color-violet-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-violet-6, rgba(238, 130, 238, 0.4))`

全部源码引用位置：

- `components/button/styles/index.less:326`
- `components/tag/styles/index.less:126`

### `--kui-color-violet-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-violet-9, rgba(238, 130, 238, 0.1))`

全部源码引用位置：

- `components/tag/styles/index.less:127`

### `--kui-color-violet-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-violet-active, #f19bf1)`

全部源码引用位置：

- `components/button/styles/index.less:284`

### `--kui-color-violet-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-violet-hover, #f08ff0)`

全部源码引用位置：

- `components/button/styles/index.less:283`

### `--kui-color-volcano-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-volcano-6, rgba(255, 66, 0, 0.4))`

全部源码引用位置：

- `components/button/styles/index.less:326`
- `components/tag/styles/index.less:126`

### `--kui-color-volcano-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-volcano-9, rgba(255, 66, 0, 0.1))`

全部源码引用位置：

- `components/tag/styles/index.less:127`

### `--kui-color-volcano-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-volcano-active, #ff6833)`

全部源码引用位置：

- `components/button/styles/index.less:284`

### `--kui-color-volcano-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-volcano-hover, #ff5519)`

全部源码引用位置：

- `components/button/styles/index.less:283`

### `--kui-color-warning-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-warning-6, rgba(255, 174, 67, 0.4))`

全部源码引用位置：

- `components/button/styles/index.less:383`

### `--kui-color-warning-8`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-warning-8, rgba(255, 174, 67, 0.2))`

全部源码引用位置：

- `components/alert/styles/index.less:98`

### `--kui-color-warning-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-warning-active, rgba(255, 174, 67, 0.8))`

全部源码引用位置：

- `components/button/styles/index.less:231`

### `--kui-color-warning-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-warning-hover, rgba(255, 174, 67, 0.9))`

全部源码引用位置：

- `components/button/styles/index.less:228`

### `--kui-color-yellow-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-yellow-6, rgba(204, 204, 0, 0.4))`

全部源码引用位置：

- `components/button/styles/index.less:326`
- `components/tag/styles/index.less:126`

### `--kui-color-yellow-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-yellow-9, rgba(204, 204, 0, 0.1))`

全部源码引用位置：

- `components/tag/styles/index.less:127`

### `--kui-color-yellow-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-yellow-active, #d6d633)`

全部源码引用位置：

- `components/button/styles/index.less:284`

### `--kui-color-yellow-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-yellow-hover, #d1d119)`

全部源码引用位置：

- `components/button/styles/index.less:283`

### `--kui-component-shadow`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-component-shadow, 0 0 2px rgba(84, 169, 255, 0.1))`

全部源码引用位置：

- `components/cascader/styles/index.less:39`
- `components/input-number/styles/index.less:131`
- `components/input-otp/styles/index.less:74`
- `components/input-tag/styles/index.less:51`
- `components/input/styles/index.less:99`
- `components/input/styles/index.less:180`
- `components/segmented/styles/index.less:72`
- `components/select/styles/index.less:34`
- `components/tree-select/styles/index.less:40`
- `components/tree-select/styles/index.less:512`

### `--kui-control-bg`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-control-bg, var(--kui-color-bg))`

全部源码引用位置：

- `components/date-picker/styles/index.less:15`
- `components/input-number/styles/index.less:11`
- `components/input-otp/styles/index.less:37`
- `components/input-tag/styles/index.less:17`
- `components/input/styles/index.less:13`
- `components/input/styles/index.less:153`
- `components/steps/styles/index.less:26`
- `components/tree-select/styles/index.less:14`

### `--kui-control-bg-disabled`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-control-bg-disabled, var(--kui-color-bg-component-disabled))`

全部源码引用位置：

- `components/button/styles/index.less:425`
- `components/button/styles/index.less:453`
- `components/cascader/styles/index.less:128`
- `components/check-card/styles/index.less:39`
- `components/check-card/styles/index.less:170`
- `components/date-picker/styles/index.less:301`
- `components/input-number/styles/index.less:270`
- `components/input-otp/styles/index.less:56`
- `components/input-tag/styles/index.less:254`
- `components/input/styles/index.less:202`
- `components/input/styles/index.less:525`
- `components/select/styles/index.less:606`
- `components/tree-select/styles/index.less:532`

### `--kui-control-bg-fill`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-control-bg-fill, var(--kui-color-bg-component-overlay))`

全部源码引用位置：

- `components/button/styles/index.less:186`
- `components/button/styles/index.less:433`
- `components/calendar/styles/index.less:35`
- `components/calendar/styles/index.less:69`
- `components/list-panel/styles/index.less:35`
- `components/segmented/styles/index.less:11`
- `components/slider/styles/index.less:76`
- `components/styles/less-css-var.less:120`
- `components/switch/styles/index.less:13`

### `--kui-control-border`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-control-border, var(--kui-color-border))`

全部源码引用位置：

- `components/back-top/demo/target.vue:19`
- `components/button/styles/index.less:84`
- `components/button/styles/index.less:387`
- `components/cascader/styles/index.less:14`
- `components/date-picker/styles/index.less:12`
- `components/date-picker/styles/index.less:253`
- `components/date-picker/styles/index.less:328`
- `components/date-picker/styles/index.less:331`
- `components/date-picker/styles/index.less:488`
- `components/date-picker/styles/index.less:525`
- `components/date-picker/styles/index.less:555`
- `components/date-picker/styles/index.less:556`
- `components/input-number/styles/index.less:9`
- `components/input-number/styles/index.less:60`
- `components/input-number/styles/index.less:99`
- `components/input-otp/styles/index.less:34`
- `components/input-tag/styles/index.less:15`
- `components/input/styles/index.less:11`
- `components/input/styles/index.less:150`
- `components/input/styles/index.less:526`
- `components/input/styles/index.less:556`
- `components/select/styles/index.less:15`
- `components/steps/styles/index.less:24`
- `components/steps/styles/index.less:37`
- `components/styles/less-css-var.less:126`
- `components/tag/styles/index.less:42`
- `components/tree-select/styles/index.less:16`

### `--kui-control-radius`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-control-radius, var(--kui-shape-round, var(--kui-border-radius)))`

全部源码引用位置：

- `components/button/styles/index.less:10`
- `components/cascader/styles/index.less:141`
- `components/cascader/styles/index.less:186`
- `components/date-picker/styles/index.less:14`
- `components/date-picker/styles/index.less:228`
- `components/date-picker/styles/index.less:374`
- `components/date-picker/styles/index.less:449`
- `components/input-number/styles/index.less:10`
- `components/input-otp/styles/index.less:35`
- `components/input-tag/styles/index.less:16`
- `components/input/styles/index.less:12`
- `components/input/styles/index.less:151`
- `components/input/styles/index.less:540`
- `components/list-panel/styles/index.less:32`
- `components/progress/styles/index.less:9`
- `components/progress/styles/index.less:17`
- `components/select/styles/index.less:332`
- `components/select/styles/index.less:384`
- `components/tag/styles/index.less:44`
- `components/tree-select/styles/index.less:338`
- `components/typography/styles/index.less:115`

### `--kui-control-text`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-control-text, var(--kui-color-text))`

全部源码引用位置：

- `components/button/styles/index.less:3`
- `components/button/styles/index.less:529`
- `components/cascader/styles/index.less:8`
- `components/cascader/styles/index.less:180`
- `components/date-picker/styles/index.less:8`
- `components/date-picker/styles/index.less:373`
- `components/date-picker/styles/index.less:421`
- `components/date-picker/styles/index.less:510`
- `components/date-picker/styles/index.less:563`
- `components/input-number/styles/index.less:7`
- `components/input-number/styles/index.less:109`
- `components/input-number/styles/index.less:181`
- `components/input-otp/styles/index.less:36`
- `components/input-tag/styles/index.less:14`
- `components/input-tag/styles/index.less:60`
- `components/input/styles/index.less:9`
- `components/input/styles/index.less:67`
- `components/input/styles/index.less:112`
- `components/input/styles/index.less:152`
- `components/input/styles/index.less:215`
- `components/input/styles/index.less:216`
- `components/input/styles/index.less:217`
- `components/select/styles/index.less:8`
- `components/select/styles/index.less:81`
- `components/select/styles/index.less:194`
- `components/select/styles/index.less:356`
- `components/select/styles/index.less:374`
- `components/select/styles/index.less:524`
- `components/tag/styles/index.less:51`
- `components/tour/styles/index.less:39`
- `components/tree-select/styles/index.less:8`
- `components/tree-select/styles/index.less:86`
- `components/tree-select/styles/index.less:199`
- `components/tree-select/styles/index.less:355`
- `components/tree-select/styles/index.less:437`

### `--kui-popup-bg`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-popup-bg, var(--kui-color-bg-pop))`

全部源码引用位置：

- `components/cascader/styles/index.less:142`
- `components/color-picker/styles/index.less:398`
- `components/color-picker/styles/index.less:404`
- `components/date-picker/styles/index.less:226`
- `components/drawer/styles/index.less:34`
- `components/dropdown/styles/index.less:10`
- `components/dropdown/styles/index.less:35`
- `components/dropdown/styles/index.less:140`
- `components/dropdown/styles/index.less:175`
- `components/image/styles/index.less:87`
- `components/menu/styles/index.less:510`
- `components/message/styles/index.less:33`
- `components/modal/styles/index.less:34`
- `components/modal/styles/index.less:186`
- `components/notice/styles/index.less:39`
- `components/popconfirm/styles/index.less:139`
- `components/popconfirm/styles/index.less:179`
- `components/poptip/styles/index.less:141`
- `components/poptip/styles/index.less:175`
- `components/popup/style.less:11`
- `components/popup/style.less:20`
- `components/select/styles/index.less:336`
- `components/tour/styles/index.less:40`
- `components/tour/styles/index.less:52`
- `components/tree-select/styles/index.less:342`

### `--kui-popup-border`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-popup-border, var(--kui-color-pop-border))`

全部源码引用位置：

- `components/cascader/styles/index.less:143`
- `components/cascader/styles/index.less:167`
- `components/color-picker/styles/index.less:405`
- `components/color-picker/styles/index.less:416`
- `components/date-picker/styles/index.less:232`
- `components/dropdown/styles/index.less:16`
- `components/dropdown/styles/index.less:25`
- `components/dropdown/styles/index.less:30`
- `components/dropdown/styles/index.less:124`
- `components/image/styles/index.less:88`
- `components/menu/styles/index.less:511`
- `components/message/styles/index.less:34`
- `components/modal/styles/index.less:35`
- `components/notice/styles/index.less:40`
- `components/popconfirm/styles/index.less:144`
- `components/popconfirm/styles/index.less:148`
- `components/poptip/styles/index.less:146`
- `components/poptip/styles/index.less:151`
- `components/popup/style.less:12`
- `components/popup/style.less:28`
- `components/select/styles/index.less:337`
- `components/tooltip/styles/index.less:19`
- `components/tooltip/styles/index.less:31`
- `components/tour/styles/index.less:41`
- `components/tour/styles/index.less:61`
- `components/tree-select/styles/index.less:350`

### `--kui-popup-radius`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-popup-radius, var(--kui-border-radius))`

全部源码引用位置：

- `components/cascader/styles/index.less:13`
- `components/dropdown/styles/index.less:11`
- `components/dropdown/styles/index.less:36`
- `components/popup/style.less:13`
- `components/select/styles/index.less:14`
- `components/tour/styles/index.less:23`
- `components/tour/styles/index.less:109`
- `components/tour/styles/index.less:110`
- `components/tree-select/styles/index.less:15`

### `--kui-popup-shadow`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-popup-shadow, var(--kui-pop-shadow))`

全部源码引用位置：

- `components/cascader/styles/index.less:144`
- `components/color-picker/styles/index.less:402`
- `components/date-picker/styles/index.less:227`
- `components/dropdown/styles/index.less:34`
- `components/dropdown/styles/index.less:126`
- `components/image/styles/index.less:89`
- `components/menu/styles/index.less:507`
- `components/message/styles/index.less:31`
- `components/modal/styles/index.less:42`
- `components/notice/styles/index.less:37`
- `components/popconfirm/styles/index.less:140`
- `components/poptip/styles/index.less:142`
- `components/popup/style.less:14`
- `components/select/styles/index.less:339`
- `components/tour/styles/index.less:43`
- `components/tree-select/styles/index.less:344`

### `--kui-scrollbar-width`

分类：组件运行时赋值。

赋值相关源码：`components/utils/vnode.tsx:117`、`components/utils/vnode.tsx:141`。

引用表达式（去重）：

- `var(--kui-scrollbar-width, 0px)`

全部源码引用位置：

- `components/styles/base.less:43`
- `components/styles/base.less:47`

### `--kui-shape-round`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-shape-round, var(--kui-border-radius))`

全部源码引用位置：

- `components/alert/styles/index.less:122`
- `components/avatar/styles/index.less:61`
- `components/button/styles/index.less:10`
- `components/cascader/styles/index.less:141`
- `components/cascader/styles/index.less:186`
- `components/collapse/styles/index.less:98`
- `components/date-picker/styles/index.less:14`
- `components/date-picker/styles/index.less:228`
- `components/date-picker/styles/index.less:374`
- `components/date-picker/styles/index.less:449`
- `components/descriptions/styles/index.less:127`
- `components/feedback-panel/styles/index.less:108`
- `components/image/styles/index.less:310`
- `components/input-number/styles/index.less:10`
- `components/input-otp/styles/index.less:35`
- `components/input-tag/styles/index.less:16`
- `components/input/styles/index.less:12`
- `components/input/styles/index.less:151`
- `components/input/styles/index.less:540`
- `components/list-panel/styles/index.less:32`
- `components/motion/demo/basic.vue:50`
- `components/page/styles/index.less:363`
- `components/progress/styles/index.less:9`
- `components/progress/styles/index.less:17`
- `components/qrcode/styles/index.less:11`
- `components/qrcode/styles/index.less:84`
- `components/select/styles/index.less:332`
- `components/select/styles/index.less:384`
- `components/table/styles/index.less:530`
- `components/tag/styles/index.less:44`
- `components/tree-select/styles/index.less:338`
- `components/typography/styles/index.less:115`

### `--kui-switch-color`

分类：组件运行时赋值。

赋值相关源码：`components/switch/index.tsx:135`。

引用表达式（去重）：

- `var(--kui-switch-color, var(--kui-color-primary))`
- `var(--kui-switch-color, var(--kui-color-success))`
- `var(--kui-switch-color, var(--kui-color-warning))`
- `var(--kui-switch-color, var(--kui-color-danger))`

全部源码引用位置：

- `components/switch/styles/index.less:143`
- `components/switch/styles/index.less:144`
- `components/switch/styles/index.less:164`
- `components/switch/styles/index.less:165`
- `components/switch/styles/index.less:169`
- `components/switch/styles/index.less:170`
- `components/switch/styles/index.less:174`
- `components/switch/styles/index.less:175`

### `--kui-theme-dashed-border`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-theme-dashed-border, var(--kui-theme-outline-border, var(--kui-control-border, var(--kui-color-border))))`

全部源码引用位置：

- `components/styles/less-css-var.less:133`

### `--kui-theme-fill-bg`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-theme-fill-bg, var(--kui-control-bg-fill, var(--kui-color-bg-component-overlay)))`

全部源码引用位置：

- `components/button/styles/index.less:185`
- `components/button/styles/index.less:432`
- `components/calendar/styles/index.less:34`
- `components/calendar/styles/index.less:68`
- `components/list-panel/styles/index.less:34`
- `components/segmented/styles/index.less:10`
- `components/slider/styles/index.less:75`
- `components/styles/less-css-var.less:119`
- `components/switch/styles/index.less:12`

### `--kui-theme-outline-border`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-theme-outline-border, var(--kui-control-border, var(--kui-color-border)))`

全部源码引用位置：

- `components/styles/less-css-var.less:125`

### `--kui-theme-solid-bg`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-theme-solid-bg, var(--kui-color-primary))`

全部源码引用位置：

- `components/kanban/styles/index.less:59`
- `components/styles/less-css-var.less:130`

### `--kui-theme-solid-border`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-theme-solid-border, var(--kui-theme-solid-bg, var(--kui-color-primary)))`

全部源码引用位置：

- `components/styles/less-css-var.less:131`

### `--kui-theme-solid-text`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-theme-solid-text, var(--kui-color-text-on-solid))`

全部源码引用位置：

- `components/styles/less-css-var.less:132`
