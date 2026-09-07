# PageHeader 页头

用于页面标题、说明和操作区域的统一布局。

## 代码演示

[基本用法](./demo/basic.vue?show=vertical)

- 组合页面标题、说明和常用操作。

[完整结构](./demo/slots.vue?show=vertical)

- 使用面包屑、返回、标题、操作及默认插槽组合完整页头。

[简洁页头](./demo/simple.vue?show=vertical)

- 仅通过属性展示标题和说明。

## API

| 属性        | 说明                             | 类型                 | 默认值 |
| ----------- | -------------------------------- | -------------------- | ------ |
| title       | 页面标题，也可通过同名插槽自定义 | string \| VNodeChild | -      |
| description | 页面说明，也可通过同名插槽自定义 | string \| VNodeChild | -      |
| breadcrumb  | 面包屑区域                       | VNodeChild           | -      |
| back        | 返回区域                         | VNodeChild           | -      |
| actions     | 页面操作区域                     | VNodeChild           | -      |
