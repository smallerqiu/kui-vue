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

- DatePicker supports multiple languages,Default English, depending on `dayjs`.

## API

| Property     | Description                                                                                                                                            | Type                                                        | Default    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- | ---------- |
| modelValue   | Default time value                                                                                                                                     | any                                                         | -          |
| startDate    | Start time (value)                                                                                                                                     | any                                                         | -          |
| endDate      | End time (value)                                                                                                                                       | any                                                         | -          |
| mode         | Use the `mode` property to customize the date display type. Options: `year`, `month`, `date`, `time`, `dateTime`, `dateRange`, `dateTimeRange`         | string                                                      | date       |
| disabled     | Whether the component is disabled                                                                                                                      | bool                                                        | false      |
| size         | Button size, optional values `small`, `large`                                                                                                          | string                                                      | -          |
| clearable    | Whether to show the clear icon                                                                                                                         | bool                                                        | true       |
| editable     | Whether it is editable                                                                                                                                 | bool                                                        | true       |
| placeholder  | Placeholder text                                                                                                                                       | string, string[]                                            | -          |
| disabledDate | Disabled dates                                                                                                                                         | (date: Date) => boolean                                     | -          |
| disabledTime | Disabled times                                                                                                                                         | (date: Date) => boolean                                     | -          |
| format       | Set the date format. When an array, supports multiple format matches, displayed according to the first one. Configuration reference http://day.js.org/ | string                                                      | YYYY-MM-DD |
| onChange     | Callback after the default value changes                                                                                                               | (date: Date \| Date[], dateStr: string \| string[]) => void | -          |
| theme        | When theme='fill', presents a fill theme                                                                                                               | string                                                      | -          |
| dateIcon     | Custom icon                                                                                                                                            | string                                                      | -          |
| shape        | The form in which the component is presented                                                                                                           | [circle,square]                                             | -          |
| bordered     | Whether to display the border                                                                                                                          | bool                                                        | false      |
| placement    | Direction displayed when pulled down                                                                                                                   | string                                                      | -          |
| valueType    | The default type of the output value                                                                                                                   | ["date" ,"timestamp" , "unix" , "string"]                   | -          |
| presets      | preset date                                                                                                                                            | DatePickerPresetsType[]                                     | -          |
