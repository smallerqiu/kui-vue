<template>
  <div class="typography-ellipsis-demo">
    <TypographyTitle tag="h4">Single line</TypographyTitle>
    <TypographyParagraph ellipsis>
      Kui Vue provides a collection of practical components that help teams build consistent,
      accessible interfaces with less repetitive work.
    </TypographyParagraph>

    <TypographyTitle tag="h4">Two lines</TypographyTitle>
    <TypographyParagraph :ellipsis="2">
      Good typography establishes hierarchy and rhythm. Titles introduce a topic, paragraphs make
      longer ideas comfortable to read, and inline styles draw attention only where it is needed.
      When space is limited, multiline ellipsis keeps the layout compact without changing the
      original content.
    </TypographyParagraph>

    <TypographyTitle tag="h4">Expandable</TypographyTitle>
    <TypographyParagraph
      :ellipsis="{
        rows: 2,
        expandable: true,
        expandText: 'More',
        collapseText: 'Collapse',
        tooltip: true,
      }"
    >
      An expandable paragraph keeps the initial layout compact while still allowing readers to see
      the complete content. The tooltip displays the full text while the paragraph is collapsed, and
      the action switches between the custom More and Collapse labels.
    </TypographyParagraph>
  </div>
</template>

<style scoped>
.typography-ellipsis-demo {
  max-width: 520px;
}
</style>
