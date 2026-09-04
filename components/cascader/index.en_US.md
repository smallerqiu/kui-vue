# Cascader

A cascading selection box.

## When to Use

- Used for selecting from a set of related data collections, such as provinces/cities/districts, company hierarchies, or category classifications.
- Ideal for selecting from large datasets by separating them into multiple hierarchical levels for easier navigation.
- Offers a better user experience compared to the Select component by allowing selections to be completed within a single floating layer.

## Examples

[Basic](./demo/basic.vue)

- The most basic cascader usage. Enable `showAllLevels` to display the complete administrative path selected by the user in the input box.

[Trigger and Levels](./demo/hover.vue)

- Hover trigger + Display only the last level. In e-commerce back-office systems when managing products or publishing listings, category trees are often extremely deep. Using `expandTrigger="hover"` significantly reduces the number of clicks required, while `showAllLevels="false"` keeps the interface cleaner after selection.

[Disabled](./demo/disabled.vue)

- When assigning system permissions or dispatching work orders, certain departments or inactive sub-branches (e.g., subsidiaries under rectification) need to be grayed out entirely. Utilizing the `disabled` property allows locking all paths underneath with one setting.

[Async Loading](./demo/async.vue)

- Load child options on demand. Loading state is shown and failed loads can be retried.

[Size](./demo/size.vue)

- Demonstrates the component's strong visual adaptability across different `size` constraints, suitable for various layouts such as compact modal forms or spacious configuration panels.

## API

| Property      | Description                                                                                                         | Type                 | Default           |
| :------------ | :------------------------------------------------------------------------------------------------------------------ | :------------------- | :---------------- |
| modelValue    | Array of path values bound through `v-model` (e.g., `['zhejiang', 'hangzhou', 'xihu']`).                            | (string \| number)[] | `[]`              |
| options       | Tree-structured data source for cascading options.                                                                  | CascaderOption[]     | `[]`              |
| placeholder   | Fallback placeholder text displayed when no path is selected.                                                       | string               | `"Please select"` |
| disabled      | Whether to completely disable interaction for the entire component.                                                 | boolean              | `false`           |
| readonly      | Read-only; prevents opening, clearing and changing.                                                                | boolean              | `false`           |
| clearable     | Whether to support clearing the selected path with one click.                                                       | boolean              | `true`            |
| size          | Size specification of the component. Options: `'large'` \| `'small'` \| `undefined`.                                | string               | `undefined`       |
| expandTrigger | Interaction mode for expanding the next-level menu. Options: `'click'` or `'hover'`.                                | 'click' \| 'hover'   | `'click'`         |
| showAllLevels | Whether to display the full selected ancestor path. If `false`, only the final leaf node is shown in the input box. | boolean              | `true`            |
| separator     | Separator between labels of different levels when `showAllLevels` is enabled.                                       | string               | `" / "`           |
| bordered      | Whether to display borders                                                                                          | boolean              | true              |
| theme         | Theme                                                                                                               | string               | fill              |
| showArrow     | Whether to display the dropdown button                                                                              | boolean              | true              |
| icon          | Custom Icon                                                                                                         | string               | -                 |
| shape         | shape='circle' 时呈现圆角                                                                                           | string               | -                 |
| placement     | Dropdown orientation                                                                                                | string               | -                 |
| emptyText     | No data available.                                                                                                  | string               | 'No Data'         |
| loadData      | Loads children asynchronously; return them or update `option.children`                                              | `CascaderLoadData`   | -                 |
| arrowIcon     | Custom arrow icon                                                                                                   | string               | -                 |

## Events

| Event        | Description                               | Signature                        |
| ------------ | ----------------------------------------- | -------------------------------- |
| change       | Called when a path is selected or cleared | `(value: CascaderValue) => void` |
| expandChange | Called when the expanded path changes     | `(value: CascaderValue) => void` |
| openChange   | Called when dropdown visibility changes   | `(open: boolean) => void`        |

## CascaderOption

When configuring the `options` data source for `Cascader`, each node must conform to the `CascaderOption` object specification. It supports infinite nesting:

| Property | Description                                                                                                                                                                               | Type             | Default     |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------- | :---------- |
| value    | **Required.** Unique identifier for the current node (often corresponds to backend `id` or `code`). When the full path is selected, `v-model` collects an array composed of these values. | string \| number | -           |
| label    | **Required.** Plain text content displayed to users in the dropdown menu and input box (e.g., `"Zhejiang"`, `"Hangzhou"`).                                                                | string           | -           |
| disabled | Whether to disable the current option. When enabled, the row appears grayed out and unclickable, and all its child levels will be locked synchronously.                                   | boolean          | `false`     |
| children | Data source for the next-level child nodes. When this property exists and the array is not empty, a right-facing expansion arrow is automatically rendered on the component.              | CascaderOption[] | `undefined` |
| isLeaf   | Whether this is a leaf node. Set to `false` when children can be loaded.                                                                                                                  | boolean          | `undefined` |
