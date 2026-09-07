# Affix 固钉

将页面元素钉在可视范围。

## 何时使用

当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。
页面可视范围过小时，慎用此功能以免遮挡页面内容。

## 代码演示

[基本用法](./demo/basic.vue)

- 最简单的用法。

[固定状态改变的回调](./demo/callbacks.vue)

- 可以获得是否固定的状态。

[滚动容器](./demo/container.vue)

- 用 `target` 设置 `Affix` 需要监听其滚动事件的元素，默认为 `window`。

[固定在底部](./demo/bottom.vue)

- 使用 `offsetBottom` 将元素固定在可视区域底部。

## API

| 属性         | 说明                                                       | 类型                                | 默认值 |
| ------------ | ---------------------------------------------------------- | ----------------------------------- | ------ |
| offsetTop    | 距离目标顶部达到指定偏移量后触发                           | number                              | 0      |
| offsetBottom | 距离目标底部达到指定偏移量后触发；设置后优先于 `offsetTop` | number                              | -      |
| target       | 设置 Affix 监听的滚动目标                                  | () => Window \| HTMLElement \| null | window |
| change       | 固定状态改变时触发                                         | (affixed: boolean) => void          | -      |
