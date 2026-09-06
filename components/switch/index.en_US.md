# Switch

Switch selector.

## When to Use

- When representing switch state/transition between two states.
- The difference from checkbox is that switching a switch directly triggers a state change, while checkbox is generally used for state marking and needs to cooperate with submission operations.

## Examples

[Basic Usage](./demo/basic.vue)

- Can use `v-model` for two-way data binding.

[Text / Icon](./demo/with-text.vue)

- Use `true-text` and `false-text` to set the text displayed when selected and unselected. Use the `slot` `(checked|unchecked)` to control the content.

[Disabled / Controllable](./demo/disabled.vue)

- Use the `disabled` attribute to set whether the component is disabled.

[Two Sizes](./demo/size.vue)

- `size="small"` indicates a small switch.

[Loading](./demo/loading.vue)

- Indicates that the switch operation is still in progress.

### API

| Property           | Description                                                            | Type                                         | Default |
| ------------------ | ---------------------------------------------------------------------- | -------------------------------------------- | ------- |
| checked            | Boolean checked state; supports two-way binding with `v-model:checked` | boolean                                      | false   |
| modelValue         | Value bound through `v-model`                                          | string \| number \| boolean                  | -       |
| disabled           | Disable switch                                                         | boolean                                      | false   |
| readonly           | Read-only; remains focusable but cannot be toggled                     | boolean                                      | false   |
| loading            | Show a loading state and disable interaction                           | boolean                                      | false   |
| type               | Theme color, can pass `success`, `warning`, `danger`, `primary`        | string                                       | -       |
| color              | Custom checked color; takes precedence over `type`                     | string                                       | -       |
| size               | Component size, when value is `small` displays small size              | string                                       | -       |
| checked(unchecked) | Content when selected (not selected)                                   | slot                                         | -       |
| true-text          | Text displayed when `checked` is `true`                                | string                                       | -       |
| false-text         | Text displayed when `checked` is `false`                               | string                                       | -       |
| valueType          | The type of output value for the unit option                           | 'string' \| 'number' \| 'boolean'            | boolean |
| onChange           | Triggered on change; output type is determined by `valueType`          | (value: string \| number \| boolean) => void | -       |
| shape              | Switch shape: `round` or `square`                                      | ShapeType                                    | round   |
