# Carousel

A set of rotating/carousel areas.

## When to Use

- When there is a set of peer content.
- When content space is insufficient, it can be accommodated in a carousel form for rotational display.
- Often used for a set of image or card carousels.

## Examples

[Basic Usage](./demo/basic.vue)

- The simplest usage. You can specify the initial value via `value (v-model)`.

[Vertical](./demo/vertical.vue)

- Enable vertical mode by setting `vertical`. In this mode, left and right arrows are hidden.

## API

| Property | Description                                                                    | Type    | Default |
| -------- | ------------------------------------------------------------------------------ | ------- | ------- |
| value    | The index of the slide, starting from 0. Can use `v-model` for two-way binding | Number  | 0       |
| loop     | Whether to enable loop                                                         | Boolean | true    |
| vertical | Whether to display in vertical mode                                            | Boolean | false   |
| autoplay | Whether to auto-switch                                                         | Boolean | false   |
| delay    | The time interval for auto-switching, in milliseconds                          | Number  | 3000    |
