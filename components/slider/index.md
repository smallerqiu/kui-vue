## Slider API
| 属性           | 说明                                                                       | 类型                                            | 默认值 |
| -------------- | -------------------------------------------------------------------------- | ----------------------------------------------- | ------ |
| value          | 设置当前取值                                                               | Number,Array                                    | 0      |
| min            | 最小值                                                                     | Number                                          | 0      |
| max            | 最大值                                                                     | Number                                          | 100    |
| range          | 是否支持两边同时可滑动                                                     | Boolean                                         | false  |
| disabled       | 滑块是否禁用                                                               | Boolean                                         | false  |
| step           | 间距大小                                                                   | 步长，取值必须大于 0，并且可被 (max - min) 整除 | 1      |
| change         | 当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入。 | Function                                        | -      |
| afterChange    | 与 onmouseup 触发时机一致，把当前值作为参数传入                            | Function                                        | -      |
| tipFormatter   | 设置Tooltip的展示格式，默认显示当前选值                                    | Function, null                                  | -      |
| vertical       | 是否设置方向为垂直                                                         | Boolean                                         | false  |
| marks          | 刻度，key 的类型必须为 number 且取值在闭区间 [min, max] 内                 | Object                                          | -      |
| included       | marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列       | Boolean                                         | true   |
| tooltipVisible | 值为true时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时。     | Boolean                                         | false  |