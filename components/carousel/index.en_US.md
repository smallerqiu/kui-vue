# Carousel

A set of rotating/carousel areas.

## When to Use

- When there is a set of peer content.
- When content space is insufficient, it can be accommodated in a carousel form for rotational display.
- Often used for a set of image or card carousels.

## Examples

[Basic Usage](./demo/basic.vue?show=vertical)

- The simplest usage. You can specify the initial value via `value (v-model)`.

[Vertical](./demo/vertical.vue?show=vertical)

- Enable vertical mode by setting `vertical`. In this mode, left and right arrows are hidden.

[Autoplay](./demo/autoplay.vue?show=vertical)

- Enable timed autoplay by setting `autoplay`. Use `delay` to set the interval. The default is `3000` milliseconds.

## API

Touch swiping and mouse dragging are enabled by default; set `swipeable` to `false` to disable both. Both horizontal and `vertical` modes follow the pointer.
Movement below 5px is ignored. Short swipes within 300ms advance in the gesture direction;
longer gestures advance when their own travel reaches half a slide or their release
velocity reaches 0.5px/ms in the drag direction. Unfinished animation travel is not
subtracted from the gesture distance. At most one adjacent slide is selected per gesture.
Velocity also affects the decelerating settling animation.
An ongoing animation can be grabbed again without waiting for it to finish.
Horizontal carousels preserve vertical page scrolling;
vertical carousels preserve horizontal scrolling. Inputs and buttons do not initiate dragging.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | The index of the slide, starting from 0. Can use `v-model` for two-way binding | `number` | - |
| value | Initial value, read only on mount. Use modelValue for subsequent updates; modelValue takes precedence when both are provided. | `number` | 0 |
| loop | Whether to enable loop | `boolean` | true |
| swipeable | Enable touch swiping and mouse dragging with pointer-following movement | `boolean` | true |
| vertical | Whether to display in vertical mode | `boolean` | false |
| autoplay | Whether to auto-switch | `boolean` | false |
| delay | The time interval for auto-switching, in milliseconds | `number` | 3000 |
| height | The height of the slide | `number` | 256(px) |
| dots | Whether to show the dots at the bottom of the gallery | `boolean` | true |

## Events

| Event | Description | Type |
| --- | --- | --- |
| change | Emitted when the active slide changes | `(value: number) => void` |

## Expose

| Method | Description               | Parameters      |
| ------ | ------------------------- | --------------- |
| next   | Go to the next slide      | -               |
| prev   | Go to the previous slide  | -               |
| goTo   | Go to the specified slide | (index: number) |
