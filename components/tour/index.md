# Tour 漫游式引导

围绕页面中的真实目标逐步介绍功能。

## 代码演示

[基础用法](./demo/basic.vue)

- 将引导步骤定位到页面中的真实目标。

[弹出位置](./demo/placement.vue)

- 为不同目标指定适合的引导卡片方向。

[受控步骤](./demo/controlled.vue)

- 从外部控制显示状态和当前步骤。

[无遮罩模式](./demo/mask.vue)

- 保留背景内容的可见性和操作感。

## Tour API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue | 显示状态（v-model） | boolean | false |
| defaultOpen | 初始显示状态 | boolean | false |
| current | 当前步骤 | number | - |
| defaultCurrent | 初始步骤 | number | 0 |
| steps | 引导步骤 | TourStep[] | [] |
| mask | 显示遮罩 | boolean | true |
| closable | 显示关闭按钮 | boolean | true |
| onChange | 步骤变化 | function | - |
| onOpenChange | 显示状态变化 | function | - |
| onFinish | 完成引导 | function | - |
