<cn>
### Flex 填充
Col 提供 flex 属性以支持填充。
</cn>
<en>
### Flex Fill
Col provides a flex property to support filling.
</en>

```vue
<template>
  <Space block vertical>
    <code>Percentage columns</code>
    <Row type="flex" class="demo-back">
      <Col :flex="3"><div>3/8</div></Col>
      <Col :flex="5"><div>5/8</div></Col>
    </Row>
    <code>Fill rest</code>
    <Row type="flex" class="demo-back">
      <Col flex="100px"><div>100px</div></Col>
      <Col flex="auto"><div>auto</div></Col>
    </Row>
    <code>Raw flex style</code>
    <Row type="flex" class="demo-back">
      <Col flex="1 1 128px"><div>1 1 128px</div></Col>
      <Col flex="0 1 256px"><div>0 1 256px</div></Col>
    </Row>
  </Space>
</template>
```
