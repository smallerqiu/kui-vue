# Mentions

[Basic](./demo/basic.vue)

- Type @ and select a mention with the keyboard.

[Multiple triggers](./demo/triggers.vue)

- Supports both people and topic triggers.

[Custom filter](./demo/filter.vue)

- Customize suggestion matching.

[Size](./demo/size.vue)

- Display different sizes.

[Size, theme and shape](./demo/appearance.vue)

- Shows several textarea appearances.

[Empty state](./demo/empty.vue)

- Displays Empty when no mention matches.

[Rows](./demo/rows.vue)

- Controls the input height with `rows`; use 1 for a single-line appearance.

[Placement](./demo/placement.vue)

- Anchors the menu to the caret and flips it when space is insufficient.

## Mentions API

| Property     | Description                  | Type                                                        | Default     |
| ------------ | ---------------------------- | ----------------------------------------------------------- | ----------- |
| modelValue   | Text (v-model)               | string                                                      | -           |
| value        | Initial text                 | string                                                      | ''          |
| options      | Suggestions                  | (string\|MentionOption)[]                                   | []          |
| triggers     | Trigger strings              | string[]                                                    | ['@']       |
| placeholder  | Placeholder                  | string                                                      | -           |
| rows         | Textarea rows                | number                                                      | 2           |
| placement    | Preferred dropdown placement | top\|top-left\|top-right\|bottom\|bottom-left\|bottom-right | bottom-left |
| size         | Size                         | small\|medium\|large                                        | medium      |
| theme        | Theme                        | fill\|outline\|plain                                        | fill        |
| shape        | Shape                        | circle\|square\|round\|default                              | default     |
| emptyText    | Empty-state text             | string                                                      | No data     |
| filterOption | Custom filter                | function                                                    | -           |
| onChange     | Text change                  | function                                                    | -           |
| onSelect     | Mention selection            | function                                                    | -           |
