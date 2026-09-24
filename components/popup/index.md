# Popup 弹层基座

通用锚点弹层。Dropdown 在它之上添加菜单行为；Popup 可承载表单、选择器及任意内容，不预设菜单角色、选择逻辑或焦点圈定。

```vue
<Popup placement="bottom-left" trigger="click" arrow>
  <Button>打开</Button>
  <template #overlay="{ close }">
    <Input placeholder="任意内容" />
    <Button @click="close">完成</Button>
  </template>
</Popup>
```

## 何时使用

需要依附触发元素展示自定义表单、筛选条件或复合面板时使用。菜单操作优先用 Dropdown，带标题的气泡卡片用 Poptip，简单文字提示用 Tooltip。Popup 只负责定位与显隐，不代管选择、表单校验或焦点圈定；需要模态交互时请使用 Modal / Drawer。

default 插槽放触发器，overlay 作用域插槽放弹层内容；.vue 中优先使用插槽，无需调用 h()。受控状态使用 v-model:open。

## 代码演示

[基础用法与自定义内容](./demo/basic.vue)

- 弹层可放输入框、按钮等任意内容，通过弹层提供的 close 方法从内部关闭。默认保留已挂载内容，设置 destroyOnClose 可在关闭动画结束后销毁内容。

[触发方式](./demo/trigger.vue)

- 支持 click、hover、focus 和 contextmenu；右键触发使用鼠标位置。hover 可设置打开和关闭延时，manual 用法见受控示例。

[方位与箭头](./demo/placement.vue)

- 支持 12 个方位，arrow 控制箭头，offset 控制间距；空间不足时会尝试调整方位。

[受控开关与实例方法](./demo/controlled.vue)

- 组件会自行更新显隐状态，可通过事件同步外部状态。可以从实例调用 open / close / updatePosition；示例展示最近一次请求原因。

[自定义挂载容器](./demo/container.vue)

- getPopupContainer 指定挂载节点，默认继承 ConfigProvider 或挂载到 body。容器需建立定位上下文；matchTriggerWidth 让弹层最小宽度与触发器一致，注意祖先的 overflow 可能裁剪弹层。

[嵌套弹层与选择器](./demo/nested.vue)

- 选择内部 Select 选项不会关闭外层；Escape 优先关闭最上层弹层，关闭外层会联动关闭内部弹层。

## Popup API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open | 初始显示状态，后续属性变化会同步内部状态；Vue 支持 v-model:open | `boolean` | - |
| disabled | 禁止交互打开并取消待执行的打开操作，不强制覆盖 open | `boolean` | false |
| placement | 弹层方位，支持 12 个方向 | `"top" \| "top-left" \| "top-right" \| "bottom" \| "bottom-left" \| "bottom-right" \| "left" \| "left-bottom" \| "left-top" \| "right" \| "right-top" \| "right-bottom"` | bottom-left |
| trigger | 触发方式；manual 仅由 open 或实例方法控制 | `"hover" \| "click" \| "focus" \| "contextmenu" \| "manual"` | click |
| arrow | 显示箭头 | `boolean` | false |
| offset | 定位间距（像素） | `number` | 3 |
| openDelay | hover 打开延时（毫秒） | `number` | 0 |
| closeDelay | hover / focus 关闭延时（毫秒） | `number` | 300 |
| closeOnOutsideClick | 外部点击关闭，包含嵌套 Popup 的内容边界 | `boolean` | true |
| closeOnEscape | Escape 关闭最上层 Popup 并还原触发器焦点 | `boolean` | true |
| matchTriggerWidth | 弹层最小宽度不小于触发器 | `boolean` | false |
| getPopupContainer | 挂载容器，默认使用 Config 配置或 body | `(() => HTMLElement \| null \| undefined)` | - |
| destroyOnClose | 退出动画结束后销毁内容；默认保留表单状态 | `boolean` | false |
| target | 可选外部定位锚点；不自动绑定事件，配合 manual 和 open 使用 | `HTMLElement \| Ref<HTMLElement \| { $el: HTMLElement; } \| null, HTMLElement \| { $el: HTMLElement; } \| null>` | - |
| overlay | 弹层内容；Vue 推荐 overlay 插槽 | `VNodeChild` | - |
| onOpenChange | 请求改变显示状态，参数包含原因和原生事件 | `((open: boolean, detail: PopupOpenChangeDetail) => void)` | - |
| onAfterOpen | 进入动画结束 | `(() => void)` | - |
| onAfterClose | 退出动画结束 | `(() => void)` | - |

default 插槽放触发器，overlay 插槽放弹层内容，两者均可访问 PopupRef 方法。

## 包装组件选项

供 Dropdown、Tooltip、Poptip、Popconfirm 适配已有样式和交互。

| 属性                    | 说明                                        | 类型                                            | 默认值    |
| ----------------------- | ------------------------------------------- | ----------------------------------------------- | --------- |
| prefixCls               | 根样式前缀                                  | string                                          | k-popup   |
| transitionName          | 动画类名前缀                                | string                                          | prefixCls |
| panelOnly               | 只渲染内联内容，无定位、触发器或全局事件    | boolean                                         | false     |
| respectDefaultPrevented | 遵循触发器 click 的 preventDefault          | boolean                                         | true      |
| contentStyle            | 内容容器样式                                | CSSProperties                                   | -         |
| hideWhenDetached        | 锚点不在视口时隐藏                          | boolean                                         | false     |
| triggerAttrs            | 传递给触发器的属性                          | Record<string, unknown>                         | -         |
| onTriggerKeydown        | 业务键盘处理，preventDefault 可取消后续行为 | (event: KeyboardEvent, popup: PopupRef) => void | -         |

## 类型与实例方法

| 属性               | 说明                                            | 类型                                   | 默认值   |
| ------------------ | ----------------------------------------------- | -------------------------------------- | -------- |
| raw                | 复用唯一弹层根节点及其 DOM 引用，不增加包装元素 | boolean                                | false    |
| outsideEvent       | 外部点击事件，适配选择器原有的关闭时机          | `click` \| `mousedown`                 | click    |
| transitionDuration | 过渡时长（毫秒）                                | number                                 | CSS 时长 |
| getAnchorPosition  | 可选视口坐标解析函数，用于 Mentions 光标定位    | () => { x: number; y: number } \| null | -        |

Select、TreeSelect、Cascader、AutoComplete、Mentions、DatePicker、ColorPicker 共用此定位与生命周期实现，搜索、选择和键盘导航仍由各业务组件管理。

- PopupTrigger: hover / click / focus / contextmenu / manual.
- PopupOpenChangeDetail: { reason: PopupOpenReason; event?: Event }.
- PopupOpenReason: trigger / hover / focus / contextmenu / outside / escape / programmatic / host.
- PopupRef: open(), close(), updatePosition(), cancelClose(), scheduleClose(), getTriggerElement(), getPopupElement().
- PopupTarget: HTMLElement or Ref<HTMLElement | { $el: HTMLElement } | null>.
- PopupContent: VNodeChild.

open 同时用于初始化和同步状态；交互会更新内部状态并触发 onOpenChange。只有 hover 使用 openDelay。外部 target 仅用于定位。自定义触发器组件须转发属性、事件与 DOM 引用。
