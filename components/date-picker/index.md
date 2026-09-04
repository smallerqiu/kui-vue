# DatePicker 日期选择框

输入或选择日期的控件。

## 何时使用

当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

## 代码演示

[基本用法](./demo/basic.vue)

- 选择或者手动输入日期,通过 `v-model` 进行数据双向绑定

[输出类型](./demo/value-type.vue)

- 通过 `valueType` 指定输出类型

[时间区域](./demo/range.vue)

- 支持时间日期区间选择。取值建议用 `startDate` , `endDate`

[不可选择日期和时间](./demo/disabled-date.vue)

- 可用 `disabledDate` 和 `disabledTime` 分别禁止选择部分日期和时间.

[禁用和不可编辑](./demo/disabled.vue)

- 选择框的不可用 、 不可编辑, 不可清除 状态。

[预设范围](./demo/presets.vue)

- 可以预设常用的日期范围以提高用户体验。。

[奇葩的主题](./demo/theme.vue)

- 奇奇怪怪的东西

[尺寸](./demo/size.vue)

- 通过 `small` ,`large` 来设置选择框的大小呈现

[多语言](./demo/lang.vue)

- DatePicker 支持多语言。默认英语,依赖 `dayjs`.

## API

| 属性         | 说明                                                                                                                     | 类型                                                                                | 默认值     |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- | ---------- |
| modelValue   | 当前日期或时间值                                                                                                         | DatePickerInput \| DatePickerInput[]                                                | null       |
| startDate    | 范围选择的开始值                                                                                                         | DatePickerInput                                                                     | null       |
| endDate      | 范围选择的结束值                                                                                                         | DatePickerInput                                                                     | null       |
| mode         | 使用 `mode` 属性，可以自定义日期显示类型，提供 `year`、`month`、`date`、`time`、`dateTime`、`dateRange`、`dateTimeRange` | string                                                                              | date       |
| disabled     | 是否禁用组件                                                                                                             | boolean                                                                             | false      |
| readonly     | 是否只读，不可展开、清空或修改                                                                                           | boolean                                                                             | false      |
| size         | 按钮尺寸,可选值 `small`、`large`                                                                                         | string                                                                              | -          |
| clearable    | 是否显示清除图标                                                                                                         | boolean                                                                             | true       |
| editable     | 是否可编辑                                                                                                               | boolean                                                                             | true       |
| placeholder  | 提示语                                                                                                                   | string \| string[]                                                                  | -          |
| disabledDate | 不可选择的日期                                                                                                           | (date: Date) => boolean                                                             | -          |
| disabledTime | 不可选择的时间                                                                                                           | (date: Date) => boolean                                                             | -          |
| format       | 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 [dayjs](http://day.js.org/)                             | string                                                                              | YYYY-MM-DD |
| theme        | theme='fill' 时呈现浅色主题                                                                                              | string                                                                              | -          |
| dateIcon     | 自定义图标                                                                                                               | string                                                                              | -          |
| shape        | 组件呈现的形式                                                                                                           | 'circle' \| 'square'                                                                | -          |
| bordered     | 是否展示边框                                                                                                             | boolean                                                                             | true       |
| placement    | 下拉展示的方位                                                                                                           | string                                                                              | -          |
| valueType    | 输出值类型                                                                                                               | `date \| timestamp \| unix \| string`                                               | string     |
| presets      | 预设日期                                                                                                                 | DatePickerPreset[]                                                                  | -          |
| onChange     | 值改变后的回调                                                                                                           | (date: DatePickerOutput \| DatePickerOutput[], dateStr: string \| string[]) => void | -          |
| onOpenChange | 下拉框展开或收起时触发                                                                                                   | (opened: boolean) => void                                                           | -          |
| onClear      | 点击清除按钮时触发                                                                                                       | () => void                                                                          | -          |
| opened       | 默认是否展示下拉框                                                                                                       | boolean                                                                             | false      |
| panelOnly    | 仅渲染日期选择面板，不显示触发输入框                                                                                     | boolean                                                                             | false      |
