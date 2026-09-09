<template>
  <div class="anchor-d2">
    <div style="padding: 40px">
      <h1 id="api">API</h1>
      <div style="height: 400px"></div>

      <h2 id="props">Props</h2>
      <div style="height: 300px"></div>

      <h3 id="anchor-props">Anchor Props</h3>
      <div style="height: 300px"></div>

      <h2 id="events">Events</h2>
      <div style="height: 600px"></div>
    </div>

    <div style="padding-top: 40px">
      <Anchor :offsetTop="40" container=".anchor-d2">
        <AnchorLink href="#api" title="API">
          <AnchorLink href="#props" title="Props">
            <AnchorLink href="#anchor-props" title="Anchor Props" />
          </AnchorLink>
          <AnchorLink href="#events" title="Events" />
        </AnchorLink>
      </Anchor>
    </div>
  </div>
</template>

<style scoped>
.anchor-d2 {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 200px;
  max-height: 500px;
  overflow: auto;
}
</style>
