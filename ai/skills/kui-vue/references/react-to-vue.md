# React → Vue migration with KUI

Use this guide when moving react-kui to kui-vue. Record both installed versions
using each package's `*-ai paths` command. Query the target API and examples
before changing each component; do not infer Vue contracts from React prop names.
This guide describes the accompanying source version, not every older release.

## Resource lookup

Run `pnpm exec kui-vue-ai api Input --section props`, then
`api Input --section behavior` and `examples Input`. Read an example with
`example Input <id>`. The React CLI supports the same queries.
Older releases may only support init: read their installed metadata and
declarations instead. Package exports such as `kui-vue/metadata` are not folders;
resolve them with `node -p "require.resolve('kui-vue/metadata')"`.

Metadata inventories components, not every utility or type export. Check
declarations for theme, message, notice, modal and other helpers.

## State and events are not mechanical renames

- React value/onChange often becomes Vue `v-model`, which binds modelValue
  and its update event. It is not merely `:value`.
- On Vue value-initialized controls such as Input and Select, value is read for
  initialization; later external changes belong in modelValue/v-model.
  Do not apply that rule to item identifiers such as Checkbox.value or Option.value.
- `v-model` already writes emitted updates back to the binding. Add `@change`
  only for a business side effect, not a redundant assignment. Payloads differ
  by component: Input change supplies a string, not a DOM event.
- Choose one state channel. Do not simultaneously bind modelValue and a named
  checked/range channel unless the installed API explicitly requires it.
- React refs use current; Vue script refs use value and templates unwrap refs.
  Query the target's exposed methods; an element ref is not a component handle.

## Source-checked mappings

| React | Vue | Important distinction |
| --- | --- | --- |
| Input value/onChange | Input v-model | Preserve external updates, clear, readonly and Form ownership. |
| prefix/suffix ReactNode | #prefix / #suffix | Prefer named templates in .vue files instead of constructing nodes with h. |
| Button icon={Search} | :icon="Search" | Import icon data from kui-icons. Neither accepts a rendered Icon for this prop. Native submit uses htmlType. |
| Dropdown children / overlay | default / #overlay slots | Default content triggers the popup; v-model:show controls visibility. |
| Modal open/onOpenChange | v-model | Modal uses the default model, NOT v-model:open. |
| Popup open/onOpenChange | v-model:open | Preserve trigger/dismissal rules; avoid extra document-click handlers. |
| Menu value/onChange or selectedKeys | v-model | Selection is an array; preserve item identity. |
| Menu openKeys/onOpenChange | v-model:openKeys | Expansion is independent of selection. |
| MenuItem itemKey | MenuItem :key | Vue reads the vnode key. React's reconciliation key is not itemKey. Data-driven menu items use their key field. |
| DatePicker value/onChange | v-model | Range model is a pair; named startDate/endDate bindings are an alternative. Verify valueType, clear values and mode. |
| Checkbox/Radio checked state | v-model or documented named checked binding | value identifies a group item, label is display text. Do not replace them with a boolean. Inspect change payloads individually. |
| Switch checked state | v-model:checked for boolean state | Default v-model can use valueType conversion; do not assume its payload is always boolean. |
| Form model/onChange | reactive model passed with :model | FormItem prop can own field binding; do not add a competing v-model. Submit payload contains valid. |
| Select onChange / onSelect | @change / @select | Selected value and option information are different events; inspect single/multiple types. |
| KImage | Image | Verify actual named exports. |
| Table column render callbacks | Target column API / documented slots | Query exact row/index/column signatures; preserve rowKey, selection, pagination, loading and empty state. |
| className | class | Preserve scoped/global style boundaries rather than copying JSX styling blindly. |

Reset is not cancel: clearing registered Form fields does not restore an original
edit snapshot. Preserve the application draft separately if cancel means revert.
Modal confirmation likewise needs the application's save/error/close policy.

## Prefer Vue templates

```vue
<script setup lang="ts">
import { ref } from "vue";
import { Input, Icon, Tag } from "kui-vue";
import { Search } from "kui-icons";
const keyword = ref("");
</script>

<template>
  <Input v-model="keyword" placeholder="Search">
    <template #prefix><Icon :type="Search" /></template>
    <template #suffix><Tag theme="outline">⌘K</Tag></template>
  </Input>
</template>
```

Import `kui-vue/style/index.css` once in the application entry. Slots may carry
scoped parameters: inspect the target example before replacing render props.
For lists use stable keys, not array indices when rows can move or be removed.

## Theme and runtime

Vue exports `theme.setThemeMode` too. Call it from a client click handler with
the native MouseEvent, for example `@click="theme.setThemeMode($event)"` after
importing theme from kui-vue. Do not copy React's event.nativeEvent access.
The helper toggles the root theme-mode attribute and persistence; keep one
source of theme state. ConfigProvider appearance is not global light/dark mode.
Do not call browser-only helpers during server rendering.

Keep business logic and backend contracts unchanged. React hooks cannot simply
be renamed to Vue lifecycle APIs: check reactive dependencies, cleanup, async
request cancellation, router integration and component unmount behavior.

## Acceptance

Migrate one representative page before expanding the change. Run application
typecheck/lint and CLI validate; inspect skipped/complete because static checks
do not prove runtime or visual parity. Compare against the React baseline:

- form input, external value updates, validation, submit, reset and cancel;
- disabled/readonly controls, clear actions and focus;
- menu identity, expansion and navigation;
- date ranges, formatting and empty values;
- nested popups, outside click, Escape and placement;
- table pagination/selection/loading and light/dark appearance.

State which flows were actually executed and which still need manual checks.

