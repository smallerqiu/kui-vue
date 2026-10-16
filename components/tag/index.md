# Tag 标签

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## 代码演示

[基本用法](./demo/basic.vue)

- 通过 `closeable` 显示关闭按钮，点击关闭标签并触发 `close` 事件

[尺寸和形状](./demo/size.vue)

- 通过 `size` 可控尺寸 ,

[图标](./demo/icon.vue)

- 可以设置 icon 属性，或者直接在 Tag 内使用 Icon 组件。

[多彩标签](./demo/color.vue)

- 多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。
- 设置了 `color` 时以颜色为准：预设色值和自定义色值都会保留自己的边框与文字颜色，`theme` 只决定没有指定颜色时的表面。

[动态添加和删除](./demo/dynamic.vue)

- 通过 `closeable` 显示关闭按钮

## 主题

`theme` 支持 `fill`、`outline`、`plain`、`solid`、`dashed` 五种外观，不写 `theme` 时就是 `fill`；`underlined` 是给可输入的控件用的，标签会按 `fill` 呈现。

多选控件（`Select`、`TreeSelect`、`InputTag`）会把自身的 `theme` 传给里面的标签，标签跟随控件。

## 关闭

点击关闭按钮时触发 `close`，退出动画结束后移除内容并触发 `afterClose`。

动态列表可在 `afterClose` 中删除数组中的对应项，保留完整的退出动画。

## Tag API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| closeable | 是否显示关闭按钮 | `boolean` | false |
| compact | 是否使用适合嵌入输入控件的紧凑尺寸 | `boolean` | false |
| color | 标签的颜色 | `string` | - |
| icon | 标签的图标 | `IconType[]` | - |
| onClose | 点击关闭按钮时触发 | `() => void` | - |
| onAfterClose | 退出动画结束后触发 | `() => void` | - |
| size | 按钮尺寸,可选值 `small`、`large`，默认不选 | `"small" \| "medium" \| "large"` | - |
| theme | 组件呈现主题 | `"fill" \| "outline" \| "plain" \| "solid" \| "dashed" \| "underlined"` | fill |
| shape | 组件呈现的形状, | `"default" \| "circle" \| "square" \| "round"` | circle |
