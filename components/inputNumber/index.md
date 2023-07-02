## InputNumber API
| 属性           | 说明                                                                 | 类型          | 默认值 |
| -------------- | -------------------------------------------------------------------- | ------------- | ------ |
| min            | 最小值                                                               | number        | 0      |
| max            | 最大值                                                               | number        | 100    |
| step           | 每次改变步数，可以为小数                                             | Number,String | 1      |
| value(v-model) | 当前值                                                               | Number        | -      |
| formatter      | 指定输入框展示值的格式                                               | Function      | -      |
| parser         | 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用           | Function      | -      |
| change         | 变化回调                                                             | Function      | -      |
| size           | 输入框大小                                                           | String        | -      |
| disabled       | 禁用                                                                 | Boolean       | -      |
| precision      | 数值精度                                                             | Number        | -      |
| suffix         | 自定义后缀                                                           | String,slot   | -      |
| prefix         | 前缀内容                                                             | String,slot   | -      |
| controls       | 是否显示增减按钮                                                     | Boolean       | true   |