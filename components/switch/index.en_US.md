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
