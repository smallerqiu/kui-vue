# Calendar

A monthly calendar for dates and events.

## Demos

[Basic](./demo/basic.vue?show=vertical)

- Display events, select a date and handle event clicks.

[Custom content](./demo/custom.vue?show=vertical)

- Customize events, overflow content and the toolbar with slots.

[Locale](./demo/locale.vue?show=vertical)

- Calendar and DatePicker read the same ConfigProvider locale while allowing local overrides.

## API

| Property       | Description                            | Type                  | Default |
| -------------- | -------------------------------------- | --------------------- | ------- |
| modelValue     | Selected date in `YYYY-MM-DD` format   | string                | -       |
| events         | Calendar events                        | `CalendarEventData[]` | `[]`    |
| firstDayOfWeek | First weekday, where 0 is Sunday       | number                | locale  |
| maxEvents      | Maximum visible events per day         | number                | 3       |
| showToolbar    | Show the calendar toolbar              | boolean               | true    |
| todayText      | Today button text                      | string                | locale  |
| weekdays       | Labels ordered from Sunday to Saturday | `string[]`            | locale  |

Calendar and DatePicker do not share internal state, but both read the same `ConfigProvider locale`. DatePicker selects dates or times; Calendar presents a month and its events, so they can be used together.

When a date cell is focused, use the arrow keys to move, `Home` or `End` to move within the current week, and `Enter` or Space to select. Selecting a date from an adjacent month also changes the displayed month.

### CalendarEventData

| Field | Description                       | Type             | Required |
| ----- | --------------------------------- | ---------------- | -------- |
| key   | Unique event key                  | string \| number | yes      |
| date  | Event date in `YYYY-MM-DD` format | string           | yes      |
| title | Event title                       | string           | yes      |
| time  | Time text                         | string           | no       |
| color | Event indicator color             | string           | no       |

## Events

| Event             | Description                                         | Callback                                                     |
| ----------------- | --------------------------------------------------- | ------------------------------------------------------------ |
| update:modelValue | Emitted when the selected date changes              | `(date: string) => void`                                     |
| change            | Emitted when a date or the Today button is selected | `(date: string, cell: CalendarDateCell) => void`             |
| monthChange       | Emitted when the displayed month changes            | `(value: { year: number; month: number }) => void`           |
| eventClick        | Emitted when an event is clicked                    | `(event: CalendarEventData, cell: CalendarDateCell) => void` |

## Slots

| Name     | Description               | Scope                                                  |
| -------- | ------------------------- | ------------------------------------------------------ |
| title    | Custom month title        | `{ year: number, month: number }`                      |
| extra    | Extra toolbar content     | -                                                      |
| dateCell | Custom date-cell heading  | `CalendarDateCell`                                     |
| event    | Custom event content      | `{ event: CalendarEventData, cell: CalendarDateCell }` |
| more     | Custom overflow indicator | `{ count: number, cell: CalendarDateCell }`            |
