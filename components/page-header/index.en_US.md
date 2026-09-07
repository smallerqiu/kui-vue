# PageHeader

Provides a consistent layout for page titles, descriptions and actions.

## Demos

[Basic](./demo/basic.vue?show=vertical)

- Combine a page title, description and common actions.

[Full structure](./demo/slots.vue?show=vertical)

- Compose breadcrumbs, a back action, title and actions, then combine with `ListPanel` to build a list page.

[Simple header](./demo/simple.vue?show=vertical)

- Render a title and description using props only.

## API

| Property    | Description                                       | Type                 | Default |
| ----------- | ------------------------------------------------- | -------------------- | ------- |
| title       | Page title, customizable via the named slot       | string \| VNodeChild | -       |
| description | Page description, customizable via the named slot | string \| VNodeChild | -       |
| breadcrumb  | Breadcrumb area                                   | VNodeChild           | -       |
| back        | Back action area                                  | VNodeChild           | -       |
| actions     | Page actions                                      | VNodeChild           | -       |
