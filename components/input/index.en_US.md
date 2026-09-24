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

[Addons, Prefix and Suffix](./demo/suffix.vue?show=vertical)

- `prefix` and `suffix` render inside the input. For complex content, use the named slots (recommended in `.vue`) or VNode props (TSX); both render identically. `addonBefore` and `addonAfter` render outside the input.

[Input Group](./demo/group.vue?show=vertical)

- Use `InputGroup` to tightly connect components and merge borders. Default is `true`.

[Size](./demo/size.vue)

- `large` for large size, `small` for small size.

[Events](./demo/event.vue)

- This example tests whether component events are triggered normally.

[Textarea](./demo/textarea.vue)

- Control the number of rows via `rows`.

## Input API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Bound value, can use `v-model` for two-way binding | `unknown` | - |
| value | Initial value for uncontrolled usage | `any` | - |
| type | Native input type | `InputTypeHTMLAttribute` | text |
| inputType | Internal input element type, normally left as input | `string` | input |
| disabled | Whether the input is disabled | `boolean` | false |
| readonly | Read-only; focusable and copyable but not editable | `boolean` | false |
| shape | Input shape | `"default" \| "circle" \| "square" \| "round"` | - |
| size | Button size, optional values `small`, `large`, default not selected | `"small" \| "medium" \| "large"` | - |
| icon | Input box icon | `IconType[]` | - |
| suffix | Suffix inside the input; complex content can use the named slot | `VNodeChild` | - |
| prefix | Prefix inside the input; complex content can use the named slot | `VNodeChild` | - |
| addonBefore | Addon before the input; complex content can use the named slot | `VNodeChild` | - |
| addonAfter | Addon after the input; complex content can use the named slot | `VNodeChild` | - |
| theme | The theme of Input | `"default" \| "fill" \| "outline" \| "plain" \| "solid" \| "dashed" \| "underlined"` | fill |
| clearable | Show the clear button on hover when a value exists | `boolean` | true |
| visiblePasswordIcon | Whether to show the toggle button or control password visibility | `boolean` | true |
| onSearch | Search event callback | `((value: string) => void)` | - |
| onIconClick | Callback for icon click event | `((event: MouseEvent) => void)` | - |
| onClear | Callback for pressing the clear button | `(() => void)` | - |
| onChange | Callback when the input box content changes | `((value: string) => void)` | - |

## TextArea API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Bound value, supports `v-model` | `string \| number \| readonly string[] \| null` | - |
| value | Initial value for uncontrolled use | `string \| number \| readonly string[] \| null` | - |
| rows | Number of visible text rows | `number` | 2 |
| placeholder | Input placeholder | `string` | - |
| disabled | Whether the textarea is disabled | `boolean` | false |
| readonly | Whether the textarea is read-only | `boolean` | false |
| theme | Textarea theme | `"default" \| "fill" \| "outline" \| "plain" \| "solid" \| "dashed" \| "underlined"` | fill |
| size | Textarea size | `"small" \| "medium" \| "large"` | - |
| shape | Textarea shape | `"default" \| "circle" \| "square" \| "round"` | - |
| onChange | Triggered when the content changes | `((value: string) => void)` | - |

## Input Group API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| block | Whether to inherit the parent width | boolean | false |
| compact | Whether to use compact mode | boolean | true |
| size | Spacing of child components, optional values `small`, `large`, default not selected | `"small" \| "medium" \| "large"` | - |
