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

- Set the separator via `separator`.

## BreadcrumbItem API

| Property  | Description                                                                   | Type    | Default |
| --------- | ----------------------------------------------------------------------------- | ------- | ------- |
| separator | Custom separator                                                              | String  | /       |
| href      | Custom link function, used with `vue-router`                                  | String  | -       |
| replace   | When routing jumps, enabling `replace` will not add a new record to `history` | Boolean | false   |
| icon      | Button icon                                                                   | String  | -       |
