# Modal

Modal dialog box.

## When to Use

- When users need to handle transactions without jumping to another page to interrupt the workflow, a Modal can be opened in the center of the current page to carry the corresponding operations.
- Additionally, when a simple confirmation box is needed to ask the user, syntax sugar methods like Modal.confirm() can be used.

## Examples

[Confirmation Dialog](./demo/confirm.vue)

- A global confirmation dialog that can be closed asynchronously.

[Custom](./demo/custom.vue)

- Custom `Modal`.

[Global Mode](./demo/global.vue)

- Use global mode.

[Other Properties](./demo/more.vue)

- When the footer is not needed, set `footer` to `null`.

## API

| Property      | Description                                                                 | Type           | Default |
| ------------- | --------------------------------------------------------------------------- | -------------- | ------- |
| show          | Whether the dialog is displayed, can use v-model for two-way binding.       | Boolean        | false   |
| title         | Dialog title                                                                | String         | -       |
| width         | Dialog width                                                                | Number, String | 520     |
| ok-text       | OK button text                                                              | String         | OK      |
| cancel-text   | Cancel button text                                                          | String         | Cancel  |
| draggable     | Whether the modal can be dragged, not available in confirm mode             | Boolean        | false   |
| centered      | Whether the window can be centered, not available in confirm mode           | Boolean        | false   |
| maximized     | Whether the modal can be maximized, not available in confirm mode           | Boolean        | false   |
| mask-closable | Whether clicking the mask closes the modal, if not, Esc key will be invalid | Boolean        | true    |
| ok            | Callback when OK is clicked, `Note: will not close Modal`                   | Function       | -       |
| cancel        | Callback when Cancel is clicked                                             | Function       | -       |
| close         | Callback when window closes                                                 | Function       | -       |
| escKey        | Whether to support closing with Esc key                                     | Boolean        | true    |
| footer        | When `footer=false`, the bottom button is not displayed.                    | Boolean,Slot   | true    |

## Modal.method()

The component provides some static methods, used as follows:

- modal.info(options)
- modal.success(options)
- modal.warning(options)
- modal.error(options)
- modal.confirm(options)

Also provides global configuration and global destruction methods:

- modal.show(options)
- modal.destroyAll()

Parameter options is an object, specific description as follows:

| Property   | Description                                                                                                                                                   | Type     | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| title      | Dialog title                                                                                                                                                  | String   | -       |
| content    | Dialog content                                                                                                                                                | String   | -       |
| okText     | OK button text                                                                                                                                                | String   | OK      |
| cancelText | Cancel button text                                                                                                                                            | String   | Cancel  |
| icon       | Modal icon, available when type is toast, default optional values are success, warning, error, info, can also be customized, refer to /components/icon values | String   | -       |
| color      | Modal icon color, available when type is toast                                                                                                                | String   | -       |
| onOk       | Callback when OK is clicked                                                                                                                                   | Function | -       |
| onCancel   | Callback when Cancel is clicked                                                                                                                               | Function | -       |
