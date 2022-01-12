## API

### Menu 

| 属性             | 说明                                     | 类型                                              | 默认值   |
|------------------|------------------------------------------|---------------------------------------------------|----------|
| theme            | 主题颜色                                 | String: light dark                                | light    |
| openKeys         | 当前展开的 SubMenu 菜单项 key 数组       | String[]                                          | -        |
| value            | 当前选中的菜单项，可使用v-model绑定      | String[]                                          | -        |
| mode             | 菜单类型，支持垂直、水平、和内嵌模式三种 | String: vertical vertical-right horizontal inline | vertical |
| click            | 点击 MenuItem 调用此函数                 | Fun({key, keyPath, item })                        | -        |
| openChange       | SubMenu 展开/关闭的回调                  | Fun(openKeys: String[])                           | -        |
| accordion        | 是否只允许菜单展开一项                   | Boolean                                           | false    |
| inline-collapsed | inline 时菜单是否收起状态                | Boolean                                           | false    |

### Menu.Item

| 属性     | 说明                     | 类型    | 默认值 |
|----------|--------------------------|---------|--------|
| icon     | item的图标               | String  | -      |
| disabled | 是否禁用                 | Boolean | false  |
| key      | item 的唯一标志          | String  | -      |
| title    | 设置收缩时展示的悬浮标题 | String  | -      |
 
### Menu.SubMenu

| 属性     | 说明            | 类型         | 默认值 |
|----------|-----------------|--------------|--------|
| icon     | item的图标      | String       | -      |
| disabled | 是否禁用        | Boolean      | false  |
| key      | item 的唯一标志 | String       | -      |
| title    | 子菜单项值      | String,slots | -      |

### Menu.MenuGroup

| 属性  | 说明     | 类型         | 默认值 |
|-------|----------|--------------|--------|
| title | 分组标题 | String,slots | -      |