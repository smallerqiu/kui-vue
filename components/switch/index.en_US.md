# Switch

Switch selector.

## When to Use

- When representing switch state/transition between two states.
- The difference from checkbox is that switching a switch directly triggers a state change, while checkbox is generally used for state marking and needs to cooperate with submission operations.

## Examples

<code src="./demo/disabled.vue">Disabled / Controllable</code>
<code src="./demo/loading.vue">Loading</code>
<code src="./demo/size.vue">Two Sizes</code>
<code src="./demo/withText.vue">Text / Icon</code>

### API

| Property           | Description                                                               | Type    | Default            |
| ------------------ | ------------------------------------------------------------------------- | ------- | ------------------ |
| checked            | Specify whether currently selected, can use `v-model` for two-way binding | Boolean | false              |
| disabled           | Disable switch                                                            | Boolean | false              |
| type               | Theme color, can pass `success`, `warning`, `danger`, `primary`           | String  | -                  |
| size               | Component size, when value is `small` displays small size                 | String  | -                  |
| checked(unchecked) | Content when selected (not selected)                                      | slot    | -                  |
| true-text          | Text displayed when `checked` is `true`                                   | String  | -                  |
| false-text         | Text displayed when `checked` is `false`                                  | String  | -                  |
| change             | Triggered when `checked` changes, callback                                | -       | Function(e: Event) |
