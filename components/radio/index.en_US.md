# Radio

Radio button.

## When to Use

- Used to select a single state from multiple options.
- The legendary choose one of two.

## Examples

[Single Selection](./demo/basic.vue)

- When used alone, the `v-model` value is `true` for selected and `false` for unselected.

[Multiple Selection](./demo/group.vue)

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
| modelValue | Whether selected (v-model)         | bool                     | false   |
| checked    | Whether selected                   | bool                     | false   |
| label      | Text prompt                        | string, number           | -       |
| value      | Value when used in combination     | string 、 number         | -       |
| disabled   | Whether current item is disabled   | bool                     | false   |
| onChange   | Callback when option state changes | (e: ChangeEvent) => void | -       |

## RadioGroup API

| Property   | Description                                                                                    | Type                              | Default    |
| ---------- | ---------------------------------------------------------------------------------------------- | --------------------------------- | ---------- |
| modelValue | Used to set the currently selected value. Can use `v-model` for two-way binding data           | any                               | -          |
| size       | Button size, optional values: `small`, `large`, default not selected                           | string                            | -          |
| direction  | Layout direction, optional values: `horizontal`, `vertical`                                    | string                            | horizontal |
| shape      | `button`'s shape property, displays rounded corners                                            | string                            | -          |
| theme      | `button`'s theme property                                                                      | string                            | -          |
| onChange   | Triggered when option state changes, returns currently selected item                           | (value: string \| number) => void | -          |
| options    | Can specify child `radio` items                                                                | RadioOption[]                     | -          |
| type       | If using `options` to render children and children are `button`, need to specify `type=button` | string                            | -          |
