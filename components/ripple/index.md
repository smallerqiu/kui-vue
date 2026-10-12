# Ripple 涟漪

在实时 DOM 内容上叠加由 WebGL 绘制的水波与折射效果。

## 浏览器支持

完整折射依赖实验性的 HTML-in-Canvas API。目前可在 Chrome Canary 149+ 开启 `chrome://flags/#canvas-draw-element` 后体验；生产环境需要参加 HTML-in-Canvas Origin Trial。这个 API 在不同版本之间形态不同：Chrome 155 起，仅把内容绘制进 canvas 不再让内容保持可点击，必须另外注册元素几何；更早的 Chromium 与 Edge 则只需应用绘制返回的矩阵；Chrome 156 起 canvas 上的 `layoutsubtree` 改名为 `content="drawable"`，被绘制的元素需自行声明 `drawable`，2D 绘制不再返回矩阵而由浏览器自动同步位置。组件按浏览器实际提供的属性与方法分流，三种实验实现下内容与交互都正常。其他浏览器会自动降级为 WebGL 波纹叠层：波峰提亮、波谷压暗，浅色与深色页面上都清晰可见。

[基础用法](./demo/basic.vue?show=vertical)

- 点击内容区域产生水波。

[自定义效果](./demo/options.vue?show=vertical)

- 使用 hover 触发并调整水波参数。

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| trigger | 水波触发方式 | `"hover" \| "click" \| "none"` | `'click'` |
| amplitude | 波纹高度，建议范围 0–3 | `number` | `0.5` |
| speed | 波纹传播速度倍率 | `number` | `0.65` |
| wavelength | 波峰间距，单位 px | `number` | `80` |
| rings | 每组水波的波峰数量 | `number` | `2` |
| decay | 能量衰减速度 | `number` | `1` |
| refraction | 内容折射强度，单位 px | `number` | `100` |
| dispersion | 色散强度，建议范围 0–1 | `number` | `0.5` |
| shine | 波峰高光强度 | `number` | `0.5` |
| interval | 自动水波间隔秒数，`0` 表示关闭 | `number` | `0` |
