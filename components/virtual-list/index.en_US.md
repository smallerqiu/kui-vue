# VirtualList

Render only data near the viewport to improve large-list performance.

## Examples

[Basic](./demo/basic.vue?show=vertical)

- Renders 10,000 fixed-height records with a small overscan buffer.

## Usage in Components

[Usage in Select](../select/demo/virtual.vue)

- Select uses virtual scrolling for large option sets while preserving keyboard navigation.

[Usage in Table](../table/demo/virtual.vue?show=vertical)

- Table combines virtual scrolling with a fixed header, horizontal scrolling, stripes, and a fixed column.

[Usage in Tree](../tree/demo/virtual.vue)

- Tree renders only visible nodes near the current viewport.

[Usage in TreeSelect](../tree-select/demo/virtual.vue)

- TreeSelect uses virtual scrolling in its dropdown tree for large data sets.

## API

| Property   | Description                      | Type                                        | Default |
| ---------- | -------------------------------- | ------------------------------------------- | ------- |
| data       | List data                        | unknown[]                                   | []      |
| height     | Viewport height                  | number \| string                            | 300     |
| itemHeight | Fixed item height                | number                                      | 32      |
| overscan   | Extra items rendered above/below | number                                      | 5       |
| itemKey    | Key field or key resolver        | string \| (item, index) => string \| number | -       |

## Slots

| Name    | Description | Parameters      |
| ------- | ----------- | --------------- |
| default | Custom item | { item, index } |

## Methods

| Name          | Description       | Parameters      |
| ------------- | ----------------- | --------------- |
| scrollToIndex | Scroll to an item | (index, align?) |
