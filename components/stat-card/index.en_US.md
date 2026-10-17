# StatCard

Statistical indicators, can set title, value, description.

## When to Use

Can be used in BI/Dashboard scenarios, business backend oriented, intuitive.

## Examples

[Card Display](./demo/card.vue?show=vertical)

- Used in Dashboard scenarios. Combined with `Grid`, it can adapt well to various devices.

[Trend Information](./demo/trend.vue?show=vertical)

- Use `trend` for supplementary information and `trendStatus` for its status color; cards remain equal-height in a Grid when some items omit the trend.

[Combination Display](./demo/with-card.vue)

- Show more custom data combined with the `Card` component

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | Card title, or the slot of the same name; empty content such as `false` or an empty string renders no title row | `VNodeChild` | - |
| items | Data to display | `StatNumberItem[]` | [] |
| precision | Numerical precision | `number` | 0 |
| statNumberType | Numerical change type | `"rollup" \| "countup"` | 'countup' |
| separator | Separator | `string` | - |
| reverse | Whether to reverse number/number description arrangement | `boolean` | false |
| bordered | Show border or not | `boolean` | false |
| size | Card size | `"small" \| "medium" \| "large"` | medium |
| prefix | Default prefix for all values, overridden by `items[].prefix` | `VNodeChild` | - |
| suffix | Default suffix for all values, overridden by `items[].suffix` | `VNodeChild` | - |

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

## Slots

| Name   | Description                                                                              |
| ------ | ---------------------------------------------------------------------------------------- |
| title  | Custom card title; falls back to the `title` prop when the slot renders nothing.         |
| prefix | Default prefix for all values, scoped with `{ item, index }` and lowest in priority.     |
| suffix | Default suffix for all values, scoped with `{ item, index }` and lowest in priority.     |

For standalone animated values, formatting, and animation controls, see [StatNumber](/components/stat-number-en).

### Common appearance

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| theme | Appearance theme | `"fill" \| "outline" \| "plain" \| "solid" \| "dashed"` | fill |
| shape | Card shape | `"square" \| "round"` | round |

## Theme

`theme` supports five looks — `fill`, `outline`, `plain`, `solid`, `dashed` — and is `fill` when you write nothing. `underlined` belongs to a control you type into, so a card falls back to `fill`.

`solid` fills the whole card with the primary colour and inverts its title, values and descriptions; only a trend marked `success` / `danger` / `warning` keeps its own colour. `bordered` draws the same edge as `theme="outline"`.
