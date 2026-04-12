# Tooltip

Simple text prompt bubble box.

## When to Use

Mouse over to display prompt, disappears when moved away, bubble floating layer does not carry complex text and operations.

Can be used to replace the system default `title` prompt, providing a text explanation for a `button/text/operation`.

## Examples

[Colorful Text Tips](./demo/color.vue)

- Multiple preset colors for text tips, used in different scenarios.

[Position](./demo/placement.vue)

- Control the direction via `placement`. There are twelve available positions.

## API

| Property  | Description                                                                                                                                                                                       | Type          | Default |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------- |
| title     | Displayed title                                                                                                                                                                                   | String, Slots | -       |
| color     | Background color                                                                                                                                                                                  | String        | -       |
| placement | Position where tooltip appears, optional values: `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom` | String        | top     |
| width     | Display width, defaults to content area size                                                                                                                                                      | String        | -       |
