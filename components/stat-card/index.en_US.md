# StatCard

Statistical indicators, can set title, value, description.

## When to Use

Can be used in BI/Dashboard scenarios, business backend oriented, intuitive.

## Examples

[Card Display](./demo/card.vue?show=vertical)

- Used in Dashboard scenarios. Combined with `Grid`, it can adapt well to various devices.

[Trend Information](./demo/trend.vue?show=vertical)

- Use `trend` for supplementary information and `trendStatus` for its status color; cards remain equal-height in a Grid when some items omit the trend.

[Basic Usage](./demo/basic.vue)

- Display Numbers Only

[Combination Display](./demo/with-card.vue)

- Show more custom data combined with the `Card` component

## API

| Property       | Description                                                  | Type                  | Default   |
| -------------- | ------------------------------------------------------------ | --------------------- | --------- |
| title          | Card title, customizable via the named slot                  | VNodeChild            | -         |
| items          | Data to display                                              | StatNumberItem[]      | []        |
| precision      | Numerical precision                                          | number                | 0         |
| statNumberType | Numerical change type                                        | 'rollup' \| 'countup' | 'countup' |
| separator      | Separator                                                    | string                | -         |
| reverse        | Whether to reverse number/number description arrangement     | boolean               | false     |
| bordered       | Show border or not                                           | boolean               | false     |
| size           | Card size                                                    | SizeType              | medium    |
| prefix         | Default prefix for all values, scoped with `{ item, index }` | VNodeChild            | -         |
| suffix         | Default suffix for all values, scoped with `{ item, index }` | VNodeChild            | -         |

### items Options

| Property        | Description                                       | Type                                            | Default |
| --------------- | ------------------------------------------------- | ----------------------------------------------- | ------- |
| key             | Unique key used to preserve animation state       | string \| number                                | -       |
| value           | Numerical value                                   | number                                          | -       |
| desc            | Numerical description                             | VNodeChild                                      | -       |
| trend           | Trend or supplementary content                    | VNodeChild                                      | -       |
| trendStatus     | Trend status                                      | 'default' \| 'success' \| 'danger' \| 'warning' | default |
| prefix          | Prefix content of numerical value                 | string \| VNode                                 | -       |
| suffix          | Suffix content of numerical value                 | string \| VNode                                 | -       |
| precision       | Numerical precision                               | number                                          | 0       |
| separator       | Separator                                         | string                                          | -       |
| duration        | Numerical dynamic display time (seconds)          | number                                          | 1.2     |
| autoAnimate     | Trigger animation when target becomes visible     | boolean                                         | true    |
| autoAnimateOnce | Run animation only once for auto-animate triggers | boolean                                         | true    |

## StatNumber API

| Property        | Description                                       | Type                  | Default   |
| --------------- | ------------------------------------------------- | --------------------- | --------- |
| modelValue      | Numerical value                                   | number                | 0         |
| duration        | Numerical dynamic display time (seconds)          | number                | 1.2       |
| prefix          | Prefix content of numerical value                 | string                | -         |
| suffix          | Suffix content of numerical value                 | string                | -         |
| precision       | Numerical precision                               | number                | 0         |
| type            | Numerical change type                             | 'rollup' \| 'countup' | 'countup' |
| separator       | Separator                                         | string                | -         |
| autoAnimate     | Trigger animation when target becomes visible     | boolean               | true      |
| autoAnimateOnce | Run animation only once for auto-animate triggers | boolean               | true      |

### Common appearance

| Property | Description      | Type                       | Default |
| -------- | ---------------- | -------------------------- | ------- |
| theme    | Appearance theme | `fill \| outline \| plain` | fill    |
| shape    | Card shape       | ShapeType                  | round   |
