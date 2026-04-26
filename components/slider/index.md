# Slider 滑动输入条

滑动型输入器，展示当前值和可选范围。

## 何时使用

当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。

## 代码演示

[基本用法](./demo/basic.vue)

- 基本用法

[尺寸/自定义](./demo/size.vue)

- size 可以控制操作杆的大小

[受控](./demo/with-number.vue)

- 受控和 Input 同步。

[自定义提示](./demo/formatter.vue)

- 使用 tipFormatter 可以设置 Tooltip 的显示的格式。 当 tooltipVisible 为 true 时，将始终显示 ToolTip；反之则始终不显示，即使在拖动、移入时也是如此。

[带标签的](./demo/marks.vue?show=vertical)

- 使用 marks 属性标注滑块的刻度，使用 value 指定滑块位置。

[垂直](./demo/vertical.vue?show=vertical)

- 垂直方向的 Slider。

[反向](./demo/reverse.vue?show=vertical)

- 设置 `reverse` 可以将滑动条置反。

## Slider API

| 属性           | 说明                                                                       | 类型            | 默认值 |
| -------------- | -------------------------------------------------------------------------- | --------------- | ------ |
| modelValue     | 设置当前取值(v-model)                                                      | Number,Array    | 0      |
| min            | 最小值                                                                     | Number          | 0      |
| max            | 最大值                                                                     | Number          | 100    |
| range          | 是否支持两边同时可滑动                                                     | Boolean         | false  |
| disabled       | 滑块是否禁用                                                               | Boolean         | false  |
| step           | 间距大小 , 步长，取值必须大于 0，并且可被 (max - min) 整除                 | Number          | 1      |
| onChange       | 当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入。 | Function(value) | -      |
| tipFormatter   | 设置Tooltip的展示格式，默认显示当前选值                                    | Function, null  | -      |
| vertical       | 是否设置方向为垂直                                                         | Boolean         | false  |
| marks          | 刻度，key 的类型必须为 number 且取值在闭区间 [min, max] 内                 | Object          | -      |
| included       | marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列       | Boolean         | true   |
| tooltipVisible | 值为true时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时。     | Boolean         | false  |
| reverse        | 是否倒序排列                                                               | Boolean         | false  |
| size           | 组件显示的尺寸大小                                                         | String          | -      |
