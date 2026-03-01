<cn>
### 嵌套锚点（复杂文档结构）
适用于多层级标题的文档。
</cn>
<en>
### Nested Anchors (Complex Document Structure)
Suitable for documents with multi-level headings.
</en>

```vue
<template>
  <Row style="display: flex;max-height:500px;overflow:auto;" class="anchor-d2">
    <Col style="flex: 1; padding: 40px;">
      <h1 id="api">API</h1>
      <div style="height: 400px"></div>
      
      <h2 id="props">Props</h2>
      <div style="height: 300px"></div>
      
      <h3 id="anchor-props">Anchor Props</h3>
      <div style="height: 300px"></div>
      
      <h2 id="events">Events</h2>
      <div style="height: 600px"></div>
    </Col>
    
    <Col style="width: 200px; padding-top: 40px;">
      <k-anchor container=".anchor-d2">
        <k-anchor-link href="#api" title="API">
          <k-anchor-link href="#props" title="Props">
            <k-anchor-link href="#anchor-props" title="Anchor Props" />
          </k-anchor-link>
          <k-anchor-link href="#events" title="Events" />
        </k-anchor-link>
      </k-anchor>
    </Col>
  </Row>
</template>
```
