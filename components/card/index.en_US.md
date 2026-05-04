# Card

Universal card container.

## When to Use

The most basic card container, can carry text, lists, images, paragraphs, often used in backend overview pages.

## Examples

[Basic Usage](./demo/basic.vue)

- Set the title and icon via `title` and `icon`.

[Border](./demo/border.vue)

- Use `bordered` to control whether the border is displayed.

[Border and Title](./demo/notitle.vue)

- Control the border with the `bordered` property and the title with the `title` property.

| Property | Description                        | Type         | Default |
| -------- | ---------------------------------- | ------------ | ------- |
| title    | Card title                         | string, slot | -       |
| icon     | Icon for the card title            | string       | -       |
| bordered | Whether the card displays a border | bool      | true    |
| extra    | Card title extension               | slot         | -       |
