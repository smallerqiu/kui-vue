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

## API

| 属性     | 说明                                                  | 类型                                       | 默认值 |
| -------- | ----------------------------------------------------- | ------------------------------------------ | ------ |
| type     | 设置按钮类型                                          | `primary` \| `link`\| `dashed` \| `danger` | -      |
| htmlType | 设置 button 原生的 type 值                            | string                                     | button |
| disabled | 按钮失效状态 ˚                                        | bool                                       | false  |
| size     | 按钮尺寸,                                             | `small`\|`large`                           | -      |
| shape    | 按钮的外观                                            | `circle` , `square`                        | -      |
| theme    | 按钮主题                                              | `solid` \| `fill` \| `normal`              | -      |
| icon     | 按钮的图标                                            | string                                     | -      |
| loading  | 按钮是否进入加载模式                                  | bool                                       | false  |
| href     | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string                                     | -      |
| target   | 相当于 a 链接的 target 属性，href 存在时生效          | string                                     | -      |
| block    | 使组件宽度适应其父级宽度                              | bool                                       | false  |
