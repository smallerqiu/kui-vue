# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 代码演示

[基本用法](./demo/basic.vue)

- 使用 `v-model` 进行数据双向绑定

[主题](./demo/theme.vue)

- 使用 `theme` 设定主题 ,`shape` 呈现圆角

[带图标](./demo/icon.vue)

- 通过设置 `icon` 属性，可设置输入框图标，只对 `input` 有效。可以快速的实现 ，密码显示隐藏，搜索

[扩展, 前缀和后缀](./demo/suffix.vue?show=vertical)

- suffix，prefix 扩展

[输入框组合](./demo/group.vue?show=vertical)

- 使用 InputGroup 让组件之间紧凑连接且合并边框。默认 true

[尺寸](./demo/size.vue)

- `large` 为大尺寸， `small` 为小尺寸

[事件](./demo/event.vue)

- 本示例测试组件事件是否正常触发

[文本域](./demo/textarea.vue)

- 通过设置 `rows` 来控制行数

## Input API

| 属性                | 说明                                       | 类型                             | 默认值 |
| ------------------- | ------------------------------------------ | -------------------------------- | ------ |
| modelValue          | 绑定的值，可使用 `v-model` 双向绑定        | string \| number                 | -      |
| value               | 非受控输入框的初始值                       | unknown                          | -      |
| type                | 原生输入类型                               | 'text' \| 'password' \| 'hidden' | text   |
| inputType           | 内部输入元素类型，通常保持为 input         | string                           | input  |
| disabled            | 是否禁用输入框                             | boolean                          | false  |
| readonly            | 是否只读，可聚焦和复制但不可修改           | boolean                          | false  |
| shape               | 输入框形状                                 | ShapeType                        | -      |
| size                | 按钮尺寸,可选值 `small`、`large`，默认不选 | string                           | -      |
| icon                | 输入框图标                                 | string                           | -      |
| suffix              | 输入框内部后缀                             | string \| VNodeChild             | -      |
| prefix              | 输入框内部前缀                             | string \| VNodeChild             | -      |
| theme               | 主题                                       | string                           | fill   |
| clearable           | 有值且悬停时显示清除按钮                   | boolean                          | true   |
| visiblePasswordIcon | 是否显示切换按钮或者控制密码显隐           | boolean                          | true   |
| onSearch            | 搜索事件的回调                             | (value: string) => void          | -      |
| onIconClick         | 图标点击事件的回调                         | (e: Event) => void               | -      |
| onClear             | 按下清除按钮的回调                         | () => void                       | -      |
| onChange            | 输入框内容变化时的回调                     | (value: string) => void          | -      |

## TextArea API

| 属性        | 说明                                | 类型                         | 默认值 |
| ----------- | ----------------------------------- | ---------------------------- | ------ |
| modelValue  | 绑定的值，可使用 `v-model` 双向绑定 | string \| number \| string[] | -      |
| value       | 非受控文本域的初始值                | string \| number \| string[] | -      |
| rows        | 文本域可见行数                      | number                       | 2      |
| placeholder | 输入提示文字                        | string                       | -      |
| disabled    | 是否禁用文本域                      | boolean                      | false  |
| readonly    | 是否只读                            | boolean                      | false  |
| theme       | 文本域主题                          | ThemeType                    | fill   |
| size        | 文本域尺寸                          | SizeType                     | -      |
| shape       | 文本域形状                          | ShapeType                    | -      |
| onChange    | 内容变化时触发                      | (value: string) => void      | -      |

## Input Group API

| 属性    | 说明                                           | 类型    | 默认值 |
| ------- | ---------------------------------------------- | ------- | ------ |
| block   | 是否继承父集宽度                               | boolean | false  |
| compact | 是否使用紧凑模式                               | boolean | true   |
| size    | 子组件的间距,可选值 `small`、`large`，默认不选 | string  | -      |
