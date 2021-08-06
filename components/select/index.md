### Select API
| 属性        | 说明                                                       | 类型                           | 默认值 |
|-------------|------------------------------------------------------------|--------------------------------|--------|
| value       | 指定选中项目的 `value` 值，可以使用 `v-model` 双向绑定数据 | String,Number                  | -      |
| width       | 组件宽度                                                   | String,Number                  | -      |
| placeholder | 选择框默认文字                                             | String                         | 请选择 |
| disabled    | 是否禁用当前项                                             | Boolean                        | false  |
| size        | 组件尺寸大小,提供`small`,`large`两种尺寸，默认为正常       | String                         | -      |
| multiple    | 是否呈现多选模式                                           | Boolean                        | false  |
| loading     | 是否显示异步加载                                           | Boolean                        | false  |
| clearable   | 是否可以清空选项                                           | Boolean                        | false  |
| bordered    | 是否显示边框                                               | Boolean                        | true   |
| showArrow   | 是否显示下拉按钮                                           | Boolean                        | true   |
| transfer    | 默认渲染到body 上，如定位有问题，请尝试修改为 false        | Boolean                        | true   |
| change      | 在选项状态发生改变时触发，返回选择项{value:xx,label:xx}    | Function                       | -      |
| open-change | 下拉框展开或收起时触发                                     | Function                       | -      |
| options     | options 数据，如果设置则不需要手动构造 Option 节点         | Array <{value,label,disabled}> | []     |

### Option API
| 属性     | 说明                                                                                         | 类型          | 默认值 |
|----------|----------------------------------------------------------------------------------------------|---------------|--------|
| key      | 和 value 含义一致。如果 Vue 需要你设置此项，此项值与 value 的值相同，然后可以省略 value 设置 | String,Number | -      |
| value    | 选项值，默认根据此属性值进行筛选，必填                                                       | String,Number | -      |
| label    | 选项显示的内容                                                                               | String,Number | -      |
| disabled | 是否禁用当前项                                                                               | Boolean       | false  |