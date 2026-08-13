import { describe, expect, it } from "vitest";
import { toJavaScriptSfc } from "../plugins/markdown";

describe("markdown demo code", () => {
  it("creates a JavaScript SFC view from a TypeScript demo", () => {
    const source = `<template><Button>{{ count }}</Button></template>
<script setup lang="ts">
interface Props { initial?: number }
const props = defineProps<Props>()
const count: number = props.initial ?? 0
</script>`;

    const result = toJavaScriptSfc(source);

    expect(result).toContain("<script setup>");
    expect(result).toContain("const props = defineProps()");
    expect(result).toContain("const count = props.initial ?? 0");
    expect(result).not.toContain("lang=\"ts\"");
    expect(result).not.toContain("interface Props");
    expect(result).not.toContain(": number");
  });
});
