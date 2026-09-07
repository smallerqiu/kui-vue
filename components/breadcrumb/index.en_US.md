# Breadcrumb

Displays the current page's position in the system hierarchy and allows navigation upwards.

## When to Use

- When the system has more than two levels of hierarchy.
- When you need to inform the user 'where you are'.
- When upward navigation functionality is needed.

## Examples

[Basic Usage](./demo/basic.vue)

- Add navigation links via `href`.

[Set Icon](./demo/icon.vue)

- Set the icon via `icon`.

[Separator](./demo/separator.vue)

- Set the separator via the `separator` property or slot.

## Breadcrumb API

| Property  | Description      | Type                 | Default |
| --------- | ---------------- | -------------------- | ------- |
| separator | Custom separator | string \| VNodeChild | `/`     |

## BreadcrumbItem API

| Property | Description           | Type       | Default |
| -------- | --------------------- | ---------- | ------- |
| href     | Link URL              | string     | -       |
| target   | Link browsing context | string     | -       |
| rel      | Link relationship     | string     | -       |
| icon     | Item icon             | IconType[] | -       |
