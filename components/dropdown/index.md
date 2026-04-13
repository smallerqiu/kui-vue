# Dropdown 下拉菜单

向下弹出的列表。

## 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

## 代码演示

[基本用法](./demo/basic.vue)

- 最简单的下拉菜单。

[右键菜单](./demo/right-menu.vue)

- 默认是移入触发菜单，可以点击鼠标右键触发。

[带下拉框的按钮](./demo/dropdown-button.vue)

- 左边是按钮，右边是额外的相关功能菜单。可设置 icon 属性来修改右边的图标。

[其他元素](./demo/divider.vue)

- 分割线和不可用菜单项。

[弹出位置](./demo/placement.vue)

- 支持 6 个弹出位置。

[多级菜单](./demo/cascading.vue)

- 传入的菜单里有多个层级。

## Dropdown API

| 属性      | 说明                                                                         | 类型    | 默认值      |
| --------- | ---------------------------------------------------------------------------- | ------- | ----------- |
| value     | 默认是否显示下拉，可使用v-model绑定                                          | Boolean | hover       |
| trigger   | 触发方式,支持hover(默认), click, custom 3种方式                              | String  | hover       |
| placement | 菜单弹出位置：bottomLeft bottomCenter bottomRight topLeft topCenter topRight | String  | bottom-left |
| theme     | 组件呈现主题,默认'light'                                                     | String  | light       |
