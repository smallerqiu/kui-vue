# Empty

Placeholder display for empty states.

## When to Use

- When there is currently no data, used for explicit user prompts.
- Guiding the creation process during initialization scenarios.

## Examples

<code src="./demo/custom.vue">Custom</code>
<code src="./demo/nodesc.vue">No Description</code>
<code src="./demo/used.vue">Default Display</code>

## API

| Property    | Description                                                                | Type            | Default |
| ----------- | -------------------------------------------------------------------------- | --------------- | ------- |
| description | Custom description content                                                 | [String, slot ] | -       |
| imageStyle  | Image style                                                                | Object          | -       |
| image       | Set the display image. When a string, it represents a custom image address | [String, slot ] | -       |
