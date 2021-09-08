### Rate API
| 属性           | 说明                   | 类型                    | 默认值 |
| -------------- | ---------------------- | ----------------------- | ------ |
| value(v-model) | 当前数，受控值         | Number                  | -      |
| allowClear     | 是否允许再次点击后清除 | Boolean                 | false  |
| allowHalf      | 是否允许半选           | Boolean                 | -      |
| showScore      | 是否显示分数           | Boolean                 | -      |
| character      | 自定义字符             | String                  | -      |
| count          | star 总数              | Number                  | -      |
| disabled       | 只读，无法进行交互     | String                  | -      |
| tooltips       | 自定义每项的提示信息   | String[]                | -      |
| change         | 选择时的回调           | Function(value:number)) | -      |