# Popconfirm 气泡确认框

点击元素，弹出气泡式的确认框。

## 何时使用

目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。

和 ‘confirm’ 弹出的全屏居中模态对话框相比，交互形式更轻量。

## 代码演示

[国际化](./demo/local.vue)
- 使用 `okText` 和 `cancelText` 自定义按钮文字。

[位置](./demo/placement.vue)
- 通过 `placement`控制方向, 位置有十二个方向。


## API

| 属性        | 说明                                                                                                                                                                       | 类型         | 默认值 |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------ |
| title       | 显示的标题                                                                                                                                                                 | String,Slots | -      |
| placement   | 提示框出现的位置，可选值为`top`，`top-left`，`top-right`，`bottom`，`bottom-left`，`bottom-right`，`left`，`left-top`，`left-bottom`，`right`，`right-top`，`right-bottom` | String       | top    |
| width       | 展示的宽度,默认为内容区域的大小                                                                                                                                            | String       | -      |
| ok-text     | 确定按钮的文字，                                                                                                                                                           | String       | 确定   |
| cancel-text | 取消按钮的文字，                                                                                                                                                           | String       | 取消   |
| cancel      | 点击取消的回调，                                                                                                                                                           | Function     | -      |
| ok          | 点击确定的回调，                                                                                                                                                           | Function     | -      |
