# VirtualList 虚拟列表

只渲染视口附近的数据，用于优化大数据列表的渲染性能。

## 代码演示

[基本用法](./demo/basic.vue?show=vertical)

- 渲染一万条固定高度数据，并保留少量缓冲项。

## 在组件中的应用

[在 Select 中应用](../select/demo/virtual.vue)

- Select 在大量选项场景中使用虚拟滚动，并保留键盘操作能力。

[在 Table 中应用](../table/demo/virtual.vue)

- Table 配合固定表头、横向滚动、斑马纹和固定列使用虚拟滚动。

[在 Tree 中应用](../tree/demo/virtual.vue?show=vertical)

- Tree 仅渲染当前视口附近的可见节点。

[在 TreeSelect 中应用](../tree-select/demo/virtual.vue)

- TreeSelect 在下拉树中使用虚拟滚动，适合大数据量选择场景。

## API

| 属性       | 说明                         | 类型                                        | 默认值 |
| ---------- | ---------------------------- | ------------------------------------------- | ------ |
| data       | 列表数据                     | unknown[]                                   | []     |
| height     | 可视区域高度                 | number \| string                            | 300    |
| itemHeight | 每一项的固定高度             | number                                      | 32     |
| overscan   | 视口上下额外渲染的项目数量   | number                                      | 5      |
| itemKey    | 唯一标识字段或获取唯一值方法 | string \| (item, index) => string \| number | -      |

## Slots

| 名称    | 说明       | 参数            |
| ------- | ---------- | --------------- |
| default | 自定义项目 | { item, index } |

## Methods

| 名称          | 说明             | 参数            |
| ------------- | ---------------- | --------------- |
| scrollToIndex | 滚动到指定数据项 | (index, align?) |
