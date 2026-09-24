# Kui Vue AI integration

Icon prop contract: Button.icon takes IconType[] data imported from kui-icons: import { Search } from 'kui-icons'; use <Button :icon="Search" /> in Vue templates or <Button icon={Search} /> in TSX. Never pass h(Icon, ...), a VNode, a component function, or an icon-name string to icon. Custom rendered content belongs in the default slot. Input prefix/suffix slots are not the Button.icon API.

Each Kui Vue npm release includes version-matched component metadata, a JSON Schema, an Agent Skill, an MCP server, and evaluation cases. This lets AI clients query the installed public API instead of guessing props.

## Initialize a project

```bash
pnpm add kui-vue kui-icons
pnpm exec kui-vue-ai init
```

The command adds Kui Vue guidance to `AGENTS.md` and is safe to run repeatedly.

## MCP server

Add this server to any client that supports stdio MCP:

```json
{
  "mcpServers": {
    "kui-vue": {
      "command": "pnpm",
      "args": ["exec", "kui-vue-mcp"]
    }
  }
}
```

Configuration locations vary by client version, so add the command through the client's current MCP settings. The server exposes component search, exact API lookup, component recommendations, template usage validation, component resources, and reusable prompts.

## Client guidance

- Codex: run the initializer, install `node_modules/kui-vue/ai/skills/kui-vue` as a Skill, and add the server in MCP settings. See the [official Codex documentation](https://developers.openai.com/codex/).
- Claude Code and Cursor: run the initializer and add the stdio command in their MCP settings.
- GitHub Copilot: run the initializer so agents can read `AGENTS.md`; the Kui Vue section can also be copied to `.github/copilot-instructions.md`.

## Published resources

- Compact index: <https://k-ui.cn/llms.txt>
- Complete documentation: <https://k-ui.cn/llms-full.txt>
- Metadata: <https://k-ui.cn/kui-components.json>
- JSON Schema: <https://k-ui.cn/schema/kui-components.schema.json>
- Package exports: `kui-vue/metadata`, `kui-vue/metadata/schema`, and `kui-vue/skill`

## Maintainer checks

```bash
pnpm generate:ai
pnpm check:ai-assets
pnpm check:ai-evals
```

The asset check detects stale generated files. The eval check compiles representative Vue SFC cases and verifies component coverage.

## On-demand queries and validation

Use metadata shipped with the installed package. `get_component_api({ name, section? })` returns API and behavior contracts without example source. Sections: `all`, `props`, `events`, `slots`, `models`, `behavior`. Search and example lists accept `offset` and `limit` (default 10, maximum 20). Use `list_component_examples({ name })`, then `get_component_example({ name, id })` for a single example.

Metadata includes extracted literal enums, explicit required flags, source default expressions, model/update-event mappings, and behavior contracts. An absent default expression is not proof of a particular runtime default. Contracts currently focus on Form, FormItem, Button, Modal, Table, Page, Menu, ConfigProvider, Select, Switch, Input and Space.

`validate_kui_usage` checks known prop names, static enum/boolean/numeric values, event names, model update events, explicit required props and named slots with complete contracts. Native attributes/events are allowed. Dynamic expressions, spread bindings, custom components, import aliases and incomplete slot contracts require application-level checking. `valid` means no static error was found; `complete: false`, `skipped` and `nextStep` explain the limits. Always run application type checks and interaction tests.

## Runnable business templates

Use `list_templates({ query? })` and `get_template({ id })`. IDs: `form`, `table`, `modal-editor`. Templates include local imports, reactive state, validation, loading/error handling, pagination or isolated editing drafts. They are distributed in `ai/templates/`. Import `kui-vue/style/index.css` once in the app entry and save a template as `App.vue`. Async requests are local mocks; replace them with your backend calls.

Run `pnpm check:ai-templates` for template type checks and interaction tests.

## Memory-conscious builds

`pnpm build` still produces all release artifacts. Each build stage runs in a separate sequential Node process with a default 2048 MB old-space limit. Terser uses one worker; Less runs on the main thread. Type generation no longer runs inside the ESM bundler.

For development, use `pnpm dev`. `pnpm build:local` generates CSS, ESM, declarations and editor metadata only; it is not a release build. `pnpm build:es` now emits JavaScript only; use `pnpm build:types` for declarations. Individual CSS/CJS/UMD stages remain available. Set `KUI_BUILD_HEAP_MB=2560` only when a stage needs a larger heap. A heap limit is not a total process/system memory limit; avoid simultaneous builds and large test runs on 8 GB machines.
