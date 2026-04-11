# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 代码演示

<code src="./demo/basic.vue">基本</code>
<code src="./demo/change.vue">自动调整字符大小</code>
<code src="./demo/types.vue">类型</code>

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
