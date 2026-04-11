# Tooltip

Simple text prompt bubble box.

## When to Use

Mouse over to display prompt, disappears when moved away, bubble floating layer does not carry complex text and operations.

Can be used to replace the system default `title` prompt, providing a text explanation for a `button/text/operation`.

## Examples

<code src="./demo/color.vue">Colorful Text Tips</code>
<code src="./demo/placement.vue">Position</code>

## API

| Property  | Description                                                                                                                                                                                       | Type          | Default |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------- |
| title     | Displayed title                                                                                                                                                                                   | String, Slots | -       |
| color     | Background color                                                                                                                                                                                  | String        | -       |
| placement | Position where tooltip appears, optional values: `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom` | String        | top     |
| width     | Display width, defaults to content area size                                                                                                                                                      | String        | -       |
