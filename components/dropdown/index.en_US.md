# Dropdown

A list that drops down.

## When to Use

When there are too many operation commands on the page, this component can be used to accommodate operation elements. Clicking or hovering over the trigger point will display a dropdown menu. Selections can be made in the list, and corresponding commands can be executed.

## Examples

<code src="./demo/basic.vue">Basic Usage</code>
<code src="./demo/cascading.vue">Multi-level Menu</code>
<code src="./demo/divider.vue">Other Elements</code>
<code src="./demo/dropdownbutton.vue"></code>
<code src="./demo/placement.vue">Popup Position</code>
<code src="./demo/rightmenu.vue">Right-click menu</code>

## Dropdown API

| Property  | Description                                                                         | Type    | Default     |
| --------- | ----------------------------------------------------------------------------------- | ------- | ----------- |
| value     | Whether the dropdown is displayed by default. Can use v-model binding               | Boolean | hover       |
| trigger   | Trigger method. Supports 3 methods: hover (default), click, custom                  | String  | hover       |
| placement | Menu popup position: bottomLeft bottomCenter bottomRight topLeft topCenter topRight | String  | bottom-left |
| theme     | The component renders the theme, defaulting to 'light'.                             | String  | light       |
