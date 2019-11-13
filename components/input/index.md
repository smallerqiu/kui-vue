### API
| 属性          | 说明                                                           | 类型              | 默认值   |
|-------------|--------------------------------------------------------------|-----------------|-------|
| type        | 输入框类型，可选值为 `text`、`password`、`textarea`、`url`、`email`、`date` | String          | text  |
| width       | 组件的宽度                                                        | String,Number   | 200   |
| value       | 绑定的值，可使用 `v-model` 双向绑定                                      | String 、 Number | -     |
| mini        | 是否展示小尺寸，仅在 `text` 类型下有效                                      | Boolean         | false |
| large       | 是否展示大尺寸，仅在 `text` 类型下有效                                      | Boolean         | false |
| icon        | 输入框图标，仅在 `text` 类型下有效                                        | String          | -     |
| icon-align  | 输入框图标位置，可选值为 `left`、`right`，仅在 `type=text` 类型下有效             | String          | right |
| placeholder | 占位文本                                                         | String          | -     |
| rows        | 文本域默认行数，仅在 `textarea` 类型下有效                                  | Number          | 2     |
| number      | 将用户的输入转换为 `Number` 类型                                        | Boolean         | false |
| icon-click   | `icon` 的点击事件                                                 | Function        | -     |