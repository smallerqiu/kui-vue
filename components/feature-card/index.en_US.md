# FeatureCard

Used to present product features, navigation entries, or capability descriptions.

## Examples

[Basic Usage](./demo/basic.vue?show=vertical)

- Use `icon`, `title`, and `desc` to present feature information.

[Border](./demo/bordered.vue?show=vertical)

- Use `bordered` to control whether the border is displayed.

## API

| Property | Description            | Type     | Default |
| -------- | ---------------------- | -------- | ------- |
| icon     | Icon                   | IconType | -       |
| title    | Title                  | string   | -       |
| desc     | Description            | string   | -       |
| bordered | Whether to show border | boolean    | false   |
| theme    | Appearance theme       | ThemeType | default |
| shape    | Card shape             | ShapeType | round   |
