## API
| 属性             | 说明                                                                         | 类型                  | 默认值        |
|----------------|----------------------------------------------------------------------------|---------------------|------------|
| value          | 默认时间值                                                                      | Date, Array, String | -          |
| disabled       | 是否禁用                                                                       | Boolen              | false      |
| mini           | 组件尺寸大小                                                                     | Boolean             | false      |
| rangeSeparator | 日期区间间隔符                                                                    | String              | ～          |
| clearable      | 是否显示清除图标                                                                   | Boolean             | false      |
| placeholder    | 提示语                                                                        | String              | -          |
| lang           | 本地化，提供2中语言切换 中英，zh，en                                                      | String              | zh         |
| transfer       | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 | Boolean             | false      |
| disabledDate   | 范围分离                                                                       | Function            | -          |
| format         | 时间格式化，支持YYYY-MM-DD HH:mm:ss                                                | String              | YYYY-MM-DD |
| change         | 默认值改变之后的回调，返回当前选择的时间，字符串                                                   | Function            | -          |
