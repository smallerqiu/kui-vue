## API

### Menu

| Property             | Description                                                       | Type                                              | Default  |
| -------------------- | ----------------------------------------------------------------- | ------------------------------------------------- | -------- |
| value(v-model)       | Currently selected menu item                                      | String: []                                        | light    |
| theme                | Theme color                                                       | String: light dark                                | light    |
| items                | Menu data                                                         | Array                                             | -        |
| v-model:openKeys     | Currently expanded SubMenu menu item key array                    | String[]                                          | -        |
| v-model:selectedKeys | Currently selected menu item, can use v-model binding             | String[]                                          | -        |
| mode                 | Menu type, supports three modes: vertical, horizontal, and inline | String: vertical vertical-right horizontal inline | vertical |
| select               | Called when MenuItem is clicked                                   | Fun({key, keyPath})                               | -        |
| openChange           | Callback when SubMenu expands/collapses                           | Fun(openKeys: String[])                           | -        |
| accordion            | Whether only one menu item can be expanded                        | Boolean                                           | false    |
| inline-collapsed     | Whether the menu is collapsed in inline mode                      | Boolean                                           | false    |

### Menu(items)

| Property | Description                              | Type    | Default |
| -------- | ---------------------------------------- | ------- | ------- |
| icon     | Item icon                                | String  | -       |
| disabled | Whether disabled                         | Boolean | false   |
| key      | Unique identifier for item               | String  | -       |
| title    | Suspended title displayed when collapsed | String  | -       |
| children | Menu children                            | Array   | -       |

### MenuItem

| Property | Description                              | Type    | Default |
| -------- | ---------------------------------------- | ------- | ------- |
| icon     | Item icon                                | String  | -       |
| disabled | Whether disabled                         | Boolean | false   |
| key      | Unique identifier for item               | String  | -       |
| title    | Suspended title displayed when collapsed | String  | -       |

### SubMenu

| Property | Description                | Type          | Default |
| -------- | -------------------------- | ------------- | ------- |
| icon     | Item icon                  | String        | -       |
| disabled | Whether disabled           | Boolean       | false   |
| key      | Unique identifier for item | String        | -       |
| title    | Submenu item value         | String, slots | -       |

### MenuGroup

| Property | Description | Type          | Default |
| -------- | ----------- | ------------- | ------- |
| title    | Group title | String, slots | -       |
