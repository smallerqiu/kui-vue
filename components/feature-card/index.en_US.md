# FeatureCard

Used to present product features, navigation entries, or capability descriptions.

## Examples

[Basic Usage](./demo/basic.vue?show=vertical)

- Use `icon`, `title`, and `desc` to present feature information.

[Border](./demo/bordered.vue?show=vertical)

- Use `bordered` to control whether the border is displayed.

[Sizes](./demo/size.vue?show=vertical)

- Use `size` to scale padding, icon and typography together.

[Navigation entry](./demo/interactive.vue?show=vertical)

- Combine `direction="vertical"` and `clickable` for a keyboard-accessible feature entry.

## API

| Property | Description            | Type      | Default |
| -------- | ---------------------- | --------- | ------- |
| icon     | Icon                   | IconType  | -       |
| title    | Title                  | string    | -       |
| desc     | Description            | string    | -       |
| bordered | Whether to show border | boolean   | false   |
| theme    | Appearance theme       | ThemeType | fill    |
| shape    | Card shape             | ShapeType | round   |
| size     | Card size              | SizeType  | medium  |
| direction | Content direction     | `horizontal \| vertical` | horizontal |
| clickable | Enable interaction and keyboard semantics | boolean | false |
| disabled | Disable interaction    | boolean | false |
| color    | Icon accent color      | string | primary |
| iconBackground | Icon container background; derived from `color` when omitted | string | auto |

## Events

| Event | Description          | Callback                    |
| ----- | -------------------- | --------------------------- |
| click | Emitted when clicked | `(event: MouseEvent) => void` |

## Slots

| Name    | Description        |
| ------- | ------------------ |
| icon    | Custom icon        |
| title   | Custom title       |
| desc    | Custom description |
| extra   | Trailing content   |
| default | Additional content |
