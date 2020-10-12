<cn>
#### 简洁模式
设置 `sample` 呈现没有边框的简洁样式。
</cn>

```vue
<template>
  <div class="demo-collapse">
    <Collapse :value="['1']" sample>
      <Panel title="Panel title" name="1">
        <p>this is content....</p>
        <p>this is content....</p>
        <p>this is content....</p>
      </Panel>
      <Panel title="Panel title" name="2">
        <p>this is content....</p>
        <p>this is content....</p>
        <p>this is content....</p>
      </Panel>
      <Panel title="Panel title" name="3">
        <p>this is content....</p>
        <p>this is content....</p>
        <p>this is content....</p>
      </Panel>
    </Collapse>
  </div>
</template>
```