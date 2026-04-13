<template>
  <Space vertical block class="demo-grid">
    <code>start</code>
    <Row type="flex" justify="start" class="demo-back">
      <Col :span="4"><div>col-4</div></Col>
      <Col :span="4"><div>col-4</div></Col>
      <Col :span="4"><div>col-4</div></Col>
      <Col :span="4"><div>col-4</div></Col>
    </Row>
    <code>center</code>
    <Row type="flex" justify="center" class="demo-back">
      <Col :span="4"><div>col-4</div></Col>
      <Col :span="4"><div>col-4</div></Col>
      <Col :span="4"><div>col-4</div></Col>
      <Col :span="4"><div>col-4</div></Col>
    </Row>
    <code>end</code>
    <Row type="flex" justify="end" class="demo-back">
      <Col :span="4"><div>col-4</div></Col>
      <Col :span="4"><div>col-4</div></Col>
      <Col :span="4"><div>col-4</div></Col>
      <Col :span="4"><div>col-4</div></Col>
    </Row>
    <code>space-around</code>
    <Row type="flex" justify="space-around" class="demo-back">
      <Col :span="4"><div>col-4</div></Col>
      <Col :span="4"><div>col-4</div></Col>
      <Col :span="4"><div>col-4</div></Col>
      <Col :span="4"><div>col-4</div></Col>
    </Row>
    <code>space-between</code>
    <Row type="flex" justify="space-between" class="demo-back">
      <Col :span="4"><div>col-4</div></Col>
      <Col :span="4"><div>col-4</div></Col>
      <Col :span="4"><div>col-4</div></Col>
      <Col :span="4"><div>col-4</div></Col>
    </Row>
  </Space>
</template>