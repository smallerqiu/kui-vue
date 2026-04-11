# DatePicker 日期选择框

输入或选择日期的控件。

## 何时使用

当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

## 代码演示

<code src="./demo/disabled.vue">禁用和不可编辑</code>
<code src="./demo/disabledDate.vue">不可选择日期和时间</code>
<code src="./demo/lang.vue">多语言</code>
<code src="./demo/presets.vue">预设范围</code>
<code src="./demo/range.vue">时间区域</code>
<code src="./demo/size.vue">尺寸</code>
<code src="./demo/theme.vue">奇葩的主题</code>
<code src="./demo/valueType.vue">输出类型</code>

## API

| 属性         | 说明                                                                                                               | 类型                              | 默认值     |
| ------------ | ------------------------------------------------------------------------------------------------------------------ | --------------------------------- | ---------- |
| modelValue   | 默认时间值                                                                                                         | Date, Array,Object, String,Number | -          |
| startDate    | 开始时间 (取值)                                                                                                    | Date, Array,Object, String,Number | -          |
| endDate      | 结束时间 (取值)                                                                                                    | Date, Array,Object, String,Number | -          |
| mode         | 使用 `mode` 属性，可以自定义日期显示类型，提供 `year`,`month`,`date`,`time`,`dateTime`,`dateRange`,`dateTimeRange` | String                            | date       |
| disabled     | 是否禁用组件                                                                                                       | Boolean                           | false      |
| size         | 按钮尺寸,可选值 `small`、`large`                                                                                   | String                            | -          |
| clearable    | 是否显示清除图标                                                                                                   | Boolean                           | true       |
| editable     | 是否可编辑                                                                                                         | Boolean                           | true       |
| placeholder  | 提示语                                                                                                             | String, Array                     | -          |
| disabledDate | 不可选择的日期                                                                                                     | Function                          | -          |
| disabledTime | 不可选择的时间                                                                                                     | Function                          | -          |
| format       | 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 [dayjs](http://day.js.org/)                       | String                            | YYYY-MM-DD |
| change       | 默认值改变之后的回调                                                                                               | Function(dayjs,dateString)        | -          |
| theme        | theme='light' 时呈现浅色主题                                                                                       | String                            | -          |
| dateIcon     | 自定义图标                                                                                                         | String                            | -          |
| shape        | shape='circle' 时呈现圆角                                                                                          | String                            | -          |
