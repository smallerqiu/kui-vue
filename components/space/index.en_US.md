# Space

Set the spacing between components.

## When to Use

Avoid components sticking together, create uniform space.

- Suitable for horizontal spacing of inline elements.
- Can set various horizontal alignment methods.

## Examples

<code src="./demo/basic.vue">Basic Usage</code>
<code src="./demo/compact.vue">Compact Layout Group</code>
<code src="./demo/compactButton.vue">Button Compact Layout</code>
<code src="./demo/compactVertical.vue">Vertical Compact Layout</code>
<code src="./demo/customSize.vue">Custom Size</code>
<code src="./demo/size.vue">Spacing Size</code>
<code src="./demo/split.vue">Divider</code>
<code src="./demo/vertical.vue">Vertical Spacing</code>
<code src="./demo/wrap.vue">Set Wrapping</code>

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
