# Carousel 走马灯

旋转木马，一组轮播的区域。

## 何时使用

- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。

## 代码演示

[基本用法](./demo/basic.vue?show=vertical)

- 最简单的用法,可以通过 `value(v-model)` 指定初始值

[垂直](./demo/vertical.vue?show=vertical)

- 通过设置 `vertical` 呈现垂直模式,此时不显示左右箭头

[自动播放](./demo/autoplay.vue?show=vertical)

- 通过设置 `autoplay` ，可实现定时自动播放，通过 `delay` 设置间隔播放时间，默认 `3000` ，单位毫秒

## API

触摸滑动和鼠标拖拽默认开启，可通过 `swipeable`、`draggable` 分别关闭。
横向和 `vertical` 纵向模式都支持跟手拖动。松开后根据距离和速度惯性减速并吸附，
每次手势最多切换一页：过滤 5px 以下抖动，300ms 内短甩按方向切换；更长的手势只要拖动达到半页，或松手速度达到 0.5px/ms 且与拖动方向一致，也会切换。距离按本次手势计算，不受上一次动画剩余位移影响。
切页采用短甩／长拖判定，速度只影响惯性收尾动画；动画未结束时也可再次拖动接管。横向轮播保留页面纵向滚动，
纵向轮播保留横向滚动。输入框和按钮等交互控件不会启动拖拽。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 幻灯片的索引，从 0 开始，可以使用 `v-model` 双向绑定数据 | `number` | - |
| value | 初始值，仅初始化时读取；后续更新使用 modelValue，同时传入时 modelValue 优先。 | `number` | 0 |
| loop | 是否开启循环 | `boolean` | true |
| swipeable | 是否开启触摸跟手滑动 | `boolean` | true |
| draggable | 是否开启鼠标跟手拖拽 | `boolean` | true |
| vertical | 是否垂直模式显示 | `boolean` | false |
| autoplay | 是否自动切换 | `boolean` | false |
| delay | 自动切换的时间间隔，单位为毫秒 | `number` | 3000 |
| height | 幻灯片的高度 | `number` | 256(px) |
| dots | 是否在图库底部显示圆点 | `boolean` | true |

## 事件

| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| change | 当前幻灯片变化时触发 | `(value: number) => void` |

## Expose

| 方法名 | 说明             | 参数            |
| ------ | ---------------- | --------------- |
| next   | 切换到下一项     | -               |
| prev   | 切换到上一项     | -               |
| goTo   | 切换到指定索引项 | (index: number) |
