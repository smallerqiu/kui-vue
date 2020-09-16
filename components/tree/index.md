## Tree API

| 属性        | 说明                        | 类型       | 默认值   |
|-----------|---------------------------|----------|-------|
| data      | 可嵌套的节点属性的数组，生成 `tree` 的数据 | Array    | []    |
| checkable | 是否显示多选框                   | Boolean  | false |
| load-data | 异步加载数据的方法                 | Function | -     |
| select    | 点击树节点时触发,返回当前已选中的节点数组     | Function | -     |
| check     | 点击复选框时触发,返回当前已勾选节点的数组     | Function | -     |
| expand    | 展开和收起子节点时触发,返回当前已勾选节点的数组  | Function | -     |

## TreeNode API

| 属性       | 说明      | 类型      | 默认值   |
|----------|---------|---------|-------|
| title    | 节点标题    | String  | -     |
| expand   | 是否展开节点  | Boolean | false |
| disabled | 是否禁用节点  | Boolean | false |
| selected | 节点是否被选中 | Boolean | false |
| checked  | 节点是否勾选  | Boolean | false |
| children | 子节点     | Array   | -     |
