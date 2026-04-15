# Menu 导航菜单

为页面和功能提供导航的菜单列表。

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

## 代码演示

[顶部导航](./demo/basic.vue?show=vertical)

- 水平的顶部导航菜单。

[内嵌菜单](./demo/inline.vue?show=vertical)

- 垂直菜单，子菜单内嵌在菜单区域。

[只展开当前父级菜单](./demo/accordion.vue?show=vertical)

- 点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。

[垂直菜单](./demo/vertical.vue?show=vertical)

- 子菜单是弹出的形式。

[主题](./demo/theme.vue?show=vertical)

- 内建了两套主题 `light|dark`，默认 `light`。

[切换菜单类型](./demo/mode.vue?show=vertical)

- 展示动态切换模式。

[缩起内嵌菜单](./demo/collapsed.vue?show=vertical)

- 内嵌菜单可以被缩起/展开。

## API

### Menu

| 属性                 | 说明                                     | 类型                                              | 默认值   |
| -------------------- | ---------------------------------------- | ------------------------------------------------- | -------- |
| value(v-model)       | 当前选中的菜单项                         | String: []                                        | light    |
| theme                | 主题颜色                                 | String: light dark                                | light    |
| items                | 菜单数据                                 | Array                                             | -        |
| v-model:openKeys     | 当前展开的 SubMenu 菜单项 key 数组       | String[]                                          | -        |
| v-model:selectedKeys | 当前选中的菜单项，可使用 v-model 绑定    | String[]                                          | -        |
| mode                 | 菜单类型，支持垂直、水平、和内嵌模式三种 | String: vertical vertical-right horizontal inline | vertical |
| select               | 点击 MenuItem 调用此函数                 | Fun({key, keyPath})                               | -        |
| openChange           | SubMenu 展开/关闭的回调                  | Fun(openKeys: String[])                           | -        |
| accordion            | 是否只允许菜单展开一项                   | Boolean                                           | false    |
| inline-collapsed     | inline 时菜单是否收起状态                | Boolean                                           | false    |

### Menu(items)

| 属性     | 说明                     | 类型    | 默认值 |
| -------- | ------------------------ | ------- | ------ |
| icon     | item 的图标              | String  | -      |
| disabled | 是否禁用                 | Boolean | false  |
| key      | item 的唯一标志          | String  | -      |
| title    | 设置收缩时展示的悬浮标题 | String  | -      |
| children | 菜单子集                 | Array   | -      |

### MenuItem

| 属性     | 说明                     | 类型    | 默认值 |
| -------- | ------------------------ | ------- | ------ |
| icon     | item 的图标              | String  | -      |
| disabled | 是否禁用                 | Boolean | false  |
| key      | item 的唯一标志          | String  | -      |
| title    | 设置收缩时展示的悬浮标题 | String  | -      |

### SubMenu

| 属性     | 说明            | 类型         | 默认值 |
| -------- | --------------- | ------------ | ------ |
| icon     | item 的图标     | String       | -      |
| disabled | 是否禁用        | Boolean      | false  |
| key      | item 的唯一标志 | String       | -      |
| title    | 子菜单项值      | String,slots | -      |

### MenuGroup

| 属性  | 说明     | 类型         | 默认值 |
| ----- | -------- | ------------ | ------ |
| title | 分组标题 | String,slots | -      |
