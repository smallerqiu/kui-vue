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
| title    | Notification title                               | String        | -       |
| content  | Prompt content                                   | String, vnode | -       |
| duration | Auto-close delay, in seconds, 0 means not closed | Number        | 3       |
| close    | Callback when closing                            | Function      | -       |
| icon     | Custom icon                                      | String        | -       |
| color    | Custom icon color                                | String        | -       |
