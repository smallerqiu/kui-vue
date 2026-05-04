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

| 属性                | 说明                                       | 类型                    | 默认值 |
| ------------------- | ------------------------------------------ | ----------------------- | ------ |
| value               | 绑定的值，可使用 `v-model` 双向绑定        | string 、 number        | -      |
| size                | 按钮尺寸,可选值 `small`、`large`，默认不选 | string                  | -      |
| icon                | 输入框图标                                 | string                  | -      |
| suffix              | 扩展后缀                                   | string,Slot             | -      |
| prefix              | 扩展前缀                                   | string,Slot             | -      |
| theme               | 主题                                       | string                  | fill   |
| clearable           | 是否显示清除按钮                           | bool                    | false  |
| visiblePassword     | 密码出事化明文显示                         | bool                    | false  |
| visiblePasswordIcon | 是否显示切换按钮或者控制密码显隐           | bool                    | true   |
| onSearch            | 搜索事件的回调                             | (value: string) => void | -      |
| onIconClick         | 图标点击事件的回调                         | (e: Event) => void      | -      |

## Input Group API

| 属性    | 说明                                           | 类型   | 默认值 |
| ------- | ---------------------------------------------- | ------ | ------ |
| block   | 是否继承父集宽度                               | bool   | false  |
| compact | 是否使用紧促模式                               | bool   | false  |
| size    | 子组件的间距,可选值 `small`、`large`，默认不选 | string | -      |
