## API
| 属性     | 说明                                         | 类型                | 默认值 |
| -------- | -------------------------------------------- | ------------------- | ------ |
| animated | 是否展示动画效果                             | Boolean             | false  |
| avatar   | 是否显示头像占位图                           | Boolean,AvatarProps | false  |
| loading  | 为 true 时，显示占位图。反之则直接展示子组件 | Boolean             | -      |
| rows     | 设置段落占位图的行数                         | Number              | 3      |
| width    | 设置标题占位图的宽度                         | Number(%)           | 35     |
| delay    | 防抖(动画延迟关闭)                           | Number(毫秒)        | 500    |

## Avatar Props
| 属性     | 说明                     | 类型                                | 默认值 |
| -------- | ------------------------ | ----------------------------------- | ------ |
| animated | 是否展示动画效果         | Boolean                             | false  |
| shape    | 指定头像的形状           | circle \| square                    | false  |
| size     | 设置头像占位图的大小     | number \| large \| small \| default | -      |
| radius   | 设置头像占位图的圆角大小 | number                              | -      |

## Button Props
| 属性     | 说明                           | 类型                       | 默认值 |
| -------- | ------------------------------ | -------------------------- | ------ |
| animated | 是否展示动画效果               | Boolean                    | false  |
| shape    | 指定头像的形状                 | circle \| round \| default | -      |
| size     | 设置按钮的大小                 | large \| small \| default  | -      |
| block    | 将按钮宽度调整为其父宽度的选项 | Boolean                    | -      |