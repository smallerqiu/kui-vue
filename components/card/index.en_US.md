# Card

Universal card container.

## When to Use

The most basic card container, can carry text, lists, images, paragraphs, often used in backend overview pages.

## Examples

[Border](./demo/border.vue)
- Use `bordered` to control whether the border is displayed.

[A Very Weird Card](./demo/notitle.vue)
- 


## API

| Property | Description                        | Type         | Default |
| -------- | ---------------------------------- | ------------ | ------- |
| title    | Card title                         | String, slot | -       |
| icon     | Icon for the card title            | String       | -       |
| bordered | Whether the card displays a border | Boolean      | true    |
| extra    | Card title extension               | slot         | -       |
