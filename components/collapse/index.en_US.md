# Collapse

Content area that can be collapsed/expanded.

## When to Use

- Grouping and hiding complex areas to keep the page tidy.
- 'Accordion' is a special type of collapse panel that only allows a single content area to be expanded.

## Examples

[Basic Usage](./demo/basic.vue)

- By default, one or multiple panels can be expanded at the same time.

[Accordion](./demo/accordion.vue)

- Set `accordion` to allow only one panel to be expanded at a time.

[Nested Panels](./demo/nesting.vue)

- Nested collapse panels.

[Extra Nodes](./demo/extra.vue)

- Multiple panels can be expanded simultaneously.

[Simple Mode](./demo/sample.vue)

- Set `sample` to display a borderless, minimal style.

## API

| Property  | Description                                                                                 | Type                            | Default |
| --------- | ------------------------------------------------------------------------------------------- | ------------------------------- | ------- |
| openKeys  | Keys of expanded panels. Supports two-way binding with `v-model:openKeys`                   | (string \| number)[]            | []      |
| accordion | Whether to enable accordion mode. When enabled, at most one panel can be expanded at a time | boolean                         | false   |
| sample    | Whether to enable simple mode                                                               | boolean                         | false   |
| onChange  | Callback triggered when switching panels, returns the `name` of the current tab             | (key: string \| number) => void | -       |
| theme     | Appearance theme                                                                            | ThemeType                       | outline |
| shape     | Panel shape                                                                                 | ShapeType                       | round   |

## Panel

| Property | Description                   | Type             | Default |
| -------- | ----------------------------- | ---------------- | ------- |
| title    | Panel title                   | VNodeChild       | -       |
| key      | Unique panel identifier       | string \| number | -       |
| disabled | Whether the panel is disabled | boolean          | false   |
| extra    | Extra title content           | Slots            | -       |
