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

Install `kui-vue` and its dependencies in the consuming project first.
Confirm that the installed version includes `node_modules/kui-vue/ai/mcp.mjs`.
Do not copy the script alone: it needs the package's metadata and dependencies.

Run `node -p "process.execPath"` in the project terminal to obtain the Node
executable's absolute path. For clients using the mcpServers JSON format:

```json
{
  "mcpServers": {
    "kui-vue": {
      "command": "/absolute/path/to/node",
      "args": ["/absolute/path/to/project/node_modules/kui-vue/ai/mcp.mjs"]
    }
  }
}
```

Replace both placeholders with real absolute paths. A path containing spaces
remains one string argument. On Windows use forward slashes or escaped
backslashes in JSON, for example `C:/Program Files/nodejs/node.exe`.
Other clients may use another configuration format; enter the same command and
args through their MCP settings instead of copying this JSON unchanged.

This configuration does not depend on the client's working directory or pnpm.
Use `"command": "node"` only if the client can find Node.
The alternative command `pnpm` with args `["exec", "kui-vue-mcp"]` requires
pnpm on the client's PATH and an explicit working directory pointing to the
consuming project with the package installed.

### Verify and troubleshoot

1. Launch the absolute Node/script paths in a terminal first. This is a stdio
   service, not a web server. It normally waits silently for input; press Ctrl+C
   to stop. Silence alone does not prove a successful MCP connection.
2. Save the client configuration and reconnect. Check successful initialization
   and a tool list containing search_components and get_component_api.
3. Call `get_component_api({ "name": "Button" })` and confirm an API response.
   This tests connectivity and resources, not all component interactions.

If Node/pnpm cannot be found, check the executable path and client environment.
If the script cannot be found, check the project path, installation and package
version. Missing dependencies/metadata require restoring the complete package
installation with the project's package manager, not copying individual files.
If terminal startup works but the client fails, inspect client startup and
handshake logs. Update configuration after moving the project or Node installation.

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

## Installed resources and command-line queries (without MCP)

`kui-vue/metadata` and `kui-vue/skill` are package export specifiers, not
directories. Resolve them with `node -p "require.resolve('kui-vue/metadata')"`
or run `pnpm exec kui-vue-ai paths`. Read the Skill at the returned path before
implementing unfamiliar APIs.

```bash
pnpm exec kui-vue-ai paths
pnpm exec kui-vue-ai search Input --limit 5
pnpm exec kui-vue-ai api Input --section props
pnpm exec kui-vue-ai api Input --section behavior
pnpm exec kui-vue-ai examples Input
pnpm exec kui-vue-ai templates
pnpm exec kui-vue-ai migration vue-to-react
pnpm exec kui-vue-ai migration react-to-vue
pnpm exec kui-vue-ai validate src/App.vue
```

Use `example Input <id>` with an ID from examples; use `template <id>` to read
one business template. `query <tool-name> '<JSON>'` uses the same engine and
argument validation as MCP. Results are JSON; invalid usage and errors exit
nonzero. Source can be piped into `validate -`. Validation remains partial.

Run `init` again after upgrading. It refreshes a marked managed block and
preserves text outside it. For pre-marker guidance, only exact known generated
lines are migrated; customized wording remains for review. Put project-specific
rules outside managed markers. Malformed markers cause an error without writes.

Metadata describes components, not every package export. For utilities such as
theme, inspect the installed declarations too. Before migrating, read
`migration vue-to-react` or `migration react-to-vue`, then compare callbacks, state synchronization,
slots/render props and interaction behavior—not just typecheck results.
