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

| Property   | Description                                                                 | Type                                | Default   |
| ---------- | --------------------------------------------------------------------------- | ----------------------------------- | --------- |
| min        | Minimum value                                                               | number                              | -Infinity |
| max        | Maximum value                                                               | number                              | Infinity  |
| step       | Step value for each change, can be a decimal                                | number, string                      | 1         |
| value      | Default value                                                               | number                              | -         |
| modelValue | The value of InputNumber(v-model)                                           | number                              | -         |
| formatter  | Specifies the format of the value displayed in the input box                | (value: string \| number) => string | -         |
| parser     | Specifies how to convert back from formatter to number, used with formatter | (value: string) => string \| number | -         |
| size       | Input box size                                                              | string                              | -         |
| disabled   | Disabled                                                                    | bool                                | -         |
| precision  | Numerical precision                                                         | number                              | -         |
| shape      | Component appearance                                                        | `circle` , `square`                 | -         |
| suffix     | Custom suffix                                                               | string, slot                        | -         |
| prefix     | Prefix content                                                              | string, slot                        | -         |
| controls   | Whether to show increase/decrease buttons                                   | bool                                | true      |
| clearable  | Whether to show clear button                                                | bool                                | false     |
| theme      | The component renders the theme                                             | string                              | fill      |
| onChange   | Change callback                                                             | (value: number) => void             | -         |
