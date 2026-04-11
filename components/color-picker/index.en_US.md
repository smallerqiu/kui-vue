# ColorPicker

Freely output colors.

## When to Use

- When custom colors are needed.

## Examples

<code src="./demo/customTrigger.vue">Custom Trigger</code>
<code src="./demo/placement.vue">Popup Placement</code>
<code src="./demo/size.vue">Size / Disabled</code>

## API

| Property      | Description                                                     | Type     | Default |
| ------------- | --------------------------------------------------------------- | -------- | ------- |
| modelValue    | Color value, can use `v-model` for two-way binding              | String   | -       |
| mode          | Color display type, provides 3 modes (`hex` , `rgb` ,`hsl`)     | String   | 'hex'   |
| presets       | Custom color palette                                            | Array    | [...]   |
| disabledAlpha | Whether to disable transparency                                 | Boolean  | false   |
| change        | Triggered when the color value changes, returns the color value | Function | -       |
