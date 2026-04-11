# Poptip 气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 何时使用

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

## 代码演示

<code src="./demo/closeinside.vue">从浮层内关闭</code>
<code src="./demo/placement.vue">位置</code>
<code src="./demo/trigger.vue">触发模式</code>

## API

| 属性      | 说明                                                                                                                                                                       | 类型          | 默认值 |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------ |
| trigger   | 触发方式，可选值为 `hover`（悬停）`click`（点击）                                                                                                                          | String        | click  |
| title     | 显示的标题                                                                                                                                                                 | String        | -      |
| content   | 显示的正文内容                                                                                                                                                             | slots         | -      |
| placement | 提示框出现的位置，可选值为`top`，`top-left`，`top-right`，`bottom`，`bottom-left`，`bottom-right`，`left`，`left-top`，`left-bottom`，`right`，`right-top`，`right-bottom` | String        | top    |
| width     | 展示的宽度,默认为内容区域的大小                                                                                                                                            | String,Number | -      |
| show      | 是否展示                                                                                                                                                                   | Boolean       | -      |
