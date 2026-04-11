# Spin 加载中

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 代码演示

<code src="./demo/container.vue">卡片加载中</code>
<code src="./demo/mode.vue">Spin类型</code>

## Radio API

| 属性       | 说明                                          | 类型                  | 默认值 |
| ---------- | --------------------------------------------- | --------------------- | ------ |
| modelValue | 是否加载状态，可以使用 `v-model` 双向绑定数据 | Boolean               | false  |
| mode       | 展示spin类型,提供4中展示方式                  | String                | -      |
| delay      | 延迟显示加载效果的时间（防止闪烁）            | Number (毫秒)         | 500    |
| size       | 设置加载效果的大小                            | `large,default,small` | -      |
