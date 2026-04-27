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

| Property            | Description                                                         | Type           | Default |
| ------------------- | ------------------------------------------------------------------- | -------------- | ------- |
| value               | Bound value, can use `v-model` for two-way binding                  | String, Number | -       |
| size                | Button size, optional values `small`, `large`, default not selected | String         | -       |
| icon                | Input box icon                                                      | String         | -       |
| suffix              | Extension suffix                                                    | String, Slot   | -       |
| prefix              | Extension prefix                                                    | String, Slot   | -       |
| search              | Search event callback                                               | Function       | right   |
| theme               | When theme='light', presents a light theme                          | String         | right   |
| clearable           | Whether to show the clear button                                    | Boolean        | false   |
| visiblePassword     | Password initially displayed in plain text                          | Boolean        | false   |
| visiblePasswordIcon | Whether to show the toggle button or control password visibility    | Boolean        | true    |

## Input Group API

| Property | Description                                                                         | Type    | Default |
| -------- | ----------------------------------------------------------------------------------- | ------- | ------- |
| block    | Whether to inherit the parent width                                                 | Boolean | false   |
| compact  | Whether to use compact mode                                                         | Boolean | false   |
| size     | Spacing of child components, optional values `small`, `large`, default not selected | String  | -       |
