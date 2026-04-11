# Space 间距

设置组件之间的间距。

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。

## 代码演示

<code src="./demo/basic.vue">基本用法</code>
<code src="./demo/compact.vue">紧凑布局组合</code>
<code src="./demo/compactButton.vue">Button 紧凑布局</code>
<code src="./demo/compactVertical.vue">垂直方向紧凑布局</code>
<code src="./demo/customSize.vue">自定义尺寸</code>
<code src="./demo/size.vue">间距大小</code>
<code src="./demo/split.vue">分隔符</code>
<code src="./demo/vertical.vue">垂直间距</code>
<code src="./demo/wrap.vue">设置换行</code>

## Space API

| 属性     | 说明                         | 类型                                  | 默认值 |
| -------- | ---------------------------- | ------------------------------------- | ------ |
| align    | 对齐方式                     | `start` , `end` ,`center` ,`baseline` | center |
| vertical | 是否垂直显示                 | Boolean                               | false  |
| size     | 间距大小                     | `small`,`middle`,`large`,Number       | small  |
| wrap     | 是否换行                     | Boolean                               | false  |
| split    | 设置拆分                     | v-slot                                | -      |
| compact  | 是否使用经凑模式             | Boolean                               | false  |
| block    | 将宽度调整为父元素宽度的选项 | Boolean                               | false  |
