# Icon 图标

kui 的图标使用开源项目 [ionicons](http://ionicons.com/) 前版本5.5

3.x 版本以后不再支持`webfont` 使用 `svg`代替

使用图标组件，你需要安装 `kui-icons` 图标组件包：

```bash
npm install --save kui-icons
```

[线条粗细](./demo/stroke.vue)

- 可以通过 `strokeWidth` 属性设置图标的线条。

[](./demo/use.en_US.vue)

-

[](./demo/use.vue)

-

## API

| 属性        | 说明                         | 类型          | 默认值 |
| ----------- | ---------------------------- | ------------- | ------ |
| type        | 图标类型。遵循图标的命名规范 | Array         | -      |
| size        | 图标的大小，单位是 px        | String,Number | -      |
| color       | 图标的颜色                   | String        | -      |
| spin        | 是否有旋转动画               | Boolean       | false  |
| strokeWidth | 图标的线条粗细               | Number        | false  |
