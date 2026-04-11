# Spin

Used for loading states of pages and blocks.

## When to Use

When part of the page is waiting for asynchronous data or being rendered, appropriate loading animations can effectively alleviate user anxiety.

## Examples

<code src="./demo/container.vue">Card Loading</code>
<code src="./demo/mode.vue">Spin Type</code>

## Spin API

| Property   | Description                                                  | Type                        | Default |
| ---------- | ------------------------------------------------------------ | --------------------------- | ------- |
| modelValue | Whether loading state, can use `v-model` for two-way binding | Boolean                     | false   |
| mode       | Display spin type, provides 4 display methods                | String                      | -       |
| delay      | Delay time to display loading effect (prevent flickering)    | Number (milliseconds)       | 500     |
| size       | Set loading effect size                                      | `large`, `default`, `small` | -       |
