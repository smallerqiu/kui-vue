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
