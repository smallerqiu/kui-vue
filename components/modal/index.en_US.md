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
| modelValue   | Whether the dialog is displayed, can use v-model for two-way binding.       | bool           | false   |
| title        | Dialog title                                                                | string         | -       |
| width        | Dialog width                                                                | number, string | 520     |
| okText       | OK button text                                                              | string         | OK      |
| cancelText   | Cancel button text                                                          | string         | Cancel  |
| draggable    | Whether the modal can be dragged, not available in confirm mode             | bool           | false   |
| centered     | Whether the window can be centered, not available in confirm mode           | bool           | false   |
| maximized    | Whether the modal can be maximized, not available in confirm mode           | bool           | false   |
| maskClosable | Whether clicking the mask closes the modal, if not, Esc key will be invalid | bool           | true    |
| escKey       | Whether to support closing with Esc key                                     | bool           | true    |
| footer       | When `footer=false`, the bottom button is not displayed.                    | bool,Slot      | true    |
| loading      | When set to `true`, the confirm button will be in a loading state           | bool           | false   |
| top          | Distance from the top of the window                                         | number         | -       |
| showClose    | Whether to display the close button                                         | bool           | false   |
| mask         | Whether to show the mask                                                    | bool           | true    |
| onOk         | Callback when OK is clicked, `Note: will not close Modal`                   | () => void     | -       |
| onCancel     | Callback when Cancel is clicked                                             | () => void     | -       |
| onClose      | Callback when window closes                                                 | () => void     | -       |

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

| Property   | Description                                                                                                                                                   | Type       | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------- |
| title      | Dialog title                                                                                                                                                  | string     | -       |
| content    | Dialog content                                                                                                                                                | string     | -       |
| okText     | OK button text                                                                                                                                                | string     | OK      |
| cancelText | Cancel button text                                                                                                                                            | string     | Cancel  |
| icon       | Modal icon, available when type is toast, default optional values are success, warning, error, info, can also be customized, refer to /components/icon values | string     | -       |
| color      | Modal icon color, available when type is toast                                                                                                                | string     | -       |
| onOk       | Callback when OK is clicked                                                                                                                                   | () => void | -       |
| onCancel   | Callback when Cancel is clicked                                                                                                                               | () => void | -       |
