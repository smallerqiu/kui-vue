# Radio 单选框

单选框。

## 何时使用

- 用于在多个备选项中选中单个状态。
- 传说中的二选一。

## 代码演示

<code src="./demo/disabled.vue">可不用 / 可控</code>
<code src="./demo/group.vue">多选</code>
<code src="./demo/radioButton.vue">组合Button使用</code>
<code src="./demo/vertical.vue">组合布局</code>

## Radio API

| 属性       | 说明                     | 类型                            | 默认值 |
| ---------- | ------------------------ | ------------------------------- | ------ |
| modelValue | 是否选中状态(v-model)    | Boolean                         | false  |
| checked    | 是否选中状态             | Boolean                         | false  |
| label      | 文字提示                 | String 、 Number                | -      |
| disabled   | 是否禁用当前项           | Boolean                         | false  |
| change     | 在选项状态发生改变时回调 | Function({value,label,checked}) | -      |

## RadioGroup API

| 属性      | 说明                                                                       | 类型                                              | 默认值     |
| --------- | -------------------------------------------------------------------------- | ------------------------------------------------- | ---------- |
| value     | 用于设置当前选中的值。可以使用 `v-model` 双向绑定数据                      | Any                                               | -          |
| size      | 按钮尺寸,可选值 `small`、`large`，默认不选                                 | Sting                                             | -          |
| direction | 布局方向,可选值 `horizontal`、`vertical`                                   | Sting                                             | horizontal |
| shape     | `button` 的 shape 属性 ，显示圆角                                          | String                                            | -          |
| theme     | `button` 的 theme 属性                                                     | String                                            | -          |
| change    | 在选项状态发生改变时触发，返回当前选中的项                                 | Function(value)                                   | -          |
| options   | 可以指定子项 `radio`                                                       | Array <{label:string/number,value:string/number}> | -          |
| type      | 如果使用 `options` 来渲染子集，并且子集为 `button`，需要指定 `type=button` | String                                            | -          |
