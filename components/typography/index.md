# Typography 排版

统一标题、正文和行内文字的语义与视觉样式。

## 代码演示

[基本排版](./demo/basic.vue?show=vertical)

- 使用标题、正文和行内文本组织内容层级。

[标题层级](./demo/title.vue?show=vertical)

- 使用 `tag` 展示 h1 至 h6 的标题层级。

[语义文本](./demo/type.vue?show=vertical)

- 使用 `type` 表达辅助、成功、警告和危险等语义。

[文本样式](./demo/style.vue?show=vertical)

- 展示加粗、斜体、下划线、删除线、标记和行内代码。

[文本省略](./demo/ellipsis.vue?show=vertical)

- 支持多行省略、完整文本提示，以及展开和折叠。

[复制与编辑](./demo/interactive.vue?show=vertical)

- 文本支持直接复制和就地编辑，并可监听对应事件。

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
| copyable   | 允许复制及配置操作提示     | boolean、TypographyCopyableOptions          | false  |
| editable   | 允许编辑及配置操作提示     | boolean、TypographyEditableOptions          | false  |
| ellipsis   | 文本省略、提示和展开配置   | boolean、number、TypographyEllipsisOptions  | false  |
| copy       | 复制后触发                 | (text) => void                              | -      |
| change     | 编辑完成后触发             | (text) => void                              | -      |

### TypographyCopyableOptions

| 属性          | 说明                 | 类型   | 默认值 |
| ------------- | -------------------- | ------ | ------ |
| tooltip       | 复制按钮提示         | string | -      |
| copiedTooltip | 复制成功后的按钮提示 | string | -      |

### TypographyEditableOptions

| 属性    | 说明         | 类型   | 默认值 |
| ------- | ------------ | ------ | ------ |
| tooltip | 编辑按钮提示 | string | -      |

### TypographyEllipsisOptions

| 属性         | 说明                               | 类型            | 默认值   |
| ------------ | ---------------------------------- | --------------- | -------- |
| rows         | 最大显示行数                       | number          | 1        |
| expandable   | 是否显示展开/折叠操作              | boolean         | false    |
| expandText   | 展开操作文案                       | string          | More     |
| collapseText | 折叠操作文案                       | string          | Collapse |
| tooltip      | 省略时显示完整文本或自定义提示内容 | boolean、string | false    |
