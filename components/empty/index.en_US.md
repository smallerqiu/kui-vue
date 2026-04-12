# Empty

Placeholder display for empty states.

## When to Use

- When there is currently no data, used for explicit user prompts.
- Guiding the creation process during initialization scenarios.

## Examples

[Custom](./demo/custom.vue)
- Customize the image, description, and extra content.

[No Description](./demo/nodesc.vue)
- Display without description.

[Default Display](./demo/used.vue)
- Will be displayed by default in the above components.


## API

| Property    | Description                                                                | Type            | Default |
| ----------- | -------------------------------------------------------------------------- | --------------- | ------- |
| description | Custom description content                                                 | [String, slot ] | -       |
| imageStyle  | Image style                                                                | Object          | -       |
| image       | Set the display image. When a string, it represents a custom image address | [String, slot ] | -       |
