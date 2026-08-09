# FeedbackPanel 反馈面板

用于在页面内容中嵌入状态说明、补充信息和后续操作。

## 代码演示

[基本用法](./demo/basic.vue?show=vertical)

- 基本用法

[反馈类型](./demo/kinds.vue?show=vertical)

- 通过`kind`定义反馈类型

## API

| 属性        | 说明       | 类型                                         | 默认值  |
| ----------- | ---------- | -------------------------------------------- | ------- |
| kind        | 反馈类型   | `positive`、`neutral`、`caution`、`negative` | neutral |
| heading     | 主要说明   | VNodeChild                                   | -       |
| description | 辅助说明   | VNodeChild                                   | -       |
| symbol      | 自定义标记 | IconType                                     | -       |
| compact     | 紧凑显示   | boolean                                      | false   |

支持 `symbol`、`heading`、`description`、`default` 和 `actions` 插槽。
