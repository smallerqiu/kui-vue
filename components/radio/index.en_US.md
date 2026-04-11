# Radio

Radio button.

## When to Use

- Used to select a single state from multiple options.
- The legendary choose one of two.

## Examples

<code src="./demo/disabled.vue">Disabled / Controllable</code>
<code src="./demo/group.vue">Multiple Selection</code>
<code src="./demo/radioButton.vue">Combined with Button</code>
<code src="./demo/vertical.vue">Group Layout</code>

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
