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

## API

| Property      | Description                                                   | Type                  | Default |
| ------------- | ------------------------------------------------------------- | --------------------- | ------- |
| checked       | Whether it is selected. Can use `v-model` for two-way binding | bool                  | false   |
| label         | The text to display                                           | string 、 number      | -       |
| value         | The value represented when used in combination                | String、number        | -       |
| disabled      | Whether the current item is disabled                          | bool                  | false   |
| indeterminate | Combined auxiliary option controls the indeterminate state    | bool                  | false   |
| theme         | The component renders the theme, defaulting to 'fill'.        | string                | fill    |
| valueType     | The type of output value for the unit option                  | [string,number,bool]  | bool    |
| onChange      | Callback when the option state changes                        | (e:ChangeEvent)=>void | -       |

## CheckboxGroup API

| Property   | Description                                                                            | Type                                              | Default    |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------------------------------- | ---------- |
| modelValue | Used to set the currently selected value. Can use `v-model` for two-way binding        | Array                                             | -          |
| disabled   | Whether the component is disabled                                                      | bool                                              | false      |
| onChange   | Triggered when the option state changes, returns the currently selected item and state | (any[])=>void                                     | -          |
| direction  | Layout direction, optional values `horizontal`, `vertical`                             | Sting                                             | horizontal |
| options    | Can specify child `checkbox` items                                                     | Array <{label:string/number,value:string/number}> | -          |
| size       | set the size of Checkbox                                                               | string                                            | -          |
