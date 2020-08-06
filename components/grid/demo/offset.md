<cn>
#### 栅格偏移
通过设置 `offset` 属性，将列进行左右偏移，偏移栅格数为 `offset` 的值。
</cn>

```tpl
<template>
  <div class="demo-grid">
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
  </div>
</template>
```