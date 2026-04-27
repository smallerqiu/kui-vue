# Collapse 折叠面板

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- ‘手风琴’ 是一种特殊的折叠面板，只允许单个内容区域展开。

## 代码演示

[基本用法](./demo/basic.vue)

- 默认可以同时展开一个或者多个面板

[手风琴](./demo/accordion.vue)

- 设置 `accordion` 只允许同时展开一个面板

[嵌套面板](./demo/nesting.vue)

- 嵌套折叠面板。

[额外节点](./demo/extra.vue)

- 可以同时展开多个面板。

[简洁模式](./demo/sample.vue)

- 设置 `sample` 呈现没有边框的简洁样式。

## API

| 属性      | 说明                                                          | 类型     | 默认值 |
| --------- | ------------------------------------------------------------- | -------- | ------ |
| openKeys  | 当前展开的面板的 `name`，可以使用 `v-model:openKeys` 双向绑定 | Array    | -      |
| accordion | 是否开启手风琴模式，开启后每次至多展开一个面板                | Boolean  | false  |
| sample    | 是否开启简洁模式                                              | Boolean  | false  |
| onChange    | 切换面板时触发回调，返回当前选项卡的 `name`                   | Function | -      |

## Panel

| 属性  | 说明                 | 类型   | 默认值 |
| ----- | -------------------- | ------ | ------ |
| title | 当前激活的面板的标题 | String | -      |
| key   | Vue 所需要的key      | String | -      |
| extra | 卡片标题扩展         | slot   | -      |
