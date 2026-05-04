# Notice

Globally display notification reminder information.

## When to Use

Display notification reminder information in the four corners of the system. Often used in the following situations:

- More complex notification content.
- Interactive notifications, giving users the next action point.
- System-initiated pushes.

## Examples

[Basic Usage](./demo/basic.vue)

- Basic usage of `Notice`.

[Notification with Icon](./demo/types.vue)

- Call different methods to display different types.

[Custom Icon](./demo/icon.vue)

- Custom icon.

[Custom Duration](./demo/close.vue)

- Can be custom configured. Use `duration` to control the auto-close duration (default `3s`).

## API

The component provides some static methods, used as follows:

- `notice.info(options)`
- `notice.success(options)`
- `notice.warning(options)`
- `notice.error(options)`

Also provides global configuration and global destruction methods:

- `notice.open(options)`
- `notice.destroy()`

Parameter `options` is an object, specific description as follows:

| Property | Description                                      | Type          | Default |
| -------- | ------------------------------------------------ | ------------- | ------- |
| title    | Notification title                               | string        | -       |
| content  | Prompt content                                   | string, VNode | -       |
| duration | Auto-close delay, in seconds, 0 means not closed | number        | 3       |
| icon     | Custom icon                                      | string        | -       |
| color    | Custom icon color                                | string        | -       |
| onClose  | Callback when closing                            | () => void    | -       |
