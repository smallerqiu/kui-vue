# Anchor 锚点

需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

## 代码演示

[基础用法（侧边栏目录）](./demo/basic.vue?show=vertical)

- 最常见的场景：右侧显示长文章，左侧或右侧固定锚点导航。

[嵌套锚点（复杂文档结构）](./demo/nested-anchors.vue?show=vertical)

- 适用于多层级标题的文档。

[指定容器（滚动容器内定位）](./demo/within-container.vue?show=vertical)

- 如果你的页面不是全屏滚动，而是在一个特定的 div 内滚动。

## Anchor API

| 属性      | 说明                                 | 类型                            | 默认值 |
| --------- | ------------------------------------ | ------------------------------- | ------ |
| affix     | 是否使用 sticky 固定模式             | boolean                         | true   |
| offsetTop | 固定位置及锚点判定距离容器顶部的偏移 | number                          | 0      |
| bounds    | 锚点激活区域边界                     | number                          | 5      |
| container | 指定滚动容器                         | string \| HTMLElement \| Window | window |
| change    | 当前激活锚点改变时触发               | (link: string) => void          | -      |
| click     | 点击锚点时触发                       | (link: string) => void          | -      |

## AnchorLink API

| 属性  | 说明                             | 类型                 | 默认值 |
| ----- | -------------------------------- | -------------------- | ------ |
| href  | 锚点链接                         | string               | -      |
| title | 文字内容，也可通过同名插槽自定义 | string \| VNodeChild | -      |
