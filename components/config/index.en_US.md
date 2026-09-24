# ConfigProvider

Provides locale, popup-container, and component appearance configuration to descendants.

[Basic Usage](./demo/basic.vue?show=vertical)

- Use `locale` to configure component language.
- Use `getPopupContainer` to select the mount container for overlays such as Select and DatePicker.
- Use `size`, `theme`, and `shape` to configure compatible component appearance defaults.
- Nest ConfigProvider to override configuration for a local region.
- Precedence: component props > Form props > nearest ConfigProvider > component defaults.
- Components inherit only the appearance properties they support. Data and surface containers such as Table, Descriptions, and Collapse normalize a global `circle` shape to `round`.

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| locale | Component locale | `Record<string, any>` | global locale |
| getPopupContainer | Returns the popup mount container | `PopupContainerGetter` | document.body |
| size | Default size for compatible components | `"small" \| "medium" \| "large"` | - |
| theme | Default theme for compatible components | `"default" \| "fill" \| "outline" \| "plain" \| "solid" \| "dashed" \| "underlined"` | - |
| shape | Default shape for compatible components | `"default" \| "circle" \| "square" \| "round"` | - |
