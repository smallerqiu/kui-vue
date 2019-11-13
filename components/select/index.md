### Select API
| 属性          | 说明                                      | 类型            | 默认值         |
|-------------|-----------------------------------------|---------------|-------------|
| value       | 指定选中项目的 `value` 值，可以使用 `v-model` 双向绑定数据 | String,Number | -           |
| width       | 组件宽度                                    | String,Number | -           |
| placeholder | 选择框默认文字                                 | String        | 请选择         |
| disabled    | 是否禁用当前项                                 | Boolean       | false       |
| clearable   | 是否可以清空选项                                | Boolean       | false       |
| change      | 在选项状态发生改变时触发，返回选择项{value:xx,label:xx}   | Function      | -           |
| open-change | 下拉框展开或收起时触发                             | Function      | true， false |
### Option API
| 属性       | 说明                                                                       | 类型            | 默认值   |
|----------|--------------------------------------------------------------------------|---------------|-------|
| value    | 选项值，默认根据此属性值进行筛选，必填                                                      | String,Number | -     |
| label    | 选项显示的内容                                                                  | String,Number | -     |
| mini     | 组件尺寸大小                                                                   | Boolean       | false |
| disabled | 是否禁用当前项                                                                  | Boolean       | false |
| transfer | 是否将弹层放置于 `body` 内，在 `Tabs` 带有 `fixed` 的 `Table` 列内使用时，建议添加此属性，它将不受父级样式影响 | Boolean       | false |