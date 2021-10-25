<cn>
#### Flex 对齐
Flex 子元素垂直对齐。
</cn>

```vue
<template>
  <div class="demo-grid">
    <p>Align Top</p>
    <Row type="flex" align="top" justify="space-around" class="demo-back">
      <Col :span="4"><div class="h-96">col-4</div></Col>
      <Col :span="4"><div class="h-64">col-4</div></Col>
      <Col :span="4"><div class="h-128">col-4</div></Col>
      <Col :span="4"><div class="h-72">col-4</div></Col>
    </Row>
    <p>Align Middle</p>
    <Row type="flex" align="middle"  justify="space-around" class="demo-back">
      <Col :span="4"><div class="h-96">col-4</div></Col>
      <Col :span="4"><div class="h-64">col-4</div></Col>
      <Col :span="4"><div class="h-128">col-4</div></Col>
      <Col :span="4"><div class="h-72">col-4</div></Col>
    </Row>
    <p>Align Bottom</p>
    <Row type="flex" align="bottom" justify="space-around" class="demo-back">
      <Col :span="4"><div class="h-96">col-4</div></Col>
      <Col :span="4"><div class="h-64">col-4</div></Col>
      <Col :span="4"><div class="h-128">col-4</div></Col>
      <Col :span="4"><div class="h-72">col-4</div></Col>
    </Row>
  </div>
</template>
```