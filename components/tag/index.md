# Tag 标签

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## 代码演示

[基本用法](./demo/basic.vue)

- 通过 `closeable` 显示关闭按钮，点击隐藏标签，触发 `close` 回调

[尺寸和形状](./demo/size.vue)

- 通过 `size` 可控尺寸 ,

[图标](./demo/icon.vue)

- 可以设置 icon 属性，或者直接在 Tag 内使用 Icon 组件。

[多彩标签](./demo/color.vue)

- 多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。

[动态添加和删除](./demo/dynamic.vue)

- 通过 `closeable` 显示关闭按钮

## Tag API

| 属性      | 说明                                       | 类型            | 默认值 |
| --------- | ------------------------------------------ | --------------- | ------ |
| closeable | 是否显示关闭按钮                           | Boolean         | false  |
| color     | 标签的颜色                                 | String          | -      |
| icon      | 标签的图标                                 | String          | -      |
| onClose   | 关闭标签的回调事件                         | Function        | -      |
| size      | 按钮尺寸,可选值 `small`、`large`，默认不选 | String          | -      |
| theme     | 组件呈现主题,默认'light'                   | String          | light  |
| shape     | 组件呈现的形状,                            | [circle,square] | circle |
