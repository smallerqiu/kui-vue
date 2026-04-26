# InputNumber 数字输入框

通过鼠标或键盘，输入范围内的数值。

## 何时使用

当需要获取标准数值时。

## 代码演示

[基本用法](./demo/basic.vue)

- 基本用法 ,使用 keyboard 属性可以控制键盘行为。

[高精度小数/格式化展示](./demo/format.vue)

- 通过 formatter 格式化数字，以展示具有具体含义的数据，往往需要配合 parser 一起使用。

[扩展, 前缀和后缀](./demo/ffix.vue)

- suffix，prefix 扩展

[尺寸](./demo/size.vue)

- `large` 为大尺寸， `small` 为小尺寸

## InputNumber API

| 属性           | 说明                                                       | 类型          | 默认值    |
| -------------- | ---------------------------------------------------------- | ------------- | --------- |
| min            | 最小值                                                     | Number        | -Infinity |
| max            | 最大值                                                     | Number        | Infinity  |
| step           | 每次改变步数，可以为小数                                   | Number,String | 1         |
| value(v-model) | 当前值                                                     | Number        | -         |
| formatter      | 指定输入框展示值的格式                                     | Function      | -         |
| parser         | 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 | Function      | -         |
| onChange         | 变化回调                                                   | Function      | -         |
| size           | 输入框大小                                                 | String        | -         |
| disabled       | 禁用                                                       | Boolean       | -         |
| precision      | 数值精度                                                   | Number        | -         |
| suffix         | 自定义后缀                                                 | String,slot   | -         |
| prefix         | 前缀内容                                                   | String,slot   | -         |
| controls       | 是否显示增减按钮                                           | Boolean       | true      |
| clearable      | 是否显示清除按钮                                           | Boolean       | false     |
| theme          | 组件呈现主题,默认'light'                                   | String        | light     |
