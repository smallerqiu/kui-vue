# Tabs

Tab switching component.

## When to Use

Provide peer areas to accommodate and display large chunks of content, keeping the interface clean.

- Card-style tabs, providing closable styles, often used at the top of containers.
- Standard line-style tabs, used for main function switching inside containers, this is the most commonly used Tabs.

## Examples

<code src="./demo/card.vue">Card-style Tabs</code>
<code src="./demo/centered.vue">Centered</code>
<code src="./demo/closable.vue">Add and Close Tabs</code>
<code src="./demo/disabled.vue">Disabled</code>
<code src="./demo/extra.vue">Extra Content</code>
<code src="./demo/icon.vue">Icon</code>
<code src="./demo/sample.vue">Minimalist Tabs</code>

## Tabs API

| Property             | Description                                                     | Type                | Default |
| -------------------- | --------------------------------------------------------------- | ------------------- | ------- |
| v-model(:modelValue) | Currently active tab panel's key                                | String              | -       |
| card                 | Whether tab style is card style                                 | Boolean             | false   |
| sample               | Whether tab style is simple style                               | Boolean             | false   |
| animated             | Whether to use animation to switch Tabs                         | Boolean             | true    |
| remove               | Callback when tab is closed, returns the closed tab's key value | Function(activeKey) | -       |
| change               | Callback when switching panels                                  | Function(activeKey) | -       |
| tab-click            | Callback when tab is clicked                                    | Function(activeKey) | -       |

## Tabs.TabPanel API

| Property | Description                    | Type    | Default |
| -------- | ------------------------------ | ------- | ------- |
| key      | Key value required by Vue      | String  | -       |
| title    | Text displayed in tab header   | String  | -       |
| icon     | Icon displayed in tab header   | String  | -       |
| disabled | Whether tab is disabled        | Boolean | false   |
| closable | Whether tab shows close button | Boolean | false   |
