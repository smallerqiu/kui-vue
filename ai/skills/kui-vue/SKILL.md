---
name: kui-vue
description: Build Vue 3 interfaces with Kui Vue components and APIs. Use when creating, editing, reviewing, or troubleshooting applications that depend on kui-vue.
---

# Kui Vue

## Instructions

1. Confirm the project uses Vue 3 and install `kui-vue` plus `kui-icons` when missing.
2. Import `kui-vue/style/index.css` once at the application entry.
3. Read `references/components.md` or `kui-vue/metadata` before choosing props, events, and slots. Do not invent APIs.
4. Prefer existing Kui Vue controls, layout primitives, popup behavior, theme, size, and shape conventions over custom replacements.
5. Use TypeScript types exported by `kui-vue`; avoid `any` and native-element substitutions when a library component exists.
6. After changes, run the consuming project's typecheck, lint, and relevant tests.
7. When MCP is available, query `get_component_api` for exact APIs and behavior/model contracts. Fetch only the needed example via `list_component_examples` and `get_component_example`; use `get_template` for common business flows.
8. Run `validate_kui_usage` before finishing, read its `skipped` checks, and still run application typecheck and relevant tests. Static `valid` does not mean the code is fully verified.

## Common patterns

- Use `v-model` for controlled values and the documented update/change events.
- Use `theme`, `size`, and `shape` consistently across related controls.
- Use `ConfigProvider` for global configuration.
- For large Select, Table, Tree, or TreeSelect data sets, consult the virtual scrolling examples.
- For MCP resources, prompts, and client setup, read `references/mcp.md`.
