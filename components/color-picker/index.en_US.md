# ColorPicker

Freely output colors.

## When to Use

- When custom colors are needed.

## Examples

[Basic Usage](./demo/basic.vue)

- Click to open the color panel.

[Size / Disabled](./demo/size.vue)

- `small` for small size, `large` for large size.

[Custom Trigger](./demo/custom-trigger.vue)

- Customize the trigger for the color panel.

[Popup Placement](./demo/placement.vue)

- Supports 6 popup placements. If there is not enough space above, the panel will automatically appear below.

## API

| Property      | Description                                                     | Type                 | Default     |
| ------------- | --------------------------------------------------------------- | -------------------- | ----------- |
| value         | Default value                                                   | String               | -           |
| modelValue    | Color value, can use `v-model` for two-way binding              | String               | -           |
| mode          | Color display type, provides 3 modes (`hex` , `rgb` ,`hsl`)     | String               | 'hex'       |
| presets       | Custom color palette                                            | Array                | -           |
| disabledAlpha | Whether to disable transparency                                 | Boolean              | false       |
| onChange      | Triggered when the color value changes, returns the color value | Function             | -           |
| disabled      | Is it in an invalid state?                                      | Boolean              | -           |
| trigger       | Pull-down trigger mode                                          | [hover,click]        | click       |
| showText      | Whether to display colored text                                 | Boolean              | false       |
| onUpdateMode  | Triggered when the color mode is updated                        | Function             | -           |
| size          | Size of the color picker                                        | [small,medium,large] | -           |
| placement     | Placement of the color picker                                   | String               | bottom-left |
