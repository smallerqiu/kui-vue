# FlameWrap

Draws animated flames, sparks, smoke, and heat refraction around live content.

## Browser support

Full burning and refraction rely on the experimental HTML-in-Canvas API. Test it in Chrome Canary 149+ with `chrome://flags/#canvas-draw-element` enabled. Production usage requires the HTML-in-Canvas Origin Trial. The API has changed shape between versions: from Chrome 155, drawing the content into the canvas no longer keeps it clickable unless the element geometry is registered as well, while earlier Chromium and Edge only need the matrix returned by the draw call; from Chrome 156 the `layoutsubtree` attribute becomes `content="drawable"`, the drawn element declares itself with `drawable`, and the 2D draw returns no matrix because the browser synchronizes the position itself. The component branches on the attributes and methods the browser actually exposes, so content and interaction work under all three experimental shapes. Other browsers preserve the content and fall back to the outer flame effect.

[Basic](./demo/basic.vue?show=vertical)

- Wraps interactive content with the default cool flame.

[Custom flame](./demo/custom.vue?show=vertical)

- Configures warm color, sparks, smoke, and animation speed.

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| color | Flame RGB values in the 0–1 range | `[number, number, number]` | `[0.31, 0.54, 1]` |
| intensity | Overall brightness | `number` | `0.5` |
| height | Top flame reach in px | `number` | `170` |
| spread | Side and bottom glow reach | `number` | `8` |
| radius | Burning outline radius | `number` | `40` |
| speed | Animation speed multiplier | `number` | `0.25` |
| scale | Flame detail | `number` | `0.75` |
| turbulence | Turbulence amplitude | `number` | `0.5` |
| turbulenceScale | Turbulence frequency | `number` | `0.5` |
| turbulenceReach | Heat distortion reach | `number` | `25` |
| sparks | Spark brightness; `0` disables it | `number` | `1.5` |
| sparkSize | Spark size multiplier | `number` | `0.35` |
| sparkDensity | Spark density multiplier | `number` | `1` |
| sparkSpeed | Spark movement speed | `number` | `1` |
| rim | Molten rim strength | `number` | `2.5` |
| melt | Distance flames eat into the outline | `number` | `4.5` |
| distortion | Heat-refraction strength | `number` | `10` |
| smoke | Smoke amount | `number` | `1.5` |
| ember | Ember brightness | `number` | `2` |
| scorch | Charring strength | `number` | `0` |

Use the default slot for content wrapped by the effect.
