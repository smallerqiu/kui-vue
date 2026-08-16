<template>
  <Space block vertical class="demo-grid">
    <code>xs: 24 · sm: 12 · md: 8 · lg: 6</code>
    <Row :gutter="[12, 12]">
      <Col v-for="item in 4" :key="item" :xs="24" :sm="12" :md="8" :lg="6">
        <div>{{ item }}</div>
      </Col>
    </Row>

    <code>Responsive object</code>
    <Row :gutter="12">
      <Col :xs="{ span: 20, offset: 2 }" :md="{ span: 12, offset: 0 }">
        <div>xs: 20 / offset 2 · md: 12</div>
      </Col>
      <Col :xs="{ span: 20, offset: 2 }" :md="{ span: 12, offset: 0 }">
        <div>xs: 20 / offset 2 · md: 12</div>
      </Col>
    </Row>
  </Space>
</template>
