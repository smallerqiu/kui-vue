# Watermark 水印

给页面的某个区域加上水印。

## 何时使用

- 页面需要添加水印标识版权时使用。
- 适用于防止信息盗用。

## 代码演示

[基本用法](./demo/basic.vue?show=vertical)

- 最简单的用法。

[图片水印](./demo/image.vue?show=vertical)

- 通过 `image` 指定图片地址。为保证图片高清且不被拉伸，请设置 width 和 height, 并上传至少两倍的宽高的 logo 图片地址。

[多行文字水印](./demo/multiple-lines.vue?show=vertical)

- 通过 content 设置字符串和 WatermarkText 组成的数组指定多行文字水印内容，并可单独调整每行文字样式。

[Modal 与 Drawer 中使用](./demo/in-modal-drawer.vue)

- 在 Modal 与 Drawer 中使用。

[自定义配置](./demo/custom.vue?show=vertical)

- 通过自定义参数配置预览水印效果。

## API

| 属性           | 说明                                                                                          | 类型                                        | 默认值     |
| :------------- | :-------------------------------------------------------------------------------------------- | :------------------------------------------ | :--------- |
| content    | 水印的文本内容。支持传入字符串，或者数组以支持多行。传入对象数组时，可独立控制每行样式。      | `string \| string[] \| WatermarkTextItem[]` | `""`       |
| image      | 图片水印的源地址（Base64 或 URL）。开启后优先渲染图片水印。                                   | `string`                                    | `""`       |
| width      | 单个水印区域的宽度，单位 `px`。                                                               | `number`                                    | `240`      |
| height     | 单个水印区域的高度，单位 `px`。                                                               | `number`                                    | `189`      |
| rotate     | 水印的倾斜旋转角度。                                                                          | `number`                                    | `-22`      |
| zIndex     | 水印挂载节点的层级，在 Modal/Drawer 等高级别弹窗中使用时建议调大。                            | `number`                                    | `999`      |
| fullscreen | 是否为全屏水印。若为 `true`，则会直接挂载到 `body` 上。                                       | `boolean`                                   | `false`    |
| antiTamper | 是否开启高防篡改守护（通过 `MutationObserver` 监听 DOM 节点的删除与属性修改）。               | `boolean`                                   | `true`     |
| font       | 全局水印文本的默认兜底样式（包含颜色、字号、粗细、字体族及字形）。                            | `WatermarkProps['font']`                    | -          |
| gap        | 水印格子之间的横向与纵向间距，格式为 `[x, y]`。                                               | `[number, number]`                          | `[40, 40]` |
| offset     | 水印网格平铺时的起始原点偏移量，格式为 `[x, y]`，用于微调边缘留白。                           | `[number, number]`                          | `[20, 20]` |
| layout     | 水印的排列布局模式。可选值：`'grid'` (传统正交网格) 或 `'stagger'` (高级奇偶行交错错落网格)。 | `'grid' \| 'stagger'`                       | `'grid'`   |

### WatermarkTextItem

当 `content` 传入对象数组时，数组中的每个元素都是一个 `WatermarkTextItem` 对象。它允许你突破全局配置的限制，为每一行水印文本独立定制精细的异构样式：

| 属性           | 说明                                                                                                                   | 类型                                | 默认值                     |
| :------------- | :--------------------------------------------------------------------------------------------------------------------- | :---------------------------------- | :------------------------- |
| text       | 当前行水印的文本内容。                                                                                                 | `string`                            | 必填                   |
| color      | 独立控制当前行的文本颜色，支持各种 CSS 颜色格式（如十六进制、RGBA）。常用于突显警示语或弱化审计背景。                  | `string`                            | 继承全局 `font.color`      |
| fontSize   | 独立控制当前行的字体大小，单位为 `px`。适合做“大标题 + 小副标题”的主次排版。                                           | `number`                            | 继承全局 `font.fontSize`   |
| fontWeight | 独立控制当前行的文本粗细（字重），如 `bold` 或数值 `500`。                                                             | `string \| number`                  | 继承全局 `font.fontWeight` |
| fontStyle  | 独立控制当前行的字形样式。可选值包括 `'normal'`（常规体）或 `'italic'` / `'oblique'`（斜体），能有效打破死板的排版感。 | `'normal' \| 'italic' \| 'oblique'` | 继承全局 `font.fontStyle`  |
