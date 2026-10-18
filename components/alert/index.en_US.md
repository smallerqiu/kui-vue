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

[Appearance](./demo/appearance.vue)

- `type` picks the colour and `theme` only decides how much of it shows; `solid` spreads that same semantic colour rather than the primary, and inverts the text, icon and close button.

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
| theme | Surface theme | `"fill" \| "outline" \| "plain" \| "solid" \| "dashed"` | fill |
| shape | Shape: `round`, `circle`, or `square` | `"default" \| "circle" \| "square" \| "round"` | round |

## Theme

`theme` supports five looks — `fill`, `outline`, `plain`, `solid`, `dashed` — and is `fill` when you write nothing. `underlined` belongs to a control you type into, so an alert falls back to `fill`.

The `type` picks the colour and `theme` picks how far it goes: `fill` is that colour's pale plate, `solid` fills the box with the same colour at full strength and inverts its text, its mark and its close button, so an error and a success stay two different colours instead of both turning primary. `outline` and `plain` carry no plate and take the library's border colour; `dashed` only turns the outer frame into a dashed line. `bordered` is a separate ask — it moves the alert's own tint onto the frame.
