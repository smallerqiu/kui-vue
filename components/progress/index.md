# Progress 进度条

展示操作的当前进度。

## 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；
- 当需要显示一个操作完成的百分比时。

## 代码演示

<code src="./demo/circle.vue">进度圈</code>
<code src="./demo/color.vue">颜色和格式</code>
<code src="./demo/dashboard.vue">盘仪表进度条</code>
<code src="./demo/dynamic.vue">动态展示</code>
<code src="./demo/size.vue">尺寸</code>

## API

| 属性          | 说明                                                             | 类型                      | 默认值 |
| ------------- | ---------------------------------------------------------------- | ------------------------- | ------ |
| percent       | 进度百分比                                                       | Number                    | 0      |
| color         | 进度条颜色                                                       | String                    | -      |
| strokeLinecap | 进度条的样式                                                     | [round \| square \| butt] | round  |
| width         | 圆形进度条画布宽度，单位 px                                      | Number                    | -      |
| size          | 值为`small`，展示小尺寸                                          | String                    | -      |
| format        | 自定义进度条文字                                                 | Function \| slot          | -      |
| status        | 进度条状态,提供四种类型: `active`,`exception`,`success`,`normal` | String                    | normal |
| type          | 进度条类型,提供三种类型: `line`,`circle`,`dashboard`             | String                    | -      |
| showInfo      | 是否显示进度文字                                                 | Boolean                   | true   |
| gapDegree     | 仪表盘进度条缺口角度，可取值 0 ~ 295                             | Number                    | 75     |
| strokeWidth   | 圆形进度条线的宽度                                               | Number                    | 6      |
| strokeHeight  | 进度条线的高度                                                   | Number                    | -      |
