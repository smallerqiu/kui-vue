# Message

Globally display operation feedback information.

## When to Use

- Can provide feedback information such as success, warning, and error.
- Displayed centered at the top and automatically disappears. It is a lightweight prompt method that does not interrupt user operations.

## Examples

<code src="./demo/close.vue">Custom Duration</code>
<code src="./demo/icon.vue">Custom Icon</code>
<code src="./demo/types.vue">Prompt Types</code>

## API

The component provides some static methods, used as follows:

- `message.info(content, [duration], onClose)`
- `message.success(content, [duration], onClose)`
- `message.warning(content, [duration], onClose)`
- `message.error(content, [duration], onClose)`

Also provides global configuration and global destruction methods:

- `message.show(options)`
- `message.destroy()`

Parameter `options` is an object, specific description as follows:

| Property | Description                                                                      | Type          | Default |
| -------- | -------------------------------------------------------------------------------- | ------------- | ------- |
| type     | Prompt type, provides four optional types: `info`, `success`, `error`, `warning` | String        | info    |
| content  | Prompt content                                                                   | String, Vnode | -       |
| duration | Auto-close delay, in seconds, 0 means not auto-closed                            | Number        | 3       |
| closable | Whether it can be manually closed                                                | Boolean       | false   |
| close    | Callback when closing                                                            | Function      | -       |
| icon     | Custom icon                                                                      | String        | -       |
| color    | Custom icon color                                                                | String        | -       |
