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

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Whether the dialog is displayed, can use v-model for two-way binding. | `boolean` | - |
| value | Initial value, read only on mount. Use modelValue for subsequent updates; modelValue takes precedence when both are provided. | `boolean` | false |
| title | Dialog title; accepts a VNode as well as text, and rich content can go through the `title` slot | `VNodeChild` | - |
| width | Dialog width | `string \| number` | 520 |
| okText | OK button text | `string` | OK |
| cancelText | Cancel button text | `string` | Cancel |
| draggable | Whether the modal can be dragged, not available in confirm mode | `boolean` | false |
| centered | Whether the window can be centered, not available in confirm mode | `boolean` | false |
| maximized | Whether the modal can be maximized, not available in confirm mode | `boolean` | false |
| maskClosable | Whether clicking the mask closes the modal (mask only; Esc is gated by `escKey`) | `boolean` | false |
| escKey | Whether to support closing with Esc key | `boolean` | true |
| destroyOnClose | Whether to destroy dialog content after closing. Destroyed by default (remounted on reopen); set false to keep form state at the cost of one hidden DOM node per opened dialog | `boolean` | true |
| footer | When `footer=false`, the bottom button is not displayed. | `boolean` | true |
| loading | When set to `true`, the confirm button will be in a loading state | `boolean` | false |
| top | Distance from the top of the window | `number` | 100 |
| showClose | Whether to display the close button | `boolean` | true |
| mask | Whether to show the mask | `boolean` | true |
| onOk | Callback when OK is clicked, `Note: will not close Modal` | `() => void` | - |
| onCancel | Callback when Cancel is clicked | `() => void` | - |
| onClose | Callback when window closes | `() => void` | - |
| onOpenChange | Callback for opening or closing a window | `(visible: boolean) => void` | - |

### Slots

- `title`: Custom title area. Rendered slot content takes precedence over the `title` property; with neither, no header is rendered (so no empty bordered strip is left behind).
- `default`: Dialog body.
- `content`: Replaces the whole panel body — the header, body and footer all skip their default rendering.
- `footer`: Custom footer area, replacing the default Cancel / OK buttons; nothing renders when `footer=false`.

### onCancel vs onClose

Closing splits into two channels that never fire together:

- The footer **Cancel** button emits `onCancel` only. The dialog still closes, but `onClose` does not run.
- Mask click, Esc and the top-right close button emit `onClose` only.

Listen to both if you need one "it closed" hook; keep them separate if you need to tell an explicit cancel apart from every other way of closing.
`onOk` never closes the dialog — it only sits on the OK button, so close it yourself inside that callback when you need to.
Keep the open state in sync through `onOpenChange` alone (or `v-model`): all four ways of closing — cancel, mask, Esc, the close icon — emit `update:modelValue` and `openChange`, while `onCancel` / `onClose` only tell you which channel closed it.
The order is unified across all four (Modal / Drawer × React / Vue): `update:modelValue` and `openChange` land first and settle the state, then `onCancel` / `onClose` say which channel closed it. So the `modelValue` you read inside those callbacks is already settled.

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

Imperative modals are mounted globally under `body` and are not owned by the current page component. Destroy them from a router hook when they should close after navigation:

```ts
router.afterEach(() => {
  modal.destroyAll();
});
```

Parameter options is an object, specific description as follows:

| Property   | Description                                                                                                                                                   | Type       | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------- |
| title      | Dialog title, accepts VNodes as well as text                                                                                                | `VNodeChild`              | -       |
| content    | Dialog content, accepts VNodes as well as text                                                                                                                | `VNodeChild`              | -       |
| okText     | OK button text                                                                                                                                                | string     | OK      |
| cancelText | Cancel button text                                                                                                                                            | string     | Cancel  |
| icon       | Modal icon, available when type is toast, default optional values are success, warning, error, info, can also be customized, refer to /components/icon values | string     | -       |
| color      | Modal icon color, available when type is toast                                                                                                                | string     | -       |
| type       | Dialog type for `modal.show`: `info`, `success`, `warning`, `error`, `confirm`                                                                               | ToastType                 | info    |
| onOk       | Callback when OK is clicked; returning a Promise hands the closing timing to the component — resolve closes it, reject only stops loading and keeps it open  | () => void \| PromiseLike | -       |
| onCancel   | Callback when Cancel is clicked                                                                                                                               | () => void | -       |

### Panel presentation

| Property  | Description                                              | Type    | Default |
| --------- | -------------------------------------------------------- | ------- | ------- |
| panelOnly | Render only the dialog panel without overlay or Teleport | boolean | false   |
