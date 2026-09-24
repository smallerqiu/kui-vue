# AI metadata and migration audit — 2026-09-24

## Scope and evidence

Both installed-resource entrypoints and the complete component metadata inventories
were examined. This is a full structural scan plus a focused semantic review of
migration-critical APIs, **not** a claim that every description or interaction of
all 126 components has been manually verified.

| Inventory | kui-vue | react-kui |
| --- | ---: | ---: |
| Components | 126 | 126 |
| Props | 1,195 | 1,400 |
| Events | 206 | 189 |
| Example references | 602 | 681 |
| Distinct source examples | 404 | 409 |
| Extracted default expressions | 382 | 271 |
| Empty descriptions | 0 | 0 |
| Generic generated descriptions | 0 | 0 |
| Components without behavioral rules | 110 | 107 |

Counts are a snapshot. Run `pnpm audit:ai-metadata --json` for current details.
Repeated examples are expected when subcomponents share a demo page; the large
JSON line count is not the count of unique examples.

## Checks now enforced

`check:ai-assets` runs source regeneration comparison followed by the audit.
The audit visits every recorded prop, event, model and example, checking:

- duplicate component/prop/event/example identifiers;
- parent/child references and both directions of their relationship;
- event signatures matching their corresponding props;
- Vue model props and update-event links;
- source-example existence and exact source text;
- real runtime exports for all advertised components;
- source-version/metadata-version consistency and identical package/web copies;
- repository-relative and package-manager-specific type-path leakage.
- blank bilingual descriptions and generic placeholder descriptions;
- description supplement keys matching real source-extracted component props.

The existing API coverage/type checks and the new audit serve different purposes.
The latter does not independently reimplement TypeScript prop extraction. Nonempty
descriptions do not prove their semantic accuracy.

## Confirmed issues fixed in this change

1. Export specifiers were presented without an executable resolution method.
   CLI paths now returns real resource paths and version; guides distinguish
   `package/metadata` from a physical metadata directory.
2. CLI previously only initialized instructions. It now exposes the same query
   engine as MCP, with pagination, section lookup, single-example/template reads,
   file/stdin validation, and nonzero error exits.
3. Re-running init previously ignored stale instructions. Managed blocks can now
   be refreshed; exact legacy generated lines are upgraded without deleting
   customized project notes. Malformed markers stop the write.
4. Shared documentation pages let the last same-named child prop override the
   parent description. Component-specific sections now take precedence over
   shared fallback rows; Select.value and Option.value are regression-tested.
5. Migration guidance lacked concrete binding/slot/payload distinctions.
   The new guide covers Input, Button, Dropdown, Modal, Popup, Menu, DatePicker,
   Checkbox/Switch, Form, Select, Image, Table and theme.
6. The reported absence of React theme.setThemeMode is not supported by repository
   evidence: both current source and the v3.1.0 source tag export it. The guide
   shows the native MouseEvent bridge and separates component appearance from
   global light/dark state.

## Description completion and reverse migration follow-up

- The previous 79 React blanks are now filled through source-checked bilingual
  ai/descriptions.json supplements, including children roles and internal-facing
  props. Types remain source-extracted. NoticePanel.closable is documented as
  currently ineffective, not incorrectly advertised as controlling the button.
- The previous 61 Vue placeholders are resolved: 56 model-update events now
  describe the source-linked value and exact v-model binding; five focus/blur/input
  and Option events have explicit bilingual supplements. Public update-event rows
  remain omitted; metadata explanations do not change public documentation coverage.
- Both migration directions now have independent guides, selected by CLI direction
  and linked from the Skill. The React-to-Vue guide distinguishes initialization
  from binding, vnode keys from itemKey, and default from named model bindings.
## Open findings — do not interpret these as passed semantic checks

- Empty behavior rules mean no dedicated contract has been written, not that the
  component has no behavioral constraints. This review added contracts only for
  source-checked migration-critical cases.
- Shared table fallbacks still exist for inherited/common props. The new precedence
  fixes confirmed parent/child collisions; ambiguous undocumented ownership still
  needs manual review rather than assuming all shared prose is correct.
- Default-expression coverage is partial. Missing defaultExpression does NOT mean
  an undefined runtime default; wrappers, inheritance and runtime calculation need
  additional extraction work. Vue public optionality and mode-specific overloads
  also need declaration-level review beyond a single flattened Props table.
- Component metadata omits utility APIs. React's source entry also exports loading,
  message, modal, notice, theme and getVirtualRange. Vue additionally has plugin/
  version exports. The guides now explicitly route these to installed declarations.
- Matching example source does not prove its runtime behavior. Static/type evals
  and template tests complement, but do not replace, visual comparison and
  end-to-end migration flows.

## Recommended next review order

Review internal API design, then default/overload extraction, then
shared descriptions and per-component behavior contracts. Validate a representative
Vue/React page pair (form, menu, date range and nested popup) before treating the
guide as evidence that an actual application migration is complete.
