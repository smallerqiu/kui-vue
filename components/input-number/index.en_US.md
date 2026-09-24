# InputNumber

Input values within a range via mouse or keyboard.

## When to Use

When standard numerical values need to be obtained.

## Examples

[Basic Usage](./demo/basic.vue)

- Basic usage. The `keyboard` attribute can control keyboard behavior.

[High-Precision Decimals / Formatted Display](./demo/format.vue)

- Format numbers using `formatter` to display data with specific meaning, often used in conjunction with `parser`.

[Extension, Prefix and Suffix](./demo/ffix.vue)

- suffix, prefix extension

[Size](./demo/size.vue)

- `large` for large size, `small` for small size

## InputNumber API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| min | Minimum value | `number` | -Infinity |
| max | Maximum value | `number` | Infinity |
| step | Step value for each change, can be a decimal | `string \| number` | 1 |
| modelValue | The value of InputNumber(v-model) | `string \| number` | - |
| value | Initial value, read only on mount. Use modelValue for subsequent updates; modelValue takes precedence when both are provided. | `string \| number` | - |
| formatter | Specifies the format of the value displayed in the input box | `((value: string \| number) => string)` | - |
| parser | Specifies how to convert back from formatter to number, used with formatter | `((value: string) => string \| number)` | - |
| size | Input box size | `"small" \| "medium" \| "large"` | - |
| disabled | Disabled | `boolean` | false |
| readonly | Whether the input is read-only | `boolean` | false |
| precision | Numerical precision | `number` | - |
| shape | Component appearance | `"default" \| "circle" \| "square" \| "round"` | - |
| suffix | Custom suffix | `string` | - |
| prefix | Prefix content | `string` | - |
| controls | Whether to show increase/decrease buttons | `boolean` | true |
| theme | Component theme | `"default" \| "fill" \| "outline" \| "plain" \| "solid" \| "dashed" \| "underlined"` | fill |
| icon | Input icon | `IconType[]` | - |
| placeholder | Input placeholder | `string` | - |
| keyboard | Allow keyboard control | `boolean` | true |
| onChange | Change callback; returns `undefined` when cleared | `(value: number \| undefined) => void` | - |
| onBlur | Called when the input loses focus | `(event: FocusEvent) => void` | - |
| onKeydown | Called when a key is pressed in the input | `(event: KeyboardEvent) => void` | - |
