# Transfer 穿梭框

在两个列表之间移动和选择数据。

## 代码演示

[基本用法](./demo/basic.vue?show=vertical)

- 选择左侧数据并移动到目标列表。

[搜索与操作文案](./demo/search.vue?show=vertical)

- 可搜索列表内容，也可自定义操作按钮文案。

## API

| 属性         | 说明                             | 类型                                       | 默认值               |
| ------------ | -------------------------------- | ------------------------------------------ | -------------------- |
| modelValue   | 目标列表的 key，可使用 `v-model` | TransferKey[]                              | []                   |
| dataSource   | 数据源                           | TransferItem[]                             | []                   |
| titles       | 两侧标题                         | [string, string]                           | ['Source', 'Target'] |
| operations   | 向右、向左按钮文案               | [string, string]                           | ['', '']             |
| searchable   | 是否可搜索                       | boolean                                    | false                |
| disabled     | 是否禁用                         | boolean                                    | false                |
| filterOption | 自定义搜索方法                   | (keyword, item) => boolean                 | -                    |
| render       | 自定义项目内容                   | (item) => VNodeChild                       | -                    |
| change       | 数据移动时触发                   | (targetKeys, direction, movedKeys) => void | -                    |
| search       | 搜索时触发                       | (direction, value) => void                 | -                    |
| selectChange | 选择状态变化时触发               | (sourceKeys, targetKeys) => void           | -                    |
