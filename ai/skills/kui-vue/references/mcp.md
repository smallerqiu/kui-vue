# Kui Vue MCP

Start with `pnpm exec kui-vue-mcp` in the consuming project.

- `search_components({ query, offset?, limit? })`: paginated component discovery (default 10, max 20).
- `recommend_components({ requirement })`: suggested component names.
- `get_component_api({ name, section? })`: props/events/slots/models/behavior or all; excludes example source.
- `list_component_examples({ name, offset?, limit? })`: titles and IDs.
- `get_component_example({ name, id })`: one complete example.
- `list_templates({ query? })`: business template summaries.
- `get_template({ id })`: runnable form, table or modal-editor SFC and setup instructions.
- `validate_kui_usage({ source })`: static prop/value/event/model/known-slot checks. Read skipped checks; valid does not guarantee type or runtime correctness.

Component resources remain available at `kui-vue://components/{Name}` (full metadata). Prefer tools for smaller responses. Prompts build_form/build_table/build_modal_editor include the corresponding complete template. Templates use local mock requests, not a production backend.
