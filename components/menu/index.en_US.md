# Menu

Navigation menu list for pages and functions.

## When to Use

The navigation menu is the soul of a website. Users rely on navigation to jump between pages. Generally divided into top navigation and side navigation. Top navigation provides global categories and functions, while side navigation provides a multi-level structure to accommodate and arrange the website architecture.

## Examples

[Top Navigation](./demo/basic.vue)

- Horizontal top navigation menu.

[Collapsible Inline Menu](./demo/collapsed.vue)

- Inline menus can be collapsed/expanded.

[Inline Menu](./demo/inline.vue)

- Vertical menu, with submenus embedded within the menu area.

[Switch Menu Type](./demo/mode.vue)

- Demonstrates dynamic mode switching.

[Theme](./demo/theme.vue)

- Two built-in themes: `light|dark`, defaulting to `light`.

[Vertical Menu](./demo/vertical.vue)

- Submenus appear as popups.

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
