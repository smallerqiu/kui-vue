<template>
  <Layout class="anchor-d1">
    <Row :gutter="24">
      <Col :span="18">
        <section id="part-1" style="margin-bottom: 20px; ">
          <h2>Part 1：Basic</h2>
          <p>Here is the basic content...</p>
        </section>
        <section id="part-2" style=" margin-bottom: 20px; ">
          <h2>Part 2：Guide</h2>
          <p>Here is the advanced content...</p>
        </section>
        <section id="part-3">
          <h2>Part 3：FQA</h2>
          <p>Here is the FAQ content...</p>
        </section>
      </Col>
      <Col :span="6">
        <Anchor :offsetTop="20" container=".anchor-d1">
          <AnchorLink href="#part-1" title="Basic" />
          <AnchorLink href="#part-2" title="Guide" />
          <AnchorLink href="#part-3" title="FAQ" />
        </Anchor>
      </Col>
    </Row>
  </Layout>
</template>
<style scoped>
.anchor-d1 {
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