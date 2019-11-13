#### API
| 属性         | 说明                                | 类型            | 默认值    |
|------------|-----------------------------------|---------------|--------|
| title      | 抽屉标题                              | String        | -      |
| width      | 抽屉宽度                              | Number,String | 520    |
| placement  | 抽屉显示方向，提供 `left` ,`right` 两种展示方式  | String        | right  |
| type       | 抽屉展示形式，提供 `static`, `form` 两种展示模式 | String        | static |
| closable   | 是否显示关闭按钮                          | Boolean       | true   |
| okText     | 确定按钮文字                            | String        | 确定     |
| cancelText | 取消按钮文字                            | String        | 取消     |
| ok         | 点击确定的回调                           | Function      | -      |
| cancel     | 点击取消的回调                           | Function      | -      |
| close      | 抽屉关闭的回调                           | Function      | -      |