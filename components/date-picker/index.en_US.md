# DatePicker

Control for inputting or selecting a date.

## When to Use

When the user needs to input a date, they can click the standard input box to pop up a date panel for selection.

## Examples

[Basic Usage](./demo/basic.vue)

- Select or manually input a date. Use `v-model` for two-way data binding.

[Output Type](./demo/value-type.vue)

- Specify the output type via `valueType`.

[Date Range](./demo/range.vue)

- Supports date and time range selection. It's recommended to use `startDate` and `endDate` for values.

[Disabled Dates and Times](./demo/disabled-date.vue)

- Use `disabledDate` and `disabledTime` to disable selecting specific dates and times, respectively.

[Disabled and Non-editable](./demo/disabled.vue)

- The disabled, non-editable, and non-clearable states of the picker.

[Preset Ranges](./demo/presets.vue)

- You can preset common date ranges to improve user experience.

[Weird Theme](./demo/theme.vue)

- Strange things.

[Size](./demo/size.vue)

- Use `small` and `large` to set the size of the picker.

[Multi-language](./demo/lang.vue)

- DatePicker supports multiple languages, depending on `dayjs`.

## API

| Property     | Description                                                                                                                                            | Type                                | Default    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ---------- |
| modelValue   | Default time value                                                                                                                                     | Date, Array, Object, String, Number | -          |
| startDate    | Start time (value)                                                                                                                                     | Date, Array, Object, String, Number | -          |
| endDate      | End time (value)                                                                                                                                       | Date, Array, Object, String, Number | -          |
| mode         | Use the `mode` property to customize the date display type. Options: `year`, `month`, `date`, `time`, `dateTime`, `dateRange`, `dateTimeRange`         | String                              | date       |
| disabled     | Whether the component is disabled                                                                                                                      | Boolean                             | false      |
| size         | Button size, optional values `small`, `large`                                                                                                          | String                              | -          |
| clearable    | Whether to show the clear icon                                                                                                                         | Boolean                             | true       |
| editable     | Whether it is editable                                                                                                                                 | Boolean                             | true       |
| placeholder  | Placeholder text                                                                                                                                       | String, Array                       | -          |
| disabledDate | Disabled dates                                                                                                                                         | Function                            | -          |
| disabledTime | Disabled times                                                                                                                                         | Function                            | -          |
| format       | Set the date format. When an array, supports multiple format matches, displayed according to the first one. Configuration reference http://day.js.org/ | String                              | YYYY-MM-DD |
| change       | Callback after the default value changes                                                                                                               | Function(dayjs, dateString)         | -          |
| theme        | When theme='light', presents a light theme                                                                                                             | String                              | -          |
| dateIcon     | Custom icon                                                                                                                                            | String                              | -          |
| shape        | When shape='circle', presents rounded corners                                                                                                          | String                              | -          |
