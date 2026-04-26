# Icon 图标

5.x 版本重新引入了图标集, 支持更多的图标。
使用图标组件，需要安装 `kui-icons` 图标组件包：

```bash
npm install --save kui-icons
```

使用

```html
<template>
  <Icon :type="Heart" />
</template>
<script setup lang="ts">
  import { Heart } from "kui-icons";
</script>
```

[IconList](./demo/search.tsx)

[基本用法](./demo/basic.vue)

- 可以通过 `type`、`size` 、`color` 属性分别设置图标的类型、大小、颜色,也可以通过设置 `spin` 属性来实现动画旋转效果。

[线条粗细](./demo/stroke.vue)

- 可以通过 `strokeWidth` 属性设置图标的线条。

## API

| 属性        | 说明                         | 类型          | 默认值 |
| ----------- | ---------------------------- | ------------- | ------ |
| type        | 图标类型。遵循图标的命名规范 | Array         | -      |
| size        | 图标的大小，单位是 px        | String,Number | -      |
| color       | 图标的颜色                   | String        | -      |
| spin        | 是否有旋转动画               | Boolean       | false  |
| strokeWidth | 图标的线条粗细               | Number        | false  |
| onClick     | 点击事件                     | Function      | -      |
