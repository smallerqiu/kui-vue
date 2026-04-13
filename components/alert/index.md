# Alert 警告提示

警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 代码演示

[基本用法](./demo/basic.vue)

- 通过 `type` 来控制展示类型

[图标](./demo/icon.vue)

- `showIcon` 来设置是否显示图标

[可关闭](./demo/close.vue)

- `closable` 来控制是否显示可关闭按钮,平滑、自然隐藏关闭

[自定义图标](./demo/custom-icon.vue)

- `showIcon` 来设置是否显示图标

## API

| 属性        | 说明                                                                | 类型         | 默认值  |
| ----------- | ------------------------------------------------------------------- | ------------ | ------- |
| type        | 按钮类型，可选值为 `success`、`info`、`warning`、`error` 或者不设置 | String       | warning |
| message     | 警告提示内容                                                        | String，Slot | -       |
| description | 警告提示的辅助性文字介绍                                            | String       | -       |
| showIcon    | 是否显示图标                                                        | Boolean      | false   |
| bordered    | 是否展示边框                                                        | Boolean      | false   |
| closable    | 是否显示关闭按钮                                                    | Boolean      | false   |
| close       | 关闭时触发的回调函数                                                | Function     | -       |
| icon        | 自定义的图标                                                        | Array        | -       |
