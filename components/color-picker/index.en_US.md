## API

| Property      | Description                                                     | Type     | Default |
| ------------- | --------------------------------------------------------------- | -------- | ------- |
| modelValue    | Color value, can use `v-model` for two-way binding              | String   | -       |
| mode          | Color display type, provides 3 modes (`hex` , `rgb` ,`hsl`)     | String   | 'hex'   |
| presets       | Custom color palette                                            | Array    | [...]   |
| disabledAlpha | Whether to disable transparency                                 | Boolean  | false   |
| change        | Triggered when the color value changes, returns the color value | Function | -       |
