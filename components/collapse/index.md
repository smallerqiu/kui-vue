# Collapse 折叠面板

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- ‘手风琴’ 是一种特殊的折叠面板，只允许单个内容区域展开。

## 代码演示

<code src="./demo/basic.vue">基本用法</code>
<code src="./demo/extra.vue">额外节点</code>
<code src="./demo/nesting.vue">嵌套面板</code>
<code src="./demo/sample.vue">简洁模式</code>

## API

| 属性      | 说明                                                          | 类型     | 默认值 |
| --------- | ------------------------------------------------------------- | -------- | ------ |
| openKeys  | 当前展开的面板的 `name`，可以使用 `v-model:openKeys` 双向绑定 | Array    | -      |
| accordion | 是否开启手风琴模式，开启后每次至多展开一个面板                | Boolean  | false  |
| sample    | 是否开启简洁模式                                              | Boolean  | false  |
| change    | 切换面板时触发回调，返回当前选项卡的 `name`                   | Function | -      |

## Panel

| 属性  | 说明                 | 类型   | 默认值 |
| ----- | -------------------- | ------ | ------ |
| title | 当前激活的面板的标题 | String | -      |
| key   | Vue 所需要的key      | String | -      |
| extra | 卡片标题扩展         | slot   | -      |
