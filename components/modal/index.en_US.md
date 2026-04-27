# Modal

Modal dialog box.

## When to Use

- When users need to handle transactions without jumping to another page to interrupt the workflow, a Modal can be opened in the center of the current page to carry the corresponding operations.
- Additionally, when a simple confirmation box is needed to ask the user, syntax sugar methods like Modal.confirm() can be used.

## Examples

[Basic Usage](./demo/basic.vue)

- Use `v-model` for two-way data binding.

[Custom](./demo/custom.vue)

- Custom `Modal`.

[Other Properties](./demo/more.vue)

- When the footer is not needed, set `footer` to `null`.

[Global Mode](./demo/global.vue)

- Use global mode.

[Confirmation Dialog](./demo/confirm.vue)

- A global confirmation dialog that can be closed asynchronously.

## API

| Property     | Description                                                                 | Type           | Default |
| ------------ | --------------------------------------------------------------------------- | -------------- | ------- |
| modelValue   | Whether the dialog is displayed, can use v-model for two-way binding.       | Boolean        | false   |
| title        | Dialog title                                                                | String         | -       |
| width        | Dialog width                                                                | Number, String | 520     |
| okText       | OK button text                                                              | String         | OK      |
| cancelText   | Cancel button text                                                          | String         | Cancel  |
| draggable    | Whether the modal can be dragged, not available in confirm mode             | Boolean        | false   |
| centered     | Whether the window can be centered, not available in confirm mode           | Boolean        | false   |
| maximized    | Whether the modal can be maximized, not available in confirm mode           | Boolean        | false   |
| maskClosable | Whether clicking the mask closes the modal, if not, Esc key will be invalid | Boolean        | true    |
| onOk         | Callback when OK is clicked, `Note: will not close Modal`                   | Function       | -       |
| onCancel     | Callback when Cancel is clicked                                             | Function       | -       |
| onClose      | Callback when window closes                                                 | Function       | -       |
| escKey       | Whether to support closing with Esc key                                     | Boolean        | true    |
| footer       | When `footer=false`, the bottom button is not displayed.                    | Boolean,Slot   | true    |
| loading      | When set to `true`, the confirm button will be in a loading state           | Boolean        | false   |
| top          | Distance from the top of the window                                         | Number         | -       |
| showClose    | Whether to display the close button                                         | Boolean        | false   |
| mask         | Whether to show the mask                                                    | Boolean        | true    |

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
