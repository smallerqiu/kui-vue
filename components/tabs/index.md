# Tabs 标签页

选项卡切换组件。

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。
- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。

## 代码演示

[卡片式页签](./demo/card.vue)

- 另一种样式的页签。

[居中](./demo/centered.vue)

- 标签居中展示。

[新增和关闭页签](./demo/closable.vue)

- 只有卡片样式的页签支持新增和关闭选项。 使用 `closable={false}` 禁止关闭。

[禁用](./demo/disabled.vue)

- 禁用某一项。

[附加内容](./demo/extra.vue)

- 可以在页签右边添加附加操作。

[图标](./demo/icon.vue)

- 有图标的标签。

[极简式页签](./demo/sample.vue)

- 简单的卡片呈现模式。

## Tabs API

| 属性                 | 说明                                  | 类型                | 默认值 |
| -------------------- | ------------------------------------- | ------------------- | ------ |
| v-model(:modelValue) | 当前激活 tab 面板的 key               | String              | -      |
| card                 | 页签样式是否为卡片样式                | Boolean             | false  |
| sample               | 页签样式是否为简洁样式                | Boolean             | false  |
| animated             | 是否使用动画切换 Tabs                 | Boolean             | true   |
| remove               | tab关闭时的回调，返回关闭的tab的key值 | Function(activeKey) | -      |
| change               | 切换面板的回调                        | Function(activeKey) | -      |
| tab-click            | tab点击时的回调                       | Function(activeKey) | -      |

## Tabs.TabPanel API

| 属性     | 说明                | 类型    | 默认值 |
| -------- | ------------------- | ------- | ------ |
| key      | vue需要的key值      | String  | -      |
| title    | 选项卡头显示文字    | String  | -      |
| icon     | 选项卡头显示的图标  | String  | -      |
| disabled | tab是否被禁用       | Boolean | false  |
| closable | tab是否显示关闭按钮 | Boolean | false  |
