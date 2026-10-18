# Checkbox

Checkbox for multiple selections.

## When to Use

- When making multiple selections from a set of options.
- Used alone, it can represent switching between two states, similar to a switch. The difference is that switching a switch directly triggers a state change, while a checkbox is generally used for state marking and needs to cooperate with submission operations.

## Examples

[Single Selection](./demo/basic.vue)

- When used alone, a `v-model` value of `true` means checked, and `false` means unchecked.

[Multiple Selection](./demo/group.vue)

- You can use the `options` property to define options, or use child components instead.

[Group Layout](./demo/group-layout.vue)

- Group layout.

[Disabled / Controlled](./demo/disabled.vue)

- Set disabled state via `disabled`.

[Select All](./demo/check-all.vue)

- Select-all combination.

[Themes](./demo/theme.vue)

- A check box has two tiers, and the tier lands on the box rather than the label; checked and disabled always win over it.

## Theme

A check box has two looks: `fill` (a shallow filled square) and `outline` (a bordered one). Leaving `theme` unset gives `fill`, and every value a check box does not paint falls back to `fill` too. The `outline` edge follows `--kui-theme-outline-border`, then `--kui-control-border`, then `--kui-color-border`.

A `CheckboxGroup` passes its own `theme` down to every box it renders, and a stand-alone box inherits from `ConfigProvider`; a box that states its own `theme` or `size` keeps it, and the checked and disabled states always win over the tier.

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| checked | Checked state; supports `v-model:checked` | `boolean` | false |
| label | The text to display | `string \| number` | - |
| value | The value represented when used in combination | `string \| number \| boolean` | - |
| disabled | Whether the current item is disabled | `boolean` | false |
| readonly | Read-only; remains focusable but cannot be toggled | `boolean` | false |
| indeterminate | Combined auxiliary option controls the indeterminate state | `boolean` | false |
| modelValue | Standalone state bound through `v-model` | `string \| number \| boolean` | - |
| theme | Component theme | `"fill" \| "outline"` | fill |
| valueType | The type of output value for the unit option | `"string" \| "number" \| "boolean"` | boolean |
| onChange | Callback when the option state changes | `(event: CheckboxChangeEvent) => void` | - |

## CheckboxGroup API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Selected values; supports `v-model` | `CheckboxValue[]` | - |
| value | Initial value, read only on mount. Use modelValue for subsequent updates; modelValue takes precedence when both are provided. | `CheckboxValue[]` | [] |
| disabled | Whether the component is disabled | `boolean` | false |
| readonly | Whether the group is read-only | `boolean` | false |
| onChange | Triggered when the option state changes, returns the currently selected item and state | `(value: CheckboxValue[]) => void` | - |
| direction | Layout direction | `"horizontal" \| "vertical" \| "inline"` | horizontal |
| options | Can specify child `checkbox` items | `CheckboxOption[]` | - |
| theme | Component theme | `"fill" \| "outline"` | fill |
| size | Checkbox size | `"small" \| "medium" \| "large"` | - |

Each item in `options` also supports `disabled` and `readonly`.
