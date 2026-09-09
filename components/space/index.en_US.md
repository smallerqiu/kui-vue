# Space

Set the spacing between components.

## When to Use

Avoid components sticking together, create uniform space.

- Suitable for horizontal spacing of inline elements.
- Can set various horizontal alignment methods.

## Examples

[Basic Usage](./demo/basic.vue)

- Horizontal spacing between adjacent components.

[Vertical Spacing](./demo/vertical.vue)

- Vertical spacing between adjacent components.

[Spacing Size](./demo/size.vue)

- Preset spacing sizes: large, medium, and small. Set `size` to `large` or `medium` to set the spacing to large or medium, respectively. If `size` is not set, the spacing is small.

[Alignment](./demo/align.vue?show=vertical)

- Set the alignment mode.

[Custom Size](./demo/custom-size.vue?show=vertical)

- Customize spacing size.

[Set Wrapping](./demo/wrap.vue)

- When the spacing is horizontal, you can use `wrap` to set whether to wrap automatically. The default is false.

[Divider](./demo/split.vue)

- Divider between adjacent components.

[Compact Layout Group](./demo/compact.vue?show=vertical)

- Use `compact` to tightly connect form components and merge borders.

[Button Compact Layout](./demo/compact-button.vue?show=vertical)

- Example of compactly arranged Button components.

[Vertical Compact Layout](./demo/compact-vertical.vue)

- Vertical compact layout, currently only supporting Button combinations.

## Space API

| Property | Description                                            | Type                                       | Default |
| -------- | ------------------------------------------------------ | ------------------------------------------ | ------- |
| align    | Alignment method                                       | 'start' \| 'end' \| 'center' \| 'baseline' | center  |
| vertical | Whether to display vertically                          | boolean                                    | false   |
| direction | Layout direction; takes priority over `vertical`       | `horizontal \| vertical`                  | -       |
| size     | Spacing; array values are horizontal and vertical gaps | SizeType \| number \| (number \| string)[] | -       |
| wrap     | Whether to wrap                                        | boolean                                    | false   |
| split    | Content rendered between adjacent children             | VNodeChild                                 | -       |
| compact  | Whether to use compact mode                            | boolean                                    | false   |
| block    | Option to adjust width to parent element width         | boolean                                    | false   |
