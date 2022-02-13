## API
| 属性         | 说明                                                                                               | 类型                | 默认值     |
| ------------ | -------------------------------------------------------------------------------------------------- | ------------------- | ---------- |
| value        | 默认时间值                                                                                         | Date, Array, String | -          |
| mode         | 使用 `mode` 属性，可以自定义日期显示类型，提供 `year` `month` `date` `range`。                     | String              | date       |
| disabled     | 是否禁用组件                                                                                       | Boolen              | false      |
| size         | 按钮尺寸,可选值 `small`、`large`，默认不选                                                         | String              | -          |
| pickerSize   | 值Ï为`small`时日期呈现小尺寸                                                                       | String              | -          |
| clearable    | 是否显示清除图标                                                                                   | Boolean             | true       |
| placeholder  | 提示语                                                                                             | String, Array       | -          |
| transfer     | 默认渲染到body 上，如定位有问题，请尝试修改为 false                                                | Boolean             | true       |
| disabledDate | 不可选择的日期                                                                                     | Function            | -          |
| disabledTime | 不可选择的时间                                                                                     | Function            | -          |
| format       | 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 [moment.js](http://momentjs.com/) | String              | YYYY-MM-DD |
| change       | 默认值改变之后的回调，返回当前选择的时间，字符串                                                   | Function            | -          |
| theme        | theme='light' 时呈现浅色主题                                                                       | String              | -          |
| dateIcon     | 自定义图标                                                                                         | String              | -          |
| shape        | shape='circle' 时呈现圆角                                                                          | String              | -          |