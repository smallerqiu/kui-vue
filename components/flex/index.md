# Flex 弹性布局

## 何时使用

- 适合设置元素之间的间距。
- 适合设置各种水平、垂直对齐方式。

### 与 Space 组件的区别

- Space 为内联元素提供间距，其本身会为每一个子元素添加包裹元素用于内联对齐。适用于行、列中多个子元素的等距排列。
- Flex 为块级元素提供间距，其本身不会添加包裹元素。适用于垂直或水平方向上的子元素布局，并提供了更多的灵活性和控制能力。

## 代码演示

[基本布局](./demo/basic.vue?show=vertical)

- 最简单的用法。

[对齐方式](./demo/align.vue?show=vertical)

- 设置对齐模式。

[间距大小](./demo/size.vue?show=vertical)

- 使用 size 设置元素之间的间距，预设了 small、medium、large 三种尺寸，也可以自定义间距。

[设置换行](./demo/wrap.vue?show=vertical)

- 当间距为水平方向时，可使用 wrap 设置是否自动换行，默认情况下为 false。

## Flex API

| 属性     | 说明                                | 类型                                                                                          | 默认值                                    |
| -------- | ----------------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------- |
| align    | 交叉轴对齐方式                      | `start` \| `flex-start` \| `end` \| `flex-end` \| `center` \| `baseline`                      | 水平布局为 `center`，垂直布局为 `stretch` |
| justify  | 主轴对齐方式                        | `flex-start` \| `center` \| `flex-end` \| `space-between` \| `space-around` \| `space-evenly` | `flex-start`                              |
| vertical | 是否垂直显示                        | boolean                                                                                       | false                                     |
| size     | 间距大小；数组格式为 `[水平, 垂直]` | `small` \| `medium` \| `large` \| number \| Array<string \| number>                           | -                                         |
| wrap     | 是否换行                            | boolean                                                                                       | false                                     |
