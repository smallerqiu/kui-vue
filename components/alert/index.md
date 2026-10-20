# Alert 警告提示

警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 代码演示

[基本用法](./demo/basic.vue)

- 通过 `type` 来控制展示类型

[图标](./demo/icon.vue)

- `showIcon` 来设置是否显示图标

[可关闭](./demo/close.vue)

- `closable` 来控制是否显示可关闭按钮,关闭时播放退出动画

[自定义图标](./demo/custom-icon.vue)

- `showIcon` 来设置是否显示图标

[外观](./demo/appearance.vue)

- 提示条的颜色由 `type` 决定，`theme` 只决定它显示到什么程度；`solid` 铺的是同一语义色而不是主色，文字、图标和关闭按钮一起反白。

## 关闭

点击关闭按钮时触发 `close`，退出动画结束后移除内容并触发 `afterClose`。

如需在关闭后卸载整个组件，可在 `afterClose` 中更新父级状态，并通过 `v-if` 控制组件。

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 警告类型，可选值为 `success`、`info`、`warning`、`error`，不设置时是 `warning` | `"info" \| "success" \| "warning" \| "error"` | warning |
| message | 警告提示内容 | `string` | - |
| description | 警告提示的辅助性文字介绍 | `string` | - |
| showIcon | 是否显示图标 | `boolean` | true |
| bordered | 是否展示边框 | `boolean` | false |
| closable | 是否显示关闭按钮 | `boolean` | false |
| onClose | 点击关闭按钮时触发 | `(event: MouseEvent) => void` | - |
| onAfterClose | 退出动画结束后触发 | `() => void` | - |
| icon | 自定义的图标 | `IconType[]` | - |
| theme | 外观主题 | `"fill" \| "outline" \| "plain" \| "solid" \| "dashed"` | fill |
| shape | 形状，可选 `round`、`circle`、`square` | `"default" \| "circle" \| "square" \| "round"` | round |

## 主题

`theme` 支持 `fill`、`outline`、`plain`、`solid`、`dashed` 五种外观，不写 `theme` 时就是 `fill`；`underlined` 是给可输入的控件用的，提示条会按 `fill` 呈现。

提示条的颜色由 `type` 决定，`theme` 决定它显示到什么程度：`fill` 是那一色的浅底，`solid` 把同一色铺满并把文字、图标和关闭按钮一起反白，所以 `error` 和 `success` 在 `solid` 下仍是两种颜色，不会一起变成主色。`outline` 和 `plain` 不带底色，描边走库的边框色；`dashed` 只把外框换成虚线。`bordered` 管的是另一件事：把提示条自己的那层浅底挪到边框上。
