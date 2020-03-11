### API
| 属性        | 说明                              | 类型             | 默认值   |
|-----------|---------------------------------|----------------|-------|
| value     | 当前激活的面板的 `name`，可以使用 `v-model` 双向绑定 | Array , String | -     |
| accordion | 是否开启手风琴模式，开启后每次至多展开一个面板         | Boolean        | false |
| sample    | 是否开启简洁模式                        | Boolean        | false |
| change    | 切换面板时触发回调，返回当前选项卡的 `name`        | Function       | -     |