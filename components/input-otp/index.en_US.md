# InputOTP

Used for SMS codes, email codes, and one-time passwords.

## Examples

[Basic Usage](./demo/basic.vue?show=vertical)

- Supports per-character input, paste, keyboard navigation, and completion events.

[Custom Length](./demo/length.vue?show=vertical)

- Set the number of characters with `length`.

[Theme and Shape](./demo/theme.vue?show=vertical)

- Includes light, outline, and underlined themes, plus square, rounded, and circle shapes.

[Size](./demo/size.vue?show=vertical)

- Provides small, default, and large sizes.

[Disabled and Readonly](./demo/state.vue?show=vertical)

- Disabled fields cannot be interacted with; readonly fields can still be focused and copied.

[Separator](./demo/separator.vue?show=vertical)

- Set content between fields with `separator`.

[Paste Code](./demo/paste.vue?show=vertical)

- Pasting a complete code splits it automatically and fills each field in sequence.

[Validation](./demo/validator.vue?show=vertical)

- `type` provides built-in character validation; use `validator` for custom rules.

## API

| Property          | Description                          | Type                                 | Default |
| ----------------- | ------------------------------------ | ------------------------------------ | ------- |
| modelValue        | Bound value, supports `v-model`      | string \| number                     | -       |
| length            | Number of characters                 | number                               | 6       |
| type              | Accepted character type              | 'number' \| 'text'                   | number  |
| size              | Component size                       | 'small' \| 'large'                   | -       |
| mask              | Mask the entered value               | boolean                              | false   |
| disabled          | Disable the inputs                   | boolean                              | false   |
| readonly          | Make the inputs readonly             | boolean                              | false   |
| autofocus         | Focus the first input automatically  | boolean                              | false   |
| separator         | Content between OTP fields           | VNodeChild                           | -       |
| validator         | Custom validator for each character  | (value) => boolean                   | -       |
| theme             | Visual theme                         | 'light' \| 'outline' \| 'underlined' | outline |
| shape             | Field shape                          | 'square' \| 'circle'                 | -       |
| complete          | Emitted when all characters exist    | (value) => void                      | -       |
| update:modelValue | Emitted when the bound value changes | (value: string) => void              | -       |
| change            | Emitted when the input value changes | (value: string) => void              | -       |
| focus             | Emitted when an input receives focus | (event: FocusEvent) => void          | -       |
| blur              | Emitted when an input loses focus    | (event: FocusEvent) => void          | -       |
