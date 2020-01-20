## Table API
| 属性                | 说明                              | 类型       | 默认值                                         |
|-------------------|---------------------------------|----------|---------------------------------------------|
| bordered          | 是否显示边框                          | Boolean  | false                                       |
| header-fixed      | 是否固定表头                          | Boolean  | false                                       |
| scrollbar-fixed   | 是否表格底部固定横向滚动条                   | Boolean  | false                                       |
| mini              | 表格是否为mini模式                     | Boolean  | false                                       |
| loading           | 表格异步加载模式                        | Boolean  | false                                       |
| data              | 显示的结构化数据                        | Array    | [ ]                                         |
| columns           | 表格列的配置描述，                       | Array    | [ ]                                         |
| noDataText        | 数据为空时显示的提示内容                    | String   | 暂无数据                                        |
| selection         | 多选或单选触发，多选：返回当前所有已经选择的项         |          |                                             |
| 单选：返回所有勾选和 当前选择单项 | Function                        | -        |                                             |
| row-click         | 单击某一行时触发                        | Function | 返回当前行的数据，index                              |
| editor-change     | 当编辑框离开焦点时触发 ，type 为editor 有效    | Function | 依次返回当前列的key，当前行修改之后的数据，当前行修改之前的数据，当前行的index |
| sort-change       | 排序发生改变时处罚                       | Function | 返回当前key值和排序的顺序 asc / desc                   |
| sort-single       | 是否单个排序，当异步执行时，当前触发的排序生效，其他排序不生效 | Boolen   | false                                       |
## Column API
| 属性              | 说明                                                                                        | 类型       | 默认值   |
|-----------------|-------------------------------------------------------------------------------------------|----------|-------|
| type            | 列类型，可选值为 selection、html、editor                                                            | String   | -     |
| title           | 列头显示文字                                                                                    | String   | -     |
| text-align      | 列文字对其方式 ，可选值left，center，right                                                             | String   | -     |
| text-max-length | 表格的字符最大限度，超过部分会以点点点显示                                                                     | Number   | -     |
| key             | 对应列内容的字段名                                                                                 | String   | -     |
| width           | 列宽                                                                                        | Number   | -     |
| overflow        | 当设置列宽 width之后，超出文字是否隐藏以点点点显示                                                              | Boolean  | false |
| tooltip         | 文字过长隐藏之后，鼠标划过 是否展示title                                                                   | Boolean  | false |
| render          | 自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，分别指当前行数据，当前列数据，当前行索引 | Function | -     |