# Grid

### Dimensionality and Control: Grid vs. Row/Col

This is the most commonly confused set of concepts.

- Row/Col (Traditional One-Dimensional Grid): Usually implemented based on flex or float. It divides the space into 12 or 24 parts.
  - Limitations: It is essentially one-dimensional. Although it can wrap, it is difficult to precisely control the vertical alignment of child items (such as making a certain Col span two rows). It requires negative margins and padding to handle gutters (spacing).

- Grid (Two-Dimensional Grid): Grid is two-dimensional. It can precisely control both rows and columns simultaneously.
  - Advantages: No need for negative margins, directly control spacing through gaps. Supports rowSpan and dense mode, easily achieving "Bento Box" layouts.

### Logic Orientation: Grid vs. Flex

- Flex (Content-Oriented): Use Flex when you have a group of items with variable widths, and you want them to automatically shrink or expand based on their content size and align within a single row. It emphasizes flexibility.

- Grid (Layout-Oriented): Use Grid when you first have a fixed grid framework (like 8 cells for a dashboard) and then want to "fill" content into it. It emphasizes structure.

### Global Architecture vs. Local Arrangement: Layout Series

The Layout and its subcomponents (Header, Sider, Content, Footer) belong to the page skeleton-level components.

- Layout: Solves the semantic structure of the page's large background. It is responsible for managing the expansion/collapse of the sidebar, the fixed positioning of the top navigation, and the overall scrollbar management.

- Grid: Usually nested inside the Content (content area) of the Layout.
  - Difference: Layout defines "how many rooms the house has"; Grid defines "how to arrange the furniture in each room".

## Examples

You can manually resize the browser window to observe the effect.

[Basic Usage](./demo/basic.vue)

- > The `offset` logic of Grid is based on `grid-column-start`. In `dense` fill mode, `offset` might cause unexpected "gap-filling" behavior.

[Dashboard Card Layout (Auto-fill + Min-Width)](./demo/auto-fill-min-width.vue)

- No need to manually set breakpoints. Rely on `itemMinWidth` to let the container automatically increase or decrease the number of columns based on its width. > When `itemMinWidth` is set, the `cols` parameter becomes ineffective. This is a content-driven layout method, perfect for image galleries or card lists, ensuring cards maintain a suitable width without becoming too crowded during container resizing.

[Complex Form Responsiveness (Breakpoint Fallback)](./demo/breakpoint-fallback.vue)

- The logic for finding breakpoints up or down. For example, if `md` is defined but `lg` is not, can the system correctly apply the `md` value?

[Holy Grail Layout / Admin Panel (Fixed Rows & Areas)](./demo/fixed-rows-areas.vue)

- The vertical control power of `rows` and `rowSpan`.

[Responsive Hiding & Forced Sorting (Suffix & Display None)](./demo/suffix-display-none.vue)

- `span: 0` completely removes the DOM placeholder, and `suffix` spans across all dynamic items.

[Image Gallery / Masonry (Bento Grid Style)](./demo/bento.vue)

- Asymmetric layout.

[Complex Data Detail Page (Alignment & Whitespace)](./demo/align-white-space.vue)

- Effect of a Descriptions list, but automatically adjusts display density on different screens.

[Hero Section Overlay Layout (Layering)](./demo/hero-section.vue)

- The overlapping capability of `grid-column-start` and `grid-row-start`, with text floating over a specific part of an image.

[Responsive Footer / Menu (Footer Strategy)](./demo/footer-strategy.vue)

- Extreme compression from "multi-column vertical arrangement" to "single-column folding".

[Layout Hierarchy Design (Architecture)](./demo/architecture.vue)

- - Layer 1: Layout series — the main page skeleton (Header + Sider + Content). - Layer 2: Grid series — the primary 2D layout for the content area (stat cards, Bento chart matrix). - Layer 3: Row/Col — simple 1D proportional division (e.g., two side-by-side tables at the bottom). - Layer 4: Flex — extremely fine-grained content alignment (card title + icon).

## Grid API

| Property     | Description                                                                                                                             | Type                     | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------- |
| cols         | Set the number of grid columns. Supports numbers (equal division) or strings (e.g., 1fr 2fr)                                            | Number, String, Object   | 24      |
| rows         | Set the number of grid rows or height. Default is auto                                                                                  | Number, String, Object   | auto    |
| autoRows     | Implicit grid row height. Used in Bento layout or waterfall flow to set the base height.                                                | String                   | auto    |
| xGap         | Grid spacing (horizontal direction). Numeric type will automatically add px unit.                                                       | Number, String, Object   | 0       |
| yGap         | Row spacing (vertical direction). Numeric type will automatically add px unit.                                                          | Number, String, Object   | 0       |
| itemMinWidth | Auto-fill mode. Set the minimum width of child items. Grid will automatically calculate the number of columns based on container width. | Number                   | -       |
| align        | Vertical alignment of child items within grid cells                                                                                     | String (center, start..) | -       |
| justify      | Horizontal alignment of child items within grid cells.                                                                                  | String (center, start..) | -       |
| debug        | Debug mode. When enabled, red transparent background columns are displayed to facilitate developer layout alignment.                    | Boolean                  | false   |

## GridItem API

| Property | Description                                                                                                | Type                   | Default |
| -------- | ---------------------------------------------------------------------------------------------------------- | ---------------------- | ------- |
| span     | Number of columns occupied. When set to 0, it will be completely hidden (display: none) at this breakpoint | Number, String, Object | 1       |
| rowSpan  | Number of rows occupied. Combined with the container's autoRows, asymmetric layouts can be achieved        | Number, String, Object | 1       |
| offset   | Number of columns to offset to the left. Used to create whitespace without using blank placeholders.       | Number, Object         | 0       |
| suffix   | Fixed at the end. When set to true, the item will be forced to the end of the current row.                 | Boolean                | false   |

## Breakpoints

| Identifier | Full Name         | Threshold (width w) | Typical Scenario                           |
| ---------- | ----------------- | ------------------- | ------------------------------------------ |
| xs         | Extra Small       | 0≤w<576px           | Phone portrait (Phones)                    |
| sm         | Small             | 576≤w<768px         | Phone landscape / Small tablet             |
| md         | Medium            | 768≤w<992px         | Medium tablet (e.g., iPad)                 |
| lg         | Large             | 992≤w<1200px        | Laptop / Small screen display              |
| xl         | Extra Large       | 1200≤w<1600px       | Standard desktop display                   |
| xxl        | Extra Extra Large | w≥1600px            | High-resolution large screen / Wide screen |
