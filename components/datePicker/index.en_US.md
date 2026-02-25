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
