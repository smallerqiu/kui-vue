## API
| 属性        | 说明                                                                                                                                                 | 类型            | 默认值   |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------|---------------|-------|
| trigger   | 触发方式，可选值为 `hover`（悬停）`click`（点击）                                                                                                                   | String        | click |
| title     | 显示的标题                                                                                                                                              | String        | -     |
| content   | 显示的正文内容                                                                                                                                            | slots         | -     |
| placement | 提示框出现的位置，可选值为`top`，`top-left`，`top-right`，`bottom`，`bottom-left`，`bottom-right`，`left`，`left-top`，`left-bottom`，`right`，`right-top`，`right-bottom` | String        | top   |
| width     | 展示的宽度,默认为内容区域的大小                                                                                                                                   | String,Number | -     |
| transfer  | 是否将弹层放置于 `body` 内，在 `Tabs`、带有 `fixed` 的 `Table` 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果                                                                 | Boolean       | true  |
