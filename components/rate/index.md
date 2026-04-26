# Rate评分

评分组件。

## 何时使用

- 对评价进行展示。
- 对事物进行快速的评级操作。

## 代码演示

[基本用法](./demo/basic.vue)

- 最简单的用法。

[文案展现 / 允许清除](./demo/tips.vue)

- 给评分组件加上文案展示。

[其他字符](./demo/character.vue)

- 可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。

## Rate API

| 属性       | 说明                     | 类型                   | 默认值 |
| ---------- | ------------------------ | ---------------------- | ------ |
| modelValue | 当前数，受控值 (v-model) | Number                 | -      |
| allowClear | 是否允许再次点击后清除   | Boolean                | false  |
| allowHalf  | 是否允许半选             | Boolean                | -      |
| showScore  | 是否显示分数             | Boolean                | -      |
| character  | 自定义字符               | String                 | -      |
| count      | star 总数                | Number                 | -      |
| icon       | 自定义展示的图标         | Icon                   | -      |
| size       | 图标尺寸                 | Number                 | -      |
| color      | 图标颜色                 | String                 | -      |
| disabled   | 只读，无法进行交互       | String                 | -      |
| tooltips   | 自定义每项的提示信息     | String[]               | -      |
| onChange   | 选择时的回调             | Function(value:Number) | -      |
