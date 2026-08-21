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

[基本用法](./demo/basic.vue?show=vertical)

- `col` 必须放在 `row` 里面

[分栏间隔](./demo/gutter.vue?show=vertical)

- 使用 `gutter` 熟悉来设置分栏的间隔,如果需要垂直间距，可以写成数组形式 [水平间距, 垂直间距]

[栅格偏移](./demo/offset.vue?show=vertical)

- 通过设置 `offset` 属性，将列进行左右偏移，偏移栅格数为 `offset` 的值。

[响应式栅格](./demo/responsive.vue?show=vertical)

- 提供 `xs`、`sm`、`md`、`lg`、`xl`、`xxl` 六档响应式尺寸。可直接传入占位格数，也可以使用包含 `span`、`offset`、`order`、`push`、`pull` 的对象。

[Flex 对齐](./demo/align.vue?show=vertical)

- Flex 子元素垂直对齐。

[Flex 布局](./demo/flex.vue?show=vertical)

- Flex 布局基础。 使用 `row-flex` 定义 `flex` 布局，其子元素根据不同的值 `start` , `center`,`end` , `space-between` ,`space-around`，分别定义其在父节点里面的排版方式。

[Flex 填充](./demo/fill.vue?show=vertical)

- Col 提供 flex 属性以支持填充。

## Row API

| 属性    | 说明                                                                             | 类型               | 默认值  |
| ------- | -------------------------------------------------------------------------------- | ------------------ | ------- |
| align   | flex 布局下的垂直对齐方式：`top` `middle` `bottom`                               | string             | `top`   |
| justify | flex 布局下的水平排列方式：`start` `end` `center` `space-around` `space-between` | string             | `start` |
| gutter  | 栅格间距，单位 px，左右平分,使用数组形式同时设置 [水平间距, 垂直间距]            | number \| number[] | -       |
| type    | 布局模式，可选 flex，现代浏览器 下有效                                           | string             |         |

## Col API

| 属性   | 说明                                                  | 类型              | 默认值 |
| ------ | ----------------------------------------------------- | ----------------- | ------ |
| span   | 栅格占位格数，可选值为 0~24，`0` 表示隐藏             | number            | -      |
| offset | 栅格左侧间隔格数，可选值为 0~24                       | number            | -      |
| order  | 栅格顺序，可选值为 0~24                               | number            | -      |
| push   | 栅格向右移动的格数，可选值为 0~24                     | number            | -      |
| pull   | 栅格向左移动的格数，可选值为 0~24                     | number            | -      |
| flex   | Flex 布局填充，例如 `1`、`auto`、`100px`、`1 1 200px` | number \| string  | -      |
| xs     | `<576px`，数字表示 span，也支持响应式对象             | number \| ColSize | -      |
| sm     | `≥576px`                                              | number \| ColSize | -      |
| md     | `≥768px`                                              | number \| ColSize | -      |
| lg     | `≥992px`                                              | number \| ColSize | -      |
| xl     | `≥1200px`                                             | number \| ColSize | -      |
| xxl    | `≥1600px`                                             | number \| ColSize | -      |

```ts
interface ColSize {
  span?: number;
  offset?: number;
  order?: number;
  push?: number;
  pull?: number;
}
```
