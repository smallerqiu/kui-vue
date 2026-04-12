# Divider 分割线

区隔内容的分割线。

## 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

## 代码演示

[水平分割线](./demo/default.vue)

- 默认为水平分割线，可在中间加入文字。

[带文字的分割线](./demo/with-text.vue)

- 分割线中带有文字，可以用 orientation 指定文字位置。

## API

| 参数        | 说明                                  | 类型    | 默认值     |
| ----------- | ------------------------------------- | ------- | ---------- |
| text        | 分割线文字                            | String  | -          |
| dashed      | 是否虚线                              | Boolean | false      |
| orientation | 分割线标题的位置：left right          | String  | center     |
| type        | 水平还是垂直类型: horizontal vertical | String  | horizontal |
