# Page 分页

采用分页的形式分隔长列表，每次只加载一个页面。

## 何时使用

- 当加载/渲染所有数据将花费很多时间时；
- 可切换页码浏览数据。

## 代码演示

[基本用法](./demo/basic.vue?show=vertical)

- 基础分页。

[条目 / 跳转](./demo/sizer-elevator.vue?show=vertical)

- 改变每页显示条目数。

[尺寸](./demo/size.vue?show=vertical)

- 展示小尺寸。

## API

| 属性         | 说明                                     | 类型                    | 默认值           |
| ------------ | ---------------------------------------- | ----------------------- | ---------------- |
| page         | 当前页码 (v-model:page)                  | Number                  | 1                |
| disabled     | 禁用状态                                 | Boolean                 | false            |
| total        | 数据总数                                 | Number                  | 0                |
| pageSize     | 每页条数                                 | Number                  | 10               |
| showSizer    | 是否显示页码组                           | Boolean                 | false            |
| showTotal    | 是否显示总数                             | Boolean                 | false            |
| showElevator | 是否显示页码阶梯                         | Boolean                 | false            |
| sizeData     | 自定义页码组数据                         | Array                   | [10,15,20,30,40] |
| size         | 值为'small' 时，呈现小尺寸               | Sting                   | -                |
| theme        | 主题                                     | Sting                   | fill             |
| onChange     | 页码,页码组 改变的回调，返回改变后的页码 | Function(page,pageSize) | -                |
