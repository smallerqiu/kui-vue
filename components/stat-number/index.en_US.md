# StatNumber

Animate numerical values independently or combine them with cards and dashboards.

## When to Use

Use for counters, amounts, and metrics that change over time. For a complete metric card with a title, description, and trend, see [StatCard](/components/stat-card-en).

## Examples

[Animation and Formatting](./demo/basic.vue)

- Compare the default numerical transition with `type="rollup"`. Try `12,345 → 54,321`, increments, decrements, and random values; examples also cover decimal precision and prefixes/suffixes.
- In rollup mode, each digit chooses its own direction: increasing digits roll upward, decreasing digits roll downward, and unchanged digits stay still. Digits scroll through intermediate values and settle at staggered times.

[Animation Duration](./demo/duration.vue)

- Compare animation durations in seconds. Set `duration` to `0` for an immediate update. Rollup animations also respect the system's reduced-motion preference.

## API

| Property        | Description                                                                                                                   | Type                  | Default   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------- |
| modelValue      | Numerical value                                                                                                               | number                | -         |
| value           | Initial value, read only on mount. Use modelValue for subsequent updates; modelValue takes precedence when both are provided. | number                | 0         |
| duration        | Numerical dynamic display time (seconds)                                                                                      | number                | 1.2       |
| prefix          | Prefix content of numerical value                                                                                             | string                | -         |
| suffix          | Suffix content of numerical value                                                                                             | string                | -         |
| precision       | Numerical precision                                                                                                           | number                | 0         |
| type            | Numerical change type                                                                                                         | 'rollup' \| 'countup' | 'countup' |
| separator       | Separator                                                                                                                     | string                | -         |
| autoAnimate     | Trigger animation when target becomes visible                                                                                 | boolean               | true      |
| autoAnimateOnce | Run animation only once for auto-animate triggers                                                                             | boolean               | true      |

## Slots

| Name   | Description                             |
| ------ | --------------------------------------- |
| prefix | Custom prefix content, such as an icon. |
| suffix | Custom suffix content, such as a unit.  |
