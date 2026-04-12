# ColorPicker

Freely output colors.

## When to Use

- When custom colors are needed.

## Examples

[Custom Trigger](./demo/customTrigger.vue)
- Customize the trigger for the color panel.

[Popup Placement](./demo/placement.vue)
- Supports 6 popup placements. If there is not enough space above, the panel will automatically appear below.

[Size / Disabled](./demo/size.vue)
- `small` for small size, `large` for large size.


## API

| Property      | Description                                                     | Type     | Default |
| ------------- | --------------------------------------------------------------- | -------- | ------- |
| modelValue    | Color value, can use `v-model` for two-way binding              | String   | -       |
| mode          | Color display type, provides 3 modes (`hex` , `rgb` ,`hsl`)     | String   | 'hex'   |
| presets       | Custom color palette                                            | Array    | [...]   |
| disabledAlpha | Whether to disable transparency                                 | Boolean  | false   |
| change        | Triggered when the color value changes, returns the color value | Function | -       |
