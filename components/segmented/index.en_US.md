# Segmented

Switch quickly between mutually exclusive options.

## Examples

[Basic](./demo/basic.vue)

- Bind the selected option with `v-model`.

[Size and layout](./demo/options.vue)

- Supports sizes, block layout, vertical layout, and disabled options.

[Options with icons](./demo/icon.vue)

- Add an icon with `options[].icon`.

[Custom labels](./demo/label.vue)

- Customize option content with the scoped `label` slot and access `option` and `selected`.

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Selected value | `SegmentedValue` | - |
| value | Initial value, read only on mount. Use modelValue for subsequent updates; modelValue takes precedence when both are provided. | `SegmentedValue` | - |
| options | Option data | `SegmentedOption[]` | [] |
| disabled | Disable all options | `boolean` | false |
| readonly | Read-only state | `boolean` | false |
| block | Fill the parent width | `boolean` | false |
| direction | Layout direction | `"horizontal" \| "vertical"` | horizontal |
| size | Size | `"small" \| "medium" \| "large"` | medium |
| shape | Shape | `"default" \| "circle" \| "square" \| "round"` | round |
| label | Custom option content with `{ option, selected }` | VNodeChild | - |

## Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when selection changes | `(value: SegmentedValue) => void` |

### SegmentedOption

| Property | Description         | Type             | Default |
| -------- | ------------------- | ---------------- | ------- |
| label    | Option content      | VNodeChild       | -       |
| value    | Option value        | string \| number | -       |
| icon     | Option icon         | IconType[]       | -       |
| disabled | Disable this option | boolean          | false   |
