# Tabs 标签页

选项卡切换组件。

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。
- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。

## 代码演示

<code src="./demo/card.vue">卡片式页签</code>
<code src="./demo/centered.vue">居中</code>
<code src="./demo/closable.vue">新增和关闭页签</code>
<code src="./demo/disabled.vue">禁用</code>
<code src="./demo/extra.vue">附加内容</code>
<code src="./demo/icon.vue">图标</code>
<code src="./demo/sample.vue">极简式页签</code>

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
