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

## API

| 属性           | 说明                                        | 类型                     | 默认值     |
| -------------- | ------------------------------------------- | ------------------------ | ---------- |
| icon           | 图标                                        | IconType                 | -          |
| title          | 标题                                        | string                   | -          |
| desc           | 描述内容                                    | string                   | -          |
| bordered       | 是否显示边框                                | boolean                  | false      |
| theme          | 外观主题                                    | ThemeType                | fill       |
| shape          | 卡片形状                                    | ShapeType                | round      |
| size           | 卡片尺寸                                    | SizeType                 | medium     |
| direction      | 内容排列方向                                | `horizontal \| vertical` | horizontal |
| clickable      | 是否可交互；启用键盘及按钮语义              | boolean                  | false      |
| disabled       | 是否禁用交互                                | boolean                  | false      |
| color          | 图标强调色                                  | string                   | primary    |
| iconBackground | 图标容器背景；未设置时根据 `color` 自动生成 | string                   | 自动       |

## Events

| 事件名 | 说明       | 回调参数                      |
| ------ | ---------- | ----------------------------- |
| click  | 点击时触发 | `(event: MouseEvent) => void` |

## Slots

| 名称    | 说明         |
| ------- | ------------ |
| icon    | 自定义图标   |
| title   | 自定义标题   |
| desc    | 自定义描述   |
| extra   | 右侧扩展区域 |
| default | 补充内容     |
