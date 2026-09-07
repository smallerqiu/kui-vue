# Timeline

Vertically displayed timeline information.

## When to Use

When an operation takes a long time to complete, display the current progress and status to the user.

- When there is a series of information that needs to be arranged in chronological order, it can be in positive or reverse order.
- When a timeline is needed for visual connection.

## Examples

[Basic Usage](./demo/basic.vue)

- `TimeLine` must contain `TimeLineItem`.

[Icon](./demo/icon.vue)

- Set the `icon` and `color` properties on `TimeLineItem` to change the icon display.

[Display Direction](./demo/mode.vue)

- Specify the `mode` to change the display direction.

## TimeLine API

| Property | Description                                       | Type                                           | Default  |
| -------- | ------------------------------------------------- | ---------------------------------------------- | -------- |
| mode     | Relative position of the timeline and its content | `'left' \| 'right' \| 'center' \| 'alternate'` | `'left'` |

## TimeLineItem API

| Property | Description                                        | Type         | Default |
| -------- | -------------------------------------------------- | ------------ | ------- |
| icon     | Timeline node icon                                 | `IconType[]` | -       |
| color    | Timeline node color                                | `string`     | -       |
| time     | Time content                                       | `VNodeChild` | -       |
| extra    | Auxiliary content, customizable via the named slot | `VNodeChild` | -       |
| dot      | Custom timeline node                               | `VNodeChild` | -       |
