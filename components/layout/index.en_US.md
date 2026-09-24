# Layout

Assists with page-level overall layout.

## Component Overview

- `Layout`: Layout container, under which `Header`, `Sider`, `Content`, `Footer`, or `Layout` itself can be nested. Can be placed in any parent container.
- `Header`: Top layout, comes with default styles, any element can be nested under it, can only be placed in `Layout`.
- `Sider`: Sidebar, comes with default styles and basic functions, any element can be nested under it, can only be placed in `Layout`.
- `Content`: Content section, comes with default styles, any element can be nested under it, can only be placed in `Layout`.
- `Footer`: Bottom layout, comes with default styles, any element can be nested under it, can only be placed in `Layout`.

> After version 3.0, `flex` layout is used, please pay attention to [flex](http://caniuse.com/#search=flex)

## Examples

[Basic Layout](./demo/basic.vue?show=vertical)

- Common combinations of Header, Sider, Content, and Footer.

[Collapsible Sider](./demo/collapsible-sider.vue?show=vertical)

- Control Sider with the `collapsible` and `collapsed` properties.

[Nested Layout](./demo/nested.vue?show=vertical)

- Nest Layout containers and combine left and right Siders.

[Fixed-height Layout](./demo/fixed-height.vue?show=vertical)

- Give Layout a fixed height and let Content scroll independently.

## Layout API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| hasSider | Whether the layout contains a sider; detected automatically when omitted | `boolean` | - |
| suffixCls | CSS class suffix, prefixed with `k-`; custom values require matching styles. | `string` | 'layout' |

## Layout.Sider API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| width | Expanded width | number \| string | 200 |
| collapsedWidth | Collapsed width | number \| string | 80 |
| collapsible | Whether collapsed styling is enabled | boolean | false |
| collapsed | Controlled collapsed state | boolean | false |
| suffixCls | CSS class suffix, prefixed with `k-`; custom values require matching styles. | `string` | 'layout-sider' |
