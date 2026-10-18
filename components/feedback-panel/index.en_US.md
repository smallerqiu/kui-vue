# FeedbackPanel

Embeds status, supporting information, and next steps within page content.

## Examples

[Basic Usage](./demo/basic.vue?show=vertical)

- Basic Usage

[Feedback Kinds](./demo/kinds.vue?show=vertical)

- Define feedback types using 'kind'

[Appearance](./demo/appearance.vue?show=vertical)

- `theme` only decides how much the panel plates itself; the 4px status stripe and the icon are content, so none of the five looks repaints them.

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| kind | Feedback kind | `"positive" \| "negative" \| "caution" \| "neutral"` | neutral |
| heading | Primary message | `VNodeChild` | - |
| description | Supporting message | `VNodeChild` | - |
| symbol | Custom marker | `IconType[]` | - |
| compact | Compact layout | `boolean` | false |
| theme | Appearance theme | `"fill" \| "outline" \| "plain" \| "solid" \| "dashed"` | outline |
| shape | Panel shape | `"square" \| "round"` | round |

## Theme

`theme` supports five looks — `fill`, `outline`, `plain`, `solid`, `dashed` — and is `outline` when you write nothing. `underlined` belongs to a control you type into, so a feedback panel falls back to `outline`.

`solid` fills the whole panel with the primary colour and inverts its heading, description, detail plate and icon chip; the 4px stripe beside it reports the `kind`, so it is content rather than chrome and none of the five looks repaints it.
