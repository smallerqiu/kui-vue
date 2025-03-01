## Input API
| 属性                | 说明                                       | 类型             | 默认值 |
| ------------------- | ------------------------------------------ | ---------------- | ------ |
| value               | 绑定的值，可使用 `v-model` 双向绑定        | String 、 Number | -      |
| size                | 按钮尺寸,可选值 `small`、`large`，默认不选 | String           | -      |
| icon                | 输入框图标                                 | String           | -      |
| suffix              | 扩展后缀                                   | String,Slot      | -      |
| prefix              | 扩展前缀                                   | String,Slot      | -      |
| search              | 搜索事件的回调                             | Function         | right  |
| theme               | theme='light' 时呈现浅色主题               | String           | right  |
| clearable           | 是否现示清除按钮                           | Boolen           | false  |
| visiblePassword     | 密码出事化明文显示                         | Boolen           | false  |
| visiblePasswordIcon | 是否显示切换按钮或者控制密码显隐           | Boolen           | true   |


## Input Group API
| 属性    | 说明                                           | 类型   | 默认值 |
| ------- | ---------------------------------------------- | ------ | ------ |
| block   | 是否继承父集宽度                               | Boolen | false  |
| compact | 是否使用紧促模式                               | Boolen | false  |
| size    | 子组件的间距,可选值 `small`、`large`，默认不选 | String | -      |
