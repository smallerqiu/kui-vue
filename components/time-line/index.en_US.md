# Timeline

Vertically displayed timeline information.

## When to Use

When an operation takes a long time to complete, display the current progress and status to the user.

- When there is a series of information that needs to be arranged in chronological order, it can be in positive or reverse order.
- When a timeline is needed for visual connection.

## Examples

<code src="./demo/icon.vue">Icon</code>
<code src="./demo/mode.vue">Display Direction</code>

## API

| Property | Description                                                                                                    | Type         | Default |
| -------- | -------------------------------------------------------------------------------------------------------------- | ------------ | ------- |
| icon     | Timeline `item` icon                                                                                           | String       | -       |
| color    | Timeline `item` icon color                                                                                     | String       | -       |
| time     | Time text                                                                                                      | String       | -       |
| extra    | Custom auxiliary content                                                                                       | String, slot | -       |
| mode     | Can change relative position of timeline and content by setting `mode`: `left`, `center`, `alternate`, `right` | String       | left    |
