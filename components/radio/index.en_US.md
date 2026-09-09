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

## Radio API

| Property   | Description                        | Type                     | Default |
| ---------- | ---------------------------------- | ------------------------ | ------- |
| modelValue | Whether selected (v-model)         | boolean                  | false   |
| checked    | Whether selected                   | boolean                  | false   |
| label      | Text prompt                        | string                   | -       |
| value      | Value when used in combination     | string \| number         | -       |
| name       | Native radio group name            | string                   | -       |
| disabled   | Whether current item is disabled   | boolean                  | false   |
| readonly   | Read-only; cannot be toggled       | boolean                  | false   |
| onChange   | Callback when option state changes | (e: ChangeEvent) => void | -       |

`RadioButton` additionally supports `icon`, `theme`, `size`, and `shape`, and is used through `RadioGroup type="button"`.

Use the standalone [Segmented](../segmented/index.en_US.md) component for slider-style selection. `RadioGroup` no longer supports `theme="card"`.

## RadioGroup API

| Property   | Description                                                                          | Type                              | Default    |
| ---------- | ------------------------------------------------------------------------------------ | --------------------------------- | ---------- |
| modelValue | Used to set the currently selected value. Can use `v-model` for two-way binding data | string \| number                  | -          |
| disabled   | Disable the entire group                                                             | boolean                           | false      |
| readonly   | Whether the group is read-only                                                       | boolean                           | false      |
| size       | Button size                                                                          | SizeType                          | -          |
| direction  | Layout direction                                                                     | 'horizontal' \| 'vertical'        | horizontal |
| shape      | Button shape                                                                         | ShapeType                         | -          |
| theme      | Button theme                                                                         | ThemeType                         | -          |
| onChange   | Triggered when option state changes, returns currently selected item                 | (value: string \| number) => void | -          |
| options    | Can specify child `radio` items                                                      | RadioOption[]                     | -          |
| type       | Use radio or button-style items                                                      | 'radio' \| 'button'               | radio      |
