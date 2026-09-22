# Migrating from react-kui

This guide covers component-library migration from **react-kui** to **kui-vue**, using the APIs in **react-kui 3.x / kui-vue 6.x**. It does not teach how to rewrite an application between React and Vue. Similar component names do not imply identical bindings, callbacks, or render functions.

## 1. Installation and styles

Install `kui-vue` in the target application. React requires React 19.2+; Vue requires Vue 3.5+. Check the version you actually install: package version numbers and release schedules are independent.

```bash
pnpm add kui-vue
```

Use `react-kui/style.css` in React or `kui-vue/style/index.css` in Vue, once at the application entry. React uses named component imports; Vue supports named imports in `<script setup>` or global registration with `app.use(kui)`. React has no global registration step; import `KImage` for its image component.

Both libraries use `.k-*` classes and `--kui-*` variables. Isolate page entries or CSS when migrating incrementally instead of loading both complete stylesheets on the same page. Remove the old library only after its consumers have been migrated. See [Quick Start](/guide/quick-started-en).

## 2. Binding reference

| Purpose              | react-kui                                      | kui-vue                                        |
| -------------------- | ---------------------------------------------- | ---------------------------------------------- |
| Input / Select value | `value` + `onChange`                           | `v-model` (`modelValue` + `update:modelValue`) |
| Switch               | `checked` + `onChange(value)`                  | `v-model` or `v-model:checked`                 |
| Checkbox             | `checked` + `onChange(e)`, read `e.checked`    | `v-model`; `@change` receives an object        |
| Modal                | `open` + `onOpenChange`                        | `v-model`                                      |
| Upload               | `fileList` + `onChange`                        | `v-model:fileList`                             |
| Page                 | `page`, `pageSize`, `onChange(page, pageSize)` | `v-model:page`, `v-model:pageSize`             |
| Read only            | `readOnly`                                     | `readonly`                                     |
| CSS                  | `className`, style object                      | `class`, style object or string                |
| Custom content       | ReactNode props, children, render functions    | slots, VNodes, render functions                |

## 3. Input and selection events

Source example, followed by its target equivalent:

```tsx
import { useState } from "react";
import { Input, Checkbox, Switch } from "react-kui";

export default function Settings() {
  const [name, setName] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <Input value={name} onChange={setName} />
      <Checkbox checked={agreed} onChange={(e) => setAgreed(e.checked)} />
      <Switch checked={enabled} onChange={(value) => setEnabled(value === true)} />
    </>
  );
}
```

```vue
<script setup lang="ts">
import { ref } from "vue";
import { Input, Checkbox, Switch } from "kui-vue";

const name = ref("");
const agreed = ref(false);
const enabled = ref(false);
</script>

<template>
  <Input v-model="name" />
  <Checkbox v-model="agreed" />
  <Switch v-model="enabled" />
</template>
```

Input change receives a value, not a DOM event. Checkbox change receives an object; Switch change receives a value. With `valueType="number"` or `"string"`, compare against `1` or `"1"` explicitly rather than applying `Boolean("0")`.

React state props such as `value`, `checked`, and `open` initialize internal state, allow local interaction, and synchronize external changes. Store business state and handle update callbacks when coordinating components.

Vue `v-model` is not interchangeable with `:value`. Use the declared model name, especially for Upload and Page. Keep numeric and string option values distinct; use `:value="1"` for numeric values in Vue templates.

## 4. Form models and validation

Keep the Form / FormItem structure, `prop`, rules, and label layout where applicable. Both libraries connect supported controls inside a FormItem with `prop` to the form model:

```tsx
import { useState } from "react";
import { Button, Form, FormItem, Input } from "react-kui";

export default function Profile() {
  const [model, setModel] = useState<Record<string, unknown>>({ name: "" });
  return (
    <Form
      model={model}
      onChange={setModel}
      onSubmit={({ valid }) => {
        if (valid) console.log(model);
      }}
    >
      <FormItem prop="name" label="Name" rules={[{ required: true, message: "Required" }]}>
        <Input />
      </FormItem>
      <Button htmlType="submit">Submit</Button>
    </Form>
  );
}
```

```vue
<script setup lang="ts">
import { reactive } from "vue";
import { Button, Form, FormItem, Input } from "kui-vue";

const model = reactive({ name: "" });
function submit({ valid }: { valid: boolean }) {
  if (valid) console.log(model);
}
</script>

<template>
  <Form :model="model" @submit="submit">
    <FormItem prop="name" label="Name" :rules="[{ required: true, message: 'Required' }]">
      <Input />
    </FormItem>
    <Button html-type="submit">Submit</Button>
  </Form>
</template>
```

React returns an immutably updated model through `onChange`; Vue updates fields in the supplied reactive model. Avoid a second independent state source on the Input.

Submit receives `{ valid }`, not a native event or the entire model. Read the model and call your business API after validation. These examples only log data. Use Button `htmlType="submit"` / `html-type="submit"`; its visual `type` is unrelated.

`validate()` resolves to `{ valid: boolean }`. `reset()` clears fields and validation rather than restoring an editing record; keep a separate initial copy if needed. Read imperative refs through React `.current` or Vue `.value`, and import ref types from the target library instead of reusing FormContext across libraries.

Rules default to change validation. Use `trigger: []` for submit-only rules, then validate through submission or `validate()`. A nonempty Upload list does not prove upload completion.

## 5. Modal, Upload, and pagination

Here `open` is application state and React `setOpen` is its setter:

```tsx
<Modal open={open} onOpenChange={setOpen} title="Confirm" onOk={() => setOpen(false)}>
  Content
</Modal>
```

```vue
<Modal v-model="open" title="Confirm" @ok="open = false">
  Content
</Modal>
```

Close after business operations succeed. Cancellation callbacks do not replace synchronization for every close path.

Upload events contain `{ file, fileList }`. React uses `fileList={files} onChange={({ fileList }) => setFiles(fileList)}`; Vue uses `v-model:fileList="files"` and optional `@change` business handlers. Review remove, sort, and upload-status events too. Preserve endpoint, headers, authentication, and response-to-URL mapping. Form validation does not submit business data, but Upload may already have sent a request via `action`.

In React, update both page and pageSize from `onChange(page, pageSize)`; in Vue, bind both named models. Fetch server data using the new callback values rather than stale application state.

## 6. Slots and Table rendering

React Input `prefix={<span>$</span>}` corresponds to Vue `<template #prefix><span>$</span></template>`. Check each component's available props and slots; arbitrary named slots are not automatically supported as React props.

Table render signatures differ:

- React: `render(value, record, rowIndex, column)` returns ReactNode.
- Vue: `render(h, record, colIndex, rowIndex, column)` returns VNodeChild.

```tsx
const columns = [
  {
    title: "Name",
    key: "name",
    render: (value: unknown) => <strong>{String(value ?? "")}</strong>,
  },
];
```

```ts
import type { Column } from "kui-vue";

const columns: Column[] = [
  {
    title: "Name",
    key: "name",
    render: (h, record) => h("strong", String(record.name ?? "")),
  },
];
```

Keep compatible static column keys, titles, and widths, but rewrite render callbacks and verify sorting, spans, row selection, and tree rendering against target types. React elements and Vue VNodes cannot be exchanged.

## 7. Configuration, locale, and overlays

Map ConfigProvider `size`, `shape`, `theme`, `locale`, and `getPopupContainer` to the target library. Explicit component props override inherited settings. `theme="outline"` selects a control appearance; use `theme-mode="dark"` for dark mode, not `theme="dark"`.

Change locale imports from `react-kui/locale/zh-CN` to `kui-vue/locale/zh-CN`, and load the relevant dayjs locale. Review CSS variables and DOM-dependent overrides. Scoped styles and CSS Modules do not automatically reach all portaled overlays; check popup containers and local themes.

Imperative message/modal content must use target-framework nodes. Do not assume independently mounted overlays inherit the page's Provider.

## 8. Migration checklist

1. Configure styles, locale, and appearance; migrate basic controls first.
2. Reconnect form models, callback payloads, validation, and refs, then complex components.
3. Check initial data, clearing, reset, async validation, disabled/read-only behavior, date formats, ranges, and time zones.
4. Check pagination, upload success/failure/removal/sorting, every modal close path, and menu selection/navigation.
5. Check keyboard interaction, popup flipping, local/dark themes, and update visual tests. Wire routing callbacks to the target application's router.
6. Remove unused dependencies and styles. Follow the respective Next.js / Nuxt integration guide for SSR and hydration boundaries.

See the target [Form](/components/form-en), [Upload](/components/upload-en), [Table](/components/table-en), and [ConfigProvider](/components/config-en) APIs for details.
