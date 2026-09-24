# Alert

Warning prompts to display information that needs attention.

## When to Use

- When a page needs to display warning information to the user.
- A non-overlay static display form, always displayed, does not disappear automatically, users can click to close.

## Examples

[Basic Usage](./demo/basic.vue)

- Control the display type via `type`.

[Icon](./demo/icon.vue)

- Use `showIcon` to control whether the icon is displayed.

[Closable](./demo/close.vue)

- Use `closable` to control whether the close button is displayed, with smooth and natural closing animation.

[Custom Icon](./demo/custom-icon.vue)

- Use `showIcon` to control whether the icon is displayed.

## Closing

Clicking the close button triggers `close`. After the exit animation, the content is removed and `afterClose` fires.

To unmount the entire component after closing, update the parent state in `afterClose` and use `v-if`.

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Alert type, optional values are `success`, `info`, `warning`, `error` or not set | `"info" \| "success" \| "warning" \| "error"` | warning |
| message | Alert content | `string` | - |
| description | Auxiliary text introduction for the alert | `string` | - |
| showIcon | Whether to show the icon | `boolean` | false |
| closable | Whether to show the close button | `boolean` | false |
| bordered | Whether to display the border | `boolean` | false |
| onClose | Triggered when the close button is clicked | `(event: MouseEvent) => void` | - |
| onAfterClose | Triggered after the exit animation | `() => void` | - |
| icon | Custom icon | `IconType[]` | - |
| theme | Appearance: `default`, `fill`, `outline`, or `plain` | `"default" \| "fill" \| "outline" \| "plain" \| "solid" \| "dashed" \| "underlined"` | default |
| shape | Shape: `round`, `circle`, or `square` | `"default" \| "circle" \| "square" \| "round"` | round |
