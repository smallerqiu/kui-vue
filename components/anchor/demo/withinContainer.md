<cn>
### 指定容器（滚动容器内定位）
如果你的页面不是全屏滚动，而是在一个特定的 div 内滚动。
</cn>
<en>
### Specify container (positioning within a scrolling container)
If your page does not scroll in full screen but within a specific div.
</en>

```vue
<template>
  <div class="demo-container">
    <Row :gutter="10">
      <Col :span="18">
        <div
          class="scroll-content"
          style="height: 300px; overflow-y: scroll; border: 1px solid #eee;"
        >
          <div id="item-1" style="height: 400px; background: #e6f7ff;">content 1</div>
          <div id="item-2" style="height: 400px; background: #fff7e6;">content 2</div>
        </div>
      </Col>
      <Col :span="6">
        <k-anchor container=".scroll-content">
          <k-anchor-link href="#item-1" title="part 1" />
          <k-anchor-link href="#item-2" title="part 2" />
        </k-anchor>
      </Col>
    </Row>
  </div>
</template>
```
