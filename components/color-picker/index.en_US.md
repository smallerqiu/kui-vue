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

| Property      | Description                                                     | Type                           | Default     |
| ------------- | --------------------------------------------------------------- | ------------------------------ | ----------- |
| modelValue    | Color value, can use `v-model` for two-way binding              | string                         | -           |
| opened        | Whether the color panel is displayed by default                 | boolean                        | false       |
| mode          | Color display type, provides 3 modes (`hex` , `rgb` ,`hsl`)     | string                         | 'hex'       |
| presets       | Custom color palette                                            | string[]                       | -           |
| disabledAlpha | Whether to disable transparency                                 | boolean                        | false       |
| disabled      | Is it in an invalid state?                                      | boolean                        | false       |
| trigger       | Pull-down trigger mode                                          | 'hover' \| 'click'             | click       |
| showText      | Whether to display colored text                                 | boolean                        | false       |
| size          | Size of the color picker                                        | 'small' \| 'medium' \| 'large' | -           |
| placement     | Placement of the color picker                                   | string                         | bottom-left |
| onUpdateMode  | Triggered when the color mode is updated                        | (mode: ColorMode) => void      | -           |
| onChange      | Triggered when the color value changes, returns the color value | (color: string) => void        | -           |
| onOpenChange  | Triggered when the color picker expands or collapses            | (opened: boolean) => void      | -           |
| panelOnly     | Render only the color panel without the trigger input           | boolean                        | false       |
