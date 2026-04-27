# Poptip 气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 何时使用

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

## 代码演示

[基本用法](./demo/basic.vue)

- 最简单的用法，浮层的大小由内容区域决定。

[触发模式](./demo/trigger.vue)

- 通过 `trigger`来控制触发模式, 鼠标移入 `hover`、点击 `click`。

[从浮层内关闭](./demo/closeinside.vue)

- 使用 `v-model` 属性控制浮层显示。

[位置](./demo/placement.vue)

- 通过 `placement`控制方向, 位置有十二个方向。

## API

| 属性      | 说明                                                                                                                                                                       | 类型          | 默认值 |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------ |
| trigger   | 触发方式，可选值为 `hover`（悬停）`click`（点击）                                                                                                                          | String        | click  |
| title     | 显示的标题                                                                                                                                                                 | String        | -      |
| content   | 显示的正文内容                                                                                                                                                             | slots         | -      |
| placement | 提示框出现的位置，可选值为`top`，`top-left`，`top-right`，`bottom`，`bottom-left`，`bottom-right`，`left`，`left-top`，`left-bottom`，`right`，`right-top`，`right-bottom` | String        | top    |
| width     | 展示的宽度,默认为内容区域的大小                                                                                                                                            | String,Number | -      |
| show      | 默认是否展示                                                                                                                                                               | Boolean       | -      |
| onClose   | 关闭时的回调                                                                                                                                                               | Function      | -      |
| dark      | 是否使用暗色主题                                                                                                                                                           | Boolean       | false  |
