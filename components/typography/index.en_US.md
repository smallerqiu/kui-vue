# Typography

Consistent semantics and visual hierarchy for titles, paragraphs and inline text.

## Examples

[Basic](./demo/basic.vue?show=vertical)

- Titles, paragraphs and common inline text styles.

[Copy and edit](./demo/interactive.vue?show=vertical)

- Copy text or edit it in place.

## API

`Typography`, `TypographyText`, `TypographyParagraph` and `TypographyTitle` share these properties.

| Property   | Description                        | Type                                        | Default |
| ---------- | ---------------------------------- | ------------------------------------------- | ------- |
| modelValue | Text content, supports `v-model`   | string                                      | -       |
| tag        | HTML tag                           | TypographyTag                               | -       |
| type       | Semantic color                     | `secondary`, `success`, `warning`, `danger` | -       |
| strong     | Bold text                          | boolean                                     | false   |
| italic     | Italic text                        | boolean                                     | false   |
| underline  | Underlined text                    | boolean                                     | false   |
| delete     | Deleted text                       | boolean                                     | false   |
| mark       | Marked text                        | boolean                                     | false   |
| code       | Inline code style                  | boolean                                     | false   |
| disabled   | Disabled state                     | boolean                                     | false   |
| copyable   | Enable copy                        | boolean                                     | false   |
| editable   | Enable editing                     | boolean                                     | false   |
| ellipsis   | One-line ellipsis or maximum lines | boolean, number                             | false   |
| copy       | Emitted after copying              | (text) => void                              | -       |
| change     | Emitted after editing              | (text) => void                              | -       |
