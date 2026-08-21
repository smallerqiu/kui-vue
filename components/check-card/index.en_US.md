# CheckCard

Present richer choices with a title, description, and optional symbol.

## When to Use

- Standalone for a toggleable boolean choice, such as accepting an agreement.
- Inside `CheckCardGroup` for a single choice among multiple cards, such as an account or plan type.

## Examples

[Standalone](./demo/basic.vue?show=vertical)

- A standalone card can be selected and deselected.

[Single-selection group](./demo/group.vue?show=vertical)

- Groups use radio semantics and support arrow-key navigation.

[Custom symbol](./demo/custom.vue?show=vertical)

- Use the `symbol` slot to render custom content based on selection state.

[Appearance and disabled](./demo/appearance.vue?show=vertical)

- Themes, sizes, shapes, and disabled states.

## CheckCard API

| Property      | Description                            | Type                           | Default |
| ------------- | -------------------------------------- | ------------------------------ | ------- |
| modelValue    | Standalone state, supports `v-model`   | boolean                        | false   |
| value         | Option value inside a group            | string \| number               | -       |
| title         | Title                                  | string \| number               | -       |
| description   | Description                            | string                         | -       |
| symbol        | Unchecked or shared symbol icon        | IconType[]                     | -       |
| checkedSymbol | Symbol icon used when checked          | IconType[]                     | -       |
| showIndicator | Show the top-right selection indicator | boolean                        | true    |
| disabled      | Disable the card                       | boolean                        | false   |
| theme         | Appearance theme                       | `outline` \| `fill`            | outline |
| size          | Size                                   | `small` \| `medium` \| `large` | medium  |
| shape         | Shape                                  | ShapeType                      | round   |
| change        | Emitted when selection state changes   | (event) => void                | -       |

## CheckCardGroup API

| Property   | Description                             | Type                           | Default    |
| ---------- | --------------------------------------- | ------------------------------ | ---------- |
| modelValue | Selected value, supports `v-model`      | string \| number               | -          |
| options    | Card options                            | CheckCardOption[]              | -          |
| disabled   | Disable the group                       | boolean                        | false      |
| direction  | Layout direction                        | `horizontal` \| `vertical`     | horizontal |
| theme      | Card theme                              | `outline` \| `fill`            | outline    |
| size       | Card size                               | `small` \| `medium` \| `large` | medium     |
| shape      | Card shape                              | ShapeType                      | round      |
| change     | Emitted when the selected value changes | (value) => void                | -          |

## CheckCard Slots

| Name        | Description                         | Parameters    |
| ----------- | ----------------------------------- | ------------- |
| default     | Content after title and description | `{ checked }` |
| title       | Custom title                        | `{ checked }` |
| description | Custom description                  | `{ checked }` |
| symbol      | Custom symbol                       | `{ checked }` |

## CheckCardGroup Slots

| Name    | Description       |
| ------- | ----------------- |
| default | Custom CheckCards |
