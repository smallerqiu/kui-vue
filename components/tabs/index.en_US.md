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
