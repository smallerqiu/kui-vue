<cn>
#### 基本用法
默认可以同时展开一个或者多个面板
</cn>

```tpl
<template>
  <div class="demo-collapse">
    <Collapse :value="['1']">
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