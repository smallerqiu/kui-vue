# Layout

Assists with page-level overall layout.

## Component Overview

- `Layout`: Layout container, under which `Header`, `Sider`, `Content`, `Footer`, or `Layout` itself can be nested. Can be placed in any parent container.
- `Header`: Top layout, comes with default styles, any element can be nested under it, can only be placed in `Layout`.
- `Sider`: Sidebar, comes with default styles and basic functions, any element can be nested under it, can only be placed in `Layout`.
- `Content`: Content section, comes with default styles, any element can be nested under it, can only be placed in `Layout`.
- `Footer`: Bottom layout, comes with default styles, any element can be nested under it, can only be placed in `Layout`.

> After version 3.0, `flex` layout is used, please pay attention to [flex](http://caniuse.com/#search=flex)

[Documentation/Knowledge Base Layout](./demo/documentation-layout.vue)

- Imitate the structure of official documentation like Vue or React, with a focus on a fixed sidebar for directory navigation. - **Layout Logic**: The Header spans the full width, and the Layout below includes a Sider (usually on the left or right as an index) and Content. - **Matching Components**: Input (search box), Anchor (anchor navigation), Divider (divider line).

[Modern Enterprise Admin Console](./demo/enterprise-admin-console.vue)

- The most common "sidebar navigation + top toolbar" structure, suitable for SaaS products, CMS backends, or ERP systems. - Layout logic: The outer Layout includes the Sider, while the inner Layout contains the Header, Content, and Footer. - Matching components: Menu (vertical mode), Breadcrumb, Avatar.

[Visual Editor Layout (IDE / Low-code Layout)](./demo/low-code-layout.vue)

- - Scenario: Similar to VS Code, Figma, or low-code platforms. - Key Points: Minimalist navigation, fixed-height multi-column layout, and a bottom status bar (Footer). This demo highlights how the Layout divides screen space into compact yet well-organized functional areas through multi-level nesting.

[Modern Enterprise Admin Console](./demo/messaging-collaboration.vue)

- The most common "sidebar navigation + top toolbar" structure, suitable for SaaS products, CMS backends, or ERP systems. - Layout logic: The outer Layout includes the Sider, while the inner Layout contains the Header, Content, and Footer. - Matching components: Menu (vertical mode), Breadcrumb, Avatar.

[Responsive Portal/Official Website Layout (Portal Exhibition)](./demo/portal-exhibition.vue)

- Suitable for portal websites, showcase websites, or personal blogs with a large amount of information but shallow hierarchy. - **Layout Logic**: A single vertical Layout, directly arranging Header, Content, and Footer. - **Matching Components**: Menu (horizontal mode), Carousel (slideshow), Card (content card).

[Task Workbench (The "Workbench" Details Layout)](./demo/workbench-layout.vue)

- Left navigation + Middle dashboard + Right detail panel (Right Sider).
