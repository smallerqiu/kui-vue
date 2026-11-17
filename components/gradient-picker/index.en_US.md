# GradientPicker

Edits the position and color of several color stops, or assigns the four corners of an area their own colors. The value records colors and positions only; it is not tied to a gradient function.

## When to use

- You need to adjust several color stops, drag them, or change each stop's color
- You need to assign separate colors to the top-left, top-right, bottom-left and bottom-right corners of an area

## Demos

[Basic](./demo/basic.vue)

- Click the empty space below the bar to add a stop, drag it sideways to move, drag it down to delete (at least two stops stay); click a stop to open its color panel; the demo paints the same value as both `linear-gradient` and `radial-gradient`. The demo turns `alpha` on, so the panel gains an opacity row

[Corner gradient](./demo/corner.vue)

- With `type="corner"` the four corners are fixed; click a corner swatch to open its color panel — only the color can change

[Sizes](./demo/sizes.vue)

- `size` follows the same three tiers as other controls; the bar plus its stops — or the corner block — add up to the matching control height

## Value format

- `linear`: `GradientStop[]`, each item `{ color, offset }` with `offset` in 0–100; the bar paints them left to right.
- `corner`: the four colors `[top-left, top-right, bottom-left, bottom-right]`.

Colors are any CSS color string and may carry alpha (`#rrggbbaa` or `rgba(...)`); with `alpha` on, the color panel lets you set it directly.

The component produces the value, not CSS. `formatGradient` is a display helper (linear at 90deg, a layered approximation for corners); paint radial, conic or another direction yourself from the value.

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| arrowPointAtCenter | Point the color-panel arrow at the stop or corner center; disable to align panel edges | `boolean` | true |
| modelValue | Gradient value, supports `v-model` two-way binding | `GradientValue` | - |
| value | Initial value, read once during initialization; later updates use modelValue, which wins when both are passed | `GradientValue` | - |
| type | Gradient type: `linear` for multi-stop, `corner` for four corners | `"linear" \| "corner"` | linear |
| alpha | Show the transparency control in the color panel | `boolean` | false |
| mode | Presentation of the color panel input: `hex`, `rgb` or `hsl` | `"hex" \| "rgb" \| "hsl"` | hex |
| size | Control size, same three tiers as other controls; the bar plus its stops, or the corner block, add up to the height of the matching control | `"small" \| "medium" \| "large"` | - |
| disabled | Disabled state | `boolean` | false |
| readonly | Read-only; stops cannot be dragged and the color panel cannot open | `boolean` | false |
| onUpdateMode | Called when the color mode changes | `(mode: ColorMode) => void` | - |
| onChange | Called when the gradient changes; the argument is the new value (a stop list for `linear`, four colors for `corner`) | `(value: GradientValue) => void` | - |
