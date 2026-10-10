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

[Groups and Dividers](./demo/group.vue?show=vertical)

- Use `MenuGroup` to classify menu items and `MenuDivider` to insert a separator.

## API

### MenuAPI

| Property         | Description                                                                                                                   | Type                                   | Default    |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ---------- |
| modelValue       | Currently selected menu items (v-model)                                                                                       | string[]                               | -          |
| value            | Initial value, read only on mount. Use modelValue for subsequent updates; modelValue takes precedence when both are provided. | string[]                               | []         |
| theme            | Local theme; inherits global theme when omitted                                                                               | `light` \| `dark`                      | -          |
| items            | Menu data                                                                                                                     | MenuOptionsProps[]                     | -          |
| openKeys         | Currently expanded SubMenu menu item key array                                                                                | string[]                               | []         |
| mode             | Menu type                                                                                                                     | `vertical` \| `horizontal` \| `inline` | `vertical` |
| onSelect         | Called when MenuItem is clicked                                                                                               | (data: MenuSelectEvent) => void        | -          |
| onOpenChange     | Callback when SubMenu expands/collapses                                                                                       | (openKeys: string[]) => void           | -          |
| accordion        | Whether only one menu item can be expanded                                                                                    | boolean                                | false      |
| inlineCollapsed  | Whether the menu is collapsed in inline mode                                                                                  | boolean                                | false      |
| collapsedTooltip | Whether leaf items show a tooltip when collapsed                                                                              | boolean                                | true       |

### Menu(items)

| Property | Description                | Type               | Default |
| -------- | -------------------------- | ------------------ | ------- |
| icon     | Item icon                  | IconType           | -       |
| disabled | Whether disabled           | boolean            | false   |
| key      | Unique identifier for item | string             | -       |
| title    | Menu item content          | VNodeChild         | -       |
| children | Menu children              | MenuOptionsProps[] | -       |

### MenuItem

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| icon | Item icon | `IconType[]` | - |
| disabled | Whether disabled | `boolean` | false |
| key | Unique identifier for item | string | - |
| title | Menu item content | `VNodeChild` | - |
| onClick | Callback fired when item clicked | `(event: MouseEvent) => void` | - |

### SubMenu

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| icon | Item icon | `IconType[]` | - |
| disabled | Whether disabled | `boolean` | false |
| key | Unique identifier for item | string | - |
| title | Submenu item content | `VNodeChild` | - |

### MenuGroup

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | Group title | `VNodeChild` | - |

### MenuDivider

Has no properties. Rendered as a child of `Menu` or `SubMenu`, it draws a separator line.

## Conventions

- The `items` data structure can only express nested menus; it cannot express groups or separators. Use the children form (see "Groups and Dividers") when you need `MenuGroup` or `MenuDivider`.
- `openKeys` is the set of currently expanded SubMenus and applies to every `mode`: in `inline` it controls the embedded expansion, in `horizontal`/`vertical` it controls whether the matching popup is shown. Switching `mode` never rewrites the expanded state and never emits an extra `openChange`.
- `inlineCollapsed` only applies when `mode="inline"`; passing it in other modes does not change the presentation. Collapsing temporarily hides the inline expansion and expanding restores it; popup expansions opened while collapsed are kept internally and close when an item is selected.
- While the menu is collapsed, an `openKeys` value coming from the parent is written into the expansion memory and takes effect once the menu widens. Values this component reports itself and receives back as props — the collapsed popup path, and the closure after selecting an item — never overwrite that memory. Restoring the expansion reports it once.
- `modelValue` follows the library-wide controlled convention; `value` is only read on mount, and `modelValue` wins when both are provided.
- Selecting an item puts "ancestor SubMenu keys + the item key" into `modelValue`, so parent menus stay highlighted. Clicking an already selected item does not deselect it.
- Popups render under the container returned by `usePopupContainer` (default `body`) and are linked to their trigger through `aria-controls` / `aria-labelledby`.
- The root of a `mode="horizontal"` menu is `role="menubar"` (arrow keys move sideways between siblings) while `vertical`/`inline` use `role="menu"` (arrow keys move up/down). Submenu lists always declare `aria-orientation="vertical"`, and the wrapper `li` is `role="none"` so it carries no semantics.
- Opening submenus with the keyboard: `ArrowDown` on a submenu item of a `menubar` (the `horizontal` root) and `ArrowRight` on one inside a `vertical`/`inline` list expands it and moves focus straight to the first usable item of the child list; while closed, `Enter`/`Space` behave like a click and also expand. Inside an open list `Escape` unwinds exactly that level and returns focus to its trigger, so the parent stays open. Disabled items are skipped both when choosing the first item and when walking siblings.
