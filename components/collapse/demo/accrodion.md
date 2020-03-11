<cn>
#### 手风琴
设置 `accrodion` 只允许同时展开一个面板
</cn>

```tpl
<template>
  <div class="demo-collapse">
    <Collapse :value="['1']" accrodion>
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