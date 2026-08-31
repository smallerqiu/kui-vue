# Result

Presents the outcome of an operation or task.

## Examples

[Success](./demo/basic.vue?show=vertical)

- Display successful result feedback.

[Info](./demo/info.vue?show=vertical)

- Display information result page.

[Warning](./demo/warning.vue?show=vertical)

- Display warning result information.

[Error](./demo/error.vue?show=vertical)

- Display error operation result.

[Custom](./demo/custom.vue?show=vertical)

- Customize result page content and actions.

[404](./demo/404.vue?show=vertical)

- Page not found error page.

[403](./demo/403.vue?show=vertical)

- Permission denied error page.

[500](./demo/500.vue?show=vertical)

- Server error page.

## API

| Property | Description   | Type                                                                   | Default |
| -------- | ------------- | ---------------------------------------------------------------------- | ------- |
| status   | Result status | 'success' \| 'error' \| 'info' \| 'warning' \| '403' \| '404' \| '500' | info    |
| title    | Title         | VNodeChild                                                             | -       |
| subTitle | Subtitle      | VNodeChild                                                             | -       |
| icon     | Custom icon   | IconType                                                               | -       |
