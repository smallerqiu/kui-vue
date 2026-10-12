# Ripple

Adds WebGL-rendered water ripples and refraction over live DOM content.

## Browser support

Full refraction relies on the experimental HTML-in-Canvas API. Test it in Chrome Canary 149+ with `chrome://flags/#canvas-draw-element` enabled. Production usage requires the HTML-in-Canvas Origin Trial. The API has changed shape between versions: from Chrome 155, drawing the content into the canvas no longer keeps it clickable unless the element geometry is registered as well, while earlier Chromium and Edge only need the matrix returned by the draw call; from Chrome 156 the `layoutsubtree` attribute becomes `content="drawable"`, the drawn element declares itself with `drawable`, and the 2D draw returns no matrix because the browser synchronizes the position itself. The component branches on the attributes and methods the browser actually exposes, so content and interaction work under all three experimental shapes. Other browsers fall back to a WebGL ripple overlay that brightens each crest and darkens each trough, which stays visible over light and dark pages alike.

[Basic](./demo/basic.vue?show=vertical)

- Click the content area to create a ripple.

[Custom effect](./demo/options.vue?show=vertical)

- Uses hover triggering with customized wave parameters.

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| trigger | Ripple trigger | `"hover" \| "click" \| "none"` | `'click'` |
| amplitude | Wave height, recommended range 0–3 | `number` | `0.5` |
| speed | Propagation speed multiplier | `number` | `0.65` |
| wavelength | Distance between crests in px | `number` | `80` |
| rings | Crests in each wave train | `number` | `2` |
| decay | Energy decay rate | `number` | `1` |
| refraction | Refraction strength in px | `number` | `100` |
| dispersion | Chromatic dispersion | `number` | `0.5` |
| shine | Crest highlight intensity | `number` | `0.5` |
| interval | Ambient ripple interval; `0` disables it | `number` | `0` |
