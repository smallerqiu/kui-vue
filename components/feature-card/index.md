# FeatureCard 功能卡片

用于简洁地展示产品特性、功能入口或能力说明。

## 代码演示

[基本用法](./demo/basic.vue?show=vertical)

- 通过 `icon`、`title` 和 `desc` 展示功能信息。

[边框](./demo/bordered.vue?show=vertical)

- 通过 `bordered` 控制是否显示边框。

[尺寸](./demo/size.vue?show=vertical)

- 使用 `size` 同步调整内边距、图标和文字尺寸。

[功能入口](./demo/interactive.vue?show=vertical)

- 组合 `direction="vertical"` 与 `clickable` 创建具有键盘交互能力的功能入口。

[外观](./demo/appearance.vue?show=vertical)

- 与其他表面组件共用 `theme` 外观体系；`solid` 会把图标底板和标题一起铺到主色上。

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 图标，也可通过同名插槽自定义 | `IconType[]` | - |
| title | 标题，也可通过同名插槽自定义 | `string` | - |
| desc | 描述内容，也可通过同名插槽自定义 | `string` | - |
| bordered | 是否显示边框 | `boolean` | false |
| theme | 外观主题 | `"fill" \| "outline" \| "plain" \| "solid" \| "dashed"` | fill |
| shape | 卡片形状 | `"square" \| "round"` | round |
| size | 卡片尺寸 | `"small" \| "medium" \| "large"` | medium |
| direction | 内容排列方向 | `"horizontal" \| "vertical"` | horizontal |
| clickable | 是否可交互；启用键盘及按钮语义 | `boolean` | false |
| disabled | 是否禁用交互 | `boolean` | false |
| color | 图标强调色 | `string` | primary |
| iconBackground | 图标容器背景；未设置时由 `color` 淡化生成，`color` 无法解析（如 `currentColor`、CSS 变量）时改用主题主色淡化 | `string` | 自动 |
| extra | 右侧扩展区域 | VNodeChild | - |

## Events

| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| click | 点击时触发 | `(event: MouseEvent) => void` |

## 主题

`theme` 支持 `fill`、`outline`、`plain`、`solid`、`dashed` 五种外观，不写 `theme` 时就是 `fill`；`underlined` 是给可输入的控件用的，卡片会按 `fill` 呈现。

`solid` 用主色铺满整张卡片，标题、描述一起反白，图标容器换成半透明反白底；`bordered` 与 `theme="outline"` 是同一种描边。
