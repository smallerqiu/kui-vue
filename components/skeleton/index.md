# Skeleton 骨架屏

在需要等待加载内容的位置提供一个占位图形组合。

## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下。
- 图文信息内容较多的列表/卡片中。
- 只在第一次加载数据的时候使用。
- 可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。

## 代码演示

[基本用法](./demo/basic.vue)
- 最简单的占位效果。

[子组件](./demo/child.vue)
- 加载占位图包含子组件。

[自定义](./demo/custom.vue)
- 自定义效果。

[组合](./demo/group.vue)
- 可以配置骨架屏段落数量，以便更接近真实渲染效果。首行会被渲染一个长度 35% 的段首。

[按钮/头像/图像](./demo/items.vue)
- 骨架按钮、头像、和图像。

[列表](./demo/list.vue)
- 在列表组件中使用加载占位符。


## API

| 属性     | 说明                                         | 类型                | 默认值 |
| -------- | -------------------------------------------- | ------------------- | ------ |
| animated | 是否展示动画效果                             | Boolean             | false  |
| avatar   | 是否显示头像占位图                           | Boolean,AvatarProps | false  |
| loading  | 为 true 时，显示占位图。反之则直接展示子组件 | Boolean             | -      |
| rows     | 设置段落占位图的行数                         | Number              | 3      |
| width    | 设置标题占位图的宽度                         | Number(%)           | 35     |
| delay    | 防抖(动画延迟关闭)                           | Number(毫秒)        | 500    |

## Avatar Props

| 属性     | 说明                                         | 类型                                | 默认值 |
| -------- | -------------------------------------------- | ----------------------------------- | ------ |
| animated | 是否展示动画效果                             | Boolean                             | false  |
| radius   | 指定图片的圆角大小                           | Number                              | -      |
| shape    | 指定头像的形状                               | circle \| square                    | false  |
| loading  | 为 true 时，显示占位图。反之则直接展示子组件 | Boolean                             | -      |
| size     | 设置头像占位图的大小                         | number \| large \| small \| default | -      |

## Button Props

| 属性     | 说明                                         | 类型                       | 默认值 |
| -------- | -------------------------------------------- | -------------------------- | ------ |
| animated | 是否展示动画效果                             | Boolean                    | false  |
| loading  | 为 true 时，显示占位图。反之则直接展示子组件 | Boolean                    | -      |
| shape    | 指定头像的形状                               | circle \| round \| default | -      |
| size     | 设置按钮的大小                               | large \| small \| default  | -      |
| block    | 将按钮宽度调整为其父宽度的选项               | Boolean                    | -      |
| width    | 按钮宽度                                     | Number                     | -      |

## Text Props

| 属性     | 说明                                         | 类型                      | 默认值 |
| -------- | -------------------------------------------- | ------------------------- | ------ |
| animated | 是否展示动画效果                             | Boolean                   | false  |
| loading  | 为 true 时，显示占位图。反之则直接展示子组件 | Boolean                   | -      |
| size     | 设置文本的大小                               | large \| small \| default | -      |
| width    | 文本宽度                                     | Number                    | -      |

## Image Props

| 属性     | 说明                                         | 类型          | 默认值 |
| -------- | -------------------------------------------- | ------------- | ------ |
| animated | 是否展示动画效果                             | Boolean       | false  |
| loading  | 为 true 时，显示占位图。反之则直接展示子组件 | Boolean       | -      |
| radius   | 指定图片的圆角大小                           | Number        | -      |
| size     | 图片的宽(高)度                               | Number\|Array | -      |
