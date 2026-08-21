# Transfer 穿梭框

在两个列表之间移动和选择数据。

## 代码演示

[基本用法](./demo/basic.vue?show=vertical)

- 选择左侧数据并移动到目标列表。

[搜索与操作文案](./demo/search.vue?show=vertical)

- 可搜索列表内容，也可自定义操作按钮文案。

[主题](./demo/theme.vue?show=vertical)

- 支持 `outline` 和 `fill` 两种主题，搜索框会与穿梭框保持一致。

[禁用状态](./demo/disabled.vue?show=vertical)

- 可禁用单个数据项，也可禁用整个穿梭框。

[自定义内容](./demo/custom.vue?show=vertical)

- 使用插槽自定义数据项和底部内容，也可以自定义搜索规则。

[事件](./demo/events.vue?show=vertical)

- 监听选择和移动事件，实现受控反馈。

[分页加载](./demo/pagination.vue?show=vertical)

- 在 Footer 插槽中组合简洁分页，适合数据量较大的场景。

## API

| 属性         | 说明                             | 类型                                       | 默认值               |
| ------------ | -------------------------------- | ------------------------------------------ | -------------------- |
| modelValue   | 目标列表的 key，可使用 `v-model` | TransferKey[]                              | []                   |
| dataSource   | 数据源                           | TransferItem[]                             | []                   |
| titles       | 两侧标题                         | [string, string]                           | ['Source', 'Target'] |
| operations   | 向右、向左按钮文案               | [string, string]                           | ['', '']             |
| searchable   | 是否可搜索                       | boolean                                    | false                |
| disabled     | 是否禁用                         | boolean                                    | false                |
| theme        | 外观主题                         | outline \| fill                            | outline              |
| filterOption | 自定义搜索方法                   | (keyword, item) => boolean                 | -                    |
| render       | 自定义项目内容                   | (item) => VNodeChild                       | -                    |
| change       | 数据移动时触发                   | (targetKeys, direction, movedKeys) => void | -                    |
| search       | 搜索时触发                       | (direction, value) => void                 | -                    |
| selectChange | 选择状态变化时触发               | (sourceKeys, targetKeys) => void           | -                    |

### TransferItem

| 属性        | 说明         | 类型             | 默认值 |
| ----------- | ------------ | ---------------- | ------ |
| key         | 唯一标识     | string \| number | -      |
| title       | 标题         | string           | -      |
| description | 描述         | string           | -      |
| disabled    | 是否禁用此项 | boolean          | false  |

### Slots

| 名称   | 说明           | 参数                     |
| ------ | -------------- | ------------------------ |
| item   | 自定义数据项   | `{ item: TransferItem }` |
| footer | 自定义列表底部 | `{ direction }`          |
