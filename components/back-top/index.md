# BackTop 回到顶部

返回页面顶部的操作按钮。

## 何时使用

- 当页面内容区域比较长时；
- 当用户需要频繁返回顶部查看相关内容时。

## 代码演示

[基本用法](./demo/basic.vue)

- 默认位置距离页面右部和底部 50px，滚动至距顶端 100px 时显示。

[自定义按钮](./demo/custom.vue)

- 可以自定义回到顶部按钮的样式 `bottom` 为 `100px`

[自定义滚动容器](./demo/target.vue)

- 使用 `target` 指定需要监听并返回顶部的滚动容器。

## API

| 属性            | 说明                                        | 类型                        | 默认值              |
| --------------- | ------------------------------------------- | --------------------------- | ------------------- |
| height          | 页面滚动高度达到该值时才显示 `BackTop` 组件 | number                      | 100                 |
| bottom          | 组件距离底部的距离                          | string \| number            | 50                  |
| right           | 组件距离右部的距离                          | string \| number            | 50                  |
| behavior        | 滚动行为                                    | 'smooth' \| 'auto'          | smooth              |
| onClick         | 点击按钮时触发                              | (event: MouseEvent) => void | -                   |
| onVisibleChange | 显示状态变化时触发                          | (visible: boolean) => void  | -                   |
| target          | 需要回顶部的容器                            | () => HTMLElement \| null   | () => document.body |
