# GradientPicker 渐变选择器

在多段颜色之间编辑色标的位置与颜色，或者给一块区域指定四个角的颜色。值只记录颜色与位置，不绑定具体的渐变函数。

## 何时使用

- 需要调整多个色标、拖动它们的位置，或者逐档改颜色时
- 需要给一块区域分别指定左上、右上、左下、右下四个角的颜色时

## 代码演示

[基本用法](./demo/basic.vue)

- 色条下方空白处点击添加色标，横向拖动调整位置，向下拖出删除（至少保留两个）；点击色标弹出颜色面板；示例同时用同一个值拼出 `linear-gradient` 与 `radial-gradient`。示例打开了 `alpha`，颜色面板因此多一行透明度

[四角渐变](./demo/corner.vue)

- 设 `type="corner"` 时固定左上、右上、左下、右下四个角，点击角上的色块弹出颜色面板，只能改颜色不能改占比

[三种尺寸](./demo/sizes.vue)

- `size` 与其它控件一样分三档，色条加色标（四角档为预览块加角标）的总高度分别等于对应尺寸控件的高度

## 值的格式

- `linear`：`GradientStop[]`，每项是 `{ color, offset }`，`offset` 为 0–100 的位置，色条从左到右按它绘制。
- `corner`：`[左上, 右上, 左下, 右下]` 四个颜色。

颜色是任意 CSS 颜色字符串，允许带透明度（`#rrggbbaa` 或 `rgba(...)`）；打开 `alpha` 后可以在颜色面板里直接调透明度。

组件只产出值，不产出 CSS。`formatGradient` 是内置的展示辅助（线性档按 90deg、四角档为多层近似），需要径向、锥形或其它方向时直接用值自行拼 `radial-gradient(...)` / `conic-gradient(...)`。

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| arrowPointAtCenter | 让颜色面板箭头指向色标或角标中心；关闭后按面板边缘对齐 | `boolean` | true |
| modelValue | 渐变值，可以使用 `v-model` 双向绑定 | `GradientValue` | - |
| value | 初始值，仅初始化时读取；后续更新使用 modelValue，同时传入时 modelValue 优先。 | `GradientValue` | - |
| type | 渐变类型，`linear` 为多色标渐变，`corner` 为四角渐变 | `"linear" \| "corner"` | linear |
| alpha | 颜色面板是否提供透明度调节 | `boolean` | false |
| mode | 颜色面板输入区的展示类型，提供 3 种模式（`hex`、`rgb`、`hsl`） | `"hex" \| "rgb" \| "hsl"` | hex |
| size | 控件尺寸，与其它控件一样分三档；色条加色标或四角预览块的总高度与对应尺寸的控件一致 | `"small" \| "medium" \| "large"` | - |
| disabled | 是否失效状态 | `boolean` | false |
| readonly | 是否只读，不能拖动色标或打开颜色面板 | `boolean` | false |
| onUpdateMode | 颜色模式改变时触发 | `(mode: ColorMode) => void` | - |
| onChange | 渐变值改变时触发，参数是新的渐变值（线性档为色标数组，四角档为四色数组） | `(value: GradientValue) => void` | - |
