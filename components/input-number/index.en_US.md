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
