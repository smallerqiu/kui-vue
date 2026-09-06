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

- 支持 `light|dark` 局部主题，未设置时继承全局主题。

[切换菜单类型](./demo/mode.vue?show=vertical)

- 展示动态切换模式。

[缩起内嵌菜单](./demo/collapsed.vue?show=vertical)

- 内嵌菜单可以被缩起/展开。

## API

### Menu

| 属性             | 说明                               | 类型                                   | 默认值     |
| ---------------- | ---------------------------------- | -------------------------------------- | ---------- |
| modelValue       | 当前选中的菜单项（v-model）        | string[]                               | []         |
| theme            | 局部主题，未设置时继承全局主题     | `light` \| `dark`                      | -          |
| items            | 菜单数据                           | MenuOptionsProps[]                     | -          |
| openKeys         | 当前展开的 SubMenu 菜单项 key 数组 | string[]                               | []         |
| mode             | 菜单类型                           | `vertical` \| `horizontal` \| `inline` | `vertical` |
| onSelect         | 点击 MenuItem 调用此函数           | (data: MenuSelectEvent) => void        | -          |
| onOpenChange     | SubMenu 展开/关闭的回调            | (openKeys: string[]) => void           | -          |
| accordion        | 是否只允许菜单展开一项             | boolean                                | false      |
| inlineCollapsed  | inline 时菜单是否收起状态          | boolean                                | false      |
| collapsedTooltip | 收起时是否显示无子菜单项的文字提示 | boolean                                | true       |

### Menu(items)

| 属性     | 说明            | 类型               | 默认值 |
| -------- | --------------- | ------------------ | ------ |
| icon     | item 的图标     | IconType           | -      |
| disabled | 是否禁用        | boolean            | false  |
| key      | item 的唯一标志 | string             | -      |
| title    | 菜单项内容      | VNodeChild         | -      |
| children | 菜单子集        | MenuOptionsProps[] | -      |

### MenuItem

| 属性     | 说明            | 类型       | 默认值 |
| -------- | --------------- | ---------- | ------ |
| icon     | item 的图标     | IconType   | -      |
| disabled | 是否禁用        | boolean    | false  |
| key      | item 的唯一标志 | string     | -      |
| title    | 菜单项内容      | VNodeChild | -      |

### SubMenu

| 属性     | 说明            | 类型       | 默认值 |
| -------- | --------------- | ---------- | ------ |
| icon     | item 的图标     | IconType   | -      |
| disabled | 是否禁用        | boolean    | false  |
| key      | item 的唯一标志 | string     | -      |
| title    | 子菜单项内容    | VNodeChild | -      |

### MenuGroup

| 属性  | 说明     | 类型       | 默认值 |
| ----- | -------- | ---------- | ------ |
| title | 分组标题 | VNodeChild | -      |
