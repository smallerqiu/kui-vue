<template>
  <div class="typography-list">
    <TypographyText>Default text</TypographyText>
    <TypographyText type="secondary">Secondary text</TypographyText>
    <TypographyText type="success">Success text</TypographyText>
    <TypographyText type="warning">Warning text</TypographyText>
    <TypographyText type="danger">Danger text</TypographyText>
    <TypographyText disabled>Disabled text</TypographyText>
  </div>
</template>

<style scoped>
.typography-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}
</style>
