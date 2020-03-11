## API
| 属性          | 说明                                                                                                                                                 | 类型           | 默认值   |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------|
| title       | 显示的标题                                                                                                                                              | String,Slots | -     |
| placement   | 提示框出现的位置，可选值为`top`，`top-left`，`top-right`，`bottom`，`bottom-left`，`bottom-right`，`left`，`left-top`，`left-bottom`，`right`，`right-top`，`right-bottom` | String       | top   |
| width       | 展示的宽度,默认为内容区域的大小                                                                                                                                   | String       | -     |
| transfer    | 是否将弹层放置于 `body` 内，在 `Tabs`、带有 `fixed` 的 `Table` 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果                                                                 | Boolean      | true |
| ok-text     | 确定按钮的文字，                                                                                                                                           | String       | 确定    |
| cancel-text | 取消按钮的文字，                                                                                                                                           | String       | 取消    |
| cancel      | 点击取消的回调，                                                                                                                                           | Function     | -     |
| ok          | 点击确定的回调，                                                                                                                                           | Function     | -     |