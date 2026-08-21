# Card

Universal card container.

## When to Use

The most basic card container, can carry text, lists, images, paragraphs, often used in backend overview pages.

## Examples

[Basic Usage](./demo/basic.vue)

- Set the title and icon via `title` and `icon`.

[Card Size](./demo/size.vue)

- Use `size` to adjust the spacing density of the card header and content.

[Border](./demo/border.vue)

- Use `bordered` to control whether the border is displayed.

[Border and Title](./demo/notitle.vue)

- Control the border with the `bordered` property and the title with the `title` property.

[Cover and Meta](./demo/cover.vue?show=vertical)

- Display a cover image with `cover`, and use `CardMeta` for an avatar, title, and description.

[Appearance](./demo/appearance.vue)

- Card shares the common `theme` and `shape` appearance system.

## API

| Property | Description                                | Type                                        | Default |
| -------- | ------------------------------------------ | ------------------------------------------- | ------- |
| title    | Card title                                 | string, slot                                | -       |
| icon     | Icon for the card title                    | string                                      | -       |
| bordered | Whether the card displays a border         | boolean                                     | true    |
| theme    | Surface theme                              | 'default' \| 'fill' \| 'outline' \| 'plain' | fill    |
| shape    | Surface shape                              | 'round' \| 'square' \| 'circle'             | round   |
| size     | Card size                                  | 'small' \| 'medium' \| 'large'              | medium  |
| extra    | Card title extension                       | slot                                        | -       |
| cover    | Card cover; hides the card header when set | VNodeChild                                  | -       |

## CardMeta API

| Property    | Description | Type       | Default |
| ----------- | ----------- | ---------- | ------- |
| avatar      | Avatar      | VNodeChild | -       |
| title       | Title       | VNodeChild | -       |
| description | Description | VNodeChild | -       |
