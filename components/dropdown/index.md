# Dropdown 下拉菜单

向下弹出的列表。

## 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

## 代码演示

<code src="./demo/basic.vue">基本用法</code>
<code src="./demo/cascading.vue">多级菜单</code>
<code src="./demo/divider.vue">其他元素</code>
<code src="./demo/dropdownbutton.vue"></code>
<code src="./demo/placement.vue">弹出位置</code>
<code src="./demo/rightmenu.vue">右键菜单</code>

## Dropdown API

| 属性      | 说明                                                                         | 类型    | 默认值      |
| --------- | ---------------------------------------------------------------------------- | ------- | ----------- |
| value     | 默认是否显示下拉，可使用v-model绑定                                          | Boolean | hover       |
| trigger   | 触发方式,支持hover(默认), click, custom 3种方式                              | String  | hover       |
| placement | 菜单弹出位置：bottomLeft bottomCenter bottomRight topLeft topCenter topRight | String  | bottom-left |
| theme     | 组件呈现主题,默认'light'                                                     | String  | light       |
