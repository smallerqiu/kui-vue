# Splitter 分隔面板

## 何时使用

用于编辑器、工作台等需要水平、垂直或嵌套调整区域大小的布局。

## 代码演示

[基本用法](./demo/basic.vue?show=vertical)

- 拖动分隔条调整面板，尺寸以像素返回。

[垂直与嵌套布局](./demo/vertical.vue?show=vertical)

- 面板支持像素、百分比尺寸及最大、最小限制。

[折叠与锁定](./demo/collapsible.vue?show=vertical)

- 悬停分隔条显示折叠按钮，展开时恢复之前的尺寸。锁定的面板不能拖动调整。

[绑定与恢复布局](./demo/controlled.vue?show=vertical)

- 记录面板尺寸，并通过按钮恢复布局。

[参考线拖动](./demo/lazy.vue?show=vertical)

- 拖动时只移动参考线，松开后更新面板，适合图表、编辑器等较重的内容。

## 尺寸与交互

- 请为容器设置可用的宽高。数字尺寸为 px，字符串支持 px 或百分比；百分比以扣除分隔条后的可用空间计算。
- 容器缩放时保留调整后的布局比例；锁定面板优先保持像素尺寸。隐藏后恢复不会重新初始化布局。
- 初始尺寸、拖拽及容器缩放均应用尺寸限制。容器小于最小尺寸之和时，最小尺寸按比例压缩；最大尺寸之和不足时，最后一个展开面板填充余量。
- 折叠保留面板内容，但内容不可聚焦。空间不足时，恢复尺寸会遵守当前限制；至少保留一个面板展开。
- 支持鼠标、触摸和手写笔。聚焦分隔条后，方向键调整 10px，Shift + 方向键调整 1px，Home / End 移至可调整范围边界。拖动时按 Escape 取消并恢复原尺寸。
- `resize` 描述拖动或键盘调整过程；`change` 返回已应用的布局。参考线模式下，拖动过程只触发 `resize`，松开时才更新绑定值。

# API

## Splitter

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 布局方向 | `"horizontal" \| "vertical"` | horizontal |
| modelValue | 当前面板尺寸数组（px），支持 v-model | `number[]` | - |
| value | 初始面板尺寸数组（px），优先于面板的 size | `number[]` | - |
| disabled | 禁用拖拽、键盘调整和折叠按钮 | `boolean` | false |
| lazy | 拖动时只展示参考线，松开后应用尺寸 | `boolean` | false |
| change | 已应用的布局变化时触发，包括容器缩放和折叠 | `(sizes: number[]) => void` | - |
| resize | 拖动或键盘调整时触发；参考线模式返回预览尺寸 | `(sizes: number[]) => void` | - |
| resizeStart | 开始调整尺寸时触发 | `(sizes: number[]) => void` | - |
| resizeEnd | 结束或取消调整尺寸时触发，返回最终尺寸 | `(sizes: number[]) => void` | - |
| collapse | 通过按钮切换面板折叠状态时触发，index 从 0 开始 | `(index: number, collapsed: boolean) => void` | - |

## SplitterPanel

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 初始尺寸；数字为 px，字符串支持 px 或百分比 | `string \| number` | - |
| min | 展开时的最小尺寸；数字为 px，字符串支持 px 或百分比 | `string \| number` | 0 |
| max | 展开时的最大尺寸；数字为 px，字符串支持 px 或百分比 | `string \| number` | - |
| resizable | 是否允许调整此面板；关闭后相邻分隔条不可拖动，面板不可通过按钮折叠 | `boolean` | true |
| collapsible | 是否显示此面板的折叠按钮 | `boolean` | false |
| collapsed | 是否折叠，支持 v-model:collapsed，折叠尺寸为 0 | `boolean` | - |
