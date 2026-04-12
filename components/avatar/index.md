# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 代码演示

[基本](./demo/basic.vue)
- 头像有三种尺寸，两种形状可选。

[自动调整字符大小](./demo/change.vue)
- 对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。

[类型](./demo/types.vue)
- 支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。


## API

| 属性  | 说明                         | 类型                       | 默认值  |
| ----- | ---------------------------- | -------------------------- | ------- |
| icon  | 设置头像的图标类型           | String,Number              | 400     |
| shape | 指定头像的形状 circle,square | String                     | circle  |
| size  | 设置头像的大小               | large,small,default,Number | default |
| src   | 图片类头像的资源地址         | String                     | -       |

## AvatarGroup API

| 属性     | 说明               | 类型   | 默认值 |
| -------- | ------------------ | ------ | ------ |
| maxCount | 最多展示多少个图像 | NUmber | -      |
