# Input

Input content via mouse or keyboard, the most basic wrapper for form fields.

## When to Use

- When user input is required for form fields.
- Provides combined input fields, searchable input fields, and size selection.

## Examples

[Basic Usage](./demo/basic.vue)

- Use `v-model` for two-way data binding.

[Theme](./demo/theme.vue)

- Use `theme` to set the theme, and `shape` for rounded corners.

[With Icon](./demo/icon.vue)

- By setting the `icon` attribute, you can add an icon to the input field, which is only effective for `input`. This allows for quick implementation of features like password visibility toggle or search.

[Extension, Prefix and Suffix](./demo/suffix.vue?show=vertical)

- suffix, prefix extension.

[Input Group](./demo/group.vue?show=vertical)

- Use `InputGroup` to tightly connect components and merge borders. Default is `true`.

[Size](./demo/size.vue)

- `large` for large size, `small` for small size.

[Events](./demo/event.vue)

- This example tests whether component events are triggered normally.

[Textarea](./demo/textarea.vue)

- Control the number of rows via `rows`.

## Input API

| Property            | Description                                                         | Type                             | Default |
| ------------------- | ------------------------------------------------------------------- | -------------------------------- | ------- |
| modelValue          | Bound value, can use `v-model` for two-way binding                  | string \| number                 | -       |
| value               | Initial value for uncontrolled usage                                | unknown                          | -       |
| type                | Native input type                                                   | 'text' \| 'password' \| 'hidden' | text    |
| inputType           | Internal input element type, normally left as input                 | string                           | input   |
| disabled            | Whether the input is disabled                                       | boolean                          | false   |
| shape               | Input shape                                                         | ShapeType                        | -       |
| size                | Button size, optional values `small`, `large`, default not selected | string                           | -       |
| icon                | Input box icon                                                      | string                           | -       |
| suffix              | Extension suffix                                                    | string, slot                     | -       |
| prefix              | Extension prefix                                                    | string, slot                     | -       |
| theme               | The theme of Input                                                  | string                           | fill    |
| clearable           | Whether to show the clear button                                    | boolean                          | false   |
| visiblePassword     | Password initially displayed in plain text                          | boolean                          | false   |
| visiblePasswordIcon | Whether to show the toggle button or control password visibility    | boolean                          | true    |
| onSearch            | Search event callback                                               | (value: string) => void          | -       |
| onIconClick         | Callback for icon click event                                       | (e: Event) => void               | -       |
| onClear             | Callback for pressing the clear button                              | () => void                       | -       |
| onChange            | Callback when the input box content changes                         | (value: string) => void          | -       |

## TextArea API

| Property    | Description                        | Type                         | Default |
| ----------- | ---------------------------------- | ---------------------------- | ------- |
| modelValue  | Bound value, supports `v-model`    | string \| number \| string[] | -       |
| value       | Initial value for uncontrolled use | string \| number \| string[] | -       |
| rows        | Number of visible text rows        | number                       | 2       |
| placeholder | Input placeholder                  | string                       | -       |
| disabled    | Whether the textarea is disabled   | boolean                      | false   |
| theme       | Textarea theme                     | ThemeType                    | fill    |
| size        | Textarea size                      | SizeType                     | -       |
| shape       | Textarea shape                     | ShapeType                    | -       |
| onChange    | Triggered when the content changes | (value: string) => void      | -       |

## Input Group API

| Property | Description                                                                         | Type    | Default |
| -------- | ----------------------------------------------------------------------------------- | ------- | ------- |
| block    | Whether to inherit the parent width                                                 | boolean | false   |
| compact  | Whether to use compact mode                                                         | boolean | false   |
| size     | Spacing of child components, optional values `small`, `large`, default not selected | string  | -       |
