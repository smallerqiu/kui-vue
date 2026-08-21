<template>
  <div class="typography-interactive-demo">
    <div>
      <TypographyText type="secondary">Copy</TypographyText>
      <TypographyParagraph
        :copyable="{ tooltip: 'Copy command', copiedTooltip: 'Copied' }"
        @copy="copiedText = $event"
      >
        pnpm add kui-vue
      </TypographyParagraph>
      <TypographyText v-if="copiedText" type="success">Copied: {{ copiedText }}</TypographyText>
    </div>

    <div>
      <TypographyText type="secondary">Edit</TypographyText>
      <TypographyParagraph
        v-model="text"
        :editable="{ tooltip: 'Edit text' }"
        @change="changedText = $event"
      />
      <TypographyText type="secondary">Current value: {{ changedText || text }}</TypographyText>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const text = ref("Click the edit icon to update this sentence.");
const changedText = ref("");
const copiedText = ref("");
</script>

<style scoped>
.typography-interactive-demo {
  display: grid;
  gap: 24px;
}
</style>
