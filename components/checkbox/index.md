# Checkbox 多选框

多选框

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 代码演示

[全选](./demo/check-all.vue)

- 全选组合

[可不用 / 可控](./demo/disabled.vue)

- 通过 `disabled` 设置不可用

[多选](./demo/group.vue)

- 可以使用 options 属性来设置选项, 也可以使用子组件来设置选项。

[组合布局](./demo/group-layout.vue)

- 组合布局

## API

| 属性          | 说明                                          | 类型              | 默认值 |
| ------------- | --------------------------------------------- | ----------------- | ------ |
| checked       | 是否选中状态，可以使用 `v-model` 双向绑定数据 | Boolean           | false  |
| label         | 显示的文字                                    | String 、 Number  | -      |
| disabled      | 是否禁用当前项                                | Boolean           | false  |
| indeterminate | 组合辅助选项控制半选状态                      | Boolean           | false  |
| change        | 在选项状态发生改变时回调                      | Function(checked) | -      |
| value         | 组合使用时表示的值                            | String、Number    | -      |
| theme         | 组件呈现主题,默认'light'                      | String            | light  |

## CheckboxGroup API

| 属性      | 说明                                                 | 类型                                              | 默认值     |
| --------- | ---------------------------------------------------- | ------------------------------------------------- | ---------- |
| value     | 用于设置当前选中的值,可以使用 `v-model` 双向绑定数据 | Array                                             | -          |
| disabled  | 是否禁用组件                                         | Boolean                                           | false      |
| change    | 在选项状态发生改变时触发，返回当前选中的项和状态     | Function({label,value,checked})                   | -          |
| direction | 布局方向,可选值 `horizontal`、`vertical`             | Sting                                             | horizontal |
| options   | 可以指定子项 `checkbox`                              | Array <{label:string/number,value:string/number}> | -          |
