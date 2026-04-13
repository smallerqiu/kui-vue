# Switch

Switch selector.

## When to Use

- When representing switch state/transition between two states.
- The difference from checkbox is that switching a switch directly triggers a state change, while checkbox is generally used for state marking and needs to cooperate with submission operations.

## Examples

[Basic Usage](./demo/basic.vue)

- Can use `v-model` for two-way data binding.

[Text / Icon](./demo/with-text.vue)

- Use `true-text` and `false-text` to set the text displayed when selected and unselected. Use the `slot` `(checked|unchecked)` to control the content.

[Disabled / Controllable](./demo/disabled.vue)

- Use the `disabled` attribute to set whether the component is disabled.

[Two Sizes](./demo/size.vue)

- `size="small"` indicates a small switch.

[Loading](./demo/loading.vue)

- Indicates that the switch operation is still in progress.

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
