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
- Menu component extended and optimized.
- Avatar component extended and optimized.
- Table component now supports Tree data.
- Badge animation optimized.
- Grid: added `flow` property to support row dense auto-fill; fixed issues where responsive styles and external class/style were not updating.
- Row and Col: added xl, sm and other attributes to support responsiveness.
- Notice: added `grouping` property; with the same grouping, only one notification message is shown.
- Some Pop components now support display in Panel form.
- Theme switching default behavior optimized.
不- ColorPicker: fixed color dragging selection in the panel.

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
