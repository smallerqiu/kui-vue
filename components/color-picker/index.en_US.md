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

| Property      | Description                                                     | Type                      | Default     |
| ------------- | --------------------------------------------------------------- | ------------------------- | ----------- |
| value         | Default value                                                   | string                    | -           |
| modelValue    | Color value, can use `v-model` for two-way binding              | string                    | -           |
| mode          | Color display type, provides 3 modes (`hex` , `rgb` ,`hsl`)     | string                    | 'hex'       |
| presets       | Custom color palette                                            | string[]                  | -           |
| disabledAlpha | Whether to disable transparency                                 | bool                      | false       |
| onChange      | Triggered when the color value changes, returns the color value | (color: string) => void   | -           |
| disabled      | Is it in an invalid state?                                      | bool                      | false       |
| trigger       | Pull-down trigger mode                                          | [hover,click]             | click       |
| showText      | Whether to display colored text                                 | bool                      | false       |
| onUpdateMode  | Triggered when the color mode is updated                        | (mode: ColorMode) => void | -           |
| size          | Size of the color picker                                        | [small,medium,large]      | -           |
| placement     | Placement of the color picker                                   | string                    | bottom-left |
