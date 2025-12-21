<cn>
### 基本用法
默认可以同时展开一个或者多个面板
</cn>

```vue
<template>
  <div class="demo-collapse">
    <Collapse :openKeys="openKeys">
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
