<cn>
#### 简洁模式
设置 `sample` 呈现没有边框的简洁样式。
</cn>

```vue
<template>
  <div class="demo-collapse">
    <Collapse :value="['1']" sample>
      <Panel title="Panel title" key="1">
        <div>{{text}}</div>
      </Panel>
      <Panel title="Panel title" key="2">
        <div>{{text}}</div>
      </Panel>
      <Panel title="Panel title" key="3">
        <div>{{text}}</div>
      </Panel>
    </Collapse>
  </div>
</template>
<script>
export default {
  data(){
    return {
      text : `A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; `
    }
  }
}
</script>
```