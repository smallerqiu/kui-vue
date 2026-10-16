# DatePicker

Control for inputting or selecting a date.

## When to Use

When the user needs to input a date, they can click the standard input box to pop up a date panel for selection.

## Examples

[Basic Usage](./demo/basic.vue)

- Select or manually input a date. Use `v-model` for two-way data binding.
- When the value changes from outside while the panel is open, the input text follows it; only the box being typed in is left alone.
- Picking the already selected date, or submitting the same value again, does not emit another `change`.
- `mode="year"` / `mode="month"` open the year / month panel right away (a `panelOnly` picker included), and those cells work with the keyboard too: Tab to a cell and press `Enter` or Space; the year and month labels in the header switch panels with the same keys.
- The year / month highlight follows the current value: browsing to another year or month only moves what you are looking at, never the selected style.

[Output Type](./demo/value-type.vue)

- Specify the output type via `valueType`.

[Date Range](./demo/range.vue)

- Supports date and time range selection. It's recommended to use `startDate` and `endDate` for values.
- A range with only one end filled in is not a selection: closing the panel with `Escape` or a click outside puts the last committed range back, and the half value is never emitted.
- While the other end is still empty, a time picked in the time columns only writes into the box; it is never emitted as a result.
- When a range controls only one end (`startDate` or `endDate`), the panel keeps that end and the next pick only fills the empty one, so it never overwrites what the parent passed in.

[Disabled Dates and Times](./demo/disabled-date.vue)

- Use `disabledDate` and `disabledTime` to block specific dates and times; both apply to clicking, typing and presets, and `disabledTime` counts in the `time`, `dateTime` and `dateTimeRange` modes.
- `disabledDate` counts in the year / month panels as well: when not a single day inside a whole year or month can be picked, that cell is greyed out, refuses clicks, and Tab skips it.
- A cell that still has a pickable day stays clickable: the value lands on the day you are browsing, or on the first pickable day inside that year / month when the browsed day itself is blocked.
- Browsing to a year / month is only navigation, not a selection, so `disabledDate` never blocks it.

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

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Current date or time value | `DatePickerInput \| DatePickerInput[] \| null` | - |
| value | Initial value, read only on mount. Use modelValue for subsequent updates; modelValue takes precedence when both are provided. | `DatePickerInput \| DatePickerInput[] \| null` | null |
| startDate | Start value for range selection | `DatePickerInput \| null` | null |
| endDate | End value for range selection | `DatePickerInput \| null` | null |
| mode | Use the `mode` property to customize the date display type. Options: `year`, `month`, `date`, `time`, `dateTime`, `dateRange`, `dateTimeRange` | `"time" \| "date" \| "year" \| "month" \| "dateTime" \| "dateRange" \| "dateTimeRange"` | date |
| disabled | Whether the component is disabled | `boolean` | false |
| readonly | Read-only; prevents opening, clearing and changing | `boolean` | false |
| size | Button size, optional values `small`, `large` | `"small" \| "medium" \| "large"` | - |
| clearable | Whether to show the clear icon | `boolean` | true |
| editable | Whether it is editable | `boolean` | true |
| placeholder | Placeholder text | `string \| string[]` | - |
| disabledDate | Disabled dates | `(date: Date) => boolean` | - |
| disabledTime | Disabled times | `(date: Date) => boolean` | - |
| format | Set the date format. A single format only: it drives both parsing and display, array format matching is not supported. Configuration reference http://day.js.org/ | `string` | By `mode`: `year` `YYYY`, `month` `YYYY-MM`, `date` / `dateRange` `YYYY-MM-DD`, `time` `HH:mm:ss`, `dateTime` / `dateTimeRange` `YYYY-MM-DD HH:mm:ss` |
| theme | When theme='fill', presents a fill theme | `"fill" \| "outline" \| "plain" \| "solid" \| "dashed" \| "underlined"` | - |
| dateIcon | Custom icon | `IconType[]` | - |
| shape | The form in which the component is presented | `"default" \| "circle" \| "square" \| "round"` | - |
| bordered | Whether to display the border | `boolean` | true |
| placement | Direction displayed when pulled down | `"top" \| "top-left" \| "top-right" \| "bottom" \| "bottom-left" \| "bottom-right"` | - |
| destroyOnClose | Whether to destroy panel content after closing. Destroyed by default (remounted on reopen); set false to keep form state at the cost of one hidden DOM node per opened instance | `boolean` | true |
| valueType | Output value type | `"string" \| "date" \| "timestamp" \| "unix"` | string |
| presets | Preset dates | `DatePickerPreset[]` | - |
| onChange | Callback after the value changes | `(value: DatePickerOutput \| DatePickerOutput[], text: string \| string[]) => void` | - |
| onOpenChange | Triggered when the dropdown box expands or collapses | `(open: boolean) => void` | - |
| onClear | Triggered when the clear button is clicked | `() => void` | - |
| opened | Whether the dropdown box is shown, supports `v-model:opened` | `boolean` | false |
| panelOnly | Render only the date panel without the trigger input | `boolean` | false |
