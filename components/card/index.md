# Card 卡片

通用卡片容器

## 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

## 代码演示

[基本用法](./demo/basic.vue)

- 通过 `title` 和 `icon` 可设置标题和图标

[边框](./demo/border.vue)

- `bordered` 可以设置是否显示边框

[边框和标题](./demo/notitle.vue)

- 通过 `bordered` 属性控制边框，通过 `title` 属性控制标题。

| 属性     | 说明             | 类型         | 默认值 |
| -------- | ---------------- | ------------ | ------ |
| title    | 卡片的标题       | String、slot | -      |
| icon     | 卡片标题的图标   | String       | -      |
| bordered | 卡片是否显示边框 | Boolean      | true   |
| extra    | 卡片标题扩展     | slot         | -      |
