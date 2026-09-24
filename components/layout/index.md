# Layout 布局

协助进行页面级整体布局。

## 组件概述

- `Layout`：布局容器，其下可嵌套 `Header` `Sider` `Content` `Footer` 或 `Layout` 本身，可以放在任何父容器中。
- `Header`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Sider`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Content`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Footer`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

> 3.0 版本以后使用 `flex` 布局，请注意[浏览器兼容性](http://caniuse.com/#search=flex)

## 代码演示

[基础布局](./demo/basic.vue?show=vertical)

- 展示 Header、Sider、Content、Footer 的常见组合方式。

[可折叠侧边栏](./demo/collapsible-sider.vue?show=vertical)

- 使用 `collapsible` 和 `collapsed` 控制 Sider 的折叠状态。

[多层嵌套布局](./demo/nested.vue?show=vertical)

- Layout 可以继续嵌套 Layout，并组合左右 Sider。

[固定高度布局](./demo/fixed-height.vue?show=vertical)

- 为 Layout 设置固定高度，让 Content 独立滚动。

## Layout API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| hasSider | 是否包含侧边栏；未设置时自动检测 Sider | `boolean` | - |
| suffixCls | 样式类名后缀，自动添加 `k-` 前缀；自定义值需提供配套样式。 | `string` | 'layout' |

## Layout.Sider API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 展开宽度 | number \| string | 200 |
| collapsedWidth | 收起宽度 | number \| string | 80 |
| collapsible | 是否启用收起样式 | boolean | false |
| collapsed | 受控的收起状态 | boolean | false |
| suffixCls | 样式类名后缀，自动添加 `k-` 前缀；自定义值需提供配套样式。 | `string` | 'layout-sider' |
