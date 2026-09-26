# CSS 变量未声明清单

审计日期：2026-09-25。

范围：编译 `components/styles/index.less` 和 `src/assets/css/index.less` 后，比较所有 `var()` 引用（包括 fallback 内的嵌套引用）与 CSS 声明；另扫描 components/src 中 Less、CSS、TS、TSX、Vue 源码，收集引用与运行时赋值位置。生成目录和第三方依赖不纳入源码扫描。

两个项目结果一致：默认 CSS 中未声明 89 项；其中运行时赋值 7 项，可选覆盖项 82 项。所有这些引用均有 fallback。变量“未声明”不等同于最终 CSS 属性失效；本清单不代表每个 DOM 作用域均已通过浏览器验证。

此前无 fallback 的 `--kui-color-table-row`、`--kui-color-table-col` 已修复，故不在下面的现存清单中。

主题设计依据：`components/styles/less-css-var.less` 文件头及 `src/views/theme.md` 的派生 Token 说明。可选覆盖项默认在使用处计算，以继承当前组件作用域中的基础变量。

## fill 背景的实际回退链

```css
background-color: var(--kui-theme-fill-bg,
  var(--kui-control-bg-fill, var(--kui-color-bg-component-overlay)));
```

前两项均无默认声明；未手动覆盖时，使用已定义且随明暗主题变化的 `--kui-color-bg-component-overlay`。

## 完整逐项清单

### `--k-calendar-event-color`

分类：组件运行时赋值。

赋值相关源码：`components/calendar/index.tsx:291`。

引用表达式（去重）：

- `var(--k-calendar-event-color, var(--kui-color-primary))`

全部源码引用位置：

- `components/calendar/styles/index.less:113`
- `components/calendar/styles/index.less:124`
- `components/calendar/styles/index.less:127`

### `--k-feature-card-color`

分类：组件运行时赋值。

赋值相关源码：`components/feature-card/index.tsx:67`。

引用表达式（去重）：

- `var(--k-feature-card-color, var(--kui-color-primary))`

全部源码引用位置：

- `components/feature-card/styles/index.less:38`
- `components/feature-card/styles/index.less:40`

### `--k-feature-card-icon-bg`

分类：组件运行时赋值。

赋值相关源码：`components/feature-card/index.tsx:68`。

引用表达式（去重）：

- `var( --k-feature-card-icon-bg, color-mix(in srgb, var(--k-feature-card-color, var(--kui-color-primary)) 12%, transparent) )`

全部源码引用位置：

- `components/feature-card/styles/index.less:36`

### `--k-kanban-column-width`

分类：组件运行时赋值。

赋值相关源码：`components/kanban/index.tsx:103`。

引用表达式（去重）：

- `var(--k-kanban-column-width, 250px)`

全部源码引用位置：

- `components/kanban/styles/index.less:5`

### `--k-kanban-columns`

分类：组件运行时赋值。

赋值相关源码：`components/kanban/index.tsx:104`。

引用表达式（去重）：

- `var(--k-kanban-columns, 4)`

全部源码引用位置：

- `components/kanban/styles/index.less:4`

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

### `--kui-avatar-group-overlap`

分类：可选覆盖项，无默认声明。

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

- `components/card/styles/index.less:113`
- `components/card/styles/index.less:136`

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

- `components/calendar/styles/index.less:29`
- `components/calendar/styles/index.less:30`
- `components/calendar/styles/index.less:45`
- `components/calendar/styles/index.less:46`
- `components/card/styles/index.less:6`
- `components/card/styles/index.less:119`
- `components/check-card/styles/index.less:10`
- `components/feature-card/styles/index.less:120`
- `components/feedback-panel/styles/index.less:13`
- `components/kanban/styles/index.less:17`
- `components/message/styles/index.less:30`
- `components/modal/styles/index.less:36`
- `components/modal/styles/index.less:176`
- `components/motion/demo/basic.vue:45`
- `components/notice/styles/index.less:28`
- `components/popconfirm/styles/index.less:142`
- `components/poptip/styles/index.less:144`
- `components/ripple/demo/basic.vue:5`
- `components/stat-card/styles/index.less:131`
- `components/tooltip/styles/index.less:18`
- `components/tour/styles/index.less:42`
- `components/transfer/styles/index.less:17`

### `--kui-color-blue-3`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-blue-3, color-mix(in srgb, var(--kui-color-blue) 70%, transparent))`
- `var( --kui-color-blue-3, color-mix(in srgb, var(--kui-color-blue) 70%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:382`
- `components/button/styles/index.less:548`
- `components/button/styles/index.less:705`
- `components/tag/styles/index.less:114`

### `--kui-color-blue-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-blue-6, color-mix(in srgb, var(--kui-color-blue) 40%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:383`
- `components/tag/styles/index.less:115`

### `--kui-color-blue-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-blue-9, color-mix(in srgb, var(--kui-color-blue) 10%, transparent) )`

全部源码引用位置：

- `components/tag/styles/index.less:119`

### `--kui-color-brown-3`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-brown-3, color-mix(in srgb, var(--kui-color-brown) 70%, transparent))`
- `var( --kui-color-brown-3, color-mix(in srgb, var(--kui-color-brown) 70%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:345`
- `components/button/styles/index.less:516`
- `components/button/styles/index.less:738`

### `--kui-color-brown-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-brown-6, color-mix(in srgb, var(--kui-color-brown) 40%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:346`

### `--kui-color-cyan-3`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-cyan-3, color-mix(in srgb, var(--kui-color-cyan) 70%, transparent))`
- `var( --kui-color-cyan-3, color-mix(in srgb, var(--kui-color-cyan) 70%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:329`
- `components/button/styles/index.less:398`
- `components/button/styles/index.less:502`
- `components/button/styles/index.less:562`
- `components/button/styles/index.less:717`
- `components/tag/styles/index.less:90`

### `--kui-color-cyan-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-cyan-6, color-mix(in srgb, var(--kui-color-cyan) 40%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:330`
- `components/button/styles/index.less:399`
- `components/tag/styles/index.less:91`

### `--kui-color-cyan-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-cyan-9, color-mix(in srgb, var(--kui-color-cyan) 10%, transparent) )`

全部源码引用位置：

- `components/tag/styles/index.less:95`

### `--kui-color-danger-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-danger-6, color-mix(in srgb, var(--kui-color-danger) 40%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:283`

### `--kui-color-danger-8`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-danger-8, color-mix(in srgb, var(--kui-color-danger) 20%, transparent) )`
- `var(--kui-color-danger-8, color-mix(in srgb, var(--kui-color-danger) 20%, transparent))`

全部源码引用位置：

- `components/alert/styles/index.less:109`
- `components/alert/styles/index.less:145`

### `--kui-color-danger-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-danger-9, color-mix(in srgb, var(--kui-color-danger) 10%, transparent))`

全部源码引用位置：

- `components/form/styles/index.less:97`
- `components/form/styles/index.less:111`
- `components/form/styles/index.less:158`
- `components/form/styles/index.less:163`

### `--kui-color-danger-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-danger-active, color-mix(in srgb, var(--kui-color-danger) 80%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:234`

### `--kui-color-danger-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-danger-hover, color-mix(in srgb, var(--kui-color-danger) 90%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:228`

### `--kui-color-gold-3`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-gold-3, color-mix(in srgb, var(--kui-color-gold) 70%, transparent))`
- `var( --kui-color-gold-3, color-mix(in srgb, var(--kui-color-gold) 70%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:428`
- `components/button/styles/index.less:583`
- `components/button/styles/index.less:720`
- `components/tag/styles/index.less:168`

### `--kui-color-gold-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-gold-6, color-mix(in srgb, var(--kui-color-gold) 40%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:429`
- `components/tag/styles/index.less:169`

### `--kui-color-gold-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-gold-9, color-mix(in srgb, var(--kui-color-gold) 10%, transparent) )`

全部源码引用位置：

- `components/tag/styles/index.less:173`

### `--kui-color-green-3`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-green-3, color-mix(in srgb, var(--kui-color-green) 70%, transparent))`
- `var( --kui-color-green-3, color-mix(in srgb, var(--kui-color-green) 70%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:369`
- `components/button/styles/index.less:537`
- `components/button/styles/index.less:699`
- `components/tag/styles/index.less:102`

### `--kui-color-green-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-green-6, color-mix(in srgb, var(--kui-color-green) 40%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:370`
- `components/tag/styles/index.less:103`

### `--kui-color-green-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-green-9, color-mix(in srgb, var(--kui-color-green) 10%, transparent) )`

全部源码引用位置：

- `components/tag/styles/index.less:107`

### `--kui-color-item-selected`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-item-selected, color-mix(in srgb, var(--kui-color-primary) 20%, transparent) )`

全部源码引用位置：

- `components/cascader/styles/index.less:211`
- `components/check-card/styles/index.less:60`
- `components/date-picker/styles/index.less:358`
- `components/menu/styles/index.less:272`
- `components/menu/styles/index.less:289`
- `components/menu/styles/index.less:443`
- `components/menu/styles/index.less:549`
- `components/page/styles/index.less:166`
- `components/select/styles/index.less:342`
- `components/transfer/styles/index.less:72`
- `components/transfer/styles/index.less:88`
- `components/tree/styles/index.less:141`
- `components/tree/styles/index.less:232`
- `components/typography/styles/index.less:59`

### `--kui-color-lime-3`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-lime-3, color-mix(in srgb, var(--kui-color-lime) 70%, transparent))`
- `var( --kui-color-lime-3, color-mix(in srgb, var(--kui-color-lime) 70%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:436`
- `components/button/styles/index.less:590`
- `components/button/styles/index.less:723`
- `components/tag/styles/index.less:180`

### `--kui-color-lime-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-lime-6, color-mix(in srgb, var(--kui-color-lime) 40%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:437`
- `components/tag/styles/index.less:181`

### `--kui-color-lime-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-lime-9, color-mix(in srgb, var(--kui-color-lime) 10%, transparent) )`

全部源码引用位置：

- `components/tag/styles/index.less:185`

### `--kui-color-magenta-3`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-magenta-3, color-mix(in srgb, var(--kui-color-magenta) 70%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:406`
- `components/button/styles/index.less:569`
- `components/button/styles/index.less:726`
- `components/tag/styles/index.less:138`

### `--kui-color-magenta-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-magenta-6, color-mix(in srgb, var(--kui-color-magenta) 40%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:410`
- `components/tag/styles/index.less:142`

### `--kui-color-magenta-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-magenta-9, color-mix(in srgb, var(--kui-color-magenta) 10%, transparent) )`

全部源码引用位置：

- `components/tag/styles/index.less:146`

### `--kui-color-olive-3`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-olive-3, color-mix(in srgb, var(--kui-color-olive) 70%, transparent))`
- `var( --kui-color-olive-3, color-mix(in srgb, var(--kui-color-olive) 70%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:337`
- `components/button/styles/index.less:509`
- `components/button/styles/index.less:696`

### `--kui-color-olive-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-olive-6, color-mix(in srgb, var(--kui-color-olive) 40%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:338`

### `--kui-color-orange-3`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-orange-3, color-mix(in srgb, var(--kui-color-orange) 70%, transparent))`
- `var( --kui-color-orange-3, color-mix(in srgb, var(--kui-color-orange) 70%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:321`
- `components/button/styles/index.less:495`
- `components/button/styles/index.less:690`
- `components/tag/styles/index.less:78`

### `--kui-color-orange-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-orange-6, color-mix(in srgb, var(--kui-color-orange) 40%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:322`
- `components/tag/styles/index.less:79`

### `--kui-color-orange-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-orange-9, color-mix(in srgb, var(--kui-color-orange) 10%, transparent) )`

全部源码引用位置：

- `components/tag/styles/index.less:83`

### `--kui-color-outline`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-outline, color-mix(in srgb, var(--kui-color-primary) 20%, transparent))`
- `var( --kui-color-outline, color-mix(in srgb, var(--kui-color-primary) 20%, transparent) )`

全部源码引用位置：

- `components/back-top/styles/index.less:22`
- `components/button/styles/index.less:35`
- `components/cascader/styles/index.less:22`
- `components/cascader/styles/index.less:113`
- `components/check-card/styles/index.less:28`
- `components/checkbox/styles/index.less:17`
- `components/date-picker/styles/index.less:39`
- `components/date-picker/styles/index.less:166`
- `components/date-picker/styles/index.less:173`
- `components/input/styles/index.less:82`
- `components/input/styles/index.less:151`
- `components/input/styles/index.less:204`
- `components/input/styles/index.less:248`
- `components/input-number/styles/index.less:115`
- `components/input-otp/styles/index.less:43`
- `components/input-tag/styles/index.less:33`
- `components/input-tag/styles/index.less:78`
- `components/menu/styles/index.less:10`
- `components/page/styles/index.less:44`
- `components/radio/styles/index.less:99`
- `components/segmented/styles/index.less:56`
- `components/select/styles/index.less:22`
- `components/select/styles/index.less:516`
- `components/steps/styles/index.less:80`
- `components/switch/styles/index.less:36`
- `components/tabs/styles/index.less:99`
- `components/transfer/styles/index.less:68`
- `components/tree-select/styles/index.less:23`
- `components/tree-select/styles/index.less:425`
- `components/typography/styles/index.less:104`

### `--kui-color-pink-3`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-pink-3, color-mix(in srgb, var(--kui-color-pink) 70%, transparent))`
- `var( --kui-color-pink-3, color-mix(in srgb, var(--kui-color-pink) 70%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:300`
- `components/button/styles/index.less:474`
- `components/button/styles/index.less:735`
- `components/tag/styles/index.less:45`

### `--kui-color-pink-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-pink-6, color-mix(in srgb, var(--kui-color-pink) 40%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:301`
- `components/tag/styles/index.less:46`

### `--kui-color-pink-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-pink-9, color-mix(in srgb, var(--kui-color-pink) 10%, transparent) )`

全部源码引用位置：

- `components/tag/styles/index.less:50`

### `--kui-color-primary-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-primary-6, color-mix(in srgb, var(--kui-color-primary) 40%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:276`

### `--kui-color-primary-8`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-primary-8, color-mix(in srgb, var(--kui-color-primary) 20%, transparent) )`
- `var(--kui-color-primary-8, color-mix(in srgb, var(--kui-color-primary) 20%, transparent))`

全部源码引用位置：

- `components/alert/styles/index.less:77`
- `components/alert/styles/index.less:120`
- `components/alert/styles/index.less:150`
- `src/assets/css/home.less:88`

### `--kui-color-primary-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-primary-9, color-mix(in srgb, var(--kui-color-primary) 10%, transparent))`

全部源码引用位置：

- `components/color-picker/styles/index.less:83`
- `components/spin/styles/index.less:81`

### `--kui-color-primary-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-primary-active, color-mix(in srgb, var(--kui-color-primary) 80%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:114`
- `components/button/styles/index.less:215`

### `--kui-color-primary-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-primary-hover, color-mix(in srgb, var(--kui-color-primary) 90%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:107`
- `components/button/styles/index.less:209`
- `components/color-picker/styles/index.less:23`
- `components/typography/styles/index.less:95`

### `--kui-color-purple-3`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-purple-3, color-mix(in srgb, var(--kui-color-purple) 70%, transparent))`
- `var( --kui-color-purple-3, color-mix(in srgb, var(--kui-color-purple) 70%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:390`
- `components/button/styles/index.less:555`
- `components/button/styles/index.less:732`
- `components/tag/styles/index.less:126`

### `--kui-color-purple-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-purple-6, color-mix(in srgb, var(--kui-color-purple) 40%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:391`
- `components/tag/styles/index.less:127`

### `--kui-color-purple-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-purple-9, color-mix(in srgb, var(--kui-color-purple) 10%, transparent) )`

全部源码引用位置：

- `components/tag/styles/index.less:131`

### `--kui-color-red-3`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-red-3, color-mix(in srgb, var(--kui-color-red) 70%, transparent))`
- `var( --kui-color-red-3, color-mix(in srgb, var(--kui-color-red) 70%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:308`
- `components/button/styles/index.less:481`
- `components/button/styles/index.less:687`
- `components/tag/styles/index.less:57`

### `--kui-color-red-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-red-6, color-mix(in srgb, var(--kui-color-red) 40%, transparent))`

全部源码引用位置：

- `components/button/styles/index.less:309`
- `components/tag/styles/index.less:58`

### `--kui-color-red-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-red-9, color-mix(in srgb, var(--kui-color-red) 10%, transparent) )`

全部源码引用位置：

- `components/tag/styles/index.less:59`

### `--kui-color-row-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-row-hover, color-mix(in srgb, var(--kui-color-bg-component-hover) 40%, var(--kui-color-bg-component)) )`
- `var( --kui-color-row-hover, color-mix( in srgb, var(--kui-color-bg-component-hover) 40%, var(--kui-color-bg-component) ) )`

全部源码引用位置：

- `components/table/styles/index.less:209`
- `components/table/styles/index.less:216`
- `components/table/styles/index.less:230`
- `components/table/styles/index.less:239`
- `components/table/styles/index.less:544`
- `components/table/styles/index.less:551`
- `components/table/styles/index.less:580`
- `components/table/styles/index.less:587`
- `components/tree/styles/index.less:213`

### `--kui-color-success-8`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-success-8, color-mix(in srgb, var(--kui-color-success) 20%, transparent) )`
- `var(--kui-color-success-8, color-mix(in srgb, var(--kui-color-success) 20%, transparent))`

全部源码引用位置：

- `components/alert/styles/index.less:88`
- `components/alert/styles/index.less:140`

### `--kui-color-teal-3`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-teal-3, color-mix(in srgb, var(--kui-color-teal) 70%, transparent))`
- `var( --kui-color-teal-3, color-mix(in srgb, var(--kui-color-teal) 70%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:361`
- `components/button/styles/index.less:530`
- `components/button/styles/index.less:702`

### `--kui-color-teal-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-teal-6, color-mix(in srgb, var(--kui-color-teal) 40%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:362`

### `--kui-color-violet-3`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-violet-3, color-mix(in srgb, var(--kui-color-violet) 70%, transparent))`
- `var( --kui-color-violet-3, color-mix(in srgb, var(--kui-color-violet) 70%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:353`
- `components/button/styles/index.less:523`
- `components/button/styles/index.less:714`

### `--kui-color-violet-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-violet-6, color-mix(in srgb, var(--kui-color-violet) 40%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:354`

### `--kui-color-volcano-3`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-volcano-3, color-mix(in srgb, var(--kui-color-volcano) 70%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:417`
- `components/button/styles/index.less:576`
- `components/button/styles/index.less:708`
- `components/tag/styles/index.less:153`

### `--kui-color-volcano-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-volcano-6, color-mix(in srgb, var(--kui-color-volcano) 40%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:421`
- `components/tag/styles/index.less:157`

### `--kui-color-volcano-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-volcano-9, color-mix(in srgb, var(--kui-color-volcano) 10%, transparent) )`

全部源码引用位置：

- `components/tag/styles/index.less:161`

### `--kui-color-warning-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-warning-6, color-mix(in srgb, var(--kui-color-warning) 40%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:290`

### `--kui-color-warning-8`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-warning-8, color-mix(in srgb, var(--kui-color-warning) 20%, transparent) )`
- `var(--kui-color-warning-8, color-mix(in srgb, var(--kui-color-warning) 20%, transparent))`

全部源码引用位置：

- `components/alert/styles/index.less:98`
- `components/alert/styles/index.less:154`

### `--kui-color-warning-active`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-warning-active, color-mix(in srgb, var(--kui-color-warning) 80%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:253`

### `--kui-color-warning-hover`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-warning-hover, color-mix(in srgb, var(--kui-color-warning) 90%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:247`

### `--kui-color-yellow-3`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-color-yellow-3, color-mix(in srgb, var(--kui-color-yellow) 70%, transparent))`
- `var( --kui-color-yellow-3, color-mix(in srgb, var(--kui-color-yellow) 70%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:313`
- `components/button/styles/index.less:488`
- `components/button/styles/index.less:693`
- `components/tag/styles/index.less:66`

### `--kui-color-yellow-6`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-yellow-6, color-mix(in srgb, var(--kui-color-yellow) 40%, transparent) )`

全部源码引用位置：

- `components/button/styles/index.less:314`
- `components/tag/styles/index.less:67`

### `--kui-color-yellow-9`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-color-yellow-9, color-mix(in srgb, var(--kui-color-yellow) 10%, transparent) )`

全部源码引用位置：

- `components/tag/styles/index.less:71`

### `--kui-component-shadow`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-component-shadow, 0 0 2px color-mix(in srgb, var(--kui-color-primary) 10%, transparent) )`

全部源码引用位置：

- `components/cascader/styles/index.less:27`
- `components/input/styles/index.less:75`
- `components/input/styles/index.less:144`
- `components/input-number/styles/index.less:119`
- `components/input-otp/styles/index.less:38`
- `components/input-tag/styles/index.less:28`
- `components/segmented/styles/index.less:72`
- `components/select/styles/index.less:27`
- `components/tree-select/styles/index.less:28`
- `components/tree-select/styles/index.less:420`

### `--kui-control-bg`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-control-bg, var(--kui-color-bg))`

全部源码引用位置：

- `components/date-picker/styles/index.less:15`
- `components/input/styles/index.less:13`
- `components/input/styles/index.less:136`
- `components/input-number/styles/index.less:11`
- `components/input-otp/styles/index.less:26`
- `components/input-tag/styles/index.less:17`
- `components/steps/styles/index.less:26`
- `components/tree-select/styles/index.less:14`

### `--kui-control-bg-disabled`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-control-bg-disabled, var(--kui-color-bg-component-disabled))`

全部源码引用位置：

- `components/button/styles/index.less:598`
- `components/button/styles/index.less:626`
- `components/cascader/styles/index.less:119`
- `components/check-card/styles/index.less:41`
- `components/check-card/styles/index.less:120`
- `components/date-picker/styles/index.less:255`
- `components/input/styles/index.less:161`
- `components/input/styles/index.less:419`
- `components/input-number/styles/index.less:264`
- `components/input-otp/styles/index.less:49`
- `components/input-tag/styles/index.less:176`
- `components/select/styles/index.less:532`
- `components/tree-select/styles/index.less:441`

### `--kui-control-bg-fill`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-control-bg-fill, var(--kui-color-bg-component-overlay))`

全部源码引用位置：

- `components/button/styles/index.less:193`
- `components/button/styles/index.less:606`
- `components/calendar/styles/index.less:33`
- `components/calendar/styles/index.less:67`
- `components/card/styles/index.less:128`
- `components/cascader/styles/index.less:251`
- `components/check-card/styles/index.less:55`
- `components/checkbox/styles/index.less:125`
- `components/collapse/styles/index.less:108`
- `components/color-picker/styles/index.less:108`
- `components/date-picker/styles/index.less:119`
- `components/feature-card/styles/index.less:129`
- `components/feedback-panel/styles/index.less:107`
- `components/image/styles/index.less:329`
- `components/input/styles/index.less:398`
- `components/input-number/styles/index.less:252`
- `components/input-otp/styles/index.less:58`
- `components/input-tag/styles/index.less:144`
- `components/kanban/styles/index.less:20`
- `components/kanban/styles/index.less:34`
- `components/kanban/styles/index.less:41`
- `components/list-panel/styles/index.less:33`
- `components/page/styles/index.less:153`
- `components/qrcode/styles/index.less:13`
- `components/radio/styles/index.less:162`
- `components/segmented/styles/index.less:11`
- `components/select/styles/index.less:225`
- `components/slider/styles/index.less:76`
- `components/stat-card/styles/index.less:140`
- `components/switch/styles/index.less:13`
- `components/tag/styles/index.less:195`
- `components/transfer/styles/index.less:24`
- `components/tree-select/styles/index.less:226`

### `--kui-control-border`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-control-border, var(--kui-color-border))`

全部源码引用位置：

- `components/back-top/demo/target.vue:19`
- `components/button/styles/index.less:84`
- `components/button/styles/index.less:297`
- `components/card/styles/index.less:110`
- `components/card/styles/index.less:133`
- `components/cascader/styles/index.less:14`
- `components/check-card/styles/index.less:9`
- `components/collapse/styles/index.less:112`
- `components/date-picker/styles/index.less:12`
- `components/date-picker/styles/index.less:207`
- `components/date-picker/styles/index.less:284`
- `components/date-picker/styles/index.less:287`
- `components/date-picker/styles/index.less:443`
- `components/date-picker/styles/index.less:480`
- `components/date-picker/styles/index.less:504`
- `components/date-picker/styles/index.less:505`
- `components/feature-card/styles/index.less:135`
- `components/image/styles/index.less:333`
- `components/input/styles/index.less:11`
- `components/input/styles/index.less:133`
- `components/input/styles/index.less:420`
- `components/input/styles/index.less:451`
- `components/input/styles/index.less:470`
- `components/input/styles/index.less:489`
- `components/input-number/styles/index.less:9`
- `components/input-number/styles/index.less:54`
- `components/input-number/styles/index.less:93`
- `components/input-otp/styles/index.less:23`
- `components/input-tag/styles/index.less:15`
- `components/kanban/styles/index.less:27`
- `components/select/styles/index.less:15`
- `components/stat-card/styles/index.less:125`
- `components/stat-card/styles/index.less:145`
- `components/steps/styles/index.less:24`
- `components/steps/styles/index.less:37`
- `components/tag/styles/index.less:9`
- `components/transfer/styles/index.less:16`
- `components/tree-select/styles/index.less:16`

### `--kui-control-radius`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-control-radius, var(--kui-shape-round, var(--kui-border-radius)))`

全部源码引用位置：

- `components/button/styles/index.less:10`
- `components/cascader/styles/index.less:149`
- `components/cascader/styles/index.less:194`
- `components/date-picker/styles/index.less:14`
- `components/date-picker/styles/index.less:182`
- `components/date-picker/styles/index.less:330`
- `components/date-picker/styles/index.less:408`
- `components/input/styles/index.less:12`
- `components/input/styles/index.less:134`
- `components/input/styles/index.less:435`
- `components/input-number/styles/index.less:10`
- `components/input-otp/styles/index.less:24`
- `components/input-tag/styles/index.less:16`
- `components/list-panel/styles/index.less:30`
- `components/progress/styles/index.less:9`
- `components/progress/styles/index.less:17`
- `components/select/styles/index.less:258`
- `components/select/styles/index.less:310`
- `components/tag/styles/index.less:11`
- `components/tree-select/styles/index.less:259`
- `components/typography/styles/index.less:122`

### `--kui-control-text`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-control-text, var(--kui-color-text))`

全部源码引用位置：

- `components/button/styles/index.less:3`
- `components/button/styles/index.less:684`
- `components/cascader/styles/index.less:8`
- `components/cascader/styles/index.less:188`
- `components/date-picker/styles/index.less:8`
- `components/date-picker/styles/index.less:329`
- `components/date-picker/styles/index.less:380`
- `components/date-picker/styles/index.less:465`
- `components/date-picker/styles/index.less:512`
- `components/input/styles/index.less:9`
- `components/input/styles/index.less:59`
- `components/input/styles/index.less:95`
- `components/input/styles/index.less:135`
- `components/input/styles/index.less:174`
- `components/input/styles/index.less:175`
- `components/input/styles/index.less:176`
- `components/input-number/styles/index.less:7`
- `components/input-number/styles/index.less:103`
- `components/input-number/styles/index.less:166`
- `components/input-otp/styles/index.less:25`
- `components/input-tag/styles/index.less:14`
- `components/input-tag/styles/index.less:43`
- `components/select/styles/index.less:8`
- `components/select/styles/index.less:77`
- `components/select/styles/index.less:190`
- `components/select/styles/index.less:282`
- `components/select/styles/index.less:300`
- `components/select/styles/index.less:453`
- `components/tag/styles/index.less:18`
- `components/tour/styles/index.less:39`
- `components/tree-select/styles/index.less:8`
- `components/tree-select/styles/index.less:77`
- `components/tree-select/styles/index.less:190`
- `components/tree-select/styles/index.less:276`
- `components/tree-select/styles/index.less:358`

### `--kui-popup-bg`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-popup-bg, var(--kui-color-bg-pop))`

全部源码引用位置：

- `components/cascader/styles/index.less:150`
- `components/color-picker/styles/index.less:378`
- `components/color-picker/styles/index.less:384`
- `components/date-picker/styles/index.less:180`
- `components/drawer/styles/index.less:34`
- `components/dropdown/styles/index.less:10`
- `components/dropdown/styles/index.less:35`
- `components/dropdown/styles/index.less:135`
- `components/dropdown/styles/index.less:165`
- `components/image/styles/index.less:87`
- `components/menu/styles/index.less:514`
- `components/message/styles/index.less:33`
- `components/modal/styles/index.less:32`
- `components/modal/styles/index.less:173`
- `components/notice/styles/index.less:31`
- `components/popconfirm/styles/index.less:139`
- `components/popconfirm/styles/index.less:179`
- `components/poptip/styles/index.less:141`
- `components/poptip/styles/index.less:175`
- `components/popup/style.less:11`
- `components/popup/style.less:20`
- `components/select/styles/index.less:262`
- `components/tour/styles/index.less:40`
- `components/tour/styles/index.less:52`
- `components/tree-select/styles/index.less:263`

### `--kui-popup-border`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-popup-border, var(--kui-color-pop-border))`

全部源码引用位置：

- `components/cascader/styles/index.less:151`
- `components/cascader/styles/index.less:175`
- `components/color-picker/styles/index.less:385`
- `components/color-picker/styles/index.less:396`
- `components/date-picker/styles/index.less:186`
- `components/dropdown/styles/index.less:16`
- `components/dropdown/styles/index.less:25`
- `components/dropdown/styles/index.less:30`
- `components/dropdown/styles/index.less:124`
- `components/image/styles/index.less:88`
- `components/menu/styles/index.less:515`
- `components/message/styles/index.less:34`
- `components/modal/styles/index.less:33`
- `components/notice/styles/index.less:32`
- `components/popconfirm/styles/index.less:144`
- `components/popconfirm/styles/index.less:148`
- `components/poptip/styles/index.less:146`
- `components/poptip/styles/index.less:151`
- `components/popup/style.less:12`
- `components/popup/style.less:28`
- `components/select/styles/index.less:263`
- `components/tour/styles/index.less:41`
- `components/tour/styles/index.less:61`
- `components/tree-select/styles/index.less:271`

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

- `components/cascader/styles/index.less:152`
- `components/color-picker/styles/index.less:382`
- `components/date-picker/styles/index.less:181`
- `components/dropdown/styles/index.less:34`
- `components/dropdown/styles/index.less:126`
- `components/image/styles/index.less:89`
- `components/menu/styles/index.less:511`
- `components/message/styles/index.less:31`
- `components/modal/styles/index.less:40`
- `components/notice/styles/index.less:29`
- `components/popconfirm/styles/index.less:140`
- `components/poptip/styles/index.less:142`
- `components/popup/style.less:14`
- `components/select/styles/index.less:265`
- `components/tour/styles/index.less:43`
- `components/tree-select/styles/index.less:265`

### `--kui-scrollbar-width`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-scrollbar-width, 0px)`

全部源码引用位置：

- `components/styles/base.less:39`
- `components/styles/base.less:43`

### `--kui-shape-round`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-shape-round, var(--kui-border-radius))`

全部源码引用位置：

- `components/alert/styles/index.less:160`
- `components/avatar/styles/index.less:61`
- `components/button/styles/index.less:10`
- `components/cascader/styles/index.less:149`
- `components/cascader/styles/index.less:194`
- `components/collapse/styles/index.less:99`
- `components/date-picker/styles/index.less:14`
- `components/date-picker/styles/index.less:182`
- `components/date-picker/styles/index.less:330`
- `components/date-picker/styles/index.less:408`
- `components/descriptions/styles/index.less:124`
- `components/feedback-panel/styles/index.less:98`
- `components/image/styles/index.less:317`
- `components/input/styles/index.less:12`
- `components/input/styles/index.less:134`
- `components/input/styles/index.less:435`
- `components/input-number/styles/index.less:10`
- `components/input-otp/styles/index.less:24`
- `components/input-tag/styles/index.less:16`
- `components/list-panel/styles/index.less:30`
- `components/motion/demo/basic.vue:50`
- `components/page/styles/index.less:311`
- `components/progress/styles/index.less:9`
- `components/progress/styles/index.less:17`
- `components/qrcode/styles/index.less:5`
- `components/qrcode/styles/index.less:60`
- `components/select/styles/index.less:258`
- `components/select/styles/index.less:310`
- `components/table/styles/index.less:597`
- `components/tag/styles/index.less:11`
- `components/tree-select/styles/index.less:259`
- `components/typography/styles/index.less:122`

### `--kui-switch-color`

分类：组件运行时赋值。

赋值相关源码：`components/switch/index.tsx:135`。

引用表达式（去重）：

- `var(--kui-switch-color, var(--kui-color-primary))`
- `var(--kui-switch-color, var(--kui-color-success))`
- `var(--kui-switch-color, var(--kui-color-warning))`
- `var(--kui-switch-color, var(--kui-color-danger))`

全部源码引用位置：

- `components/switch/styles/index.less:144`
- `components/switch/styles/index.less:145`
- `components/switch/styles/index.less:165`
- `components/switch/styles/index.less:166`
- `components/switch/styles/index.less:170`
- `components/switch/styles/index.less:171`
- `components/switch/styles/index.less:175`
- `components/switch/styles/index.less:176`

### `--kui-theme-fill-bg`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var( --kui-theme-fill-bg, var(--kui-control-bg-fill, var(--kui-color-bg-component-overlay)) )`

全部源码引用位置：

- `components/button/styles/index.less:191`
- `components/button/styles/index.less:604`
- `components/calendar/styles/index.less:31`
- `components/calendar/styles/index.less:65`
- `components/card/styles/index.less:126`
- `components/cascader/styles/index.less:249`
- `components/check-card/styles/index.less:53`
- `components/checkbox/styles/index.less:123`
- `components/collapse/styles/index.less:106`
- `components/color-picker/styles/index.less:106`
- `components/date-picker/styles/index.less:117`
- `components/feature-card/styles/index.less:127`
- `components/feedback-panel/styles/index.less:105`
- `components/image/styles/index.less:327`
- `components/input/styles/index.less:396`
- `components/input-number/styles/index.less:250`
- `components/input-otp/styles/index.less:56`
- `components/input-tag/styles/index.less:142`
- `components/kanban/styles/index.less:18`
- `components/kanban/styles/index.less:32`
- `components/kanban/styles/index.less:39`
- `components/list-panel/styles/index.less:31`
- `components/page/styles/index.less:151`
- `components/qrcode/styles/index.less:11`
- `components/radio/styles/index.less:160`
- `components/segmented/styles/index.less:9`
- `components/select/styles/index.less:223`
- `components/slider/styles/index.less:74`
- `components/stat-card/styles/index.less:138`
- `components/switch/styles/index.less:11`
- `components/tag/styles/index.less:193`
- `components/transfer/styles/index.less:22`
- `components/tree-select/styles/index.less:224`

### `--kui-theme-outline-border`

分类：可选覆盖项，无默认声明。

引用表达式（去重）：

- `var(--kui-theme-outline-border, var(--kui-control-border, var(--kui-color-border)))`

全部源码引用位置：

- `components/card/styles/index.less:110`
- `components/card/styles/index.less:133`
- `components/check-card/styles/index.less:9`
- `components/collapse/styles/index.less:112`
- `components/feature-card/styles/index.less:135`
- `components/image/styles/index.less:333`
- `components/kanban/styles/index.less:27`
- `components/stat-card/styles/index.less:125`
- `components/stat-card/styles/index.less:145`
- `components/transfer/styles/index.less:16`
