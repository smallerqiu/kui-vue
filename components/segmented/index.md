# Segmented 分段控制器

用于在一组互斥选项间快速切换。

## 代码演示

[基本用法](./demo/basic.vue)

- 通过 `v-model` 控制当前选项。

[尺寸与布局](./demo/options.vue)

- 支持尺寸、通栏、垂直布局和禁用选项。

[带图标的选项](./demo/icon.vue)

- 通过 `options[].icon` 为选项添加图标。

[自定义标签](./demo/label.vue)

- 使用 `label` 作用域插槽自定义选项内容，可获取当前 `option` 和 `selected` 状态。

## API

| 属性       | 说明                                          | 类型                     | 默认值     |
| ---------- | --------------------------------------------- | ------------------------ | ---------- |
| modelValue | 当前选中值                                    | string \| number         | -          |
| options    | 选项数据                                      | SegmentedOption[]        | []         |
| disabled   | 是否禁用                                      | boolean                  | false      |
| readonly   | 是否只读                                      | boolean                  | false      |
| block      | 是否撑满父容器                                | boolean                  | false      |
| direction  | 排列方向                                      | `horizontal \| vertical` | horizontal |
| size       | 尺寸                                          | SizeType                 | medium     |
| shape      | 形状                                          | ShapeType                | round      |
| label      | 自定义选项内容，参数为 `{ option, selected }` | VNodeChild               | -          |

## Events

| 事件名 | 说明             | 回调参数                            |
| ------ | ---------------- | ----------------------------------- |
| change | 选中值改变时触发 | `(value: string \| number) => void` |

### SegmentedOption

| 属性     | 说明     | 类型             | 默认值 |
| -------- | -------- | ---------------- | ------ |
| label    | 选项内容 | VNodeChild       | -      |
| value    | 选项值   | string \| number | -      |
| icon     | 选项图标 | IconType[]       | -      |
| disabled | 是否禁用 | boolean          | false  |
