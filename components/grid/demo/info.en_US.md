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
