# Changelog

Version 4.x+ supports `Vue 3`. For Vue 2-based documentation, please refer to <https://v3.k-ui.cn>.
If you encounter any issues, please submit them via [Github](https://github.com/smallerqiu/kui-vue/issues).

```bash
npm install kui-vue@latest --registry=http://registry.npmjs.org
```

Vite might have caching; you can clear it manually if needed.

```bash
rm -rf node_modules/.vite
```

## 6.3.0

`2026-10-12`

- `Menu`: Added arrow-key / Enter / Esc navigation; `Escape` closes only the current level.
- `Menu`: Popup lists are linked to their trigger through `aria-controls` / `aria-labelledby` and a `horizontal` root declares `role="menubar"`, matching the React build.
- `Menu`: Collapse handling follows `mode`, so switching `mode` no longer rewrites `openKeys` or emits an extra `openChange`; overflow measurement only runs for `horizontal` menus.
- `Menu`: Fixed the vertical sub-menu animation where the outer panel opened first and the content followed.
- **Behaviour change**: `Menu` sub-menu panels are removed from the page once they collapse (both hover popups and `inline` sub-panels) and rendered again when reopened, matching the React build. Panels that had been opened used to stay in the page permanently, which adds up on menus with many sub-menus. Which panels are open is still driven by `openKeys`.
- `Table`: Aligned with the React build — fixed missing header borders, sticky-row gaps, incomplete rounded corners and the blank block in the bottom-right corner when grouped headers are combined with fixed columns, `scroll.y` and `bordered`, and matched fixed-column widths and sticky offsets.
- `Table`: Grouped headers are rendered as per-column cells with `aria-labelledby` relations.
- `Table`: `rowKey` falls back to a stable key when the configured value is missing; `dataIndex` supports `a.b.c` nested paths.
- `Table`: Fixed `expandAllRows` re-expanding parents for asynchronous data and the virtual window start exceeding the row count.
- `Table`: Built-in empty and filter strings now come from the locale bundle.
- Unified scrollbar styling so horizontal and vertical bars match; the dark-theme hover thumb no longer blends into the background.
- `Ripple`: Fixed wrapped content that could not be clicked and produced no ripple in Chrome 155.
- `Ripple`: Added the Chrome 156 `content="drawable"` attribute while Edge and earlier Chromium keep the previous path.
- `Ripple`: The WebGL overlay now brightens crests and darkens troughs, so it stays visible over light and dark pages.
- `FlameWrap`: Fixed wrapped content that could not be clicked in Chrome 155, and added the Chrome 156 `content="drawable"` attribute.
- `StatCard`: Added the `prefix` / `suffix` props to match the React build; previously only the slots of those names existed and passing the attribute landed on the root element and raised a DOM property error.
- `StatCard`: `title` / `desc` / `trend` and the `StatNumber` `prefix` / `suffix` no longer render an empty placeholder when given `false` or an empty string, while `0` still shows.
- `StatCard`: Fixed `items[].key` colliding with an item's array index, which moved a number animation onto the wrong entry.
- `StatNumber`: The `countup` mode now honours the system's reduced-motion preference and jumps straight to the target value.
- `Table`: Columns without `width` now use 150 as their sizing baseline and the table takes a minimum width from the total of its columns (50 for the selection column), so a narrowing container scrolls horizontally instead of crushing columns and stacking header text vertically.
- `Table`: Fixed the flicker at a borderline window width where a fixed-column shadow and the horizontal scrollbar kept triggering each other — a shadow is now drawn only while that side can still scroll.
- `Tree`: Asynchronous `loadData` now requests a given node once; virtual scrolling no longer breaks the row height, so it matches the React build again.
- `Tree`: Nodes without a `key` now fall back to a path-based key using the same rule as the React build; the previous visible-index fallback made a node's key drift whenever the tree collapsed or filtered.
- `Tree`: Dropping a node onto its own descendant no longer advertises a valid target that does nothing on release.
- `Tree`: The `select` event gained its second argument (the current list of selected keys) to match the React signature.
- `Tree`: The expand-arrow button is removed from the tab order (`tabIndex={-1}`) so the tree keeps its roving tabindex and arrow keys no longer strand focus on an arrow.
- `DropdownButton`: Fixed the split button's ellipsis trigger not opening the menu — click, right-click and the arrow keys all drive it now, the trigger carries `aria-haspopup="menu"` and `aria-expanded`, and `trigger` selects `hover` / `click` / `contextmenu`.
- Popup components accept `destroyOnClose` (`Select`, `Cascader`, `TreeSelect`, `AutoComplete`, `Mentions`, `DatePicker`, `ColorPicker`, `Dropdown`, `DropdownButton`, `Tooltip`, `Poptip`, `Popconfirm`), defaulting to `true` so the panel content is discarded once the popup closes. The property was not exposed before, so it could not be overridden; set it to `false` to keep unsubmitted form state inside the panel, at the cost of one hidden block per opened instance.
- **Behaviour change**: these popups used to leave a `display: none` panel node in the DOM after closing (only `Cascader` destroyed it). They now match the React build and destroy the panel after the exit animation by default. Keep unsubmitted form state by setting `:destroy-on-close="false"` explicitly; conversely, pages with many `Tooltip` instances no longer accumulate hidden DOM.
- Stacked `Modal` / `Drawer` windows route `Escape` to the topmost layer only; a dropdown open above a dialog takes the first `Escape` instead of dismissing the whole window. `escKey` is read at keypress time, so changing it at runtime takes effect immediately.
- `Modal` and `Drawer` accept `destroyOnClose` (default `true`), which discards the panel content after the window closes so the next opening starts fresh. Set it to `false` to keep a half-filled form, at the cost of one hidden block left in the page. Always-open panels (`panelOnly`) are not affected.
- When the `onOk` of a confirm dialog returns a Promise, the component decides when to close: the window closes on success, while a failure only ends the button's loading state and keeps the dialog open so the user can fix the input and retry. A rejected `onOk` used to leave the button spinning forever.
- Reopening a window before its close animation finishes no longer makes it disappear on its own a moment later; destroying a window also gives back the page scroll lock and its overlay slot.
- `Modal`: fixed `centered` having no effect, unit loss when `width` is passed as a string, and an empty title bar rendered when no `title` was passed.
- `Modal` has a `title` slot for richer headers such as an icon or a subtitle; it falls back to the `title` prop when the slot renders nothing, and the title bar is omitted when neither is provided.
- Imperative dialogs (`modal.confirm()` and friends) accept nodes instead of strings for `title` / `content`, both of which are now optional, every instance exposes `show` / `hide` / `destroy`, and they inherit the surrounding application context (global components, directives and `ConfigProvider` settings).
- Controls placed against the edge of a `Modal` body no longer have half of their focus outline clipped; content width, position and the footer gap are unchanged.
- `Tooltip` bubbles and their arrow indicator got their 1px border back, so the edge stays readable on dark backgrounds.
- `Table`: Added `ellipsis` to clip cell content that overflows the column width, matching the React build. Set it on a column to affect that column only, or on `Table` to cover every column at once (including slot and `render` content); a column keeps its full text with `ellipsis: false`. One line by default, `rows` clips to several. The hover tip is on by default and only appears when the cell really is clipped; `tooltip` replaces its text or turns it off with `false`.
- `Modal` / `Drawer` close in one consistent callback order: `update:modelValue` and `openChange` settle the open state first, then `onCancel` / `onClose` say which channel closed it. The state read inside those callbacks is already settled, so there is no need to close it again yourself.
- `Drawer`'s `title` no longer defaults to "Title" — omit it and there is no title text. The header still makes room for the close button and only disappears when `closable: false` is set with no title.
- `Drawer` gained a `title` slot, and its `title` prop now also accepts a node, for icons, captions and other rich content.
- `Modal`'s `title` prop accepts a node as well as a string, like the `title` slot it already had.
- **Behavior change**: `Modal` / `Drawer` no longer announce opening. Mounting with the panel already open, or setting `modelValue` to true, used to send back an extra `update:modelValue` and `openChange` — feeding you the value you had just written. Only closing is announced now, matching React. If you initialized something from an `openChange(true)`, watch that value instead; it is the same moment.
- `DatePicker`: Closing the panel with `Escape` after picking only one end of a range no longer leaves the half date in the box; it now falls back to the last committed range, the same as clicking outside.
- `DatePicker`: Typing a date into only the end box no longer shows a value that `change` never received. A range with one end missing is not a selection, and closing the panel clears it.
- `DatePicker`: `disabledTime` now applies in `mode="time"` as well — previously, typed values and presets could submit times that should have been blocked.
- `DatePicker`: When the value changes from outside while the panel is open, the input text now follows it; only the box being typed in is left alone.
- `DatePicker`: `opened` supports `v-model:opened`. Closing the panel from the parent also rolls back a half-finished range, and the openings the component drives itself are no longer echoed back twice.
- `DatePicker`: Picking the already selected date, or submitting the same value again, no longer fires a redundant `change`.
- `DatePicker`: Picking a time in the time columns while only one end of the range is chosen no longer emits that half range; the time stays in the box until the other end is filled in.
- `DatePicker`: The year and month panels now honour `disabledDate` — a year or month with no pickable day at all is greyed out, refuses clicks, and is skipped by `Tab`, while one that still has a pickable day remains clickable.
- `DatePicker`: The year and month highlight now follows the current value instead of wherever you happen to be browsing.
- `DatePicker`: Year and month cells can be picked with the keyboard (`Tab` to a cell, then `Enter` or Space), and the year / month labels in the header switch panels with the same keys.
- `DatePicker`: A `panelOnly` picker in `mode="year"` or `mode="month"` no longer renders the day calendar; the panel now starts on the year / month view like the React version.
- **Breaking change**: Built-in component text now defaults to English instead of Simplified Chinese. Without a `ConfigProvider`, strings in `DatePicker`, `Select`, `Table`, `Modal`, `Page` and friends render in English; pass a Chinese locale (`import zhCN from "kui-vue/locale/zh-CN"`) at the application root to keep Simplified Chinese.
- **Breaking change**: `theme` no longer accepts `default`. Leave `theme` unset - on `ConfigProvider` too - to get the appearance a component was built to have; the six values are `fill` / `outline` / `plain` / `solid` / `dashed` / `underlined`. On `Button`, `theme="default"` used to be read as the `type="default"` appearance, so a `type="link"` or `type="text"` button picked up a filled background.
- `DatePicker`: `format` accepts a single format only, matching the React build — an array used to display with its first entry and is no longer accepted. The default format now follows `mode` (`year` `YYYY`, `month` `YYYY-MM`, `time` `HH:mm:ss`, `dateTime` / `dateTimeRange` `YYYY-MM-DD HH:mm:ss`) instead of being documented as `YYYY-MM-DD` for every mode.
- `DatePicker` / `Select` / `Cascader` / `TreeSelect`: `theme="plain"` and `bordered={false}` now mean separate things — `plain` drops both the border and the surface, `bordered={false}` drops only the border, and the two can be combined; a disabled control under `plain` still reads as disabled.
- `Select` / `Cascader` / `TreeSelect`: a control with its border removed no longer grows a primary-colored border and a glow when the pointer moves over it.
- `Select` / `Cascader` / `TreeSelect` / `DatePicker`: `theme` now supports `outline`, `solid`, `dashed` and `underlined` — a 1px outlined box, a primary-filled block whose text and icons invert, a dashed frame, and a single bottom rule that turns primary on focus.
- `Cascader`: a `theme="fill"` field no longer grows a border when you hover it.
- `Select` / `TreeSelect`: a `theme="fill"` field keeps the border an app draws through `--kui-theme-fill-border` under the pointer, matching `Cascader`.
- `Cascader` / `ColorPicker` / `InputTag` / `InputOTP` now turn red inside an invalid form item; previously only the `Input` / `Select` families changed colour. Every `InputOTP` cell turns red together.
- A red border inside an invalid form item survives interaction: hovering, focusing or opening the panel of a `Select` / `TreeSelect` / `Cascader` / `ColorPicker` / `InputTag` / `InputOTP` keeps both the red edge and its red glow, under any of the six `theme` values.
- Inside an invalid form item the focus halo turns red too, so a focused or opened field no longer pairs a red border with a primary-coloured glow; a `theme="solid"` field keeps its inverted white halo, because red would be hard to see on a filled surface.
- `DatePicker`: focusing a field that has no border no longer draws a focus ring, matching the select-family controls.
- `Input` / `Textarea` / `InputNumber`: `theme` now supports `outline`, `solid`, `dashed` and `underlined` — a 1px outlined box, a primary-filled block whose typed text, placeholder and inline icons invert, a dashed frame, and a single bottom rule that turns primary on hover and focus.
- `Input` / `Textarea` / `InputNumber`: a `theme="plain"` field no longer grows a border when you hover it and still reads as disabled; `plain` and `underlined` drop the focus ring, matching the select-family controls.
- `InputTag` / `InputOTP`: `theme` now supports `outline`, `solid`, `dashed` and `underlined` — a 1px outlined box, a primary-filled block, a dashed frame, and a single bottom rule that turns primary on hover and focus.
- `InputTag`: on `theme="solid"` the added tags, the typed text, the placeholder and the clear icon all invert. `InputOTP`: every cell follows `theme`, its character inverts on the solid surface, and a disabled OTP still reads as disabled.
- `InputTag` / `InputOTP`: a `theme="plain"` box no longer grows a border when you hover it; `plain` and `underlined` drop the focus ring, matching the select-family controls.
- `ColorPicker`: `theme` now supports `outline`, `solid`, `dashed` and `underlined` — a 1px outlined box, a primary-filled block, a dashed frame, and a single bottom rule that turns primary on hover and while the panel is open.
- `ColorPicker`: on `theme="solid"` the colour text next to the swatch inverts and the surface deepens on hover and while the panel is open; the swatch itself still shows the picked colour.
- `ColorPicker`: with `theme="fill"` or `theme="plain"`, a disabled picker keeps its disabled background and border.
- `Tag`: `theme` now supports `outline`, `solid` and `dashed` — a 1px outlined chip, a primary-filled chip whose label and close icon invert, and a dashed frame. `theme="underlined"` lands on `fill`, since a chip has nothing to underline.
- `Tag`: setting `color` now wins over `theme` — preset and custom colours keep their own border and label colour instead of being repainted by the theme surface. A preset-colour tag used to pick up the default grey fill and keep only its text colour.
- `Select` / `TreeSelect`: with `theme="solid"` the selected chips take a translucent inverted surface instead of the same primary as the box around them, and with `theme="dashed"` they keep a solid outline instead of inheriting the dashes. This is what `InputTag` already did; the three now match.
- `Checkbox` / `Radio`: a square or a dot has two looks — `fill` (a shallow filled surface) and `outline` (a bordered one). `outline` now really draws its border, and its colour follows `--kui-theme-outline-border` like any other outlined control; `fill` takes its edge from `--kui-theme-fill-border`. Neither variable reached a check box or a radio before.
- `Checkbox` / `Radio`: leaving `theme` unset gives the shallow `fill` surface; writing `default` used to fall back to the bordered base look, so it changed the appearance. `solid`, `plain`, `dashed` and `underlined` mean nothing on a box you cannot type into and also land on `fill`.
- `CheckboxGroup` / `RadioGroup`: `theme` reaches every square and dot in the group, whether it is written on the group or inherited from `ConfigProvider`. In the `type="button"` style only `fill` joins the buttons with one divider; every other tier keeps its own adjacent borders. That layout used to read only the `theme` written on the group, so under `ConfigProvider theme="fill"` the buttons were filled while still keeping the overlapped-border spacing; an inherited `fill` now counts too. The checked and disabled states always win over `theme`.
- `CheckboxGroup` / `RadioGroup` no longer overwrite the appearance an item states for itself. A group used to write the `theme` and `size` it had inherited straight onto every item, so `<Checkbox theme="outline">` inside a `<CheckboxGroup>` still drew the shallow `fill` surface, and a size written on the item was dropped the same way; what an item writes now wins, and only what it leaves alone follows the group. A `RadioButton`'s `shape` behaves the same.
- `Card` / `FeatureCard` / `StatCard`: `theme` gains `solid` and `dashed`. `solid` fills the card with the primary colour and inverts its title, description, icon and head divider, while a `StatCard` trend marked `success` / `danger` / `warning` keeps its own colour; `dashed` draws a dashed border. `StatCard` now accepts the same tiers as the other two cards instead of only `fill`, `outline` and `plain`.
- A card no longer loses both its background and its border when `theme="underlined"` is set, whether written on the card or inherited from `ConfigProvider`: an underline belongs to a control you type into, so a card falls back to its own `fill` look.
- `Collapse` / `FeedbackPanel`: `theme` gains `solid` and `dashed`. `solid` fills the box with the primary colour and inverts its titles, description, detail plate and icon, while a disabled panel inside a `Collapse` still reads as disabled; `dashed` draws a dashed frame and keeps the row dividers solid. The severity stripe beside a `FeedbackPanel` reports its `kind`, so no `theme` repaints it.
- `Collapse`: with `sample` and `theme="solid"`, each panel carries the primary surface itself instead of one plate painted behind them.
- `FeedbackPanel`: `theme="outline"` no longer paints a page-coloured background of its own, so a panel inside a card or a tinted container shows that container's background, like any other outlined surface.
- `CheckCard` / `CheckCardGroup`: `theme` gains `solid` and `dashed`, and a check card no longer accepts only `fill` and `outline`. `solid` fills the card with the primary colour and inverts its title, description, leading icon and corner tick — the selected disc turns light with the mark drawn in the plate colour; `dashed` draws a dashed frame. `theme="underlined"` lands on `outline`, an underline being the spelling of a control you type into.
- `CheckCardGroup`: `theme` now reaches every card inside the group, whether it is written on the group or inherited from `ConfigProvider` or a `Form`, and a tier written on the card itself still wins. A `theme="solid"` on the group used to be swapped for `outline`.
- `CheckCard`: a disabled card greys its title, description and icon along with its border and its tick.
- **Breaking change**: `CheckCardTheme` is no longer exported; every `theme` prop uses the library's shared `ThemeType`.
- `Alert`: `theme` gains `solid` and `dashed`. `solid` fills the box with the colour the alert is already reporting (`error` red, `success` green, `warning` orange, `info` primary) and inverts its text, mark and close button, so an error and a success stay two different blocks instead of both turning primary; `dashed` draws a dashed frame. `theme="underlined"` lands on `fill`, an underline being the spelling of a control you type into.
- `Alert`: `theme="outline"` no longer draws its frame in the page's text colour. The border takes the library's border colour like every other outlined surface, so `--kui-theme-outline-border` now recolours it.
- `Image`: `theme` gains `solid` and `dashed`. `solid` fills the plate the picture sits on with the primary colour and inverts the loading spinner, the failed-load placeholder and anything passed as children; `dashed` draws a dashed frame. `theme="underlined"` lands on `plain`, an underline being the spelling of a control you type into.
- `Image`: `theme="outline"` now draws an actual frame. It used to set only a border colour on an element that has no border width, so nothing appeared and `--kui-theme-outline-border` had nothing to recolour.
- `QRCode`: `theme` gains `solid` and `dashed`. `solid` fills the box behind the code with the primary colour and inverts mask text such as the "expired" message; `dashed` draws a dashed frame. `theme="underlined"` lands on `outline`.
- `QRCode`: `theme="plain"` now only removes the surface. It keeps the 12px of padding the frame holds and fades the border instead of deleting it — taking the frame and the padding away together is still `:bordered="false"`.
- `QRCode`: `theme` and `shape` now follow `ConfigProvider`, and a value written on the component itself still wins.
- `Page`: `theme` gains `solid` and `dashed`. `solid` fills the page boxes with the primary colour, inverts the digits and the `…` mark with them, makes the current page a white box with primary digits and lightens its own colour on hover; the total-count line and the prev/next arrows stay on the bar's background. `dashed` draws a dashed frame and leaves the `…` cell unframed. `theme="underlined"` lands on `fill`.
- `Page`: `theme="plain"` does something now. The bar carried the class while the stylesheet said what that tier draws nowhere.
- `Page`: the selected page takes its state colour on the cell itself. Under `theme="fill"` only the digits turned primary on a plate that was still the hover grey, and under `theme="outline"` the frame stayed the default border colour.
- `Page`: the tier it hands to its own page-size selector and elevator input is one the bar can paint, so `theme="underlined"` — including one inherited from `ConfigProvider` — no longer leaves a flat bar with an underlined input inside it.
- `Kanban`: `theme` gains `plain`, `solid` and `dashed`, and is now inherited from `ConfigProvider`. The tier paints each column — `plain` leaves it without a plate or a frame, `solid` fills it with the primary colour and inverts its title, its count and the cards inside it, `dashed` draws a dashed frame. `theme="underlined"` on a board falls back to `fill`.
- `Kanban`: the hint that marks the column a card is being dragged over now appears. It used to sit under the column's own appearance, so it stayed invisible even on a board's default `fill`.
- `Kanban`: on a `theme="solid"` column the keyboard ring on a card is a pale wash of the plate's own ink instead of primary on primary, and the status dot in a column header keeps the colour `column.color` gives it under every tier.
- `Kanban` columns now read the local appearance variables: `--kui-theme-fill-bg` / `--kui-control-bg-fill` set the `fill` plate and `--kui-theme-outline-border` / `--kui-control-border` set the frame, none of which reached a board before.
- `Transfer`: `theme` gains `plain`, `solid` and `dashed` and is now inherited from `ConfigProvider` / `Form`. The tier paints the two lists — `plain` leaves them without a plate or a frame, `solid` fills both with the primary colour and inverts their titles, item descriptions, header and footer dividers, with hover, selection and the keyboard ring turning into a pale wash of the plate's own ink, and `dashed` draws a dashed frame. Any other tier inherited from outside used to be swapped for `outline`. `theme="underlined"` on a transfer lands on `outline`.
- `Transfer`: on `theme="solid"` the two search boxes take a shallow filled surface instead of primary on primary, and a disabled transfer — the whole thing or one row of it — falls back to the library's disabled colour for its list text, item descriptions and footer.
- `ListPanel`: `theme` gains `solid` and `dashed` — it used to accept only `fill`, `outline` and `plain`. `solid` fills the whole panel with the primary colour and `dashed` draws a dashed frame; the tier is painted on the card the panel sits on, so `:bordered="false"` only takes the frame away without changing tier.
- `ListPanel`: on `theme="solid"` the result summary now takes the plate's light ink and the bulk-action strip swaps its grey plate for a pale wash over the primary, instead of a line of dark text and a stray grey block on a primary panel. Everything else you put inside the panel follows the panel's own text colour.
- `theme="underlined"` on a list panel — written on it or handed down by `ConfigProvider` — now falls back to the panel's own `outline` instead of the card's `fill`.
- **Breaking change**: the type of `theme` now lists only the tiers a component can draw. Surface components - `Card` / `FeatureCard` / `StatCard` / `Collapse` / `FeedbackPanel` / `CheckCard` / `Alert` / `Image` / `QRCode` / `Page` / `Kanban` / `Transfer` / `ListPanel` / `Tag` / `Button` / `DropdownButton`, plus `RadioGroup` / `RadioButton` - take the five `fill` / `outline` / `plain` / `solid` / `dashed` (`SurfaceThemeType`); `Checkbox` / `Radio` / `CheckboxGroup` take the two `fill` / `outline` (`MarkThemeType`); `ConfigProvider` and `Form` still accept all six. Writing a tier a component cannot draw - `theme="underlined"` on a card, for example - is now a TypeScript error (in a template too); nothing changes at runtime and the component still falls back to its own appearance.
- `theme` and `size` on `InputGroup` now follow `ConfigProvider`, and the group always matches the field inside it. The group used to read only its own `theme`, so `outline` / `solid` bordered the field while the prefix and suffix boxes stayed filled. A value written on the group still wins, and the size the group resolves now travels on to the controls inside it.
- `TreeSelect` no longer grows a halo when its panel opens: a filled, plain, solid or underlined box, and a borderless or disabled one, keep only the focus ring, the way `Select` and `Cascader` already do; `outline` and `dashed` keep the shallow glow.
- `Input` / `Textarea` under `theme="solid"` no longer grow a pale halo when focused - on a primary fill it was never readable, and they now match `InputNumber` / `InputOTP` / `InputTag` / `ColorPicker` by keeping only the focus ring.
- A disabled input no longer glows while it has the caret, and a disabled `ColorPicker` stays flat even when its panel is held open through `open`. Tiers that keep their border (`outline` / `dashed`) still glow on focus and on opening.
- Turning off `Cascader`’s border with `bordered={false}` now removes it for real: `theme="outline"` and `theme="dashed"` no longer leave a frame behind, and `theme="fill"` no longer keeps its tint, the way `Select`, `TreeSelect` and `DatePicker` already behave.
- An input wrapped in an `InputGroup` inside a form item still counts as that item’s control: the form value fills it, clicking the label focuses it, and the validation message and appearance tier follow it.
- In a vertical `Form` (`layout="vertical"`) a `block` control now really fills the row: previously every field shrink-wrapped to its own content width, so the right edges inside one form did not line up.
- Components used through global registration (`<Button>`, `<Table>` written without an import) keep their types when the library is brought into an app with `pnpm link`: props are still checked and event arguments still infer, instead of degrading to `implicitly has an 'any' type`.
- `Cascader` now reads its placeholder from the locale when `placeholder` is not set, so an English interface no longer shows 请选择.
- `Badge`: a status dot now needs `status` or `color` to be set, so an empty `<Badge />` or `:count="0"` no longer shows a grey dot nobody asked for.
- `Badge` color now takes the same set of preset names as `Tag`, and both the status dot and the count bubble follow them. A color outside the presets still paints as written, and a name the browser cannot read no longer renders as an invisible dot - it falls back to the grey status dot.
- `Tag` color now answers all 17 preset names: `olive`, `teal`, `violet`, `brown` and `gray` used to render a tag that was never painted, and now colour it by name. `gray` takes the neutral chip, where the label stays readable.
- The preset `color` names no longer include `default`. A component with no `color` already uses its own surface, and giving that another name only suggested the palette held a tier independent of the theme. A `Tag` or a count `Badge` still written `color="default"` now renders as though nothing were set; the status dot keeps its grey, because that belongs to `status` and not to the palette. On a button, `color="default"` used to draw the `type="default"` one — drop the `color` or write `type` instead.
- `Button`'s `color` now only answers the 17 preset names. A colour outside that set — `tomato`, `#f00` — used to take the button's own `type` surface away and leave it unpainted; it now reads as no colour written, and `type` keeps working.
- `Button`'s `color` now paints even when no `theme` is written: `<Button color="blue">` used to keep the grey default surface and is now a solid blue button, the way `type` already behaved. Buttons that do write a `theme` look exactly as before.
- `Button`'s `color` now paints on `theme="fill"` too. That button used to keep the grey wash with nothing coloured by the name; the wash stays, and the label takes the name's colour.
- A solid `Button` no longer puts white text under every `color`: `yellow`, `orange`, `lime` and `gold` switch to black, so the pale-surface-white-text case nobody could read is gone. A disabled button keeps its usual grey label.
- `Button`'s `color` on `theme="solid"` is now the surface at full strength rather than the same hue thinned over the page: white could not hold on that wash, and `gray` merged straight into the background. The button is as solid as it is with no `theme`, and hover and press still step visibly.
- `Button`'s `color` no longer writes its label in a thinned-out name on `outline`, `dashed` and `plain`. Those three tiers bring no surface of their own, and the name used to reach them diluted — one colour on a card, another on the page, a third under the button's own press — so the same button read differently wherever it sat, and `gray` on a light theme was all but invisible. It now keeps that one colour wherever it goes, and its press steps the way a `type` button's does.
- Wherever a colour name is written as text — a `Button` label on `fill` / `outline` / `dashed` / `plain`, a `Tag` label that sets `color` — it is now a readable shade of that name instead of the raw hue. The pale names (`yellow`, `lime`, `cyan`, `gold`) sat on the page or on the button's own press wash at contrast too low to read; each name now holds 4.5:1 there, darkened in the light theme and lifted in the dark one. `type="primary"`, `danger` and `warning` follow the same rule on those tiers.
- Those coloured labels join the rest of the build-time shades: changing `--kui-color-primary` at runtime no longer carries them. Re-declare `--kui-color-<name>-text` to move the family — the three semantic names have one each (see the theme documentation).
- The shades the theme used to have the browser mix while painting — pale fills, borders, the hover and press steps, the focus glow — are now worked out when the library is built and written into the stylesheet as plain colours. The Electron build that targets Windows 7 ships Chromium 108, where a mixed declaration gets no value at all: there `Result`'s status code was an empty block with no digits in it, and `FeatureCard`'s icon chip and `Calendar`'s event rows kept no tint. All of them paint now. The cost is a narrower override surface: changing a base colour at runtime (`--kui-color-primary`, `success` / `warning` / `danger`) moves only that flat surface, and the shades derived from it no longer recompute — declare the specific shade you want to follow (see the theme documentation).
- Two visible details of that switch: on a few tiers the hover and press step is one colour step away from what it was (build-time rounding versus the browser's own), which is all but invisible; and `FeatureCard`'s icon chip and `Calendar`'s event background are now worked out by the component from the `color` you passed — when that value only the browser can resolve (`currentColor`, a CSS variable), those two backgrounds fall back to a wash of the primary colour, while the icon and the dot keep your colour.

## 6.2.2

`2026-09-26`

- `Select`: Preserve selected labels when remote search results are empty, loading, or omit selected options; dim the selected text when refocusing single-select remote search, matching local search.

## 6.2.1

`2026-09-25`

- `Carousel`: Added horizontal and vertical mouse/touch gestures with release settling, controlled by `swipeable`; fixed display and state synchronization issues with dynamic slides and consecutive navigation.
- `Page`: Added container-responsive pagination that reduces page numbers, then switches to Simple while retaining the page-size selector. The full layout returns when space is available; set `responsive` to `false` to opt out.
- `Input` / `InputNumber`: Refactored shared internals to separate styling and controls; removed the previously exposed internal `inputType` and `controls` interfaces.
- AI assistance: Added CLI queries for component APIs, examples, and templates, source validation, and updates to project AI guidance.

## 6.2.0

`2026-9-23`

- `Badge` numeric counts now roll upward for increases and downward for decreases, including carry and borrow; corrected vertical alignment of the count.
- `StatNumber` rollup animations now determine direction independently for each digit: increasing digits move upward, decreasing digits move downward, and unchanged digits stay still. Improved transitions across large value changes and respect for reduced-motion preferences.
- Added a dedicated `StatNumber` documentation page with formatting, animation duration, and dynamic-value examples, separate from `StatCard`.
- Fixed `Slider` tooltips disappearing when the pointer leaves the thumb during an active drag.
- Improved light-theme selected-date hover contrast in `DatePicker` and removed unintended interaction borders from fill-style controls.
- Improved scoped theme colors and radii, nested light/dark themes, and explicit CSS variable overrides; added browser-based theme regression checks.
- Added initial `value` support to model-bound components. `modelValue` / `v-model` takes precedence when supplied; later changes to the initial `value` do not overwrite user input. Checkable items retain option `value` semantics and use `checked` for initial selection.
- Fixed `Select` multiple-value updates made with array mutations, `Slider` constraint changes resetting the current value, and `DatePicker` incomplete ranges failing to restore the last committed selection.
- Fixed Node tooling type checks requiring generated package declarations before a clean build; added a regression test that excludes build artifacts.
- Completed public API and event documentation, including callback parameters and examples.
- Migrated repository build and validation scripts to TypeScript and added Node-script type checking. Contributor tooling requires Node.js 24 or later; published ESM/CommonJS entry points remain supported.
- Alert and Tag now remove their content after the exit animation and expose `afterClose` (`onAfterClose` in React). Update parent visibility or tag list data in this callback to unmount components without interrupting the animation.
- Unify state APIs: remove AutoComplete `defaultOpen`, Tour `defaultOpen/defaultCurrent`, Upload `defaultFileList`, and Table `defaultExpandedKeys` in favor of unprefixed props. Rename Table `defaultExpandAllRows` to `expandAllRows`. State props initialize local state, allow interaction, and synchronize external changes. Tour adds `open` / `v-model:open` while retaining `v-model`.

### Shared popup infrastructure

- Added the public `Popup` component and related types, unifying triggers, placement, arrows, containers, outside-click dismissal, Escape handling, and nested popup management.
- Migrated `Dropdown`, `Tooltip`, `Poptip`, `Popconfirm`, `Select`, `TreeSelect`, `Cascader`, `AutoComplete`, `Mentions`, `DatePicker`, and `ColorPicker` to shared popup infrastructure, reducing duplicate positioning and event listeners.
- Improved nested popup click detection, coordinated dismissal, and position updates while retaining each selector's filtering, selection, and keyboard behavior.

### Interactions, types, and maintenance

- Improved disabled / readonly interactions across components and their items, preventing unintended clicks, hover/active feedback, and incorrect cursors.
- Improved contrast between `Table` row hover backgrounds and action buttons, and aligned hover backgrounds across regular and fixed columns.
- Refined directory-mode `Tree` checkbox and row hover contrast in light and dark themes; improved default `Cascader` dropdown width.
- Completed component emits, event listener props, and related public type exports; shared multi-select tag rendering and popup logic.
- Added regression coverage for popups, selectors, disabled interactions, and event types.

## 6.1.0

`2026-9-19`

- `MenuItem`: Added `onClick` / `@click`, including keyboard activation. Disabled items no longer respond to clicks or navigate links.
- `Menu`: Fixed selection and expansion synchronization, nested collapse animations, and keyboard interactions. Restored submenu state after expanding a collapsed menu and made left/right popup spacing consistent.
- `Image` / `ImageGroup`: Added custom slot support in the preview overlay. Dragging now follows the pointer without animation lag, and changing the zoom slider resets the image position.
- `Upload`: Improved picture-wall sorting with card borders and rounded corners preserved during dragging, while other images move aside immediately. Refined cancellation and sort events, and fixed cleanup when custom upload requests complete synchronously.
- `Switch`: Fixed thumb position jumps during pressing, release, and toggling. Disabled and readonly switches no longer show pressed deformation.
- `DatePicker`: Fixed manual input and shortcuts bypassing disabled-date/time constraints. Improved range type inference, incomplete-range restoration, clearing, keyboard selection, and focus state after closing the panel.
- `Input`: Fixed prop/slot precedence for prefixes and suffixes and prevented empty content from occupying decoration space.
- `Tree`: Fixed checkbox interactions also triggering row interactions, keeping checking and row clicks independent.
- `ColorPicker`: Refined `outline`, `fill`, and `plain` themes and `round`, `circle`, and `square` shapes.

### Documentation and tooling

- Expanded AI component-usage evaluations and asset consistency checks, and improved static validation of Vue examples.
- Split builds into stages with Node child-process memory limits to reduce peak build memory.
- Improved small-size visual fixtures and regression coverage for menus, uploads, and image previews.

## 6.0.0

`2026-9-15`

### Important changes

- The minimum supported Vue version is now `3.5.0`, enabling stable IDs, improved type inference, and current runtime capabilities. Upgrade the application to Vue 3.5 or later before adopting this release.
- Added the dedicated `Segmented` control for card-like sliding selection. `Radio`, `RadioButton`, and `RadioGroup` now focus on standard single-selection semantics.
- Reworked controlled values, defaults, reset behavior, readonly and disabled states, and events across form controls. Applications relying on legacy behavior should pay particular attention to Form, Radio, Rate, Slider, InputNumber, and date-range forms.
- `Row` now always uses Flex and removes the ineffective `type` prop. `GridItem` removes `offset`, which did not map reliably to CSS Grid placement; use `columnStart` and `rowStart` for explicit positioning.

### New components and capabilities

- Added `Segmented` with controlled and uncontrolled values, sizes, disabled options, custom icons and labels, and an animated selection indicator.
- Added on-demand asynchronous loading to `Cascader`, including per-node loading, request deduplication, result caching, empty-result handling, retry after failure, and support for either returned children or mutations to `option.children`.
- Expanded `Upload` with custom requests, file validation, concurrency control, error details, and drag-and-drop reordering for picture walls, together with improved progress and file states.
- Added the `browser` variant to `Tabs`, including closable and dynamically added tabs, plus an overflow dropdown for quickly switching hidden tabs.
- Added collapsed-item Tooltip control, collapsed submenu popups, keyboard navigation, and deep-menu state restoration to `Menu`.
- Added responsive columns to `Descriptions`, custom scroll containers to `BackTop`, and improved simple pagination, editable page numbers, and adaptive page-size controls to `Page`.
- Added `columnStart` and `rowStart` to `Grid`, with improved container breakpoints, multi-column `suffix` placement, and CSS length support for `itemMinWidth`.

### Forms and input controls

- Rebuilt the FormField context and integrated major controls so Form-level `size`, `theme`, `shape`, `disabled`, and `readonly` settings are inherited consistently.
- `resetFields` now restores initial field values. Fixed synchronization after replacing the external model, calling `setFieldsValue`, changing dynamic fields, and resetting standalone radios.
- Improved validation triggers, asynchronous validation races, optional empty values, reusable regular expressions, and error layout so long messages no longer overlap the following field.
- Added stable field IDs and accessible relationships through `label for`, `aria-invalid`, `aria-describedby`, and `role="alert"`.
- Added `addonBefore` and `addonAfter` to `Input`; aligned prefix, suffix, clear button, and InputGroup layout; and fixed fill/outline, disabled, dark-mode, and size-specific states.
- Unified clearable and readonly behavior, tags, dropdown motion, keyboard navigation, and remote-search states across `Select`, `TreeSelect`, `AutoComplete`, `Mentions`, and `InputTag`.
- Added semantic and custom colors to `Switch`, string steps to `InputNumber`, and improved length boundaries, themes, and input behavior in `InputOTP`.

### Advanced component improvements

- Improved `DatePicker` range values and `startDate`/`endDate` models, date and time panels, keyboard interaction, popup motion, and external-value synchronization.
- Improved `Table` virtual scrolling, tree expansion, fixed columns, striped rows, column visibility, horizontal minimum width, and loading states. Empty is no longer displayed while an empty table is loading.
- Improved virtual lists, filtering, expansion motion, keyboard interaction, and popup repositioning in `Tree` and `TreeSelect`.
- Fixed `Drawer` targets so drawers mount inside the configured element rather than body, with consistent target positioning restoration, scroll locking, and child-popup cleanup.
- Introduced shared popup-host management for `Modal`, `Drawer`, and related overlays so closing a parent or pressing Escape also closes child popups teleported to body.
- Rebuilt `Skeleton` with flex layout, added `titleWidth`, unified delayed display to prevent loading flicker, and improved reduced-motion and accessibility support.
- Improved `QRCode` status overlays, keyboard refresh, logo rendering, theme-color resolution, and download support.

### Interaction, styling, and documentation

- Unified sizing, themes, shapes, disabled states, clear buttons, tags, masks, and popup motion, fixing dark-mode inconsistencies and several first-open flashes.
- Consolidated shared motion and removed `transition: all` from component styles to avoid unrelated animations and layout jank.
- Fixed Layout.Sider sizing and collapse motion, Steps alignment, Anchor positioning, Breadcrumb separator updates, and Dropdown context-menu positioning.
- Replaced Row's negative margins and Col padding with native `row-gap` and `column-gap`, accounting for spacing in grid widths, offsets, push, and pull positions.
- Fixed `Upload` processing only one file when selecting a directory. Directory uploads now enable multiple selection and process all contained files.
- Standardized Vue event declarations and payload validation while removing invalid `onXxx` props, debug logging, and duplicated documentation tables.
- Expanded bilingual APIs, functional demos, declarations, Vetur/Web Types, and AI metadata; moved MCP usage validation to the Vue AST; and strengthened CI checks for documentation, package exports, AI assets, and evals.

## 5.8.0

`2026-8-24`

### New components

- Added `Calendar` with month navigation, date selection, event data, customizable date cells and event content, and global locale integration.
- Added `Kanban` with multi-column task presentation, drag-and-drop movement, customizable columns and items, and `fill` and `outline` appearances.
- Added `ListPanel` for consistent sizing, themes, and shapes across admin lists, filter entries, and navigation items.
- Added `PageHeader` to standardize page titles, descriptions, back navigation, and extra actions.
- Added `TableColumnSetting` with column visibility, locked essential columns, reset support, and custom triggers.

### Enhancements

- Added `hiddenColumnKeys` to `Table`, including grouped-column filtering; redefined `scroll.x` as the minimum content width so wide tables still fill their container without leaving a blank area.
- Expanded `FeatureCard` with `size`, `direction`, `clickable`, `disabled`, `color`, and `iconBackground`, plus keyboard interaction and additional content slots.
- Completed the `Button` `plain` theme with semantic colors and consistent hover, active, and disabled states.
- Added stable flex width constraints to `Layout.Sider` to prevent squeezing and width glitches during collapse transitions.
- Made `StatCard` fill the available Grid height so cards remain aligned when some trend values are absent.
- Extended AI component metadata and JSON Schema with slot information, plus APIs, examples, and bilingual descriptions for this release.

### Bug fixes and experience

- Fixed misaligned root items and submenus in horizontal `Menu`, and prevented submenu popups from flashing at the page origin during collapsed-state changes.
- Fixed multiple parent menus displaying active indicators after refresh or route restoration.
- Fixed `Space` applying first/last grouping styles when it contains only one child.
- Improved spacing, empty states, and visual hierarchy across `Kanban` columns and items.
- Added KUI Vue Pro 1.0 the admin solution.

## 5.7.0

`2026-8-21`

### New components

- Added `AutoComplete` with local and remote search, controlled visibility, empty-value opening, loading, clearing, themes, sizes, and shapes.
- Added `CheckCard` and `CheckCardGroup` for standalone and grouped card selection with custom content and appearances.
- Added `InputTag` with controlled values, separators, limits, duplicate handling, and collapsed tags.
- Added `Mentions` with multiple triggers, filtering, remote data, loading and empty states, configurable rows, and popup placement.
- Added `Steps` and `Step` with horizontal and vertical layouts, statuses, custom icons, clickable steps, and controlled state.
- Added `Tour` with controlled steps, masks, placement, and custom content.
- Added `Transfer` with search, disabled states, events, custom rendering, themes, and a pagination-friendly footer slot.
- Added `Typography` Text, Title, and Paragraph variants with copy, edit, Tooltip, and expandable ellipsis capabilities.
- Added the `VirtualList` primitive with fixed item heights, overscan, and programmatic scrolling.

### Enhancements

- Improved `Select` keyboard navigation; added creatable multiple options, virtual scrolling, large data support, and collapsed selection tags.
- Added virtual scrolling to `Table`, `Tree`, and `TreeSelect`; improved striped rows with fixed columns in virtual tables.
- Added the `simple` mode to `Page`; with `showElevator`, the current page can be edited directly.
- Added overflow navigation and responsive measurements to `Tabs`; the active indicator now updates after dynamic title changes.
- Added custom loading icons to `Button` and refined button groups, states, and animations.
- Added Card sizes and aligned `theme`, `size`, and `shape` behavior across Input, Select, TreeSelect, and related controls.
- Unified masks and scroll locking across `Modal`, `Drawer`, and `Tour` to reduce layout shifts when overlays open.

### Styling and experience

- Unified tag styling across `InputTag`, `Select`, `TreeSelect`, and `Tag`, including light/dark modes, sizes, and shapes.
- Standardized input, dropdown, empty-state, and overlay animations; consolidated reusable motion definitions.
- Added global typography, box-sizing, and scrollbar foundations with macOS and Windows font stacks.
- Adopted shared control-height CSS variables more consistently for small, medium, and large components.
- Moved component-specific styles back into their component files and merged duplicate selectors.
- Expanded bilingual documentation and functional demos for the new components, virtual scrolling, Typography, and Transfer.
- Optimize component rendering logic to ensure that Teleport is not created when the panel is not open.

### Bug fixes

- Fixed dropdown flashes in `AutoComplete` and `Mentions` after selection, query removal, or empty remote results.
- Fixed `Mentions` popup positioning at the caret and automatic placement when space is limited.
- Fixed `Select` query cleanup, duplicate creation, and keyboard navigation restarting from the first option after selection.
- Fixed the `Tabs` active indicator position after dynamic title changes.
- Fixed the `DatePicker` date-grid class name and seven-column layout.
- Fix the issue with the `ColorPicker` color wheel value positioning.

### AI and tooling

- Published version-matched component metadata, JSON Schema, `llms.txt`, and `llms-full.txt`.
- Added a Kui Vue Agent Skill, project initializer CLI, and MCP server for component search, exact API lookup, recommendations, and template prop validation.
- Added 20 AI Vue SFC evaluation cases and CI checks for generated AI assets and evaluations.
- Added bilingual AI integration guides and npm exports for `kui-vue/metadata`, `kui-vue/metadata/schema`, and `kui-vue/skill`.
- Expanded ESLint, type checking, API documentation checks, tests, builds, and package validation, and updated development dependencies.

## 5.6.0

`2026-8-16`

- Added component `Ripple`.
- Added component `FlameWrap`.
- `Menu` moves overflowing horizontal items into a submenu, retaining access to the menu hierarchy and selection.
- Improved `AvatarGroup` composition, layout, and examples.
- `Table` now supports tree data with expandable and collapsible child rows.
- Added `Badge`'s `active` prop and improved its animations.
- Grid: added `flow` property to support row dense auto-fill; fixed issues where responsive styles and external class/style were not updating.
- Row and Col: added xl, sm and other attributes to support responsiveness.
- Notice: added `grouping` property; with the same grouping, only one notification message is shown.
- Improved custom content rendering in `Tooltip`, `Poptip`, and `Popconfirm`; added panel-style presentation to selected popup components.
- Theme switching default behavior optimized.
- ColorPicker: fixed color dragging selection in the panel.

### Documentation and development experience

- Integrated CodeJar into the online example editor to improve syntax highlighting and code editing.
- Expanded theme customization guidance, responsive grid examples, component prop descriptions, and public type documentation.

## 5.5.1

`2026-8-9`

### Feature Optimization

- Added the 'InputOTP' component.
- Added the 'FeatureCard' component.
- Added the 'Result' component.
- Added the 'FeedbackPanel' component.
- Added the 'CardMeta' component to enhance the 'Card'.。
- The 'Badge' component now features a 'pill' attribute to display the capsule's appearance.
- The popup layer components have been fully upgraded to Vue 3 'Teleport'.
- Optimized menu folding, expansion animations, and submenu state recovery.
- Display the default User icon when the Avatar image fails to load.
- Optimized support for TypeScript syntax in the Demo online compiler.
- Improve TypeScript types for components like Table and Upload.

### Bug fix

- Fixed lost Modal command call styles and undercentered position.
- Fixed missing submenu animations and abnormal selection status when folding Menu.
- Fixed Empty not displaying when searching for unmatched data in TreeSelect.
- Fixed missing borders in table empty data and fixed table header scenarios.
- Fixed abnormal checks, merged cells, fixed columns, and scrolling status in Table.
- Fixed invalid upload request methods, status checks, file deletion, and resource leaks.
- Fixed multi-instance conflicts in Images, loading races, preview data asynchrony, and event leakage.
- Fixed loading status, size, and resource cleanup issues for Avatar and Skeleton.
- Fixed abnormal background color abnormalities in the Input browser's auto-fill mode.
- Fixed an error when compiling the 'import type' syntax in Demo.

### Refactoring

- Simplifies internal state transfer for Menu, Collapse, and Tree/TreeSelect.
- Remove redundant 'isPopup', 'active', 'selectAsCheck', and 'queryKey'.
- Remove the old 'v-transfer' command.

## 5.4.1

`2026-8-2`

- Add `Cascader` cascade selection component
- Improve `Empty` description text display problem
- Improve `Page` jump negative number problem
- Improve Theme switch display problem in 2k,4k resolution.

## 5.3.1

`2026-7-17`

- The `message` component now supports the `grouping` property. Messages sharing the same `grouping` value will be merged into a single notification.

## 5.3.0

`2026-7-13`

- Added `QRCode` component
- Added `Watermark` component
- Fixed maximization issue in `Modal`
- Fixed default value issue in `Page` pagination
- Fixed dropdown positioning issue in `Dropdown`
- Fixed image dragging issue in `Image`
- Fixed several attribute issues in `Input`

## 5.2.3

`2026-6-8`

- Fix the issue where `Select` filtering does not display the Label

## 5.2.2

`2026-5-18`

- Fixed the read-only attribute issue for `Input` and `Textarea`
- Fixed the width issue for `Modal`
- Fixed the abnormal `class` attribute issue for `Tag`

## 5.2.1

`2026-5-10`

- Enhanced `Table` slot functionality
- `Form` child component exception issue

## 5.2.0

`2026-5-9`

- The form component removes the `value` property and uses `modelValue` instead.
- Components like `Modal` and `Select` now have an `onOpenChange` event, which triggers when the window is opened or expanded.
- Components like `Input` now include an `onClear` event, which triggers when the value is cleared.
- The `onChange` event of components will now return the current value of the component.
- Fixed a `Form` rule validation issue.

## 5.1.0

`2026-5-4`

- Added `Splitter` component
- Optimized `CheckBox` and `Switch` components to support outputting `boolean` (true/false) and `number` (0/1)
- Added `loading` function to `message`
- Improved `RadioGroup`
- Form validation enhancements
- Changed the `light` property to `fill` for some components

## 5.0.1

`2026-4-28`

- TS Enhancement

## 5.0.0

`2026-4-27`

- Refactored all components based on TypeScript
- ⚠️Version 5.x uses a new icon library

## 4.0.3

`2026-3-5`

- Fixed multilingual issues in Select
- Optimized Menu details
- Fixed flickering issue during theme switching

## 4.0.2

`2026-3-2`

- Fix compatibility issues with Nuxt.js
- Fixed the issue with Drawer closing.
- Optimized the Slider component (justified alignment).
- Added new Anchor and AnchorLink components.
- Added new AvatarGroup component.
- Fixed Carousel (v-for bugs).
- Enhanced the POP series of components.

## 4.0.1

`2026-2-8`

- Added new Grid component.
- Optimized the StatCard component.

## 4.0

`2026-2-4`

- Added support for Vue 3. Subsequent maintenance for the Vue 2-based 3.x version has ceased.
- Completely refactored all components.

## 3.6.10

`2026-2-1`

- Minor optimizations and adjustments.

## 3.6.9

`2026-1-25`

- Changed the `Page` component's current page property name from `current` to `page`.
- Adjusted the Image component; added tabs.
- Fixed the hidden tooltip issue for the Slider component.
- Other minor optimizations.

### More

- For more changelog entries, please check the https://v3.k-ui.cn/log.

## 2.3.5

`2019-10-17`

- 👏👏 Optimized the `Modal` close animation.
- 🐞🐞🐞 Fixed an issue with form validation for the `Select` component.
- 💪💪 Fixed an issue where the `Table` component's `row-click` event did not bubble up properly.

## More

- For more changelog entries, please check the https://v2.k-ui.cn/#/log.

## 1.0.0

`2017-12-10`

👏👏 🚩🚩🚩 Initial development started.
