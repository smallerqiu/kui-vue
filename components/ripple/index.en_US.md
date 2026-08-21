# Ripple

Adds WebGL-rendered water ripples and refraction over live DOM content.

## Browser support

Full refraction relies on the experimental HTML-in-Canvas API. Test it in Chrome Canary 149+ with `chrome://flags/#canvas-draw-element` enabled. Production usage requires the HTML-in-Canvas Origin Trial. Other browsers fall back to a WebGL ripple overlay.

[Basic](./demo/basic.vue?show=vertical)

- Click the content area to create a ripple.

[Custom effect](./demo/options.vue?show=vertical)

- Uses hover triggering with customized wave parameters.

## API

| Property   | Description                              | Type                         | Default   |
| ---------- | ---------------------------------------- | ---------------------------- | --------- |
| trigger    | Ripple trigger                           | 'click' \| 'hover' \| 'none' | `'click'` |
| amplitude  | Wave height, recommended range 0–3       | number                       | `0.5`     |
| speed      | Propagation speed multiplier             | number                       | `0.65`    |
| wavelength | Distance between crests in px            | number                       | `80`      |
| rings      | Crests in each wave train                | number                       | `2`       |
| decay      | Energy decay rate                        | number                       | `1`       |
| refraction | Refraction strength in px                | number                       | `100`     |
| dispersion | Chromatic dispersion                     | number                       | `0.5`     |
| shine      | Crest highlight intensity                | number                       | `0.5`     |
| interval   | Ambient ripple interval; `0` disables it | number                       | `0`       |
