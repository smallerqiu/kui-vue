# Contributing

## Component file organization

- Keep the component, its runtime props/emits declarations, and its `XxxProps` type together.
- Put reusable events, options, status unions, and other public data models in `types.ts`.
- Put provide/inject interfaces and typed `InjectionKey` values in `context.ts`.
- Put reusable stateful Vue logic in a `use-*.ts` composable and stateless helpers in `utils.ts`.
- Keep types and constants local when they are only used by one component implementation.
- Re-export public types from the component entry file and from `components/components.ts`.
- Preserve existing public export names when moving a type; use an alias when a clearer new name is introduced.

## Required checks

Run the following before submitting changes:

```sh
pnpm lint
pnpm typecheck
pnpm typecheck:exports
pnpm test
pnpm build
pnpm package:check
```

Or run all required checks with `pnpm verify`.
