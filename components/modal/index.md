# Modal 对话框

模态对话框。

## 何时使用

- 需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
- 另外当需要一个简洁的确认框询问用户时，可以使用 Modal.confirm() 等语法糖方法。

## 代码演示

[基本用法](./demo/basic.vue)

- 使用 `v-model` 进行数据双向绑定

[自定义](./demo/custom.vue)

- 自定义 `Modal`

[其它属性](./demo/more.vue)

- 不需要页脚时，可以把 `footer` 为`null`

[全局模式](./demo/global.vue)

- 使用 全局模式

[提示框](./demo/confirm.vue)

- 全局的确认提示框，可以异步关闭

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 对话框是否显示，可使用 v-model 双向绑定数据。 | `boolean` | - |
| value | 初始值，仅初始化时读取；后续更新使用 modelValue，同时传入时 modelValue 优先。 | `boolean` | false |
| title | 对话框标题，字符串之外可给 VNode；富内容也可以走 `title` 插槽 | `VNodeChild` | - |
| width | 对话框宽度 | `string \| number` | 520 |
| okText | 确定按钮文字 | `string` | 确定 |
| cancelText | 取消按钮文字 | `string` | 取消 |
| draggable | 弹框是否可拖动, confirm 模式不可用 | `boolean` | false |
| centered | 窗口是否可以居中 , confirm 模式不可用 | `boolean` | false |
| maximized | 弹框是否可以最大化显示 , confirm 模式不可用 | `boolean` | false |
| maskClosable | 是否点击遮罩关闭弹窗（只管遮罩，Esc 由 `escKey` 控制） | `boolean` | false |
| escKey | 是否支持按 Esc 关闭 | `boolean` | true |
| destroyOnClose | 关闭后是否销毁窗口内容。默认销毁（重开时重新挂载）；设为 false 可保留窗口内已填写的表单状态，代价是打开过的窗口留一份隐藏 DOM | `boolean` | true |
| footer | 当`footer=false`时不展示底部按钮 | `boolean` | true |
| loading | 为`true`时此时确定按钮为加载状态 | `boolean` | false |
| top | 窗口距离顶部的距离 | `number` | 100 |
| showClose | 是否展示关闭按钮 | `boolean` | true |
| mask | 是否展示蒙层 | `boolean` | true |
| onOk | 点击确定的回调，`注意：不会关闭 Modal` | `() => void` | - |
| onCancel | 点击取消的回调 | `() => void` | - |
| onClose | 窗口关闭的回调 | `() => void` | - |
| onOpenChange | 窗口关闭时的回调；打开由 `v-model` 决定，不会回写一次 | `(visible: boolean) => void` | - |

### 插槽

- `title`：自定义标题区域。插槽渲染出内容时优先于 `title` 属性；两者都没有时不渲染标题栏（不会留一条空的横边框）。
- `default`：窗口正文。
- `content`：整块替换面板内容，标题栏、正文、底部按钮都不再走默认渲染。
- `footer`：自定义底部区域，替换默认的取消 / 确定按钮；`footer=false` 时整块底部都不渲染。

### onCancel 与 onClose 的分工

关闭这个动作分成两条互不重叠的通道，挂了其中一个，另一个不会跟着响：

- 底部「取消」按钮：只触发 `onCancel`，窗口照样收起，但不走 `onClose`。
- 点遮罩、按 Esc、点右上角关闭按钮：只触发 `onClose`。

想在任何关闭方式下都收到通知，就两个回调都挂；要区分「用户明确取消」和「其他方式关闭」，各挂各的。
`onOk` 不负责关闭，它只挂在确定按钮上，需要关窗请自己在回调里收。
同步开合状态请只挂 `onOpenChange`（或直接用 `v-model`）：取消、遮罩、Esc、右上角这四种关法都会发一次 `update:modelValue` 与 `openChange`，`onCancel` / `onClose` 只告诉你这次是哪条通道关的，不承担状态同步。
四处（Modal / Drawer × React / Vue）统一的顺序：先 `update:modelValue` 与 `openChange` 把开合状态结掉，再 `onCancel` / `onClose` 说这次是哪条通道关的。所以在 `onCancel`、`onClose` 里读到的 `modelValue` 已经是结算后的。
通知只在关闭时发：`modelValue` 翻成 true 时不会回写 `update:modelValue`、也不发 `openChange(true)`——打开本来就是你自己翻的。想在打开时做点什么，watch 那个值。（更早的版本挂载时和翻 true 时各会多回写一次，已去掉，与 React 一致。）

## Modal.method()

组件提供了一些静态方法，使用方式如下

- modal.info(options)
- modal.success(options)
- modal.warning(options)
- modal.error(options)
- modal.confirm(options)

另外提供了全局配置和全局销毁的方法：

- modal.show(options)
- modal.destroyAll()

命令式 Modal 挂载在全局 `body` 下，不属于当前页面组件的生命周期。如果希望切换路由时自动关闭，可以在路由钩子中统一销毁：

```ts
router.afterEach(() => {
  modal.destroyAll();
});
```

参数 options 为对象，具体说明如下：

| 属性       | 说明                                                                                                                       | 类型       | 默认值 |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- | ---------- | ------ |
| title      | 对话框标题，字符串之外可给 VNode                                                                                                        | `VNodeChild` | -      |
| content    | 对话框内容，字符串之外可给 VNode                                                                                          | `VNodeChild` | -      |
| okText     | 确定按钮文字                                                                                                               | string     | 确定   |
| cancelText | 取消按钮文字                                                                                                               | string     | 取消   |
| icon       | 弹框的图标，type 为 toast 可用 ，默认可选值为 success，warning, error, info, 也可以自定义，参照 [Icon](/components/icon)值 | string     | -      |
| color      | 弹框的图标的颜色，type 为 toast 可用                                                                                       | string     | -      |
| type       | `modal.show` 的弹框类型，可选 `info`、`success`、`warning`、`error`、`confirm`                                          | ToastType  | info   |
| onOk       | 点击确定的回调；返回 Promise 时关闭时机交给组件：resolve 后关窗，reject 只停 loading 并保持窗口打开                       | () => void \| PromiseLike | -      |
| onCancel   | 点击取消的回调                                                                                                             | () => void | -      |

### 面板展示

| 属性      | 说明                                          | 类型    | 默认值 |
| --------- | --------------------------------------------- | ------- | ------ |
| panelOnly | 仅渲染对话框面板，不创建遮罩、定位和 Teleport | boolean | false  |
