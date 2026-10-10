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

[分组与分割线](./demo/group.vue?show=vertical)

- 使用 `MenuGroup` 归类菜单项，使用 `MenuDivider` 插入分隔线。

## API

### Menu

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 当前选中的菜单项（v-model） | `string[]` | - |
| value | 初始值，仅初始化时读取；后续更新使用 modelValue，同时传入时 modelValue 优先。 | `string[]` | [] |
| theme | 局部主题，未设置时继承全局主题 | `"light" \| "dark"` | - |
| items | 菜单数据 | `MenuOptionsProps[]` | - |
| openKeys | 当前展开的 SubMenu 菜单项 key 数组 | `string[]` | [] |
| mode | 菜单类型 | `"horizontal" \| "vertical" \| "inline"` | `vertical` |
| onSelect | 点击 MenuItem 调用此函数 | `(event: MenuSelectEvent) => void` | - |
| onOpenChange | SubMenu 展开/关闭的回调 | `(keys: string[]) => void` | - |
| accordion | 是否只允许菜单展开一项 | `boolean` | false |
| inlineCollapsed | inline 时菜单是否收起状态 | `boolean` | false |
| collapsedTooltip | 收起时是否显示无子菜单项的文字提示 | `boolean` | true |

### Menu(items)

| 属性     | 说明            | 类型               | 默认值 |
| -------- | --------------- | ------------------ | ------ |
| icon     | item 的图标     | IconType           | -      |
| disabled | 是否禁用        | boolean            | false  |
| key      | item 的唯一标志 | string             | -      |
| title    | 菜单项内容      | VNodeChild         | -      |
| children | 菜单子集        | MenuOptionsProps[] | -      |

### MenuItem

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | item 的图标 | `IconType[]` | - |
| disabled | 是否禁用 | `boolean` | false |
| key | item 的唯一标志 | string | - |
| title | 菜单项内容 | `VNodeChild` | - |
| onClick | 点击菜单项时触发的回调 | `(event: MouseEvent) => void` | - |

### SubMenu

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | item 的图标 | `IconType[]` | - |
| disabled | 是否禁用 | `boolean` | false |
| key | item 的唯一标志 | string | - |
| title | 子菜单项内容 | `VNodeChild` | - |

### MenuGroup

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 分组标题 | `VNodeChild` | - |

### MenuDivider

无属性。作为 `Menu` 或 `SubMenu` 的子项渲染一条分隔线。

## 使用约定

- `items` 数据结构只能表达层级菜单，无法表达分组和分隔线。需要 `MenuGroup`、`MenuDivider` 时请改用 children 写法（见「分组与分割线」）。
- `openKeys` 表示当前展开的 SubMenu，在全部 `mode` 下都生效：`inline` 决定内嵌展开，`horizontal`/`vertical` 决定对应浮层是否显示。切换 `mode` 不会改写展开状态，也不会额外触发 `openChange`。
- `inlineCollapsed` 只在 `mode="inline"` 时起作用，其它模式下传入它不会改变菜单外观。收起时内嵌展开会被临时收起并在展开后恢复；收起期间的浮层展开保存在内部，选中菜单项时关闭。
- 收起期间父组件传入的 `openKeys` 会写入展开记忆，展开后生效；本组件自己上报、又被回传成 `openKeys` 的值（收起期间的浮层展开、选中后的收起）不会覆盖这份记忆。展开回来时会将恢复的展开值上报一次。
- `modelValue` 遵循组件库统一的受控约定（见 `value` 说明）；`value` 只在初始化时读取，同时传入时以 `modelValue` 为准。
- 选中某一项时，`modelValue` 得到的是「祖先 SubMenu key + 该项 key」的集合，父级菜单因此可以保持高亮；再次点击已选中项不会取消选中。
- 弹出式浮层渲染在 `getPopupContainer` 返回的容器（默认 `body`）下，并通过 `aria-controls` / `aria-labelledby` 与触发项关联。
- `mode="horizontal"` 的根节点是 `role="menubar"`（方向键左右切换同级项），`vertical`/`inline` 是 `role="menu"`（上下切换）；子菜单列表一律声明 `aria-orientation="vertical"`，包装用的 `li` 为 `role="none"`，不承担无障碍语义。
- 键盘展开子菜单：`menubar`（`horizontal` 根级）里的子菜单项用 `ArrowDown`，`vertical`/`inline` 列表里的子菜单项用 `ArrowRight`，展开后焦点直接进入子列表第一个可用项；关闭状态下 `Enter`/`Space` 与点击等效，也是展开。展开的列表里按 `Escape` 只收回当前这一层，并把焦点交回该层触发项，不会连带关闭父级。禁用项在选择与同级移动时都会被跳过。
