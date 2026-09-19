# Quick Start

The npm package for KUI Vue is `kui-vue`. The current version requires **Vue 3.5+** and **Node.js 20.19+**. You can register components globally or import them locally in a single-file component's `<script setup>`. TypeScript declarations are included.

## 1. Create a project and install

For an existing Vue 3.5+ project, install the library directly. For a new project, use the Vite Vue + TypeScript template:

```bash
pnpm create vite my-app --template vue-ts
cd my-app
pnpm install
pnpm add kui-vue
```

For an existing npm project:

```bash
npm install kui-vue
```

Add Vue Router and Pinia if your application needs them; neither is required to use the library.

## 2. Choose how to import components

### Option one: global registration

Register the library and load the full stylesheet once in `src/main.ts`:

```ts
import { createApp } from "vue";
import App from "./App.vue";
import kui from "kui-vue";
import "kui-vue/style/index.css";

createApp(App).use(kui).mount("#app");
```

`#app` refers to `<div id="app"></div>` in `index.html`. Registered components are available in templates without individual imports. Your application's override styles can follow the library stylesheet.

Global registration provides names such as `Button` and `KButton`. Single-file component templates also accept the corresponding kebab-case name, `<k-button>`. Switch and Image similarly have `KSwitch` and `KImage` aliases.

[Global component names](./buttons.vue?show=vertical)

- After global registration, use the original component names or their K-prefixed aliases.

For global component type hints in a TypeScript project, add this reference to `src/env.d.ts` and ensure that your tsconfig includes the file:

```ts
/// <reference types="kui-vue/global" />
```

### Option two: local imports in a single-file component

For local imports, the entry point only needs to load the stylesheet and mount the application:

```ts
import { createApp } from "vue";
import App from "./App.vue";
import "kui-vue/style/index.css";

createApp(App).mount("#app");
```

Save the following example as `src/App.vue`. Components imported in `<script setup>` are available directly in the template. Bind events with directives such as `@click`:

[Local imports and click events](./local.vue?show=vertical)

- Keep state in a ref and update the counter on click.

Compatible bundlers can tree-shake code from named imports. The stylesheet above still contains all library styles. Choose either import approach.

Start the development server:

```bash
pnpm dev
```

If you use icons, declare the icon dependency in your application:

```bash
pnpm add kui-icons
```

```vue
<script setup lang="ts">
import { Plus } from "kui-icons";
import { Button } from "kui-vue";
</script>

<template>
  <Button :icon="Plus">Add</Button>
</template>
```

## 3. Use ref and v-model

Use Vue's reactive state and `v-model` to synchronize component values. Both Input and Switch in this example use the default `v-model`:

[Input values and switch state](./value.vue?show=vertical)

- `v-model="name"` corresponds to `:model-value="name"` and `@update:model-value`.
- `:disabled="!enabled"` passes a boolean expression. `disabled="false"` is a string and should not replace a boolean binding.
- Listen to component events such as `@click` or `@change` for additional actions. Check the component API for event arguments.
- Some components use named bindings, such as Menu's `v-model:openKeys`. Follow the individual component's binding API.

## 4. Bind and validate fields with Form

Form accepts a reactive `model` object. Each FormItem's `prop` identifies a field path. Supported controls receive value and change bindings from FormItem, so you do not need to also write `v-model="model.name"` on the input.

[Field binding, validation, and disabled state](./form.vue?show=vertical)

- Submit an empty name to see validation, or toggle the switch to disable the form.

Typing updates the form object created with `reactive`. The `rules` object defines validation by field name. A button with `html-type="submit"` triggers validation, and `@submit` receives `{ valid }`. `Form disabled` is inherited by controls that support form state inheritance; explicit control props take priority. See [Form](/components/form-en) for more details.

## 5. Configure a component tree with ConfigProvider

ConfigProvider supplies language, size, and appearance settings to descendant components. Providers can be nested, and explicit component props take priority. It works with either global registration or local imports:

```vue
<script setup lang="ts">
import { Button, ConfigProvider, Space } from "kui-vue";
import en from "kui-vue/locale/en";
</script>

<template>
  <ConfigProvider :locale="en" size="small" theme="outline">
    <Space>
      <Button>Default size: small</Button>
      <Button size="large">Override: large</Button>
    </Space>
  </ConfigProvider>
</template>
```

The `theme` values `fill`, `outline`, and `plain` control component appearance. See [Dark mode](/guide/dark-mode-en) for light and dark page colors. Locale configuration affects built-in component text; see [Internationalization](/guide/language-en) for more languages and date formatting.

## Next steps

- [Components](/guide/components-en): find components for your application.
- [Form](/components/form-en): explore validation, resets, and nested fields.
- [ConfigProvider](/components/config-en): configure components across your application.
