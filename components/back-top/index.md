# BackTop 回到顶部

返回页面顶部的操作按钮。

## 何时使用

- 当页面内容区域比较长时；
- 当用户需要频繁返回顶部查看相关内容时。

## 代码演示

[基本用法](./demo/custom.vue)
- 可以自定义回到顶部按钮的样式 `bottom` 为 `100px`


## API

| 属性   | 说明                                        | 类型          | 默认值            |
| ------ | ------------------------------------------- | ------------- | ----------------- |
| height | 页面滚动高度达到该值时才显示 `BackTop` 组件 | String,Number | 100               |
| bottom | 组件距离底部的距离                          | String,Number | 40                |
| right  | 组件距离右部的距离                          | String,Number | 50                |
| click  | 点击按钮时触发                              | Function      | -                 |
| target | 需要回顶部的容器                            | Function      | ()=>document.body |
