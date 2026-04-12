<template>
  <div class="demo-container">
    <Row :gutter="10">
      <Col :span="18">
        <div
          class="scroll-content"
          style="height: 300px; overflow-y: scroll; border: 1px solid var(--kui-color-border);"
        >
          <div id="item-1" style="height: 400px; background: #e6f7ff3c;">content 1</div>
          <div id="item-2" style="height: 400px; background: #fff7e640;">content 2</div>
        </div>
      </Col>
      <Col :span="6">
        <Anchor container=".scroll-content">
          <AnchorLink href="#item-1" title="part 1" />
          <AnchorLink href="#item-2" title="part 2" />
        </Anchor>
      </Col>
    </Row>
  </div>
</template>