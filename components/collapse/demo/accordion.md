<cn>
### 手风琴
设置 `accordion` 只允许同时展开一个面板
</cn>
<en>
### Accordion
Set `accordion` to allow only one panel to be expanded at a time.
</en>

```vue
<template>
  <div class="demo-collapse">
    <Collapse :openKeys="openKeys" accordion>
      <CollapsePanel title="Panel title" key="1">
        <div>{{ text }}</div>
      </CollapsePanel>
      <CollapsePanel title="Panel title" key="2">
        <div>{{ text }}</div>
      </CollapsePanel>
      <CollapsePanel title="Panel title" key="3">
        <div>{{ text }}</div>
      </CollapsePanel>
    </Collapse>
  </div>
</template>
<script setup>
import { ref } from "vue";
const openKeys = ref(["1"]);
const text = `A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; `;
</script>
```
