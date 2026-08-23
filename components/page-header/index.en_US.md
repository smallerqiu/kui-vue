# PageHeader

Provides a consistent layout for page titles, descriptions and actions.

## Demos

[Basic](./demo/basic.vue?show=vertical)

- Combine a page title, description and common actions.

[Full structure](./demo/slots.vue?show=vertical)

- Compose breadcrumbs, back action, title, actions and additional content with slots.

[Simple header](./demo/simple.vue?show=vertical)

- Render a title and description using props only.

## API

| Property    | Description      | Type   | Default |
| ----------- | ---------------- | ------ | ------- |
| title       | Page title       | string | -       |
| description | Page description | string | -       |

## Slots

| Name        | Description                          |
| ----------- | ------------------------------------ |
| title       | Custom title                         |
| description | Custom description                   |
| breadcrumb  | Breadcrumb area                      |
| back        | Back action area                     |
| actions     | Page actions                         |
| default     | Additional content below the heading |
