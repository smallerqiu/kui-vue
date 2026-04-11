# Breadcrumb

Displays the current page's position in the system hierarchy and allows navigation upwards.

## When to Use

- When the system has more than two levels of hierarchy.
- When you need to inform the user 'where you are'.
- When upward navigation functionality is needed.

## Examples

<code src="./demo/icon.vue">Set Icon</code>
<code src="./demo/separator.vue">Separator</code>

## BreadcrumbItem API

| Property  | Description                                                                   | Type    | Default |
| --------- | ----------------------------------------------------------------------------- | ------- | ------- |
| separator | Custom separator                                                              | String  | /       |
| to        | Custom link function, used with `vue-router`                                  | String  | -       |
| replace   | When routing jumps, enabling `replace` will not add a new record to `history` | Boolean | false   |
| icon      | Button icon                                                                   | String  | -       |
