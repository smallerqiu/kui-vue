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

[Browser-style Tabs](./demo/browser.vue?show=vertical)

- Suitable for multi-document, editor, and workspace scenarios.

[Add and Close Tabs](./demo/closable.vue?show=vertical)

- Card-style and browser-style tabs support closing. Use `closable={false}` to disable closing.

[Minimalist Tabs](./demo/sample.vue?show=vertical)

- Simple card presentation mode.

## Tabs API

| Property     | Description                                                     | Type                                      | Default             |
| ------------ | --------------------------------------------------------------- | ----------------------------------------- | ------------------- |
| modelValue   | Currently active tab panel's key                                | string \| number                          | -                   |
| defaultValue | Initially active key in uncontrolled mode                       | string \| number                          | First enabled panel |
| variant      | Tab presentation                                                | `line` \| `card` \| `sample` \| `browser` | `line`              |
| card         | Whether to use card style; retained for compatibility           | boolean                                   | false               |
| sample       | Whether to use sample style; retained for compatibility         | boolean                                   | false               |
| animated     | Whether to use animation to switch Tabs                         | boolean                                   | true                |
| centered     | Whether to center the label                                     | boolean                                   | false               |
| onRemove     | Callback when tab is closed, returns the closed tab's key value | (key: string) => void                     | -                   |
| onChange     | Callback when switching panels                                  | (key: string) => void                     | -                   |
| onTabClick   | Callback when tab is clicked                                    | (key: string) => void                     | -                   |

## Tabs.TabPanel API

| Property | Description                     | Type             | Default |
| -------- | ------------------------------- | ---------------- | ------- |
| key      | Key value required by Vue       | string \| number | -       |
| title    | Content displayed in tab header | VNodeChild       | -       |
| icon     | Icon displayed in tab header    | IconType         | -       |
| disabled | Whether tab is disabled         | boolean          | false   |
| closable | Whether tab shows close button  | boolean          | false   |
