# Card 卡片

通用卡片容器

## 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

## 代码演示

<code src="./demo/border.vue">边框</code>
<code src="./demo/notitle.vue">很奇怪的卡片</code>

## API

| 属性     | 说明             | 类型         | 默认值 |
| -------- | ---------------- | ------------ | ------ |
| title    | 卡片的标题       | String、slot | -      |
| icon     | 卡片标题的图标   | String       | -      |
| bordered | 卡片是否显示边框 | Boolean      | true   |
| extra    | 卡片标题扩展     | slot         | -      |
