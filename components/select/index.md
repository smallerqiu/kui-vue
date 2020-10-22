### Select API
| 属性        | 说明                                                       | 类型          | 默认值 |
|-------------|------------------------------------------------------------|---------------|--------|
| value       | 指定选中项目的 `value` 值，可以使用 `v-model` 双向绑定数据 | String,Number | -      |
| width       | 组件宽度                                                   | String,Number | -      |
| placeholder | 选择框默认文字                                             | String        | 请选择 |
| disabled    | 是否禁用当前项                                             | Boolean       | false  |
| mini        | 组件尺寸大小                                               | Boolean       | false  |
| multiple    | 是否呈现多选模式                                           | Boolean       | false  |
| loading     | 是否显示异步加载                                           | Boolean       | false  |
| clearable   | 是否可以清空选项                                           | Boolean       | false  |
| transfer    | 默认渲染到body 上，如定位有问题，请尝试修改为 false        | Boolean       | true   |
| change      | 在选项状态发生改变时触发，返回选择项{value:xx,label:xx}    | Function      | -      |
| open-change | 下拉框展开或收起时触发                                     | Function      | -      |
### Option API
| 属性     | 说明                                   | 类型          | 默认值 |
|----------|----------------------------------------|---------------|--------|
| value    | 选项值，默认根据此属性值进行筛选，必填 | String,Number | -      |
| label    | 选项显示的内容                         | String,Number | -      |
| disabled | 是否禁用当前项                         | Boolean       | false  |