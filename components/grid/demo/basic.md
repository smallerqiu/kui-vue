<cn>
### 基本用法
`col` 必须放在 `row` 里面
</cn>
<en>
### Basic Usage
Columns must be placed inside a Row.
</en>

```vue
<template>
  <Space block vertical>
    <Row>
      <Col :span="12">col-12</Col>
      <Col :span="12">col-12</Col>
    </Row>
    <Row>
      <Col :span="8">col-8</Col>
      <Col :span="8">col-8</Col>
      <Col :span="8">col-8</Col>
    </Row>
    <Row>
      <Col :span="6">col-6</Col>
      <Col :span="6">col-6</Col>
      <Col :span="6">col-6</Col>
      <Col :span="6">col-6</Col>
    </Row>
  </Space>
</template>
```
