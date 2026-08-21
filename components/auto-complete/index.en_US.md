# AutoComplete

Provide candidates based on the input while retaining the ability for free text entry.

## Examples

[Basic](./demo/basic.vue)

- Supports free input, filtering, and keyboard selection.

[Controlled value](./demo/controlled.vue)

- Manage and update the input through v-model.

[Custom filter](./demo/filter.vue)

- Define matching behavior with filterOption.

[Size, theme and shape](./demo/appearance.vue)

- Shows several appearance combinations.

[Show on empty](./demo/show-on-empty.vue)

- The dropdown stays closed for an empty input by default; enable `showOnEmpty` to show all suggestions.

[Remote search](./demo/remote.vue)

- Fetch suggestions on `search` and display the loading state with `loading`.

## AutoComplete API

| Property     | Description                                        | Type                                         | Default |
| ------------ | -------------------------------------------------- | -------------------------------------------- | ------- |
| modelValue   | Value (v-model)                                    | string                                       | -       |
| value        | Initial value                                      | string                                       | ''      |
| options      | Suggestions                                        | (string \| AutoCompleteOption)[]             | []      |
| open         | Open state                                         | boolean                                      | false   |
| defaultOpen  | Initial open state                                 | boolean                                      | false   |
| showOnEmpty  | Show suggestions when an empty input is focused    | boolean                                      | false   |
| clearable    | Show the clear button on hover when a value exists | boolean                                      | false   |
| disabled     | Disabled                                           | boolean                                      | false   |
| loading      | Loading state                                      | boolean                                      | false   |
| loadingText  | Loading text                                       | string                                       | Loading |
| placeholder  | Placeholder                                        | string                                       | -       |
| size         | Size                                               | 'small' \| 'medium' \| 'large'               | medium  |
| theme        | Theme                                              | 'fill' \| 'outline' \| 'plain'               | fill    |
| shape        | Shape                                              | 'circle' \| 'square' \| 'round' \| 'default' | default |
| filterOption | Filter strategy                                    | boolean \| 'function'                        | true    |
| onChange     | Value change                                       | function                                     | -       |
| onClear      | Clear callback                                     | () => void                                   | -       |
| onSearch     | Search callback                                    | (value: string) => void                      | -       |
| onSelect     | Option selection                                   | function                                     | -       |
| onOpenChange | Open state change                                  | function                                     | -       |
