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

- Supports local `light|dark` themes and inherits the global theme when omitted.

[Switch Menu Type](./demo/mode.vue?show=vertical)

- Demonstrates dynamic mode switching.

[Collapsible Inline Menu](./demo/collapsed.vue?show=vertical)

- Inline menus can be collapsed/expanded.

## API

### MenuAPI

| Property         | Description                                      | Type                                   | Default    |
| ---------------- | ------------------------------------------------ | -------------------------------------- | ---------- |
| modelValue       | Currently selected menu items (v-model)          | string[]                               | []         |
| theme            | Local theme; inherits global theme when omitted  | `light` \| `dark`                      | -          |
| items            | Menu data                                        | MenuOptionsProps[]                     | -          |
| openKeys         | Currently expanded SubMenu menu item key array   | string[]                               | []         |
| mode             | Menu type                                        | `vertical` \| `horizontal` \| `inline` | `vertical` |
| onSelect         | Called when MenuItem is clicked                  | (data: MenuSelectEvent) => void        | -          |
| onOpenChange     | Callback when SubMenu expands/collapses          | (openKeys: string[]) => void           | -          |
| accordion        | Whether only one menu item can be expanded       | boolean                                | false      |
| inlineCollapsed  | Whether the menu is collapsed in inline mode     | boolean                                | false      |
| collapsedTooltip | Whether leaf items show a tooltip when collapsed | boolean                                | true       |

### Menu(items)

| Property | Description                | Type               | Default |
| -------- | -------------------------- | ------------------ | ------- |
| icon     | Item icon                  | IconType           | -       |
| disabled | Whether disabled           | boolean            | false   |
| key      | Unique identifier for item | string             | -       |
| title    | Menu item content          | VNodeChild         | -       |
| children | Menu children              | MenuOptionsProps[] | -       |

### MenuItem

| Property | Description                | Type       | Default |
| -------- | -------------------------- | ---------- | ------- |
| icon     | Item icon                  | IconType   | -       |
| disabled | Whether disabled           | boolean    | false   |
| key      | Unique identifier for item | string     | -       |
| title    | Menu item content          | VNodeChild | -       |

### SubMenu

| Property | Description                | Type       | Default |
| -------- | -------------------------- | ---------- | ------- |
| icon     | Item icon                  | IconType   | -       |
| disabled | Whether disabled           | boolean    | false   |
| key      | Unique identifier for item | string     | -       |
| title    | Submenu item content       | VNodeChild | -       |

### MenuGroup

| Property | Description | Type       | Default |
| -------- | ----------- | ---------- | ------- |
| title    | Group title | VNodeChild | -       |
