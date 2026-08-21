# Kui Vue AI integration

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

The asset check detects stale generated files. The eval check compiles 20 representative Vue SFC cases and verifies component coverage.
