# Calendar 日历

按月展示日期和日程数据，支持日期选择及自定义日期、事件内容。

## 代码演示

[基本用法](./demo/basic.vue?show=vertical)

- 使用 `events` 展示日程，选择日期并响应事件点击。

[自定义内容](./demo/custom.vue?show=vertical)

- 使用 `event`、`more` 和 `extra` 插槽定制日程及工具栏。

[国际化](./demo/locale.vue?show=vertical)

- Calendar 与 DatePicker 共用 `ConfigProvider` 的语言配置，也可通过属性局部覆盖。

## API

| 属性           | 说明                        | 类型                  | 默认值 |
| -------------- | --------------------------- | --------------------- | ------ |
| modelValue     | 选中日期，格式 `YYYY-MM-DD` | string                | -      |
| events         | 日程数据                    | `CalendarEventData[]` | `[]`   |
| firstDayOfWeek | 每周起始日，0 为周日        | number                | 根据语言 |
| maxEvents      | 单日最多展示的事件数        | number                | 3      |
| showToolbar    | 是否展示工具栏              | boolean               | true   |
| todayText      | 今日按钮文字                | string                | 根据语言 |
| weekdays       | 星期名称，按周日至周六排列  | `string[]`            | 根据语言 |

Calendar 与 DatePicker 不共享内部状态，但会读取同一个 `ConfigProvider locale`。DatePicker 负责选择日期或时间，Calendar 负责按月展示日期与日程，二者可以组合使用。

### CalendarEventData

| 字段  | 说明                        | 类型             | 必填 |
| ----- | --------------------------- | ---------------- | ---- |
| key   | 日程唯一标识                | string \| number | 是   |
| date  | 日程日期，格式 `YYYY-MM-DD` | string           | 是   |
| title | 日程标题                    | string           | 是   |
| time  | 时间文本                    | string           | 否   |
| color | 日程标识色                  | string           | 否   |

## Events

| 事件名            | 说明                               | 回调参数                                                     |
| ----------------- | ---------------------------------- | ------------------------------------------------------------ |
| update:modelValue | 选中日期变化时触发，用于 `v-model` | `(date: string) => void`                                     |
| change            | 选择日期或点击“今天”时触发         | `(date: string, cell: CalendarDateCell) => void`             |
| monthChange       | 切换展示月份时触发                 | `(value: { year: number; month: number }) => void`           |
| eventClick        | 点击日程时触发                     | `(event: CalendarEventData, cell: CalendarDateCell) => void` |

## Slots

| 名称     | 说明                 | 作用域参数                                             |
| -------- | -------------------- | ------------------------------------------------------ |
| title    | 自定义月份标题       | `{ year: number, month: number }`                      |
| extra    | 工具栏右侧扩展内容   | -                                                      |
| dateCell | 自定义日期单元格标题 | `CalendarDateCell`                                     |
| event    | 自定义日程内容       | `{ event: CalendarEventData, cell: CalendarDateCell }` |
| more     | 自定义超出数量提示   | `{ count: number, cell: CalendarDateCell }`            |
