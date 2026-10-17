# Transfer 穿梭框

在两个列表之间移动和选择数据。

## 代码演示

[基本用法](./demo/basic.vue?show=vertical)

- 选择左侧数据并移动到目标列表。

[搜索与操作文案](./demo/search.vue?show=vertical)

- 可搜索列表内容，也可自定义操作按钮文案。

[主题](./demo/theme.vue?show=vertical)

- 支持 `outline`、`fill`、`plain`、`solid`、`dashed` 五种主题；`solid` 下列表里的搜索框会保留一层浅底。

[禁用状态](./demo/disabled.vue?show=vertical)

- 可禁用单个数据项，也可禁用整个穿梭框。

[自定义内容](./demo/custom.vue?show=vertical)

- 使用插槽自定义数据项和底部内容，也可以自定义搜索规则。

[事件](./demo/events.vue?show=vertical)

- 监听选择和移动事件，实现受控反馈。

[分页加载](./demo/pagination.vue?show=vertical)

- 在 Footer 插槽中组合简洁分页，适合数据量较大的场景。

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 目标列表的 key，可使用 `v-model` | `TransferKey[]` | - |
| value | 初始值，仅初始化时读取；后续更新使用 modelValue，同时传入时 modelValue 优先。 | `TransferKey[]` | [] |
| dataSource | 数据源 | `TransferItem[]` | [] |
| titles | 两侧标题 | `[string, string]` | ['Source', 'Target'] |
| operations | 向右、向左按钮文案 | `[string, string]` | ['', ''] |
| searchable | 是否可搜索 | `boolean` | false |
| disabled | 是否禁用 | `boolean` | false |
| readonly | 是否只读，可搜索但不可选择或移动 | `boolean` | false |
| theme | 外观主题 | `"fill" \| "outline" \| "plain" \| "solid" \| "dashed" \| "underlined"` | outline |
| filterOption | 自定义搜索方法 | `((keyword: string, item: TransferItem) => boolean)` | - |
| render | 自定义项目内容 | `((item: TransferItem) => VNodeChild)` | - |
| item | 自定义数据项，作用域参数为 `{ item: TransferItem }` | VNodeChild | - |
| change | 数据移动时触发 | `(targetKeys: TransferKey[], direction: "left" \| "right", movedKeys: TransferKey[]) => void` | - |
| search | 搜索时触发 | `(direction: "left" \| "right", value: string) => void` | - |
| selectChange | 选择状态变化时触发 | `(sourceKeys: TransferKey[], targetKeys: TransferKey[]) => void` | - |
| footer | 自定义列表底部，作用域参数为 `{ direction }` | VNodeChild | - |

### TransferItem

| 属性        | 说明         | 类型             | 默认值 |
| ----------- | ------------ | ---------------- | ------ |
| key         | 唯一标识     | string \| number | -      |
| title       | 标题         | string           | -      |
| description | 描述         | string           | -      |
| disabled    | 是否禁用此项 | boolean          | false  |

## 主题

`theme` 支持 `outline`、`fill`、`plain`、`solid`、`dashed` 五种外观，不写 `theme` 时就是 `outline`；`underlined` 是给可输入的控件用的，穿梭框会按 `outline` 呈现。

外观落在两侧的列表上，不是整块穿梭框：`fill` 给列表铺一层浅底，`outline` 只描一条库的边框色，`plain` 既不铺底也不描边，`dashed` 把那一圈换成虚线。`solid` 用主色铺满两块列表，列表标题、条目里的描述和底部内容一起反白，选中的条目也改用主色上的一层浅白；列表本身禁用时，这些文字回到库的禁用色。中间那两个移动按钮是按钮自己的样子，五种外观都不改它们；列表里的搜索框跟着这一档走，只有 `solid` 把它压回 `fill` 的一层浅底——主色描在主色上看不见。
