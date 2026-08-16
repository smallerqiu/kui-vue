# FeedbackPanel

Embeds status, supporting information, and next steps within page content.

## Examples

[Basic Usage](./demo/basic.vue?show=vertical)

- Basic Usage

[Feedback Kinds](./demo/kinds.vue?show=vertical)

- Define feedback types using 'kind'

## API

| Property    | Description        | Type                                         | Default |
| ----------- | ------------------ | -------------------------------------------- | ------- |
| kind        | Feedback kind      | `positive`, `neutral`, `caution`, `negative` | neutral |
| heading     | Primary message    | VNodeChild                                   | -       |
| description | Supporting message | VNodeChild                                   | -       |
| symbol      | Custom marker      | IconType                                     | -       |
| compact     | Compact layout     | boolean                                      | false   |
| theme       | Appearance theme   | ThemeType                                    | default |
| shape       | Panel shape        | ShapeType                                    | round   |
