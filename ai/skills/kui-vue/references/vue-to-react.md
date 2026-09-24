# Vue → React migration with KUI

Read this when moving a kui-vue application to react-kui. This is not a
mechanical syntax replacement. Run each installed package's `*-ai paths`
command first and record both versions. This guide describes the source version
shipped with the package; compare against the actual installed declarations.

## Discover the installed API

`react-kui/metadata` and `react-kui/skill` are package exports, not folders.
Resolve them with `node -p "require.resolve('react-kui/metadata')"`.
Use `pnpm exec react-kui-ai api Input --section behavior` and then
`examples Input` / `example Input <id>`; the Vue CLI provides the same
commands. Older installed releases may only have `init`: read
`ai/kui-components.json` by component name or configure the documented MCP
server. Do not claim query commands exist in an older installed version.

Component metadata is NOT an exhaustive list of all package exports. Utilities
such as theme/message/notice and type-only exports must also be checked in the
installed declarations and package entry. A missing metadata entry does not
prove an API is absent.

## Source-checked mappings

| Vue usage | React counterpart | Important behavior |
| --- | --- | --- |
| Input `v-model` / `@change` | `value` / `onChange(value)` | String value, not a DOM event. React Input synchronizes local state when external values change; it is not a strict native controlled input. |
| Input `#prefix` / `#suffix` | `prefix={<Icon ... />}` / `suffix={<Tag>...</Tag>}` | Renderable content; preserve inline layout. |
| Button `:icon="Search"` | `icon={Search}` | Both take icon data from kui-icons, not a rendered Icon node. Native submit uses htmlType, not type. |
| Dropdown default / overlay slots | children / overlay prop | Children are the trigger, overlay is the popup content. |
| Modal `v-model` | `open` / `onOpenChange` | Do not blindly translate all Vue bindings into value. onOk does not save or close automatically. |
| Popup `v-model:open` | `open` / `onOpenChange` | Query trigger, dismissal and nested-popup behavior; don't add document-click handlers by default. |
| Menu selection / openKeys bindings | `value` with `onChange`; `openKeys` with `onOpenChange` | selectedKeys also exists; choose one selection channel. MenuItem uses itemKey. React key is reconciliation identity, not a passed itemKey. |
| DatePicker modelValue (range array when range enabled) | `value` / `onChange` | startDate/endDate with onStartDateChange/onEndDateChange are an alternative, not the only API. Avoid mixing binding channels; verify mode, valueType, null/clear and date formatting. |
| Checkbox/Switch bindings | `checked` / `onChange` | Inspect each callback: Checkbox is not the same payload as Switch. value can identify an item in a group; it does not replace checked. |
| Form reactive model + FormItem prop | `model={model}` / `onChange={setModel}` + FormItem prop | React does not mutate the caller's model. Field binding can be supplied by Form; don't duplicate it without a reason. onSubmit receives { valid }. |
| Form reset / cancel | Explicit reset or saved draft snapshot | Reset clears registered values; it does not restore the original edit snapshot. |
| Select selection event | onChange(value), onSelect(option) | Option information is NOT a second argument of onChange. Verify single/multiple value shape and clear behavior. |
| Image | KImage | Check actual export names; do not assume every Vue name is identical. |
| Table custom cell slots | Column render callback | Query the exact callback signature and preserve rowKey, selection, pagination, loading and empty behavior. |
| class / component ref | className / React ref | Refs expose only documented methods. Forward refs through custom wrappers. |

## Theme is not missing from react-kui

Both repositories export `theme`. The React source and v3.1.0 source tag include
`theme.setThemeMode(event: MouseEvent, callback?)`. It toggles the root
`theme-mode` attribute and localStorage, with an optional view transition.
A React click handler can pass its native event:

```tsx
import { Button, theme } from "react-kui";

<Button onClick={(event) => theme.setThemeMode(event.nativeEvent)}>
  Toggle theme
</Button>
```

An application's ThemeContext is application code, not a replacement library
export. Preserve one coherent source of theme state and persistence; do not
introduce a second independent toggle. Only invoke the browser helper on the
client. ConfigProvider's theme prop controls component appearance, not this
global light/dark state.

## Migration workflow and acceptance

Inventory used components, named slots, model bindings, emitted payloads,
imperative methods and theme utilities before editing. Query the corresponding
React component's props AND behavior and one relevant example. Resolve
disagreements against the installed source/declarations rather than guessing.

Migrate one representative page first. Keep business logic and backend contracts
unchanged unless requested. Validate a form, a table and a popup flow before
copying the pattern across the project.

Run CLI validate, application typecheck and lint. Read skipped checks: static
validation does not execute code or prove visual/behavioral parity. Verify:

- typing, external updates, clear, disabled/readOnly and focus;
- validation, submit, loading protection, reset versus cancel/revert;
- menu selection/expansion and route identity;
- date range, format, timezone assumptions and empty values;
- popup placement, nested selection, outside click and Escape;
- light/dark mode, icon shape, spacing and inline affixes.

Compare the same scenarios in the Vue baseline and React result. State which
flows were actually tested and which require manual verification.
