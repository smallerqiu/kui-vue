<cn>
#### 嵌套面板
嵌套折叠面板。
</cn>

```tpl
<template>
  <div class="demo-collapse">
    <Collapse :value="['1']">
      <Panel title="Panel title" name="1">
        <p>this is content....</p>
        <p>this is content....</p>
        <p>this is content....</p>
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
        </Collapse>
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