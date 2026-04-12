# Radio

Radio button.

## When to Use

- Used to select a single state from multiple options.
- The legendary choose one of two.

## Examples

[Disabled / Controllable](./demo/disabled.vue)
- Set `disabled` to make it unavailable.

[Multiple Selection](./demo/group.vue)
- You can use the `options` attribute to set options, or use child components to set options.

[Combined with Button](./demo/radioButton.vue)
- Combine `RadioGroup` and `RadioButton` for usage.

[Group Layout](./demo/vertical.vue)
- Group layout.


## Radio API

| Property   | Description                        | Type                              | Default |
| ---------- | ---------------------------------- | --------------------------------- | ------- |
| modelValue | Whether selected (v-model)         | Boolean                           | false   |
| checked    | Whether selected                   | Boolean                           | false   |
| label      | Text prompt                        | String, Number                    | -       |
| disabled   | Whether current item is disabled   | Boolean                           | false   |
| change     | Callback when option state changes | Function({value, label, checked}) | -       |

## RadioGroup API

| Property  | Description                                                                                    | Type                                                 | Default    |
| --------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ---------- |
| value     | Used to set the currently selected value. Can use `v-model` for two-way binding data           | Any                                                  | -          |
| size      | Button size, optional values: `small`, `large`, default not selected                           | String                                               | -          |
| direction | Layout direction, optional values: `horizontal`, `vertical`                                    | String                                               | horizontal |
| shape     | `button`'s shape property, displays rounded corners                                            | String                                               | -          |
| theme     | `button`'s theme property                                                                      | String                                               | -          |
| change    | Triggered when option state changes, returns currently selected item                           | Function(value)                                      | -          |
| options   | Can specify child `radio` items                                                                | Array <{label: string/number, value: string/number}> | -          |
| type      | If using `options` to render children and children are `button`, need to specify `type=button` | String                                               | -          |
