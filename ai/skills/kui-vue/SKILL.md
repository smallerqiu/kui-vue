---
name: kui-vue
description: Build Vue 3 interfaces with Kui Vue components and APIs. Use when creating, editing, reviewing, or troubleshooting applications that depend on kui-vue.
---

# Kui Vue

## Read installed-version resources

Run `pnpm exec kui-vue-ai paths` to locate the installed Skill and metadata.
`kui-vue/metadata` is a package export, not a directory. It resolves with
`node -p "require.resolve('kui-vue/metadata')"`. The physical fallback is
`node_modules/kui-vue/ai/kui-components.json`.

Without MCP, query `pnpm exec kui-vue-ai api Input --section props` and
`api Input --section behavior`. Use `search`, `examples`, and `example`
to fetch only relevant content; run `help` for exact arguments. Older releases
may only support init: use the metadata file or MCP rather than inventing commands.
Read [references/components.md](references/components.md) for resource boundaries;
read [references/mcp.md](references/mcp.md) only when configuring or using MCP.

## Contracts that change implementation

- Import from `kui-vue`, icons from `kui-icons`, and `kui-vue/style/index.css` once.
- Button.icon takes IconType[] data (for example Search), not JSX, h(Icon), a VNode
  or an icon-name string. Input prefix/suffix are renderable content, unlike icon.
- Use Vue 3 and the component's documented v-model argument. Prefer named slots
  for complex prefix/suffix content in .vue files.
- FormItem prop binds its field through Form; check before adding a second binding.
- Utilities and type-only exports are not all listed in component metadata.
  Check installed declarations before concluding an export is missing.

## Migration and verification

For React → Vue migration, read [references/react-to-vue.md](references/react-to-vue.md).
The CLI exposes it with `migration react-to-vue`; use `migration vue-to-react`
for the other direction. Follow only the guide matching the requested target.

For Vue → React migration, read [references/vue-to-react.md](references/vue-to-react.md)
before choosing target APIs. Query both installed versions. Preserve business
behavior as well as layout; do not treat a successful typecheck as parity.

Run `pnpm exec kui-vue-ai validate <file>`, then application typecheck, lint and
relevant interaction tests. Inspect complete/skipped limitations. This validator
is partial and does not execute expressions. Templates are local mocks, not
production backends; adapt them only within the user's task.
