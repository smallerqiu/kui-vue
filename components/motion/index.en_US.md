# Motion

Shared motion primitives for element entry, exit, and state feedback.

## Examples

[Basic motion](./demo/basic.vue?show=vertical)

- Replay fade, scale, and directional slide animations.

## Usage

After importing the full styles or `kui-vue/style/motion.css`, add a motion class to an element. Motions use `--kui-motion-duration` and `--kui-motion-easing` by default. Override `animation-duration` or `animation-timing-function` on the element when needed.

| Class                           | Description           |
| ------------------------------- | --------------------- |
| `k-motion-fade-in`              | Fade in               |
| `k-motion-scale-in`             | Scale in              |
| `k-motion-scale-y-in`           | Expand vertically     |
| `k-motion-rotate`               | Continuous rotation   |
| `k-motion-slide-in-from-left`   | Enter from the left   |
| `k-motion-slide-in-from-right`  | Enter from the right  |
| `k-motion-slide-in-from-top`    | Enter from the top    |
| `k-motion-slide-in-from-bottom` | Enter from the bottom |
| `k-motion-slide-out-to-left`    | Exit to the left      |
| `k-motion-slide-out-to-right`   | Exit to the right     |
| `k-motion-slide-out-to-top`     | Exit to the top       |
| `k-motion-slide-out-to-bottom`  | Exit to the bottom    |
