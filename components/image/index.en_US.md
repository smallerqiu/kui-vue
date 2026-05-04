# Image

Previewable images.

## When to Use

- Use when you need to display images.
- Display loading or error handling when loading large images.

## Examples

[Basic Usage](./demo/basic.vue)

- Simple display.

[Error Handling](./demo/errors.vue)

- Show an image placeholder on load failure.

[Photo Wall](./demo/group.vue)

- Click the left/right buttons to preview multiple images.

[Extension](./demo/extra.vue)

- Can extend custom tools and panels.

## Image API

| Property    | Description                                            | Type                    | Default |
| ----------- | ------------------------------------------------------ | ----------------------- | ------- |
| width       | The width of the component                             | [string, number]        | -       |
| height      | The height of the component                            | [string, number]        | -       |
| src         | The default address of the image to display            | string                  | -       |
| type        | Make Preview display video tag, values ['img','media'] | string                  | img     |
| origin      | The large image displayed when clicking the image      | string                  | -       |
| placeholder | The placeholder displayed when the image fails to load | string                  | -       |
| imgStyle    | The style of the image                                 | Object                  | -       |
| showPanel   | Whether to display the extension panel by default      | bool                    | false   |
| onClose     | Close trigger event                                    | () => void              | -       |
| switch      | Multi-image switch trigger event                       | (index: number) => void | -       |
| tool        | Custom toolbar buttons                                 | slot                    | -       |
| panel       | Custom extension panel                                 | slot                    | -       |

## ImageGroup API

| Property | Description | Type  | Default |
| -------- | ----------- | ----- | ------- |
| data     | Image data  | Array | -       |
