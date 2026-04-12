# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 代码演示

[事件](./demo/event.vue)
- 本示例测试组件事件是否正常触发

[输入框组合](./demo/group.vue)
- 使用 InputGroup 让组件之间紧凑连接且合并边框。默认 true

[带图标](./demo/icon.vue)
- 通过设置 `icon` 属性，可设置输入框图标，只对 `input` 有效。可以快速的实现 ，密码显示隐藏，搜索

[尺寸](./demo/size.vue)
- `large` 为大尺寸， `small` 为小尺寸

[扩展, 前缀和后缀](./demo/suffix.vue)
- suffix，prefix 扩展

[文本域](./demo/textarea.vue)
- 通过设置 `rows` 来控制行数

[主题](./demo/theme.vue)
- 使用 `theme` 设定主题 ,`shape` 呈现圆角


## Input API

| 属性                | 说明                                       | 类型             | 默认值 |
| ------------------- | ------------------------------------------ | ---------------- | ------ |
| value               | 绑定的值，可使用 `v-model` 双向绑定        | String 、 Number | -      |
| size                | 按钮尺寸,可选值 `small`、`large`，默认不选 | String           | -      |
| icon                | 输入框图标                                 | String           | -      |
| suffix              | 扩展后缀                                   | String,Slot      | -      |
| prefix              | 扩展前缀                                   | String,Slot      | -      |
| search              | 搜索事件的回调                             | Function         | right  |
| theme               | theme='light' 时呈现浅色主题               | String           | right  |
| clearable           | 是否显示清除按钮                           | Boolean          | false  |
| visiblePassword     | 密码出事化明文显示                         | Boolean          | false  |
| visiblePasswordIcon | 是否显示切换按钮或者控制密码显隐           | Boolean          | true   |

## Input Group API

| 属性    | 说明                                           | 类型    | 默认值 |
| ------- | ---------------------------------------------- | ------- | ------ |
| block   | 是否继承父集宽度                               | Boolean | false  |
| compact | 是否使用紧促模式                               | Boolean | false  |
| size    | 子组件的间距,可选值 `small`、`large`，默认不选 | String  | -      |
