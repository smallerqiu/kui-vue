## API
| 属性          | 说明                                                             | 类型                      | 默认值 |
| ------------- | ---------------------------------------------------------------- | ------------------------- | ------ |
| percent       | 进度百分比                                                       | Number                    | 0      |
| color         | 进度条颜色                                                       | String                    | -      |
| strokeLinecap | 进度条的样式                                                     | [round \| square \| butt] | round  |
| width         | 圆形进度条画布宽度，单位 px                                      | number                    | -      |
| size          | 值为`small`，展示小尺寸                                          | String                    | -      |
| format        | 自定义进度条文字                                                 | Function \| slot          | -      |
| status        | 进度条状态,提供四种类型: `active`,`exception`,`success`,`normal` | String                    | normal |
| type          | 进度条类型,提供三种类型: `line`,`circle`,`dashboard`             | String                    | -      |
| showInfo      | 是否显示进度文字                                                 | Boolean                   | true   |
| gapDegree     | 仪表盘进度条缺口角度，可取值 0 ~ 295                             | number                    | 75     |
| strokeWidth   | 圆形进度条线的宽度                                               | number                    | 6      |
| strokeHeight        | 进度条线的高度                                                   | number                    | -      |