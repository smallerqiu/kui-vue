# Slider

Slider input, displaying current value and optional range.

## When to Use

When users need to select within a numerical range/custom range, it can be continuous or discrete values.

## Examples

[Basic Usage](./demo/basic.vue)

- Basic usage.

[Size/Custom](./demo/size.vue)

- `size` can control the size of the handle.

[Controlled](./demo/with-number.vue)

- Controlled and synchronized with Input.

[Custom Tooltip](./demo/formatter.vue)

- Use `tipFormatter` to set the display format of the Tooltip. When `tooltipVisible` is true, the Tooltip will always be shown; when false, it will never be shown, even during dragging or hovering.

[With Labels](./demo/marks.vue)

- Use the `marks` attribute to mark slider ticks, and use `value` to specify the slider position.

[Vertical](./demo/vertical.vue)

- Vertical Slider.

[Reverse](./demo/reverse.vue)

- Set `reverse` to invert the slider.

## Slider API

| Property             | Description                                                                                       | Type            | Default |
| -------------------- | ------------------------------------------------------------------------------------------------- | --------------- | ------- |
| v-model(:modelValue) | Set current value                                                                                 | Number, Array   | 0       |
| min                  | Minimum value                                                                                     | Number          | 0       |
| max                  | Maximum value                                                                                     | Number          | 100     |
| range                | Whether to support sliding on both sides simultaneously                                           | Boolean         | false   |
| disabled             | Whether the slider is disabled                                                                    | Boolean         | false   |
| step                 | Step size, must be greater than 0 and divisible by (max - min)                                    | 1               |
| onChange             | Triggered when Slider value changes, passes the changed value as parameter                        | Function(value) | -       |
| tipFormatter         | Set Tooltip display format, defaults to current value                                             | Function, null  | -       |
| vertical             | Whether to set direction to vertical                                                              | Boolean         | false   |
| marks                | Scale marks, key type must be number and value in closed interval [min, max]                      | Object          | -       |
| included             | Effective when marks is not empty object, true means inclusive relationship, false means parallel | Boolean         | true    |
| tooltipVisible       | When true, Tooltip will always display; otherwise never display, even when dragging and hovering  | Boolean         | false   |
