# Layout

Assists with page-level overall layout.

## Component Overview

- `Layout`: Layout container, under which `Header`, `Sider`, `Content`, `Footer`, or `Layout` itself can be nested. Can be placed in any parent container.
- `Header`: Top layout, comes with default styles, any element can be nested under it, can only be placed in `Layout`.
- `Sider`: Sidebar, comes with default styles and basic functions, any element can be nested under it, can only be placed in `Layout`.
- `Content`: Content section, comes with default styles, any element can be nested under it, can only be placed in `Layout`.
- `Footer`: Bottom layout, comes with default styles, any element can be nested under it, can only be placed in `Layout`.

> After version 3.0, `flex` layout is used, please pay attention to [flex](http://caniuse.com/#search=flex)

<code src="./demo/documentationLayout.vue">Documentation/Knowledge Base Layout</code>
<code src="./demo/enterpriseAdminConsole.vue">Modern Enterprise Admin Console</code>
<code src="./demo/lowCodeLayout.vue">Visual Editor Layout (IDE / Low-code Layout)</code>
<code src="./demo/messagingCollaboration.vue">Modern Enterprise Admin Console</code>
<code src="./demo/portalExhibition.vue">Responsive Portal/Official Website Layout (Portal Exhibition)</code>
<code src="./demo/workbenchLayout.vue">Task Workbench (The "Workbench" Details Layout)</code>
