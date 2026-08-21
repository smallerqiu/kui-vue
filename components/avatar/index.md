# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 代码演示

[基本](./demo/basic.vue)

- 头像有三种尺寸，两种形状可选。

[类型](./demo/types.vue)

- 支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

[带徽标和分组](./demo/badge-group.vue)

- 通常用于消息提示和头像组合展现。

[自动调整字符大小](./demo/change.vue)

- 对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。

## API

| 属性    | 说明                                                 | 类型                                      | 默认值  |
| ------- | ---------------------------------------------------- | ----------------------------------------- | ------- |
| icon    | 设置头像图标，也可覆盖图片加载失败时默认的 User 图标 | IconType                                  | -       |
| shape   | 指定头像形状                                         | 'circle' \| 'square'                      | circle  |
| size    | 设置头像大小                                         | 'large' \| 'small' \| 'default' \| number | default |
| src     | 图片资源地址                                         | string                                    | -       |
| alt     | 图片无法显示时的替代文本                             | string                                    | -       |
| onError | 图片加载失败回调；返回 `false` 可阻止切换回退内容    | (event: Event) => boolean                 | -       |

## AvatarGroup API

| 属性     | 说明                                         | 类型                                      | 默认值  |
| -------- | -------------------------------------------- | ----------------------------------------- | ------- |
| maxCount | 最多展示多少个头像                           | number                                    | -       |
| size     | 统一子头像尺寸，并按尺寸自动调整头像重叠距离 | 'large' \| 'small' \| 'default' \| number | default |
| spacing  | 子头像的重叠距离，`0` 表示不重叠             | number                                    | 自动    |
| shape    | 统一子头像形状                               | 'circle' \| 'square' \| 'round'           | circle  |
