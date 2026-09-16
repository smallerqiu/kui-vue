# Grid

## Dimensionality and Control: Grid vs. Row / Col

This is the most commonly confused set of concepts.

- Row / Col (One-Dimensional Grid): Uses Flex to divide the available space into 24 parts.
  - Limitations: It is essentially one-dimensional. Although it can wrap, it cannot precisely control placement across rows.

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

Responsive breakpoints use the Grid container width, not the viewport width. Resize the demo area to observe the changes.

[Basic Usage](./demo/basic.vue?show=vertical)

- Use `span` to control occupied columns, and `columnStart` or `rowStart` for precise placement.

[Dashboard Card Layout (Auto-fill + Min-Width)](./demo/auto-fill-min-width.vue?show=vertical)

- No need to manually set breakpoints. Rely on `itemMinWidth` to let the container automatically increase or decrease the number of columns based on its width.

> When `itemMinWidth` is set, the `cols` parameter becomes ineffective. This is a content-driven layout method, perfect for image galleries or card lists, ensuring cards maintain a suitable width without becoming too crowded during container resizing.

[Responsive Breakpoints and Fallback](./demo/breakpoint-fallback.vue?show=vertical)

- Values use mobile-first downward fallback. If `md` is defined and `lg` is omitted, `lg` continues to use the `md` value.

[Fixed Row Layout](./demo/fixed-rows-areas.vue?show=vertical)

- The vertical control power of `rows` and `rowSpan`.

[Responsive Hiding & Forced Sorting (Suffix & Display None)](./demo/suffix-display-none.vue?show=vertical)

- `span: 0` completely removes the DOM placeholder, and `suffix` spans across all dynamic items.

[Bento Grid Layout](./demo/bento-en.vue?show=vertical)

- Combines different `span` and `rowSpan` values with `row dense` auto-placement.

[Hero Section Overlay Layout (Layering)](./demo/hero-section.vue?show=vertical)

- Use `columnStart` and `rowStart` to place content in explicit grid regions and create layered layouts.

## Grid API

| Property     | Description                                                                                                          | Type                          | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ------- |
| cols         | Set the number of grid columns. Supports numbers (equal division) or strings (e.g., 1fr 2fr)                         | number \| string \| object    | 24      |
| rows         | Set the number of grid rows or height. Default is auto                                                               | number \| string \| object    | auto    |
| autoRows     | Implicit grid row height used to establish the base unit of a Bento layout.                                          | string                        | auto    |
| flow         | CSS Grid auto-placement direction                                                                                    | CSSProperties['gridAutoFlow'] | row     |
| xGap         | Grid spacing (horizontal direction). Numeric type will automatically add px unit.                                    | number \| string \| object    | 0       |
| yGap         | Row spacing (vertical direction). Numeric type will automatically add px unit.                                       | number \| string \| object    | 0       |
| itemMinWidth | Auto-fill mode. Grid calculates the number of columns from the minimum item width.                                   | number \| string              | -       |
| align        | Vertical alignment of child items within grid cells                                                                  | CSSProperties['alignItems']   | -       |
| justify      | Horizontal alignment of child items within grid cells                                                                | CSSProperties['justifyItems'] | -       |
| debug        | Debug mode. When enabled, red transparent background columns are displayed to facilitate developer layout alignment. | boolean                       | false   |

## GridItem API

| Property    | Description                                                       | Type             | Default |
| ----------- | ----------------------------------------------------------------- | ---------------- | ------- |
| span        | Number of columns occupied. `0` hides the item at that breakpoint | number \| object | 1       |
| rowSpan     | Number of rows occupied                                           | number \| object | 1       |
| columnStart | Explicit starting column line                                     | number \| object | -       |
| rowStart    | Explicit starting row line                                        | number \| object | -       |
| suffix      | Place the item at the end of the explicit grid                    | boolean          | false   |

## Breakpoints

| Identifier | Full Name         | Threshold (width w) | Typical Scenario                           |
| ---------- | ----------------- | ------------------- | ------------------------------------------ |
| xs         | Extra Small       | 0≤w<576px           | Phone portrait (Phones)                    |
| sm         | Small             | 576≤w<768px         | Phone landscape / Small tablet             |
| md         | Medium            | 768≤w<992px         | Medium tablet (e.g., iPad)                 |
| lg         | Large             | 992≤w<1200px        | Laptop / Small screen display              |
| xl         | Extra Large       | 1200≤w<1600px       | Standard desktop display                   |
| xxl        | Extra Extra Large | w≥1600px            | High-resolution large screen / Wide screen |
