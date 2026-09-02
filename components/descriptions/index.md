# Descriptions 描述列表

成组展示多个只读字段。

## 何时使用

常见于详情页的信息展示。

## 代码演示

[基本用法](./demo/basic.vue?show=vertical)

- 简单的展示。

[带边框的](./demo/bordered.vue?show=vertical)

- 带边框和背景颜色列表。

[自定义尺寸](./demo/size.vue?show=vertical)

- 自定义尺寸，适应在各种容器中展示。

[响应式列数](./demo/responsive.vue?show=vertical)

- 根据组件容器宽度自动调整每行展示的项目数量。

[垂直](./demo/vertical.vue?show=vertical)

- 垂直的列表。

[垂直带边框](./demo/vertical-bordered.vue?show=vertical)

- 垂直带边框和背景颜色的列表。

## API

| 属性     | 说明                             | 类型                                              | 默认值     |
| -------- | -------------------------------- | ------------------------------------------------- | ---------- |
| bordered | 是否展示边框                     | boolean                                           | false      |
| column   | 每行项目数，支持响应式配置       | number \| Partial\<Record\<Breakpoint, number\>\> | 3          |
| extra    | 描述列表的操作区域，显示在右上方 | string \| Slot                                    | -          |
| layout   | 描述布局                         | `'horizontal'` \| `'vertical'`                    | horizontal |
| size     | 设置列表大小                     | `'large'` \| `'medium'` \| `'small'`              | large      |
| title    | 描述列表的标题，显示在最顶部     | string \| Slot                                    | -          |

## Item props

| 属性  | 说明       | 类型   | 默认值 |
| ----- | ---------- | ------ | ------ |
| label | 内容的描述 | string | -      |
| span  | 列占的数量 | number | 1      |

### 通用外观

| 属性  | 说明         | 类型      | 默认值 |
| ----- | ------------ | --------- | ------ |
| shape | 描述列表形状 | ShapeType | round  |
