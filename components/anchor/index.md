# Anchor 锚点

需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

## 代码演示

[嵌套锚点（复杂文档结构）](./demo/nested-anchors.vue)

- 适用于多层级标题的文档。

[指定容器（滚动容器内定位）](./demo/within-container.vue)

- 如果你的页面不是全屏滚动，而是在一个特定的 div 内滚动。

## Anchor API

| 属性      | 说明                                | 类型                | 默认值 |
| --------- | ----------------------------------- | ------------------- | ------ |
| affix     | 固定模式                            | boolean             | true   |
| offsetTop | 距离窗口顶部达到指定偏移量后触发    | number              | -      |
| bounds    | 锚点区域边界                        | number              | 5      |
| container | 指定滚动的容器                      | String, HTMLElement | -      |
| onChange  | 监听锚点链接改变,返回当前聚焦的Link | Function            | -      |
| onClick   | 点击Anchor事件                      | Function            | -      |

## AnchorLink API

| 属性  | 说明     | 类型   | 默认值 |
| ----- | -------- | ------ | ------ |
| href  | 锚点链接 | String | -      |
| title | 文字内容 | String | -      |
