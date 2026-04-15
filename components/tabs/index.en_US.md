# Tabs

Tab switching component.

## When to Use

Provide peer areas to accommodate and display large chunks of content, keeping the interface clean.

- Card-style tabs, providing closable styles, often used at the top of containers.
- Standard line-style tabs, used for main function switching inside containers, this is the most commonly used Tabs.

## Examples

[Basic Usage](./demo/basic.vue?show=vertical)

- The first item is selected by default.

[Disabled](./demo/disabled.vue?show=vertical)

- Disable a specific tab.

[Centered](./demo/centered.vue?show=vertical)

- Tabs are centered.

[Icon](./demo/icon.vue?show=vertical)

- Tabs with icons.

[Extra Content](./demo/extra.vue?show=vertical)

- You can add extra operations to the right of the tabs.

[Card-style Tabs](./demo/card.vue?show=vertical)

- Another style of tabs.

[Add and Close Tabs](./demo/closable.vue?show=vertical)

- Only card-style tabs support adding and closing options. Use `closable={false}` to disable closing.

[Minimalist Tabs](./demo/sample.vue?show=vertical)

- Simple card presentation mode.

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
