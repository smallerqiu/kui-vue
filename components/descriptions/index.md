# Descriptions 描述列表

成组展示多个只读字段。

## 何时使用

常见于详情页的信息展示。

## 代码演示

<code src="./demo/bordered.vue">带边框的</code>
<code src="./demo/size.vue">自定义尺寸</code>
<code src="./demo/vertical.vue">垂直</code>
<code src="./demo/verticalBordered.vue">垂直带边框</code>

## API

| 属性     | 说明                                      | 类型                       | 默认值     |
| -------- | ----------------------------------------- | -------------------------- | ---------- |
| bordered | 是否展示边框                              | Boolean                    | false      |
| column   | 一行的 DescriptionItems 数量              | Number                     | 3          |
| extra    | 描述列表的操作区域，显示在右上方          | String,slot                | -          |
| layout   | 描述布局                                  | horizontal \| vertical     | horizontal |
| size     | 设置列表的大小。可以设置为 middle 、small | default \| middle \| small | default    |
| title    | 描述列表的标题，显示在最顶部              | String,slot                | -          |

## Item props

| 属性  | 说明       | 类型           | 默认值 |
| ----- | ---------- | -------------- | ------ |
| label | 内容的描述 | String \| slot | -      |
