# InputOTP 验证码输入框

用于输入短信验证码、邮箱验证码或一次性密码。

## 代码演示

[基本用法](./demo/basic.vue?show=vertical)

- 支持逐位输入、整段粘贴、键盘移动和完成事件。

[自定义长度](./demo/length.vue?show=vertical)

- 通过 `length` 设置验证码位数。

[主题与形状](./demo/theme.vue?show=vertical)

- 提供亮色、描边、下划线主题，以及方形、圆角和圆形外观。

[尺寸](./demo/size.vue?show=vertical)

- 提供小、默认和大三种尺寸。

[禁用与只读](./demo/state.vue?show=vertical)

- 禁用状态不可交互，只读状态仍可聚焦和复制。

[分隔符](./demo/separator.vue?show=vertical)

- 通过 `separator` 设置字段之间的内容。

[粘贴验证码](./demo/paste.vue?show=vertical)

- 粘贴完整验证码时自动切割，并依次填入对应字段。

[输入验证](./demo/validator.vue?show=vertical)

- `type` 提供默认字符验证，也可通过 `validator` 自定义允许输入的字符。

## API

| 属性       | 说明                     | 类型                             | 默认值  |
| ---------- | ------------------------ | -------------------------------- | ------- |
| modelValue | 绑定值，可使用 `v-model` | string、number                   | -       |
| length     | 验证码位数               | number                           | 6       |
| type       | 允许输入的字符类型       | `number`、`text`                 | number  |
| size       | 尺寸                     | `small`、`large`                 | -       |
| mask       | 是否隐藏输入内容         | boolean                          | false   |
| disabled   | 是否禁用                 | boolean                          | false   |
| readonly   | 是否只读                 | boolean                          | false   |
| autofocus  | 是否自动聚焦第一项       | boolean                          | false   |
| separator  | OTP 字段之间的分隔符     | VNodeChild                       | -       |
| validator  | 自定义单个字符验证函数   | (value) => boolean               | -       |
| theme      | 主题                     | `light`、`outline`、`underlined` | outline |
| shape      | 外观形状                 | `square`、`circle`               | -       |
| complete   | 输入达到指定长度时触发   | (value) => void                  | -       |
| update:modelValue | 绑定值更新时触发   | (value: string) => void          | -       |
| change     | 输入值变化时触发         | (value: string) => void          | -       |
| focus      | 输入框获得焦点时触发     | (event: FocusEvent) => void      | -       |
| blur       | 输入框失去焦点时触发     | (event: FocusEvent) => void      | -       |
