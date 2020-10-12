<cn>
#### 分栏间隔
使用 `gutter` 熟悉来设置分栏的间隔
</cn>

```vue
<template>
  <div class="demo-grid">
    <Row :gutter="10" class="row-gutter">
      <Col :span="6">
        <div>col-6</div>
      </Col>
      <Col :span="6">
        <div>col-6</div>
      </Col>
      <Col :span="6">
        <div>col-6</div>
      </Col>
      <Col :span="6">
        <div>col-6</div>
      </Col>
    </Row>
  </div>
</template>
```