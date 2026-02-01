## Table API

| 属性         | 说明                      | 类型                  | 默认值     |
| ------------ | ------------------------- | --------------------- | ---------- |
| bordered     | 是否显示边框              | Boolean               | false      |
| checkable    | 是否显示勾选框            | Boolean               | false      |
| selectedKeys | 勾选的key集合             | Array                 | false      |
| size         | 值为`small`时展示紧凑模式 | String                | -          |
| emptyText    | 没有数据时展示的提示      | String                | '赞无数据' |
| loading      | 表格异步加载模式          | Boolean               | false      |
| data         | 显示的结构化数据          | Array                 | [ ]        |
| columns      | 表格列的配置描述，        | Array                 | [ ]        |
| rowKey       | 勾选时的依据              | String                | key        |
| onRowClick   | 单击某一行时触发          | Function              | -          |
| onSort       | 点击排序时触发            | Function({key,order}) | -          |

## Column API

| 属性    | 说明                                                                                              | 类型                     | 默认值 |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------------ | ------ |
| title   | 列头显示文字                                                                                      | String                   | -      |
| key     | 对应列内容的字段名                                                                                | String                   | -      |
| fixed   | 列固定的方向                                                                                      | 'left','right'           | -      |
| sorter  | 排序,为`true`时,本地排序                                                                          | Boolean ,Function        | -      |
| width   | 列宽                                                                                              | Number                   | -      |
| rowSpan | 行合并单位,为 0 时将不渲染当前行                                                                  | Number                   | -      |
| colSpan | 列合并单位,为 0 时将不渲染当前列                                                                  | Number                   | -      |
| render  | 自定义渲染，可参阅[深入数据对象](https://cn.vuejs.org/v2/guide/render-function.html#深入数据对象) | Function(h,record,index) | -      |
