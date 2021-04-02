### Radio API
| 属性     | 说明                                          | 类型             | 默认值            |
|----------|-----------------------------------------------|------------------|-------------------|
| checked  | 是否选中状态，可以使用 `v-model` 双向绑定数据 | Boolean          | false             |
| label    | 文字提示                                      | String 、 Number | -                 |
| disabled | 是否禁用当前项                                | Boolean          | false             |
| change   | 在选项状态发生改变时回调                      | -                | Function(e:Event) |
### RadioGroup API
| 属性    | 说明                                                                       | 类型                                              | 默认值 |
|---------|----------------------------------------------------------------------------|---------------------------------------------------|--------|
| value   | 只在单独使用时有效。可以使用 `v-model` 双向绑定数据                        | Boolean                                           | false  |
| size    | 按钮尺寸,可选值 `small`、`large`，默认不选                                 | Sting                                             | -      |
| circle  | 针对 `radio-button` 的属性 ，显示圆角                                      | Boolean                                           | false  |
| change  | 在选项状态发生改变时触发，返回当前选中的项                                 | Function                                          | -      |
| options | 可以指定子项 `radio`                                                       | Array <{label:string/number,value:string/number}> | -      |
| type    | 如果使用 `options` 来渲染子集，并且子集为 `button`，需要指定 `type=button` | String                                            | -      |