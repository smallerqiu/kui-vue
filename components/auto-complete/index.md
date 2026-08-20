# AutoComplete 自动完成

根据输入内容提供候选项，同时保留自由输入能力。

## 代码演示

[基础用法](./demo/basic.vue)

- 支持自由输入、过滤和键盘选择。

[受控值](./demo/controlled.vue)

- 使用 v-model 管理输入内容并从外部修改。

[自定义过滤](./demo/filter.vue)

- 使用 filterOption 定义候选项匹配规则。

[尺寸、主题与形状](./demo/appearance.vue)

- 展示不同 size、theme 和 shape 组合。

[空输入时展示](./demo/show-on-empty.vue)

- 默认空输入聚焦时不展开，设置 `showOnEmpty` 后可展示全部建议。

[远程搜索](./demo/remote.vue)

- 监听 `search` 从远程获取建议，并通过 `loading` 展示加载状态。

## AutoComplete API

| 属性         | 说明                     | 类型                           | 默认值  |
| ------------ | ------------------------ | ------------------------------ | ------- |
| modelValue   | 输入值（v-model）        | string                         | -       |
| value        | 初始值                   | string                         | ''      |
| options      | 候选项                   | (string\|AutoCompleteOption)[] | []      |
| open         | 展开状态                 | boolean                        | false   |
| defaultOpen  | 初始展开状态             | boolean                        | false   |
| showOnEmpty  | 空输入聚焦时展示建议     | boolean                        | false   |
| clearable    | 有值且悬停时显示清除按钮 | boolean                        | false   |
| disabled     | 禁用                     | boolean                        | false   |
| loading      | 是否正在加载             | boolean                        | false   |
| loadingText  | 加载提示文字             | string                         | 加载中  |
| placeholder  | 占位文本                 | string                         | -       |
| size         | 尺寸                     | small\|medium\|large           | medium  |
| theme        | 主题                     | fill\|outline\|plain           | fill    |
| shape        | 形状                     | circle\|square\|round\|default | default |
| filterOption | 过滤方式                 | boolean\|function              | true    |
| onChange     | 输入变化                 | function                       | -       |
| onClear      | 点击清除按钮             | () => void                     | -       |
| onSearch     | 搜索时触发               | (value: string) => void        | -       |
| onSelect     | 选择候选项               | function                       | -       |
| onOpenChange | 展开状态变化             | function                       | -       |
