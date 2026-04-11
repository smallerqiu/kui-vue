# Rate评分

评分组件。

## 何时使用

- 对评价进行展示。
- 对事物进行快速的评级操作。

## 代码演示

<code src="./demo/character.vue">其他字符</code>
<code src="./demo/tips.vue">文案展现 / 允许清除</code>

## Rate API

| 属性                | 说明                   | 类型                   | 默认值 |
| ------------------- | ---------------------- | ---------------------- | ------ |
| modelValue(v-model) | 当前数，受控值         | Number                 | -      |
| allowClear          | 是否允许再次点击后清除 | Boolean                | false  |
| allowHalf           | 是否允许半选           | Boolean                | -      |
| showScore           | 是否显示分数           | Boolean                | -      |
| character           | 自定义字符             | String                 | -      |
| count               | star 总数              | Number                 | -      |
| disabled            | 只读，无法进行交互     | String                 | -      |
| tooltips            | 自定义每项的提示信息   | String[]               | -      |
| change              | 选择时的回调           | Function(value:Number) | -      |
