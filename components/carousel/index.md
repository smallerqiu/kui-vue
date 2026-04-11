# Carousel 走马灯

旋转木马，一组轮播的区域。

## 何时使用

- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。

## 代码演示

<code src="./demo/basic.vue">基本用法</code>
<code src="./demo/vertical.vue">垂直</code>

## API

| 属性     | 说明                                                     | 类型    | 默认值 |
| -------- | -------------------------------------------------------- | ------- | ------ |
| value    | 幻灯片的索引，从 0 开始，可以使用 `v-model` 双向绑定数据 | Number  | 0      |
| loop     | 是否开启循环                                             | Boolean | true   |
| vertical | 是否垂直模式显示                                         | Boolean | false  |
| autoplay | 是否自动切换                                             | Boolean | false  |
| delay    | 自动切换的时间间隔，单位为毫秒                           | Number  | 3000   |
