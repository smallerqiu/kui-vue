# Splitter

## When to Use

Divide editors and workspaces into horizontally, vertically or recursively resizable panels.

## Examples

[Basic usage](./demo/basic.vue?show=vertical)

- Drag separators to adjust panels. Reported sizes are pixels.

[Vertical and nested layouts](./demo/vertical.vue?show=vertical)

- Use pixel or percentage sizes with minimum and maximum constraints.

[Collapsing and locking](./demo/collapsible.vue?show=vertical)

- Hover a separator to reveal collapse controls. Expanding restores the previous size. Locked panels cannot be resized by dragging.

[Saving and restoring layouts](./demo/controlled.vue?show=vertical)

- Bind panel sizes and restore a saved layout.

[Preview resizing](./demo/lazy.vue?show=vertical)

- Move a guide while dragging and apply the layout on release, useful for expensive charts and editors.

## Sizing and Interaction

- Give the container usable dimensions. Numbers are pixels; strings accept px or percentages. Percentages use the available space after subtracting separators.
- Container resizing preserves the adjusted layout proportions; locked panels keep their pixel size where possible. Hiding and showing the container does not reset its layout.
- Constraints apply to initialization, dragging and container resizing. If minimums exceed available space, they shrink proportionally. If maximums cannot fill the container, the last expanded panel fills the remainder.
- Collapsing preserves panel content and removes it from keyboard navigation. Restoring respects current constraints. At least one panel remains expanded.
- Mouse, touch and pen pointers are supported. Focus a separator and use arrow keys to move 10px, Shift + arrow keys for 1px, and Home / End for the available limits. Escape cancels dragging and restores the starting sizes.
- `resize` reports pointer or keyboard resizing; `change` reports the applied layout. In preview mode only `resize` fires during dragging; the bound value updates on release.

# API

## Splitter

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| direction | Layout direction | `"horizontal" \| "vertical"` | horizontal |
| modelValue | Current panel sizes in pixels; supports v-model | `number[]` | - |
| value | Initial panel sizes in pixels; takes precedence over panel size | `number[]` | - |
| disabled | Disable pointer resizing, keyboard resizing and collapse controls | `boolean` | false |
| lazy | Move a preview guide and apply sizes on release | `boolean` | false |
| change | Applied layout changed, including container resizing and collapsing | `(sizes: number[]) => void` | - |
| resize | Pointer or keyboard resizing; preview mode reports proposed sizes | `(sizes: number[]) => void` | - |
| resizeStart | Resizing started | `(sizes: number[]) => void` | - |
| resizeEnd | Resizing ended or was cancelled; reports final sizes | `(sizes: number[]) => void` | - |
| collapse | Panel collapse toggled by a button; index starts at zero | `(index: number, collapsed: boolean) => void` | - |

## SplitterPanel

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| size | Initial size; numbers are px, strings accept px or percentages | `string \| number` | - |
| min | Minimum expanded size; numbers are px, strings accept px or percentages | `string \| number` | 0 |
| max | Maximum expanded size; numbers are px, strings accept px or percentages | `string \| number` | - |
| resizable | Allow resizing; when false, adjacent separators cannot be dragged and this panel cannot be collapsed by a button | `boolean` | true |
| collapsible | Show this panel's collapse controls | `boolean` | false |
| collapsed | Collapse to zero size; supports v-model:collapsed | `boolean` | - |
