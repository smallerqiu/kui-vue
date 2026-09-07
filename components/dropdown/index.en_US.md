# Dropdown

A list that drops down.

## When to Use

When there are too many operation commands on the page, this component can be used to accommodate operation elements. Clicking or hovering over the trigger point will display a dropdown menu. Selections can be made in the list, and corresponding commands can be executed.

## Examples

[Basic Usage](./demo/basic.vue)

- The simplest dropdown menu.

[Right-click menu](./demo/right-menu.vue?show=vertical)

- By default, the menu is triggered by hovering, but it can also be triggered by clicking the right mouse button.

[Button with a dropdown menu](./demo/dropdown-buttons.vue)

- On the left is the button, and on the right is an additional related function menu. The icon property can be set to modify the icon on the right.

[Other Elements](./demo/divider.vue)

- Dividers and disabled menu items.

[Popup Position](./demo/placement.vue)

- Supports 6 popup positions.

[Arrow](./demo/arrow.vue)

- Set `arrow` to display an arrow pointing to the trigger.

[Multi-level Menu](./demo/cascading.vue)

- The passed menu has multiple levels.

## Dropdown API

| Property     | Description                                     | Type                                        | Default       |
| ------------ | ----------------------------------------------- | ------------------------------------------- | ------------- |
| show         | Whether the dropdown is visible (v-model)       | boolean                                     | false         |
| trigger      | Trigger method                                  | `hover` \| `click` \| `contextmenu`         | `hover`       |
| placement    | Dropdown placement                              | DropPlacementsType                          | `bottom-left` |
| arrow        | Whether to display the arrow                    | boolean                                     | false         |
| target       | Ref of an external trigger element or component | Ref<HTMLElement \| ComponentPublicInstance> | -             |
| disabled     | Whether triggering is disabled                  | boolean                                     | false         |
| onOpenChange | Called when the dropdown opens or closes        | (opened: boolean) => void                   | -             |
| overlay slot | Dropdown overlay content                        | VNodeChild                                  | -             |

### DropdownButton API

| Property | Description                               | Type                  | Default  |
| -------- | ----------------------------------------- | --------------------- | -------- |
| size     | Button size                               | 'small' \| 'large'    | -        |
| shape    | Button shape                              | 'circle' \| 'square'  | -        |
| icon     | Custom dropdown trigger icon              | IconType[]            | Ellipsis |
| onClick  | Triggered when the main button is clicked | (e: MouseEvent)=>void | -        |
