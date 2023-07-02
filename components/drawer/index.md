## API
| 属性         | 说明                                                               | 类型          | 默认值 |
| ------------ | ------------------------------------------------------------------ | ------------- | ------ |
| title        | 抽屉标题,为null或false时不显示标题                                 | String        | -      |
| width        | 抽屉宽度 `placement`为 `left` 或 `right` 时使用,支持百分比         | Number,String | 520    |
| height       | 抽屉高度 `placement`为 `top` 或 `bottom` 时使用,支持百分比         | Number,String | 256    |
| placement    | 抽屉显示方向，提供 `left` , `top` , `right` , `bottom` 4种展示方式 | String        | right  |
| footer       | 页脚内容，不显示页脚设置`footer=null`即可                          | slot          | true   |
| closable     | 是否显示关闭按钮                                                   | Boolean       | true   |
| target       | 展示的父元素                                                       | Function      | -      |
| mas-closable | 点击蒙层是否允许关闭                                               | Boolean       | true   |
| okText       | 确定按钮文字                                                       | String        | 确定   |
| cancelText   | 取消按钮文字                                                       | String        | 取消   |
| ok           | 点击确定的回调                                                     | Function      | -      |
| cancel       | 点击取消的回调                                                     | Function      | -      |
| close        | 抽屉关闭的回调                                                     | Function      | -      |