### API
| 属性            | 说明                           | 类型              | 默认值               |
|---------------|------------------------------|-----------------|-------------------|
| checked       | 是否选中状态，可以使用 `v-model` 双向绑定数据 | Boolean         | false             |
| label         | 显示的文字                        | String 、 Number | -                 |
| disabled      | 是否禁用当前项                      | Boolean         | false             |
| indeterminate | 组合辅助选项控制半选状态                 | Boolean         | false             |
| change        | 在选项状态发生改变时回调                 | -               | Function(e:Event) |
| value         | 组合使用时表示的值                    | String,Number   | -                 |
### CheckboxGroup API
| 属性       | 说明                    | 类型                                                | 默认值     |
|----------|-----------------------|---------------------------------------------------|---------|
| value    | 可以使用 `v-model` 双向绑定数据 | Boolean                                           | false   |
| disabled | 是否禁用组件                | Boolean                                           | false   |
| change   | 在选项状态发生改变时触发，返回当前选中的值 | Function                                          | [value] |
| options  | 可以指定子项 `checkbox`     | Array <{label:string/number,value:string/number}> | -       |