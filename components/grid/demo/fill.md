<cn>
#### Flex 填充
Col 提供 flex 属性以支持填充。
</cn>

```vue
<template>
  <div class="demo-grid">
    <p>Percentage columns</p>
    <Row type="flex" class="demo-back">
      <Col :flex="3"><div>3/8</div></Col>
      <Col :flex="5"><div>5/8</div></Col>
    </Row>
    <p>Fill rest</p>
    <Row type="flex" class="demo-back">
      <Col flex="100px"><div>100px</div></Col>
      <Col flex="auto"><div>auto</div></Col>
    </Row>
    <p>Raw flex style</p>
    <Row type="flex" class="demo-back">
      <Col flex="1 1 128px"><div>1 1 128px</div></Col>
      <Col flex="0 1 256px"><div>0 1 256px</div></Col>
    </Row>
  </div>
</template>
```