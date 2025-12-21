## Row API
| 属性    | 说明                                                                             | 类型         | 默认值  |
| ------- | -------------------------------------------------------------------------------- | ------------ | ------- |
| align   | flex 布局下的垂直对齐方式：`top` `middle` `bottom`                               | String       | `top`   |
| justify | flex 布局下的水平排列方式：`start` `end` `center` `space-around` `space-between` | String       | `start` |
| gutter  | 栅格间距，单位 px，左右平分,使用数组形式同时设置 [水平间距, 垂直间距]            | Number,Array | -       |
| type    | 布局模式，可选 flex，现代浏览器 下有效                                           | String       |         |
## Col API
| 属性   | 说明                                   | 类型          | 默认值 |
| ------ | -------------------------------------- | ------------- | ------ |
| span   | 栅格的占位格数，可选值为0~24的整数     | Number        | -      |
| offset | 栅格左侧的间隔格数，可选值为1~24的整数 | Number        | -      |
| flex   | flex 布局填充                          | Number,String | -      |