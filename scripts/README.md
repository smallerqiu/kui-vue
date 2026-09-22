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
