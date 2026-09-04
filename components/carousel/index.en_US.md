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

[Autoplay](./demo/autoplay.vue)

- Enable timed autoplay by setting `autoplay`. Use `delay` to set the interval. The default is `3000` milliseconds.

## API

| Property   | Description                                                                    | Type    | Default |
| ---------- | ------------------------------------------------------------------------------ | ------- | ------- |
| modelValue | The index of the slide, starting from 0. Can use `v-model` for two-way binding | number  | 0       |
| loop       | Whether to enable loop                                                         | boolean | true    |
| vertical   | Whether to display in vertical mode                                            | boolean | false   |
| autoplay   | Whether to auto-switch                                                         | boolean | false   |
| delay      | The time interval for auto-switching, in milliseconds                          | number  | 3000    |
| height     | The height of the slide                                                        | number  | 256(px) |
| dots       | Whether to show the dots at the bottom of the gallery                          | boolean | true    |

## Events

| Event  | Description                           | Parameters      |
| ------ | ------------------------------------- | --------------- |
| change | Emitted when the active slide changes | (index: number) |

## Expose

| Method | Description               | Parameters      |
| ------ | ------------------------- | --------------- |
| next   | Go to the next slide      | -               |
| prev   | Go to the previous slide  | -               |
| goTo   | Go to the specified slide | (index: number) |
