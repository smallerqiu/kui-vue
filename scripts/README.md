# Repository scripts

Use Node.js 24 or later for repository development and build tooling, matching CI.
This tooling requirement is separate from the published library's runtime support.

Scripts use TypeScript with ES modules. Run them through the commands in
`package.json`, or use `node --experimental-strip-types scripts/<name>.ts`.
Type stripping executes the script without checking types; run
`pnpm typecheck:node` to check scripts and build configuration.

Keep Node-executed scripts compatible with type stripping: use erasable TypeScript
syntax and explicit `.ts` extensions for relative imports. Code inside generated
consumer fixtures may still use JavaScript or CommonJS to verify package compatibility.

## API documentation maintenance

The component source is authoritative for prop and callback types. Do not
independently edit the type cells of component API tables.

After changing public component types, run:

```sh
pnpm generate:api-docs
pnpm generate:ai
pnpm check:api-docs
pnpm check:ai-assets
```

The documentation and AI metadata generators share the same TypeScript
extraction pipeline. Chinese and English component API tables use those
extracted types; prose, examples, and runtime default explanations remain
manually maintained. Documentation omits outer `| undefined` union members for
readability; callback parameters, return types, nested types, and AI metadata
retain their complete types. Keep subcomponent tables under a heading containing
their exported component name (for example, `Option API`).

`check:api-docs` checks API coverage and runs `check:api-types`, which fails
if the source-derived type cells are stale. This is included in `pnpm verify`.
Slots, exposed methods, and standalone option/data-structure tables are not
component Props tables and are not rewritten by this generator.
