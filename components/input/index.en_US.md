# Input

Input content via mouse or keyboard, the most basic wrapper for form fields.

## When to Use

- When user input is required for form fields.
- Provides combined input fields, searchable input fields, and size selection.

## Examples

<code src="./demo/event.vue">Events</code>
<code src="./demo/group.vue">Input Group</code>
<code src="./demo/icon.vue">With Icon</code>
<code src="./demo/size.vue">Size</code>
<code src="./demo/suffix.vue">Extension, Prefix and Suffix</code>
<code src="./demo/textarea.vue">Textarea</code>
<code src="./demo/theme.vue">Theme</code>

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
