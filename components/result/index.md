# Result 结果页

用于反馈一系列操作任务的处理结果。

## 代码演示

[Success](./demo/basic.vue?show=vertical)

- 成功的结果。

[Info](./demo/info.vue?show=vertical)

- 展示处理结果。
  [Warning](./demo/warning.vue?show=vertical)

- 警告类型的结果。

[Error](./demo/error.vue?show=vertical)

- 错误反馈。

[自定义](./demo/custom.vue?show=vertical)

- 自定义展示

[404](./demo/404.vue?show=vertical)

- 此页面未找到。

[403](./demo/403.vue?show=vertical)

- 你没有此页面的访问权限。

[500](./demo/500.vue?show=vertical)

- 服务器发生了错误。

## API

| 属性     | 说明       | 类型                                                       | 默认值 |
| -------- | ---------- | ---------------------------------------------------------- | ------ |
| status   | 结果状态   | `success`、`error`、`info`、`warning`、`403`、`404`、`500` | info   |
| title    | 标题       | VNodeChild                                                 | -      |
| subTitle | 副标题     | VNodeChild                                                 | -      |
| icon     | 自定义图标 | IconType                                                   | -      |
