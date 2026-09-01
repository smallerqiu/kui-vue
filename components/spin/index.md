# Spin 加载中

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 代码演示

[基本用法](./demo/basic.vue)

- 一个简单的 loading 状态。

[卡片加载中](./demo/container.vue)

- 可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。

[Spin类型](./demo/mode.vue)

- 可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。

## Spin API

| 属性       | 说明                                          | 类型                       | 默认值 |
| ---------- | --------------------------------------------- | -------------------------- | ------ |
| modelValue | 是否加载状态，可以使用 `v-model` 双向绑定数据 | boolean                    | true   |
| mode       | 加载动画类型                                  | bounce\|flip\|rotate\|zoom | rotate |
| delay      | 延迟关闭加载效果的时间（防止闪烁）            | number                     | 500    |
| size       | 加载效果的尺寸                                | small\|medium\|large       | medium |
