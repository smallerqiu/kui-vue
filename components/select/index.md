# Select 选择器

下拉选择器。

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

## 代码演示

[单选](./demo/basic.vue)

- 通过 `v-model` 进行数据双向绑定

[多选](./demo/multiple.vue)

- 通过设置 `multiple` 值来呈现多选模式

[禁用和不可清除](./demo/disabled.vue)

- 通过 `v-model` 进行数据双向绑定

[过滤 和 搜索](./demo/filterable.vue)

- 通过设置 `filterable` 值来呈现过滤模式 > filterable 和 onSearch 不可以同时使用, 搜索的结果会被过滤

[尺寸](./demo/size.vue)

- 通过 `width` 和 `size` 可控制组件尺寸大小

[奇葩的定义](./demo/theme.vue)

- 一些奇奇怪怪的东西

## Select API

| 属性         | 说明                                                       | 类型                                       | 默认值     |
| ------------ | ---------------------------------------------------------- | ------------------------------------------ | ---------- |
| modelValue   | 指定选中项目的 `value` 值，可以使用 `v-model` 双向绑定数据 | string,number                              | -          |
| width        | 组件宽度                                                   | string,number                              | -          |
| placeholder  | 选择框默认文字                                             | string                                     | 请选择     |
| disabled     | 是否禁用当前项                                             | bool                                       | false      |
| size         | 组件尺寸大小,提供`small`,`large`两种尺寸，默认为正常       | string                                     | -          |
| emptyText    | 没有数据时展示的提示                                       | string                                     | '赞无数据' |
| maxTagCount  | 最多展示多少个tag,超出部分以点点点展示                     | number                                     | -          |
| multiple     | 是否呈现多选模式                                           | bool                                       | false      |
| loading      | 是否显示异步加载                                           | bool                                       | false      |
| clearable    | 是否可以清空选项                                           | bool                                       | false      |
| bordered     | 是否显示边框                                               | bool                                       | true       |
| extendWidth  | 下拉框的宽度是否与input一致                                | bool                                       | true       |
| showArrow    | 是否显示下拉按钮                                           | bool                                       | true       |
| options      | options 数据，如果设置则不需要手动构造 Option 节点         | SelectOption[]                             | []         |
| theme        | 主题                                                       | string                                     | fill       |
| icon         | 自定义图标                                                 | string                                     | -          |
| shape        | shape='circle' 时呈现圆角                                  | string                                     | -          |
| onSelect     | 选中一项时触发                                             | (option: SelectOption) => void             | -          |
| onChange     | 在选项状态发生改变时触发,,返回选择的值value                | (value: string \| number \| any[]) => void | -          |
| onSearch     | 搜索时触发                                                 | (e: InputEvent) => void                    | -          |
| onOpenChange | 下拉框展开或收起时触发                                     | (opened: boolean) => void                  | -          |
| onClear      | 点击清除按钮时触发                                         | () => void                                 | -          |

## Option API

| 属性     | 说明                                                                                         | 类型          | 默认值 |
| -------- | -------------------------------------------------------------------------------------------- | ------------- | ------ |
| key      | 和 value 含义一致。如果 Vue 需要你设置此项，此项值与 value 的值相同，然后可以省略 value 设置 | string,number | -      |
| value    | 选项值，默认根据此属性值进行筛选，必填                                                       | string,number | -      |
| label    | 选项显示的内容                                                                               | string,number | -      |
| disabled | 是否禁用当前项                                                                               | bool          | false  |
