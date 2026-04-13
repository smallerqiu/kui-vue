<template>
  <Space vertical block class="demo-grid">
    <Row>
      <Col :span="8">col-8</Col>
      <Col :span="8" :offset="8">col-8 | offset-8</Col>
    </Row>
    <Row>
      <Col :span="6">col-6</Col>
      <Col :span="6" :offset="6">col-6 | offset-6</Col>
      <Col :span="6">col-6</Col>
    </Row>
    <Row>
      <Col :span="12" :offset="12">col-12 offset-12</Col>
    </Row>
  </Space>
</template>