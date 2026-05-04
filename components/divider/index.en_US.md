# Divider

Dividing line that separates content.

## When to Use

- To separate text paragraphs of different chapters.
- To separate inline text/links, such as the action column in a table.

## Examples

[Vertical Divider](./demo/basic.vue)

- Use type="vertical" to set an inline vertical divider.

[Horizontal Divider](./demo/default.vue)

- Default is a horizontal divider, with text that can be added in the middle.

[Divider with Text](./demo/with-text.vue)

- A divider with text in the middle, where `orientation` can specify the text position.

## API

| Parameter   | Description                                      | Type    | Default    |
| ----------- | ------------------------------------------------ | ------- | ---------- |
| text        | Divider text                                     | string  | -          |
| dashed      | Whether it is a dashed line                      | bool | false      |
| orientation | The position of the divider title : left right   | string  | center     |
| type        | Horizontal or vertical type: horizontal vertical | string  | horizontal |
