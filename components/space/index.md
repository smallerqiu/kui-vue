# Space 间距

设置组件之间的间距。

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。

## 代码演示

[基本用法](./demo/basic.vue)
- 相邻组件水平间距。

[紧凑布局组合](./demo/compact.vue)
- 使用 compact 让表单组件之间紧凑连接且合并边框。

[Button 紧凑布局](./demo/compactButton.vue)
- Button 组件紧凑排列的示例。

[垂直方向紧凑布局](./demo/compactVertical.vue)
- 垂直方向的紧凑布局，目前仅支持 Button 组合。

[自定义尺寸](./demo/customSize.vue)
- 自定义间距大小。

[间距大小](./demo/size.vue)
- 间距预设大、中、小三种大小。 通过设置 size 为 large middle 分别把间距设为大、中间距。若不设置 size，则间距为小。

[分隔符](./demo/split.vue)
- 相邻组件分隔符。

[垂直间距](./demo/vertical.vue)
- 相邻组件垂直间距。

[设置换行](./demo/wrap.vue)
- 当间距为水平方向时，可使用 wrap 设置是否自动换行，默认情况下为 false。


## Space API

| 属性     | 说明                         | 类型                                  | 默认值 |
| -------- | ---------------------------- | ------------------------------------- | ------ |
| align    | 对齐方式                     | `start` , `end` ,`center` ,`baseline` | center |
| vertical | 是否垂直显示                 | Boolean                               | false  |
| size     | 间距大小                     | `small`,`middle`,`large`,Number       | small  |
| wrap     | 是否换行                     | Boolean                               | false  |
| split    | 设置拆分                     | v-slot                                | -      |
| compact  | 是否使用经凑模式             | Boolean                               | false  |
| block    | 将宽度调整为父元素宽度的选项 | Boolean                               | false  |
