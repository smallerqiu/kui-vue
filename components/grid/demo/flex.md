<cn>
### Flex 布局
Flex 布局基础。
使用 `row-flex` 定义 `flex` 布局，其子元素根据不同的值 `start`,`center`,`end`,`space-between`,`space-around`，分别定义其在父节点里面的排版方式。
</cn>

```vue
<template>
  <Space block vertical>
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
```
