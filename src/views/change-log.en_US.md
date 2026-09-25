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

## 6.2.1

`2026-09-24`

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
