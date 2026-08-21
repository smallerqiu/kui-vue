# CheckCard 卡片选择器

使用标题、描述和可选图标呈现更丰富的选择项。

## 何时使用

- 单独使用时表示一个可选中、可取消的布尔状态，例如同意协议。
- 使用 `CheckCardGroup` 在多个卡片中进行单选，例如选择账号或套餐类型。

## 代码演示

[独立选择](./demo/basic.vue?show=vertical)

- 独立使用时支持选中和取消选中。

[单选组](./demo/group.vue?show=vertical)

- 卡片组默认使用单选语义，并支持方向键切换。

[自定义 Symbol](./demo/custom.vue?show=vertical)

- 使用 `symbol` 插槽根据选中状态展示自定义内容。

[外观与禁用](./demo/appearance.vue?show=vertical)

- 支持主题、尺寸、形状和禁用状态。

## CheckCard API

| 属性          | 说明                                 | 类型                           | 默认值  |
| ------------- | ------------------------------------ | ------------------------------ | ------- |
| modelValue    | 独立使用时的选中状态，可用 `v-model` | boolean                        | false   |
| value         | 在 Group 中使用的选项值              | string \| number               | -       |
| title         | 标题                                 | string \| number               | -       |
| description   | 描述                                 | string                         | -       |
| symbol        | 未选中或通用 Symbol 图标             | IconType[]                     | -       |
| checkedSymbol | 选中时的 Symbol 图标                 | IconType[]                     | -       |
| showIndicator | 是否显示右上角选中标记               | boolean                        | true    |
| disabled      | 是否禁用                             | boolean                        | false   |
| theme         | 外观主题                             | `outline` \| `fill`            | outline |
| size          | 尺寸                                 | `small` \| `medium` \| `large` | medium  |
| shape         | 形状                                 | ShapeType                      | round   |
| change        | 选择状态变化时触发                   | (event) => void                | -       |

## CheckCardGroup API

| 属性       | 说明                       | 类型                           | 默认值     |
| ---------- | -------------------------- | ------------------------------ | ---------- |
| modelValue | 当前选项值，可用 `v-model` | string \| number               | -          |
| options    | 卡片选项                   | CheckCardOption[]              | -          |
| disabled   | 是否禁用整个卡片组         | boolean                        | false      |
| direction  | 排列方向                   | `horizontal` \| `vertical`     | horizontal |
| theme      | 卡片主题                   | `outline` \| `fill`            | outline    |
| size       | 卡片尺寸                   | `small` \| `medium` \| `large` | medium     |
| shape      | 卡片形状                   | ShapeType                      | round      |
| change     | 当前选择变化时触发         | (value) => void                | -          |

## CheckCard Slots

| 名称        | 说明             | 参数          |
| ----------- | ---------------- | ------------- |
| default     | 标题描述后的内容 | `{ checked }` |
| title       | 自定义标题       | `{ checked }` |
| description | 自定义描述       | `{ checked }` |
| symbol      | 自定义 Symbol    | `{ checked }` |

## CheckCardGroup Slots

| 名称    | 说明             |
| ------- | ---------------- |
| default | 自定义 CheckCard |
