## Table API

| 属性          | 说明                               | 类型                                                | 默认值                  |
| ------------- | ---------------------------------- | --------------------------------------------------- | ----------------------- |
| bordered      | 是否显示边框                       | Boolean                                             | false                   |
| width         | 表格的宽度，超出部分出现滚动条     | Number                                              | -                       |
| height        | 表格高度，超出部分滚动，头部会固定 | Number                                              | -                       |
| mini          | 表格是否为 mini 模式               | Boolean                                             | false                   |
| loading       | 表格异步加载模式                   | Boolean                                             | false                   |
| data          | 显示的结构化数据                   | Array                                               | [ ]                     |
| columns       | 表格列的配置描述，                 | Array                                               | [ ]                     |
| row-click     | 单击某一行时触发                   | Function                                            | 返回当前行的数据，index |
| change        | 当排序和筛选改变时触发             | Function                                            | -                       |
| on-change     | 选中项发生变化时的回调             | Function(keys,selected,selectedRows)                | -                       |
| on-select     | 用户手动选择/取消选择某列的回调    | Function(selectedRow,selected,selectedRows,\$event) | -                       |
| on-select-all | 用户手动选择/取消选择所有列的回调  | Function(selected,selectedRows)                     | -                       |

## Column API

| 属性      | 说明                                                                                                                                                                                | 类型     | 默认值 |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------ |
| title     | 列头显示文字                                                                                                                                                                        | String   | -      |
| key       | 对应列内容的字段名                                                                                                                                                                  | String   | -      |
| width     | 列宽                                                                                                                                                                                | Number   | -      |
| rowSpan   | 行合并单位,为 0 时将不渲染当前行                                                                                                                                                    | Number   | -      |
| colSpan   | 列合并单位,为 0 时将不渲染当前列                                                                                                                                                    | Number   | -      |
| ellipsis  | 超出文字是否隐藏以点点点显示                                                                                                                                                        | Boolean  | false  |
| className | 单元格的 class 名                                                                                                                                                                   | String   | -      |
| render    | 自定义渲染，可传入`class`,`attrs`,`children`,`on` ，可参阅[深入数据对象](https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5%E6%95%B0%E6%8D%AE%E5%AF%B9%E8%B1%A1) | Function | -      |

## Data.Item API

| 属性       | 说明             | 类型    | 默认值 |
| ---------- | ---------------- | ------- | ------ |
| key        | Vue 需要的 key   | String  | -      |
| \_checked  | 选择框是否被选中 | Boolean | false  |
| \_disabled | 选择框是否被禁用 | Boolean | false  |
