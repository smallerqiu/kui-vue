# Checkbox

Checkbox for multiple selections.

## When to Use

- When making multiple selections from a set of options.
- Used alone, it can represent switching between two states, similar to a switch. The difference is that switching a switch directly triggers a state change, while a checkbox is generally used for state marking and needs to cooperate with submission operations.

## Examples

<code src="./demo/checkAll.vue">Select All</code>
<code src="./demo/disabled.vue">Disabled / Controlled</code>
<code src="./demo/group.vue">Multiple Selection</code>
<code src="./demo/groupLayout.vue">Group Layout</code>

## API

| Property      | Description                                                   | Type              | Default |
| ------------- | ------------------------------------------------------------- | ----------------- | ------- |
| checked       | Whether it is selected. Can use `v-model` for two-way binding | Boolean           | false   |
| label         | The text to display                                           | String 、 Number  | -       |
| disabled      | Whether the current item is disabled                          | Boolean           | false   |
| indeterminate | Combined auxiliary option controls the indeterminate state    | Boolean           | false   |
| change        | Callback when the option state changes                        | Function(checked) | -       |
| value         | The value represented when used in combination                | String、Number    | -       |
| theme         | The component renders the theme, defaulting to 'light'.       | String            | light   |

## CheckboxGroup API

| Property  | Description                                                                            | Type                                              | Default    |
| --------- | -------------------------------------------------------------------------------------- | ------------------------------------------------- | ---------- |
| value     | Used to set the currently selected value. Can use `v-model` for two-way binding        | Array                                             | -          |
| disabled  | Whether the component is disabled                                                      | Boolean                                           | false      |
| change    | Triggered when the option state changes, returns the currently selected item and state | Function({label,value,checked})                   | -          |
| direction | Layout direction, optional values `horizontal`, `vertical`                             | Sting                                             | horizontal |
| options   | Can specify child `checkbox` items                                                     | Array <{label:string/number,value:string/number}> | -          |
