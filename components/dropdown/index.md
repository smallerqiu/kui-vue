## Dropdown API
| 属性       | 说明                                                                         | 类型      | 默认值   |
|----------|----------------------------------------------------------------------------|---------|-------|
| trigger  | 触发方式,支持hover(默认), click, custom 3种方式                                       | String  | hover |
| visible  | 是否显示下拉菜单，trigger为custom可用                                                  | Boolen  | false |
| transfer | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 | Boolean | false |
## DropdownItem API
| 属性       | 说明      | 类型      | 默认值   |
|----------|---------|---------|-------|
| icon     | 单项图标    | String  | -     |
| disabled | 单项是否被禁用 | Boolen  | false |
| selected | 单项是否被选中 | Boolean | false |
| divided  | 单项是否有隔横 | Boolean | false |