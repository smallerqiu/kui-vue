# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

## 代码演示

<code src="./demo/icon.vue">设置图标</code>
<code src="./demo/separator.vue">分隔符</code>

## BreadcrumbItem API

| 属性      | 说明                                                     | 类型    | 默认值 |
| --------- | -------------------------------------------------------- | ------- | ------ |
| separator | 自定义分隔符                                             | String  | /      |
| to        | 自定义链接函数,和 `vue-router` 配合使用                  | String  | -      |
| replace   | 路由跳转时，开启 `replace` 将不会向 `history` 添加新记录 | Boolean | false  |
| icon      | 按钮的图标                                               | String  | -      |
