# Kanban

Displays items grouped by status and supports drag-and-drop transitions.

## Demos

[Basic](./demo/basic.vue?show=vertical)

- Render cards with a slot and move them between columns by dragging.

[Custom sections](./demo/custom.vue?show=vertical)

- Customize headings, cards, empty states and footers, with dragging disabled.

[Custom fields](./demo/fields.vue?show=vertical)

- Adapt another data shape with `rowKey`, `statusKey` and `minColumnWidth`.

[Themes](./demo/theme.vue?show=vertical)

- Switch Kanban columns between filled and outlined appearances.

## API

| Property       | Description              | Type               | Default |
| -------------- | ------------------------ | ------------------ | ------- |
| columns        | Column definitions       | KanbanColumnData[] | []      |
| data           | Kanban items             | KanbanItemData[]   | []      |
| rowKey         | Unique item key field    | string             | id      |
| statusKey      | Item status field        | string             | status  |
| draggable      | Enable drag and drop     | boolean            | true    |
| emptyText      | Empty column description | string             | No data |
| minColumnWidth | Minimum column width     | number \| string   | 250     |
| theme          | Column appearance        | `fill \| outline` | fill    |

### KanbanColumnData

| Field | Description                               | Type             | Required |
| ----- | ----------------------------------------- | ---------------- | -------- |
| key   | Unique column key matching an item status | string \| number | yes      |
| title | Column title                              | string           | yes      |
| color | Column indicator color                    | string           | no       |

## Events

| Event     | Description                                                                     | Callback                                                   |
| --------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| move      | Emitted after a card is dropped into another column; source data is not mutated | `(event: KanbanMoveEvent) => void`                         |
| itemClick | Emitted when a card is clicked                                                  | `(item: KanbanItemData, column: KanbanColumnData) => void` |

`KanbanMoveEvent` contains the moved `item`, source column key `from` and target column key `to`.

## Slots

| Name        | Description                 | Scope                     |
| ----------- | --------------------------- | ------------------------- |
| columnTitle | Custom column heading       | `{ column, items }`       |
| item        | Custom card content         | `{ item, column, index }` |
| empty       | Custom empty-column content | `{ column }`              |
| footer      | Custom column footer        | `{ column, items }`       |
