# Drawer

A floating panel that slides in from the edge of the screen.

## When to Use

- The drawer slides in from the edge of the parent window, covering part of the parent window content. Users can operate within the drawer without leaving the current task. After the operation is completed, they can smoothly return to the original task.
- When an additional panel is needed to control the parent window content, this panel can be called out when needed. For example, controlling interface display styles, adding content to the interface.
- When temporary tasks need to be inserted into the current task flow, creating or previewing additional content. For example, displaying terms of agreement, creating sub-objects.

## Examples

[Basic Usage](./demo/basic.vue)

- Use `v-model` for two-way binding to control whether the `Drawer` is displayed. If `title` is null or false, the title is not shown.

[Custom](./demo/custom.vue)

- Use `title` to set the title, `width` to control the width, and `placement` to control the direction.

[Form Mode](./demo/with-form.vue)

- Content will be presented in form mode, with a header and footer, and the footer can be customized.

[Inject into Target Element](./demo/target.vue)

- Can be expanded within the target element.

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Whether the dialog is displayed, can use v-model for two-way binding. | `boolean` | - |
| value | Initial value, read only on mount. Use modelValue for subsequent updates; modelValue takes precedence when both are provided. | `boolean` | false |
| escKey | Whether to support closing with Esc key | `boolean` | true |
| destroyOnClose | Whether to destroy drawer content after closing. Destroyed by default (remounted on reopen); set false to keep form state at the cost of one hidden DOM node per opened drawer | `boolean` | true |
| maskClosable | Whether clicking the mask closes the drawer (mask only; Esc is gated by `escKey`) | `boolean` | true |
| title | Drawer title; accepts a VNode as well as text, and rich content can go through the `title` slot. With no title text the header bar stays (the top-right close button lives in it); it is only dropped when `closable` is also off | `VNodeChild` | - |
| width | Drawer width, used when `placement` is `left` or `right`, supports percentage | `string \| number` | 520 |
| height | Drawer height, used when `placement` is `top` or `bottom`, supports percentage | `string \| number` | 520 |
| placement | The display direction of the drawer. Provides 4 display methods: `left`, `top`, `right`, `bottom` | `"top" \| "bottom" \| "left" \| "right"` | right |
| footer | Whether to show the footer; the slot with the same name customizes its content | `boolean` | true |
| closable | Whether to show the close button | `boolean` | true |
| target | Display container; accepts a native element or component ref | `(() => HTMLElement \| ComponentPublicInstance \| null \| undefined)` | () => document.body |
| okText | OK button text | `string` | OK |
| cancelText | Cancel button text | `string` | Cancel |
| mask | Whether to show the mask | `boolean` | true |
| loading | When set to `true`, the confirm button will be in a loading state | `boolean` | false |
| onOk | Callback when OK is clicked | `() => void` | - |
| onClose | Callback when the drawer closes | `() => void` | - |
| onCancel | Callback when Cancel is clicked | `() => void` | - |
| onOpenChange | Callback for opening or closing the drawer | `(visible: boolean) => void` | - |

### Slots

- `title`: Custom title area. Rendered slot content takes precedence over the `title` property; if neither is given there is no title text, but the header bar still holds the top-right close button and is only dropped when `closable` is off as well.

### onCancel vs onClose

Closing splits into two channels that never fire together:

- The footer **Cancel** button emits `onCancel` only. The drawer still closes, but `onClose` does not run.
- Mask click, Esc and the top-right close button emit `onClose` only.

Listen to both if you need one "it closed" hook; keep them separate if you need to tell an explicit cancel apart from every other way of closing.
`onOk` never closes the drawer — it only sits on the OK button, so close it yourself inside that callback when you need to.
Keep the open state in sync through `onOpenChange` alone (or `v-model`): all four ways of closing — cancel, mask, Esc, the close icon — emit `update:modelValue` and `openChange`, while `onCancel` / `onClose` only tell you which channel closed it.
The order is unified across all four (Modal / Drawer × React / Vue): `update:modelValue` and `openChange` land first and settle the state, then `onCancel` / `onClose` say which channel closed it. So the `modelValue` you read inside those callbacks is already settled.
