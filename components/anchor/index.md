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
