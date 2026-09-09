<template>
  <div class="anchor-d1">
    <div>
      <section id="part-1" style="margin-bottom: 20px">
        <h2>Part 1：Basic</h2>
        <p>Here is the basic content...</p>
      </section>
      <section id="part-2" style="margin-bottom: 20px">
        <h2>Part 2：Guide</h2>
        <p>Here is the advanced content...</p>
      </section>
      <section id="part-3">
        <h2>Part 3：FQA</h2>
        <p>Here is the FAQ content...</p>
      </section>
    </div>
    <div>
      <Anchor :offsetTop="20" container=".anchor-d1">
        <AnchorLink href="#part-1" title="Basic" />
        <AnchorLink href="#part-2" title="Guide" />
        <AnchorLink href="#part-3" title="FAQ" />
      </Anchor>
    </div>
  </div>
</template>
<style scoped>
.anchor-d1 {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 180px;
  gap: 24px;
  background: var(--kui-color-bg);
  padding: 24px;
  max-height: 500px;
  overflow: auto;
}
section {
  height: 500px;
  background: var(--kui-color-bg-container);
  padding: 20px;
}
</style>
