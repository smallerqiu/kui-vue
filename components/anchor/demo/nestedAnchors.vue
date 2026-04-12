<template>
  <Row style="display: flex;max-height:500px;overflow:auto;" class="anchor-d2">
    <Col style="flex: 1; padding: 40px;">
      <h1 id="api">API</h1>
      <div style="height: 400px"></div>
      
      <h2 id="props">Props</h2>
      <div style="height: 300px"></div>
      
      <h3 id="anchor-props">Anchor Props</h3>
      <div style="height: 300px"></div>
      
      <h2 id="events">Events</h2>
      <div style="height: 600px"></div>
    </Col>
    
    <Col style="width: 200px; padding-top: 40px;">
      <Anchor container=".anchor-d2">
        <AnchorLink href="#api" title="API">
          <AnchorLink href="#props" title="Props">
            <AnchorLink href="#anchor-props" title="Anchor Props" />
          </AnchorLink>
          <AnchorLink href="#events" title="Events" />
        </AnchorLink>
      </Anchor>
    </Col>
  </Row>
</template>