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

[外观](./demo/appearance.vue)

- `theme` 与其他表面组件共用同一套外观体系，档位落在每一块面板的头部；不写 `theme` 时是 `outline`。

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| openKeys | 当前展开面板的 key，可以使用 `v-model:openKeys` 双向绑定 | `(string \| number)[]` | [] |
| accordion | 是否开启手风琴模式，开启后每次至多展开一个面板 | `boolean` | false |
| sample | 是否开启简洁模式 | `boolean` | false |
| onChange | 切换面板时触发回调，返回当前选项卡的 `name` | `(key: CollapseKey) => void` | - |
| theme | 外观主题 | `"fill" \| "outline" \| "plain" \| "solid" \| "dashed"` | outline |
| shape | 面板形状 | `"square" \| "round"` | round |

## Panel

| 属性     | 说明                   | 类型                            | 默认值 |
| -------- | ---------------------- | ------------------------------- | ------ |
| title    | 面板标题               | VNodeChild                      | -      |
| key      | Panel 的唯一标识       | string \| number                | -      |
| disabled | 是否禁用               | boolean                         | false  |
| extra    | 标题右侧扩展内容       | Slots                           | -      |
| onExpand | 面板切换展开状态时触发 | (key: string \| number) => void | -      |

## 主题

`theme` 支持 `fill`、`outline`、`plain`、`solid`、`dashed` 五种外观，不写 `theme` 时就是 `outline`；`underlined` 是给可输入的控件用的，折叠面板会按 `outline` 呈现。

`solid` 用主色铺满整个面板，标题和行间分割线一起反白，禁用的面板仍保持禁用样式；`dashed` 只把外框换成虚线，行分割线仍是实线。简洁模式（`sample`）不画外框也不画底板，`solid` 时主色落在每一块面板自己身上。
