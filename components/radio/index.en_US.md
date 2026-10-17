# Radio

Radio button.

## When to Use

- Used to select a single state from multiple options.
- The legendary choose one of two.

## Examples

[Single Selection](./demo/basic.vue)

- When used alone, the `v-model` value is `true` for selected and `false` for unselected.

[Radio Group](./demo/group.vue)

- You can use the `options` attribute to set options, or use child components to set options.

[Group Layout](./demo/vertical.vue)

- Group layout.

[Disabled / Controllable](./demo/disabled.vue)

- Set `disabled` to make it unavailable.

[Combined with Button](./demo/radio-buttons.vue)

- Combine `RadioGroup` and `RadioButton` for usage.

## Theme

A radio has two looks: `fill` (a shallow filled dot) and `outline` (a bordered one). Leaving `theme` unset gives `fill`, and every value a radio does not paint falls back to `fill` too. The `outline` edge follows `--kui-theme-outline-border`, then `--kui-control-border`, then `--kui-color-border`.

A `RadioGroup` passes its own `theme` down to every option it renders; an option that states its own `theme` or `size` (a button also has `shape`) keeps it. In the `type="button"` style only `fill` switches to the joined layout with one divider between buttons; every other tier keeps the buttons' own adjacent borders.

## Radio API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Whether selected (v-model) | `boolean` | false |
| checked | Whether selected | `boolean` | false |
| label | Text prompt | `string` | - |
| value | Value when used in combination | `string \| number` | - |
| name | Native radio group name | `string` | - |
| disabled | Whether current item is disabled | `boolean` | false |
| readonly | Read-only; cannot be toggled | `boolean` | false |
| theme | Component theme | `"fill" \| "outline"` | fill |
| onChange | Callback when option state changes | `(event: ChangeEvent) => void` | - |

### RadioButton API

`RadioButton` supports Radio properties and adds:

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| icon | Button icon | `IconType[]` | - |
| theme | Button appearance | `"fill" \| "outline" \| "plain" \| "solid" \| "dashed"` | - |
| size | Button size | `"small" \| "medium" \| "large"` | - |
| shape | Button shape | `"default" \| "circle" \| "square" \| "round"` | - |

Use `RadioButton` through `RadioGroup type="button"`.

Use the standalone [Segmented](../segmented/index.en_US.md) component for slider-style selection. `RadioGroup` no longer supports `theme="card"`.

## RadioGroup API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Used to set the currently selected value. Can use `v-model` for two-way binding data | `string \| number` | - |
| value | Initial value, read only on mount. Use modelValue for subsequent updates; modelValue takes precedence when both are provided. | `string \| number` | - |
| disabled | Disable the entire group | `boolean` | false |
| readonly | Whether the group is read-only | `boolean` | false |
| size | Button size | `"small" \| "medium" \| "large"` | - |
| direction | Layout direction | `"horizontal" \| "vertical" \| "inline"` | horizontal |
| shape | Button shape | `"default" \| "circle" \| "square" \| "round"` | - |
| theme | Radio option appearance; the button's theme when `type="button"` | `"fill" \| "outline" \| "plain" \| "solid" \| "dashed"` | - |
| onChange | Triggered when option state changes, returns currently selected item | `(value: string \| number) => void` | - |
| options | Can specify child `radio` items | `RadioOption[]` | - |
| type | Use radio or button-style items | `"button" \| "radio"` | radio |
