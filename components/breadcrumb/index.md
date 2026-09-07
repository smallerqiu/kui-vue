# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

## 代码演示

[基本用法](./demo/basic.vue)

- 通过 `href` 添加跳转链接

[设置图标](./demo/icon.vue)

- 通过 `icon` 设置图标

[分隔符](./demo/separator.vue)

- 通过 `separator` 属性或同名插槽设置分隔符

## Breadcrumb API

| 属性      | 说明         | 类型                 | 默认值 |
| --------- | ------------ | -------------------- | ------ |
| separator | 自定义分隔符 | string \| VNodeChild | `/`    |

## BreadcrumbItem API

| 属性   | 说明         | 类型       | 默认值 |
| ------ | ------------ | ---------- | ------ |
| href   | 链接地址     | string     | -      |
| target | 链接打开方式 | string     | -      |
| rel    | 链接关系属性 | string     | -      |
| icon   | 节点图标     | IconType[] | -      |
