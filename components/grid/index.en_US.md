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

<code src="./demo/architecture.vue">Layout Hierarchy Design (Architecture)</code>
<code src="./demo/autoFillMinWidth.vue">Dashboard Card Layout (Auto-fill + Min-Width)</code>
<code src="./demo/basic.vue">Basic Usage</code>
<code src="./demo/bento.vue">Image Gallery / Masonry (Bento Grid Style)</code>
<code src="./demo/breakpointFallback.vue">Complex Form Responsiveness (Breakpoint Fallback)</code>
<code src="./demo/fixedRowsAreas.vue">Holy Grail Layout / Admin Panel (Fixed Rows & Areas)</code>
<code src="./demo/footerStrategy.vue">Responsive Footer / Menu (Footer Strategy)</code>
<code src="./demo/heroSection.vue">Hero Section Overlay Layout (Layering)</code>
<code src="./demo/suffixDisplayNone.vue">Responsive Hiding & Forced Sorting (Suffix & Display None)</code>

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
