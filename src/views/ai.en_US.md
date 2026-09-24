# AI-assisted development

Every Kui Vue npm release includes version-matched component metadata, a JSON Schema, an Agent Skill, and an MCP server. AI coding tools can query the real public API instead of guessing props.

## Initialize a project

```bash
pnpm add kui-vue kui-icons
pnpm exec kui-vue-ai init
```

The initializer adds Kui Vue guidance to `AGENTS.md` and is safe to run repeatedly.

## Connect the MCP server

Confirm that the project has a version of `kui-vue` that includes the MCP server. Find the absolute path to Node:

```bash
node -p "process.execPath"
```

For stdio MCP clients that support the `mcpServers` JSON format:

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

Replace `command` with the Node path returned above and the script argument with its absolute path in your project. Keep paths containing spaces as single strings. Windows paths can use forward slashes, such as `C:/Program Files/nodejs/node.exe`. This configuration does not depend on the client's working directory or require pnpm. If the client can find Node, `command` can also be `node`.

Use `"command": "pnpm"` with `"args": ["exec", "kui-vue-mcp"]` only when the client can find Node and pnpm and its working directory is explicitly set to the application directory where the package is installed.

Configuration locations and formats vary by client. For clients without `mcpServers` support, enter the same command and arguments in their MCP settings. Reconnect after saving and confirm that `search_components` and `get_component_api` appear in the tool list. The server communicates over standard input/output and does not open a web page; waiting for input when launched in a terminal is normal.

The server provides:

- Component search and exact API lookup
- Component recommendations for UI requirements
- Unknown prop validation for Vue templates
- `kui-vue://components/{Name}` component resources
- Reusable prompts for forms, data tables, and modal editors

## Agent Skill

The npm package publishes the Skill at:

```text
node_modules/kui-vue/ai/skills/kui-vue
```

Codex and other Skill-aware tools can install this directory. Other tools can use the same guidance through `AGENTS.md` and MCP.

## Published resources

- [Compact AI index](/llms.txt)
- [Complete AI documentation](/llms-full.txt)
- [Component metadata](/kui-components.json)
- [Metadata JSON Schema](/schema/kui-components.schema.json)

These files are generated from component source and documentation. CI rejects stale generated assets.

## Recommended workflow

1. Use `recommend_components` to choose components.
2. Query exact props, events, and examples with `get_component_api`.
3. Generate Vue 3 TypeScript code.
4. Check unknown props with `validate_kui_usage`.
5. Run the project's typecheck, lint, and tests.

## AI evaluations

`pnpm check:ai-evals` runs 26 reference scenarios through component/API checks and strict TypeScript validation (vue-tsc for Vue). It is included in repository verification. Existing AI template tests cover form, table and modal interactions; static success alone does not imply correct behavior.

Model evaluation is opt-in and supports your own model adapter:

```bash
pnpm eval:ai --generator /absolute/path/to/model-adapter --model your-model-version
```

The trusted adapter receives JSON on stdin (prompt, Skill instructions and relevant component APIs, without reference answers) and returns complete source on stdout. It handles model credentials itself. CI never calls a paid model. Generated source is parsed and typechecked, not executed.

You can also export prompts and score saved responses:

```bash
pnpm eval:ai --export-prompts .ai-eval-results/prompts.json
pnpm eval:ai --responses /path/to/responses.json --model your-model-version
```

Responses map case names to source strings. Use `--case primary-action` to select one case and `--out report.json` to preserve separate runs. Reports include model/version, suite/context hashes, per-case errors, skipped checks, source and static pass rate. They do not claim semantic or runtime correctness. See `ai/evals/README.md` in the repository for the adapter protocol and limitations.
