<cn>
### 嵌套面板
嵌套折叠面板。
</cn>
<en>
### Nested Panels
Nested collapse panels.
</en>

```vue
<template>
  <div class="demo-collapse">
    <Collapse :openKeys="openKeys">
      <CollapsePanel title="Panel title" key="1">
        <Collapse :openKeys="openKeys2">
          <CollapsePanel title="Panel title" key="1-1">
            <div>{{ text }}</div>
          </CollapsePanel>
          <CollapsePanel title="Panel title" key="1-2">
            <div>{{ text }}</div>
          </CollapsePanel>
        </Collapse>
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
<script setup lang="ts">
import { ref } from "vue";
const openKeys = ref(["1"]);
const openKeys2 = ref(["1-1"]);
const text = `A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; `;
</script>
```
