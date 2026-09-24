# Popup

A generic anchored popup. Dropdown adds menu semantics on top; Popup can display forms, pickers, or arbitrary content. It does not supply a menu role, selection logic, or a focus trap.

```vue
<Popup placement="bottom-left" trigger="click" arrow>
  <Button>打开</Button>
  <template #overlay="{ close }">
    <Input placeholder="任意内容" />
    <Button @click="close">完成</Button>
  </template>
</Popup>
```

## When to use

Use Popup for anchored custom forms, filters, and compound panels. Use Dropdown for menus, Poptip for titled cards, and Tooltip for brief text hints. Popup handles positioning and visibility, not selection, form validation, or focus trapping. Use Modal or Drawer when a modal interaction is needed.

Use the default slot for the trigger and the scoped overlay slot for content; avoid h() in .vue examples. Bind v-model:open for controlled state.

## Examples

[Basic usage and custom content](./demo/basic.vue)

- Render inputs, buttons, or arbitrary content and call close from inside. Mounted content is retained by default; destroyOnClose unmounts it after the exit animation.

[Trigger modes](./demo/trigger.vue)

- Supports click, hover, focus, and contextmenu. Context menus use the pointer position. Hover supports opening/closing delays; see the controlled example for manual mode.

[Placement and arrows](./demo/placement.vue)

- Choose among 12 placements, toggle arrow, and set offset. Placement may adjust when space is limited.

[Controlled state and instance methods](./demo/controlled.vue)

- Interactions update internal visibility and emit changes for external synchronization. Instances expose open / close / updatePosition; this example displays the latest request reason.

[Custom container](./demo/container.vue)

- getPopupContainer selects the mount node, otherwise ConfigProvider or body is used. Establish a positioning context on custom containers. matchTriggerWidth matches the trigger's minimum width; ancestor overflow may clip the popup.

[Nested popups and selectors](./demo/nested.vue)

- Choosing a Select option keeps the outer popup open. Escape dismisses the topmost popup first; dismissing the parent also closes its nested popups.

## Popup API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| open | Initial visibility; subsequent changes synchronize the state; Vue supports v-model:open | `boolean` | - |
| disabled | Prevents opening and cancels delayed opening; does not override open | `boolean` | false |
| placement | Popup placement; supports 12 positions | `"top" \| "top-left" \| "top-right" \| "bottom" \| "bottom-left" \| "bottom-right" \| "left" \| "left-bottom" \| "left-top" \| "right" \| "right-top" \| "right-bottom"` | bottom-left |
| trigger | Trigger mode; manual uses open or instance methods | `"hover" \| "click" \| "focus" \| "contextmenu" \| "manual"` | click |
| arrow | Show arrow | `boolean` | false |
| offset | Position offset in pixels | `number` | 3 |
| openDelay | Hover opening delay in milliseconds | `number` | 0 |
| closeDelay | Hover / focus closing delay in milliseconds | `number` | 300 |
| closeOnOutsideClick | Close on outside click; nested Popup content counts as inside | `boolean` | true |
| closeOnEscape | Escape closes the top Popup and restores trigger focus | `boolean` | true |
| matchTriggerWidth | Use trigger width as the minimum popup width | `boolean` | false |
| getPopupContainer | Container; falls back to Config or body | `(() => HTMLElement \| null \| undefined)` | - |
| destroyOnClose | Destroy after exit; preserves form state by default | `boolean` | false |
| target | Optional external positioning anchor; no event binding, use with manual and open | `HTMLElement \| Ref<HTMLElement \| { $el: HTMLElement; } \| null, HTMLElement \| { $el: HTMLElement; } \| null>` | - |
| overlay | Overlay content; prefer the overlay slot in Vue | `VNodeChild` | - |
| onOpenChange | Visibility change request with reason and native event | `((open: boolean, detail: PopupOpenChangeDetail) => void)` | - |
| onAfterOpen | Called after entering | `(() => void)` | - |
| onAfterClose | Called after leaving | `(() => void)` | - |

The default slot renders the trigger; the overlay slot renders popup content. Both receive PopupRef methods.

## Adapter options

Used by Dropdown, Tooltip, Poptip and Popconfirm to preserve existing appearance.

| Property                | Description                                                          | Type                                            | Default   |
| ----------------------- | -------------------------------------------------------------------- | ----------------------------------------------- | --------- |
| prefixCls               | Root CSS prefix                                                      | string                                          | k-popup   |
| transitionName          | Transition CSS prefix                                                | string                                          | prefixCls |
| panelOnly               | Inline content only; no positioning, trigger, or global listeners    | boolean                                         | false     |
| respectDefaultPrevented | Honor preventDefault on trigger click                                | boolean                                         | true      |
| contentStyle            | Content container styles                                             | CSSProperties                                   | -         |
| hideWhenDetached        | Hide when the anchor is outside the viewport                         | boolean                                         | false     |
| triggerAttrs            | Attributes forwarded to the trigger                                  | Record<string, unknown>                         | -         |
| onTriggerKeydown        | Business keyboard handler; preventDefault cancels the default action | (event: KeyboardEvent, popup: PopupRef) => void | -         |

## Types and instance methods

| Property           | Description                                                              | Type                                   | Default      |
| ------------------ | ------------------------------------------------------------------------ | -------------------------------------- | ------------ |
| raw                | Reuse the single overlay root and preserve its DOM ref; no extra wrapper | boolean                                | false        |
| outsideEvent       | Outside pointer event used by legacy selector adapters                   | `click` \| `mousedown`                 | click        |
| transitionDuration | Transition duration in milliseconds                                      | number                                 | CSS duration |
| getAnchorPosition  | Optional viewport point resolver, for caret-anchored Mentions            | () => { x: number; y: number } \| null | -            |

Select, TreeSelect, Cascader, AutoComplete, Mentions, DatePicker and ColorPicker share this positioning and lifecycle implementation. Their selection, search and keyboard logic remains inside the business components.

- PopupTrigger: hover / click / focus / contextmenu / manual.
- PopupOpenChangeDetail: { reason: PopupOpenReason; event?: Event }.
- PopupOpenReason: trigger / hover / focus / contextmenu / outside / escape / programmatic / host.
- PopupRef: open(), close(), updatePosition(), cancelClose(), scheduleClose(), getTriggerElement(), getPopupElement().
- PopupTarget: HTMLElement or Ref<HTMLElement | { $el: HTMLElement } | null>.
- PopupContent: VNodeChild.

Use open to initialize and synchronize visibility. Interactions update internal state and emit onOpenChange. Only hover uses openDelay. External target anchors are position-only. Custom trigger components must forward attributes, events, and the DOM ref.
