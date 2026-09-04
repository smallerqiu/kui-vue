# Select

Dropdown selector.

## When to Use

- Pop up a dropdown menu for user selection operations, used to replace native selectors, or when a more elegant multi-selector is needed.
- When there are few options (less than 5), it is recommended to lay out the options directly. Using Radio is a better choice.

## Examples

[Single Selection](./demo/basic.vue)

- Use `v-model` for two-way data binding.

[Multiple Selection](./demo/multiple.vue)

- Set the `multiple` value to present multi-select mode.

[Disabled and Non-clearable](./demo/disabled.vue)

- Use `v-model` for two-way data binding.

[Filtering and Searching](./demo/filterable.vue)

- Set the `filterable` value to present filtering mode. > `filterable` and `onSearch` cannot be used simultaneously; search results will be filtered.

[Create Options](./demo/allow-create.vue)

- In multiple mode, enable `allowCreate` to create and select a missing option by pressing Enter.

[Size](./demo/size.vue)

- Control component size via `width` and `size`.

[Weird Definition](./demo/theme.vue)

- Some strange things.

[Virtual scrolling](./demo/virtual.vue?show=vertical)

- Renders only nearby options for large data sets while preserving search and keyboard controls.

## Select API

| Property     | Description                                                                       | Type                                       | Default       |
| ------------ | --------------------------------------------------------------------------------- | ------------------------------------------ | ------------- |
| modelValue   | Specifies the `value` of the selected item, can use `v-model` for two-way binding | string \| number                           | -             |
| width        | Component width                                                                   | string \| number                           | -             |
| placeholder  | Default text of selector                                                          | string                                     | Please select |
| disabled     | Whether current item is disabled                                                  | boolean                                    | false         |
| readonly     | Read-only; prevents opening, clearing and changing                                | boolean                                    | false         |
| size         | Component size, provides two sizes: `small`, `large`, default is normal           | string                                     | -             |
| placement    | Dropdown placement                                                                | DropPlacementsType                         | bottom-left   |
| emptyText    | Prompt displayed when no data                                                     | string                                     | 'No data yet' |
| maxTagCount  | Maximum visible tags in multiple mode; excess tags are shown in a Tooltip         | number                                     | -             |
| multiple     | Whether to display in multiple selection mode                                     | boolean                                    | false         |
| allowCreate  | Whether multiple mode can create missing options from entered text                | boolean                                    | false         |
| loading      | Whether to show asynchronous loading                                              | boolean                                    | false         |
| loadingText  | Loading state text                                                                | string                                     | -             |
| block        | Whether to fill the parent width                                                  | boolean                                    | false         |
| filterable   | Whether input filtering is enabled                                                | boolean                                    | false         |
| clearable    | Whether options can be cleared                                                    | boolean                                    | true          |
| bordered     | Whether to show border                                                            | boolean                                    | true          |
| extendWidth  | Whether dropdown width matches input width                                        | boolean                                    | true          |
| showArrow    | Whether to show dropdown button                                                   | boolean                                    | true          |
| options      | options data, if set, no need to manually construct Option nodes                  | SelectOption[]                             | []            |
| theme        | The theme of Select                                                               | string                                     | fill          |
| icon         | Custom icon                                                                       | string                                     | -             |
| shape        | When shape='circle', displays rounded corners                                     | string                                     | -             |
| onSelect     | Triggered when an item is selected                                                | (option: SelectOption) => void             | -             |
| onChange     | Triggered when option state changes, returns selected value                       | (value: string \| number \| any[]) => void | -             |
| onOpenChange | Triggered when dropdown expands or collapses                                      | (opened: boolean) => void                  | -             |
| onSearch     | Triggered during search                                                           | (e: InputEvent) => void                    | -             |
| onClear      | Triggered when the clear button is clicked                                        | () => void                                 | -             |
| arrowIcon    | Custom arrow icon                                                                 | string                                     | -             |
| virtual      | Enable virtual scrolling                                                          | boolean                                    | false         |
| itemHeight   | Fixed virtual option height                                                       | number                                     | 33            |
| overscan     | Extra virtual options rendered around the viewport                                | number                                     | 5             |

## Option API

| Property | Description                                                                                                                    | Type             | Default |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------- | ------- |
| key      | Same meaning as value. If Vue requires this setting, this value should be the same as value, then value setting can be omitted | string \| number | -       |
| value    | Option value, used for filtering by default, required                                                                          | string \| number | -       |
| label    | Option display content                                                                                                         | string \| number | -       |
| disabled | Whether current item is disabled                                                                                               | boolean          | false   |
| active   | Whether this is the current keyboard-focused option                                                                            | boolean          | false   |
| checked  | Whether the option is selected                                                                                                 | boolean          | false   |
