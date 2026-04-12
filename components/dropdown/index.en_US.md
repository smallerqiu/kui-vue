# Dropdown

A list that drops down.

## When to Use

When there are too many operation commands on the page, this component can be used to accommodate operation elements. Clicking or hovering over the trigger point will display a dropdown menu. Selections can be made in the list, and corresponding commands can be executed.

## Examples

[Basic Usage](./demo/basic.vue)

- The simplest dropdown menu.

[Multi-level Menu](./demo/cascading.vue)

- The passed menu has multiple levels.

[Other Elements](./demo/divider.vue)

- Dividers and disabled menu items.

[](./demo/dropdownbutton.vue)

- On the left is the button, and on the right is an additional related function menu. The icon property can be set to modify the icon on the right.

[Popup Position](./demo/placement.vue)

- Supports 6 popup positions.

[Right-click menu](./demo/rightmenu.vue)

- By default, the menu is triggered by hovering, but it can also be triggered by clicking the right mouse button.

## Dropdown API

| Property  | Description                                                                         | Type    | Default     |
| --------- | ----------------------------------------------------------------------------------- | ------- | ----------- |
| value     | Whether the dropdown is displayed by default. Can use v-model binding               | Boolean | hover       |
| trigger   | Trigger method. Supports 3 methods: hover (default), click, custom                  | String  | hover       |
| placement | Menu popup position: bottomLeft bottomCenter bottomRight topLeft topCenter topRight | String  | bottom-left |
| theme     | The component renders the theme, defaulting to 'light'.                             | String  | light       |
