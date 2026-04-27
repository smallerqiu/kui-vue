# Tooltip 文字提示

简单的文字提示气泡框。

## 何时使用

鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 `title` 提示，提供一个`按钮/文字/操作`的文案解释。

## 代码演示

[基本用法](./demo/basic.vue)

- 最简单的用法，浮层的大小由内容区域决定。

[位置](./demo/placement.vue)

- 通过 `placement`控制方向, 位置有十二个方向。

[多彩文字提示](./demo/color.vue)

- 多种预设色彩的文字提示样式，用作不同场景使用。

## API

| 属性      | 说明                                                                                                                                                                       | 类型         | 默认值 |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------ |
| title     | 显示的标题                                                                                                                                                                 | String,Slots | -      |
| color     | 背景颜色                                                                                                                                                                   | String       | -      |
| placement | 提示框出现的位置，可选值为`top`，`top-left`，`top-right`，`bottom`，`bottom-left`，`bottom-right`，`left`，`left-top`，`left-bottom`，`right`，`right-top`，`right-bottom` | String       | top    |
| width     | 展示的宽度,默认为内容区域的大小                                                                                                                                            | String       | -      |
| disabled  | 禁用状态                                                                                                                                                                   | Boolean      | -      |
| show      | 初始化时是否展示                                                                                                                                                           | Boolean      | -      |
