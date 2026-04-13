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

| Property       | Description                                                                 | Type           | Default   |
| -------------- | --------------------------------------------------------------------------- | -------------- | --------- |
| min            | Minimum value                                                               | Number         | -Infinity |
| max            | Maximum value                                                               | Number         | Infinity  |
| step           | Step value for each change, can be a decimal                                | Number, String | 1         |
| value(v-model) | Current value                                                               | Number         | -         |
| formatter      | Specifies the format of the value displayed in the input box                | Function       | -         |
| parser         | Specifies how to convert back from formatter to number, used with formatter | Function       | -         |
| change         | Change callback                                                             | Function       | -         |
| size           | Input box size                                                              | String         | -         |
| disabled       | Disabled                                                                    | Boolean        | -         |
| precision      | Numerical precision                                                         | Number         | -         |
| suffix         | Custom suffix                                                               | String, slot   | -         |
| prefix         | Prefix content                                                              | String, slot   | -         |
| controls       | Whether to show increase/decrease buttons                                   | Boolean        | true      |
| clearable      | Whether to show clear button                                                | Boolean        | false     |
| theme          | The component renders the theme, defaulting to 'light'.                     | String         | light     |
