# Row / Col 栅格

采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题
两个概念，行 `row` 和列 `col` ，具体使用方法如下：

- 使用 `row` 在水平方向创建一行
- 将一组 `col` 插入在 `row` 中
- 在每个 `col` 中，键入自己的内容
- 通过设置 `col` 的 `span` 参数，指定跨越的范围，其范围是1到24
- 每个 `row` 中的 `col` 总和应该为24

> 注意：非 template/render 模式下，需使用 k-col。

## 代码演示

<code src="./demo/basic.vue">基本用法</code>
<code src="./demo/fill.vue">Flex 填充</code>
<code src="./demo/flex.vue">Flex 布局</code>
<code src="./demo/gutter.vue">分栏间隔</code>
<code src="./demo/offset.vue">栅格偏移</code>

## Row API

| 属性    | 说明                                                                             | 类型         | 默认值  |
| ------- | -------------------------------------------------------------------------------- | ------------ | ------- |
| align   | flex 布局下的垂直对齐方式：`top` `middle` `bottom`                               | String       | `top`   |
| justify | flex 布局下的水平排列方式：`start` `end` `center` `space-around` `space-between` | String       | `start` |
| gutter  | 栅格间距，单位 px，左右平分,使用数组形式同时设置 [水平间距, 垂直间距]            | Number,Array | -       |
| type    | 布局模式，可选 flex，现代浏览器 下有效                                           | String       |         |

## Col API

| 属性   | 说明                                   | 类型          | 默认值 |
| ------ | -------------------------------------- | ------------- | ------ |
| span   | 栅格的占位格数，可选值为0~24的整数     | Number        | -      |
| offset | 栅格左侧的间隔格数，可选值为1~24的整数 | Number        | -      |
| flex   | flex 布局填充                          | Number,String | -      |
