# Skeleton 骨架屏

在需要等待加载内容的位置提供一个占位图形组合。

## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下。
- 图文信息内容较多的列表/卡片中。
- 只在第一次加载数据的时候使用。
- 可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。

## 代码演示

<code src="./demo/basic.vue">基本用法</code>
<code src="./demo/child.vue">子组件</code>
<code src="./demo/custom.vue">自定义</code>
<code src="./demo/group.vue">组合</code>
<code src="./demo/items.vue">按钮/头像/图像</code>
<code src="./demo/list.vue">列表</code>

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
