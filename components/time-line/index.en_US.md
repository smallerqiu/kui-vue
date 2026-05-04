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

## API

| Property | Description                                                                                                    | Type         | Default |
| -------- | -------------------------------------------------------------------------------------------------------------- | ------------ | ------- |
| icon     | Timeline `item` icon                                                                                           | string       | -       |
| color    | Timeline `item` icon color                                                                                     | string       | -       |
| time     | Time text                                                                                                      | string       | -       |
| extra    | Custom auxiliary content                                                                                       | string, slot | -       |
| mode     | Can change relative position of timeline and content by setting `mode`: `left`, `center`, `alternate`, `right` | string       | left    |
