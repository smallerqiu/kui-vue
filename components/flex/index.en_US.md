# Flex

## When to Use

- Suitable for setting spacing between elements.
- Suitable for setting various horizontal and vertical alignment methods.

### Difference from Space Component

- Space provides spacing for inline elements, and it itself adds a wrapper element for each child element for inline alignment. Suitable for equidistant arrangement of multiple child elements in rows and columns.
- Flex provides spacing for block-level elements, and it itself does not add wrapper elements. Suitable for child element layout in vertical or horizontal directions, providing more flexibility and control capabilities.

## Examples

[Basic Layout](./demo/basic.vue)

- The simplest usage.

[Alignment](./demo/align.vue)

- Set the alignment mode.

[Spacing Size](./demo/size.vue)

- Use `size` to set the spacing between elements. Presets include `small`, `middle`, and `large`, or you can define a custom spacing.

[Set Wrapping](./demo/wrap.vue)

- When spacing is horizontal, use `wrap` to control whether items wrap automatically. The default is `false`.

## Space API

| Property | Description                                    | Type                                                                      | Default |
| -------- | ---------------------------------------------- | ------------------------------------------------------------------------- | ------- |
| align    | Alignment method                               | Refer to https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items     | center  |
| justify  | Set the alignment of elements on the main axis | Refer to https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content | center  |
| vertical | Whether to display vertically                  | Boolean                                                                   | false   |
| size     | Spacing size                                   | `small`, `middle`, `large`, Number, Array                                 | -       |
| wrap     | Whether to wrap                                | Boolean                                                                   | false   |
