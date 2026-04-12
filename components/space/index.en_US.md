# Space

Set the spacing between components.

## When to Use

Avoid components sticking together, create uniform space.

- Suitable for horizontal spacing of inline elements.
- Can set various horizontal alignment methods.

## Examples

[Basic Usage](./demo/basic.vue)
- Horizontal spacing between adjacent components.

[Compact Layout Group](./demo/compact.vue)
- Use `compact` to tightly connect form components and merge borders.

[Button Compact Layout](./demo/compactButton.vue)
- Example of compactly arranged Button components.

[Vertical Compact Layout](./demo/compactVertical.vue)
- Vertical compact layout, currently only supporting Button combinations.

[Custom Size](./demo/customSize.vue)
- Customize spacing size.

[Spacing Size](./demo/size.vue)
- Preset spacing sizes: large, medium, and small. Set `size` to `large` or `middle` to set the spacing to large or medium, respectively. If `size` is not set, the spacing is small.

[Divider](./demo/split.vue)
- Divider between adjacent components.

[Vertical Spacing](./demo/vertical.vue)
- Vertical spacing between adjacent components.

[Set Wrapping](./demo/wrap.vue)
- When the spacing is horizontal, you can use `wrap` to set whether to wrap automatically. The default is false.


## Space API

| Property | Description                                    | Type                                 | Default |
| -------- | ---------------------------------------------- | ------------------------------------ | ------- |
| align    | Alignment method                               | `start`, `end`, `center`, `baseline` | center  |
| vertical | Whether to display vertically                  | Boolean                              | false   |
| size     | Spacing size                                   | `small`, `middle`, `large`, Number   | small   |
| wrap     | Whether to wrap                                | Boolean                              | false   |
| split    | Set split                                      | v-slot                               | -       |
| compact  | Whether to use compact mode                    | Boolean                              | false   |
| block    | Option to adjust width to parent element width | Boolean                              | false   |
