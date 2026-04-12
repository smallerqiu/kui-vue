# StatCard

Statistical indicators, can set title, value, description.

## When to Use

Can be used in BI/Dashboard scenarios, business backend oriented, intuitive.

## Examples

[Card Display](./demo/card.vue)

- Used in Dashboard scenarios. Combined with `Grid`, it can adapt well to various devices.

[Strange Cards](./demo/with-card.vue)

-

## StatCard API

| Property       | Description                                              | Type                | Default   |
| -------------- | -------------------------------------------------------- | ------------------- | --------- |
| title          | Card title                                               | String              | -         |
| items          | Data to display                                          | Array               | []        |
| precision      | Numerical precision                                      | Number              | 0         |
| statNumberType | Numerical change type                                    | `rollup`, `countup` | 'countup' |
| separator      | Separator                                                | String              | -         |
| reverse        | Whether to reverse number/number description arrangement | Boolean             | false     |

### items Options

| Property  | Description                              | Type   | Default |
| --------- | ---------------------------------------- | ------ | ------- |
| value     | Numerical value                          | Number | -       |
| desc      | Numerical description                    | String | []      |
| prefix    | Prefix content of numerical value        | String | -       |
| suffix    | Suffix content of numerical value        | String | -       |
| precision | Numerical precision                      | Number | 0       |
| separator | Separator                                | String | -       |
| duration  | Numerical dynamic display time (seconds) | Number | 1.2     |

## StatNumber API

| Property  | Description                              | Type                | Default   |
| --------- | ---------------------------------------- | ------------------- | --------- |
| value     | Numerical value                          | Number              | -         |
| duration  | Numerical dynamic display time (seconds) | Number              | 1.2       |
| prefix    | Prefix content of numerical value        | String              | -         |
| suffix    | Suffix content of numerical value        | String              | -         |
| precision | Numerical precision                      | Number              | 0         |
| type      | Numerical change type                    | `rollup`, `countup` | 'countup' |
| separator | Separator                                | String              | -         |
