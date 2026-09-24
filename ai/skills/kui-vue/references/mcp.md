# Kui Vue MCP

Transport: stdio. Use an absolute Node executable path and the absolute installed
`node_modules/kui-vue/ai/mcp.mjs` path as its argument; this avoids depending
on the client's working directory. Keep the full package and dependencies installed.
Get the executable path with `node -p "process.execPath"`.

For configuration examples, prerequisites and troubleshooting, read
[AI.en-US.md](../../../../AI.en-US.md#mcp-server).
The alternative `pnpm exec kui-vue-mcp` requires pnpm on the client's PATH
and an explicit working directory set to the consuming project.
Verify initialization, tools/list, and a get_component_api query after connecting.
Silent terminal startup only means the stdio process is waiting for input.

- `search_components({ query, offset?, limit? })`: paginated component discovery (default 10, max 20).
- `recommend_components({ requirement })`: suggested component names.
- `get_component_api({ name, section? })`: props/events/slots/models/behavior or all; excludes example source.
- `list_component_examples({ name, offset?, limit? })`: titles and IDs.
- `get_component_example({ name, id })`: one complete example.
- `list_templates({ query? })`: business template summaries.
- `get_template({ id })`: runnable form, table or modal-editor SFC and setup instructions.
- `validate_kui_usage({ source })`: static prop/value/event/model/known-slot checks. Read skipped checks; valid does not guarantee type or runtime correctness.

Component resources remain available at `kui-vue://components/{Name}` (full metadata). Prefer tools for smaller responses. Prompts build_form/build_table/build_modal_editor include the corresponding complete template. Templates use local mock requests, not a production backend.
