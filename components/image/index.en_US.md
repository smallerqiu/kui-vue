# Image

Previewable images.

## When to Use

- Use when you need to display images.
- Display loading or error handling when loading large images.

## Examples

[Error Handling](./demo/errors.vue)

- Show an image placeholder on load failure.

[Extension](./demo/extra.vue)

- Can extend custom tools and panels.

[Photo Wall](./demo/group.vue)

- Click the left/right buttons to preview multiple images.

## Image API

| Property    | Description                                            | Type             | Default |
| ----------- | ------------------------------------------------------ | ---------------- | ------- |
| width       | The width of the component                             | [String, Number] | -       |
| height      | The height of the component                            | [String, Number] | -       |
| src         | The default address of the image to display            | String           | -       |
| type        | Make Preview display video tag, values ['img','media'] | String           | img     |
| origin      | The large image displayed when clicking the image      | String           | -       |
| placeholder | The placeholder displayed when the image fails to load | String           | -       |
| imgStyle    | The style of the image                                 | Object           | -       |
| showPanel   | Whether to display the extension panel by default      | Boolean          | false   |
| close       | Close trigger event                                    | Function         | -       |
| switch      | Multi-image switch trigger event                       | Function(index)  | -       |
| tool        | Custom toolbar buttons                                 | slot             | -       |
| panel       | Custom extension panel                                 | slot             | -       |

## ImageGroup API

| Property | Description | Type  | Default |
| -------- | ----------- | ----- | ------- |
| data     | Image data  | Array | -       |
