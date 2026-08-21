# Typography

Consistent semantics and visual hierarchy for titles, paragraphs and inline text.

## Examples

[Basic](./demo/basic.vue?show=vertical)

- Build content hierarchy with titles, paragraphs, and inline text.

[Title levels](./demo/title.vue?show=vertical)

- Use `tag` to render heading levels from h1 through h6.

[Semantic text](./demo/type.vue?show=vertical)

- Use `type` for secondary, success, warning, and danger semantics.

[Text styles](./demo/style.vue?show=vertical)

- Bold, italic, underline, deleted, marked, and inline code styles.

[Ellipsis](./demo/ellipsis.vue?show=vertical)

- Supports multi-line truncation, full-text tooltips, and expand/collapse actions.

[Copy and edit](./demo/interactive.vue?show=vertical)

- Copy text or edit it in place and listen to the corresponding events.

## API

`Typography`, `TypographyText`, `TypographyParagraph` and `TypographyTitle` share these properties.

| Property   | Description                        | Type                                              | Default |
| ---------- | ---------------------------------- | ------------------------------------------------- | ------- |
| modelValue | Text content, supports `v-model`   | string                                            | -       |
| tag        | HTML tag                           | TypographyTag                                     | -       |
| type       | Semantic color                     | 'secondary' \| 'success' \| 'warning' \| 'danger' | -       |
| strong     | Bold text                          | boolean                                           | false   |
| italic     | Italic text                        | boolean                                           | false   |
| underline  | Underlined text                    | boolean                                           | false   |
| delete     | Deleted text                       | boolean                                           | false   |
| mark       | Marked text                        | boolean                                           | false   |
| code       | Inline code style                  | boolean                                           | false   |
| disabled   | Disabled state                     | boolean                                           | false   |
| copyable   | Enable copy and action tooltips    | boolean \| TypographyCopyableOptions              | false   |
| editable   | Enable editing and action tooltips | boolean \| TypographyEditableOptions              | false   |
| ellipsis   | Truncation, tooltip and expansion  | boolean \| number \| TypographyEllipsisOptions    | false   |
| copy       | Emitted after copying              | (text) => void                                    | -       |
| change     | Emitted after editing              | (text) => void                                    | -       |

### TypographyCopyableOptions

| Property      | Description                 | Type   | Default |
| ------------- | --------------------------- | ------ | ------- |
| tooltip       | Copy action tooltip         | string | -       |
| copiedTooltip | Tooltip shown after copying | string | -       |

### TypographyEditableOptions

| Property | Description         | Type   | Default |
| -------- | ------------------- | ------ | ------- |
| tooltip  | Edit action tooltip | string | -       |

### TypographyEllipsisOptions

| Property     | Description                               | Type              | Default  |
| ------------ | ----------------------------------------- | ----------------- | -------- |
| rows         | Maximum visible lines                     | number            | 1        |
| expandable   | Show the expand/collapse action           | boolean           | false    |
| expandText   | Expand action label                       | string            | More     |
| collapseText | Collapse action label                     | string            | Collapse |
| tooltip      | Show full text or a custom collapsed hint | boolean \| string | false    |
