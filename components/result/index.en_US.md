# Result

Presents the outcome of an operation or task.

## Examples

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

| Property | Description   | Type                                                       | Default |
| -------- | ------------- | ---------------------------------------------------------- | ------- |
| status   | Result status | `success`, `error`, `info`, `warning`, `403`, `404`, `500` | info    |
| title    | Title         | VNodeChild                                                 | -       |
| subTitle | Subtitle      | VNodeChild                                                 | -       |
| icon     | Custom icon   | IconType                                                   | -       |
