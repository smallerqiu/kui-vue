# Collapse

Content area that can be collapsed/expanded.

## When to Use

- Grouping and hiding complex areas to keep the page tidy.
- 'Accordion' is a special type of collapse panel that only allows a single content area to be expanded.

## Examples

<code src="./demo/basic.vue">Basic Usage</code>
<code src="./demo/extra.vue">Extra Nodes</code>
<code src="./demo/nesting.vue">Nested Panels</code>
<code src="./demo/sample.vue">Simple Mode</code>

## API

| Property  | Description                                                                                 | Type     | Default |
| --------- | ------------------------------------------------------------------------------------------- | -------- | ------- |
| openKeys  | The `name` of the currently expanded panel. Can use `v-model:openKeys` for two-way binding  | Array    | -       |
| accordion | Whether to enable accordion mode. When enabled, at most one panel can be expanded at a time | Boolean  | false   |
| sample    | Whether to enable simple mode                                                               | Boolean  | false   |
| change    | Callback triggered when switching panels, returns the `name` of the current tab             | Function | -       |

## Panel

| Property | Description                             | Type   | Default |
| -------- | --------------------------------------- | ------ | ------- |
| title    | The title of the currently active panel | String | -       |
| key      | The key required by Vue                 | String | -       |
| extra    | Card title extension                    | slot   | -       |
