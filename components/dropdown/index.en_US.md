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

[Multi-level Menu](./demo/cascading.vue)

- The passed menu has multiple levels.

## Dropdown API

| Property  | Description                                                                         | Type    | Default     |
| --------- | ----------------------------------------------------------------------------------- | ------- | ----------- |
| value     | Whether the dropdown is displayed by default. Can use v-model binding               | Boolean | hover       |
| trigger   | Trigger method. Supports 3 methods: hover (default), click, custom                  | String  | hover       |
| placement | Menu popup position: bottomLeft bottomCenter bottomRight topLeft topCenter topRight | String  | bottom-left |
| theme     | The component renders the theme, defaulting to 'light'.                             | String  | light       |
