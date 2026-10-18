# FeedbackPanel 反馈面板

用于在页面内容中嵌入状态说明、补充信息和后续操作。

## 代码演示

[基本用法](./demo/basic.vue?show=vertical)

- 基本用法

[反馈类型](./demo/kinds.vue?show=vertical)

- 通过`kind`定义反馈类型

[外观](./demo/appearance.vue?show=vertical)

- `theme` 只决定面板自己铺多少表面，左侧 4px 状态色带和图标属于内容，五档外观都不会改掉它。

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| kind | 反馈类型 | `"positive" \| "negative" \| "caution" \| "neutral"` | neutral |
| heading | 主要说明 | `VNodeChild` | - |
| description | 辅助说明 | `VNodeChild` | - |
| symbol | 自定义标记 | `IconType[]` | - |
| compact | 紧凑显示 | `boolean` | false |
| theme | 外观主题 | `"fill" \| "outline" \| "plain" \| "solid" \| "dashed"` | outline |
| shape | 面板形状 | `"square" \| "round"` | round |

## 主题

`theme` 支持 `fill`、`outline`、`plain`、`solid`、`dashed` 五种外观，不写 `theme` 时就是 `outline`；`underlined` 是给可输入的控件用的，反馈面板会按 `outline` 呈现。

`solid` 用主色铺满整个面板，标题、描述、详情块和图标底片一起反白；左边那条状态色带报的是 `kind`，属于内容而不是外壳，五种外观都不会改掉它。
