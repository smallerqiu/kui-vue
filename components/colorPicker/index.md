### API
| 属性           | 说明                                                 | 类型     | 默认值 |
| -------------- | ---------------------------------------------------- | -------- | ------ |
| value          | 当前激活的面板的 `name`，可以使用 `v-model` 双向绑定 | String   | -      |
| mode           | 颜色展示类型,提供3种模式(`hex` 、 `rgba` 、`hsla`)   | String   | 'hex'  |
| default-colors | 自定义颜色盘,最多20种                                | Array    | [...]  |
| show-mode      | 是否展示颜色模式                                     | Boolean  | false  |
| show-arrow     | 是否展示下拉箭头                                     | Boolean  | true   |
| icon           | 自定义下拉箭头                                       | Boolean  | true   |
| shape          | shape='circle' 呈现圆形                              | String   | -      |
| change         | 颜色值改变的时候触发,返回颜色的值                    | Function | -      |