# InputTag 标签输入

将连续输入整理成可增删的标签集合。

## 代码演示

[基础用法](./demo/basic.vue)

- 回车创建标签，退格删除最后一项。

[受控标签](./demo/controlled.vue)

- 使用 v-model 管理标签集合。

[数量限制](./demo/limit.vue)

- 使用 max 限制最多可输入的标签数。

[分隔符](./demo/separators.vue)

- 使用逗号或分号快速提交标签。

[外观与禁用](./demo/appearance.vue)

- 展示尺寸、主题、形状和禁用状态。

## InputTag API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 标签值（v-model） | string[] | - |
| defaultValue | 初始标签 | string[] | [] |
| placeholder | 占位文本 | string | - |
| size | 尺寸 | small\|medium\|large | medium |
| theme | 主题 | fill\|outline\|plain | fill |
| shape | 形状 | circle\|square\|round\|default | default |
| disabled | 禁用 | boolean | false |
| allowDuplicates | 允许重复 | boolean | false |
| max | 最大标签数 | number | - |
| separators | 提交按键 | string[] | [','] |
| onChange | 标签变化 | function | - |
| onAdd | 新增标签 | function | - |
| onRemove | 删除标签 | function | - |
