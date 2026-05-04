# Menu

Navigation menu list for pages and functions.

## When to Use

The navigation menu is the soul of a website. Users rely on navigation to jump between pages. Generally divided into top navigation and side navigation. Top navigation provides global categories and functions, while side navigation provides a multi-level structure to accommodate and arrange the website architecture.

## Examples

[Top Navigation](./demo/basic.vue?show=vertical)

- Horizontal top navigation menu.

[Inline Menu](./demo/inline.vue?show=vertical)

- Vertical menu, with submenus embedded within the menu area.

[Expand Only Current Parent Menu](./demo/accordion.vue?show=vertical)

- Clicking a menu item collapses all other expanded menus, keeping the menu focused and clean.

[Vertical Menu](./demo/vertical.vue?show=vertical)

- Submenus appear as popups.

[Theme](./demo/theme.vue?show=vertical)

- Two built-in themes: `light|dark`, defaulting to `light`.

[Switch Menu Type](./demo/mode.vue?show=vertical)

- Demonstrates dynamic mode switching.

[Collapsible Inline Menu](./demo/collapsed.vue?show=vertical)

- Inline menus can be collapsed/expanded.

## API

### MenuAPI

| Property        | Description                                                       | Type                                              | Default  |
| --------------- | ----------------------------------------------------------------- | ------------------------------------------------- | -------- |
| modelValue      | Currently selected menu item (v-model)                            | string: []                                        | -    |
| theme           | Theme color                                                       | [light, dark]                                     | light    |
| items           | Menu data                                                         | Array                                             | -        |
| openKeys        | Currently expanded SubMenu menu item key array                    | string[]                                          | -        |
| selectedKeys    | Currently selected menu item, can use v-model binding             | string[]                                          | -        |
| mode            | Menu type, supports three modes: vertical, horizontal, and inline | string: vertical vertical-right horizontal inline | vertical |
| onSelect        | Called when MenuItem is clicked                                   | Fun({key, keyPath})                               | -        |
| onOpenChange    | Callback when SubMenu expands/collapses                           | Fun(openKeys: string[])                           | -        |
| accordion       | Whether only one menu item can be expanded                        | bool                                           | false    |
| inlineCollapsed | Whether the menu is collapsed in inline mode                      | bool                                           | false    |

### Menu(items)

| Property | Description                              | Type    | Default |
| -------- | ---------------------------------------- | ------- | ------- |
| icon     | Item icon                                | string  | -       |
| disabled | Whether disabled                         | bool | false   |
| key      | Unique identifier for item               | string  | -       |
| title    | Suspended title displayed when collapsed | string  | -       |
| children | Menu children                            | Array   | -       |

### MenuItem

| Property | Description                              | Type    | Default |
| -------- | ---------------------------------------- | ------- | ------- |
| icon     | Item icon                                | string  | -       |
| disabled | Whether disabled                         | bool | false   |
| key      | Unique identifier for item               | string  | -       |
| title    | Suspended title displayed when collapsed | string  | -       |

### SubMenu

| Property | Description                | Type          | Default |
| -------- | -------------------------- | ------------- | ------- |
| icon     | Item icon                  | string        | -       |
| disabled | Whether disabled           | bool       | false   |
| key      | Unique identifier for item | string        | -       |
| title    | Submenu item value         | string, slots | -       |

### MenuGroup

| Property | Description | Type          | Default |
| -------- | ----------- | ------------- | ------- |
| title    | Group title | string, slots | -       |
