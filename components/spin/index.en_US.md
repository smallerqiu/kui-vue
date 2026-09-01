# Spin

Used for loading states of pages and blocks.

## When to Use

When part of the page is waiting for asynchronous data or being rendered, appropriate loading animations can effectively alleviate user anxiety.

## Examples

[Basic Usage](./demo/basic.vue)

- A simple loading state.

[Card Loading](./demo/container.vue)

- You can directly embed content into Spin to turn an existing container into a loading state.

[Spin Type](./demo/mode.vue)

- You can directly embed content into Spin to turn an existing container into a loading state.

## Spin API

| Property   | Description                                                  | Type                       | Default |
| ---------- | ------------------------------------------------------------ | -------------------------- | ------- |
| modelValue | Whether loading state, can use `v-model` for two-way binding | boolean                    | true    |
| mode       | Loading animation type                                       | bounce\|flip\|rotate\|zoom | rotate  |
| delay      | Delay before hiding to prevent flickering                    | number                     | 500     |
| size       | Loading indicator size                                       | small\|medium\|large       | medium  |
