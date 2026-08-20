# Typography 排版

统一标题、正文和行内文字的语义与视觉样式。

## 代码演示

[基本排版](./demo/basic.vue?show=vertical)

- 展示标题、正文及常用的行内文本样式。

[复制与编辑](./demo/interactive.vue?show=vertical)

- 文本支持直接复制和就地编辑。

## API

`Typography`、`TypographyText`、`TypographyParagraph` 和 `TypographyTitle` 共享以下属性。

| 属性       | 说明                       | 类型                                        | 默认值 |
| ---------- | -------------------------- | ------------------------------------------- | ------ |
| modelValue | 文本内容，可使用 `v-model` | string                                      | -      |
| tag        | 渲染的 HTML 标签           | TypographyTag                               | -      |
| type       | 语义颜色                   | `secondary`、`success`、`warning`、`danger` | -      |
| strong     | 加粗                       | boolean                                     | false  |
| italic     | 斜体                       | boolean                                     | false  |
| underline  | 下划线                     | boolean                                     | false  |
| delete     | 删除线                     | boolean                                     | false  |
| mark       | 标记样式                   | boolean                                     | false  |
| code       | 行内代码样式               | boolean                                     | false  |
| disabled   | 禁用状态                   | boolean                                     | false  |
| copyable   | 允许复制                   | boolean                                     | false  |
| editable   | 允许编辑                   | boolean                                     | false  |
| ellipsis   | 单行省略或指定最大行数     | boolean、number                             | false  |
| copy       | 复制后触发                 | (text) => void                              | -      |
| change     | 编辑完成后触发             | (text) => void                              | -      |
