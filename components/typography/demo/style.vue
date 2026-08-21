<template>
  <div class="typography-style-demo">
    <TypographyText strong>Strong</TypographyText>
    <TypographyText italic>Italic</TypographyText>
    <TypographyText underline>Underline</TypographyText>
    <TypographyText delete>Deleted</TypographyText>
    <TypographyText mark>Marked</TypographyText>
    <TypographyText code>pnpm add kui-vue</TypographyText>
    <TypographyText strong italic underline>Combined styles</TypographyText>
  </div>
</template>

<style scoped>
.typography-style-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
}
</style>
