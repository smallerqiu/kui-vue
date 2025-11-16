<cn>
#### 嵌套面板
嵌套折叠面板。
</cn>

```vue
<template>
  <div class="demo-collapse">
    <Collapse v-model:activeKey="activeKey">
      <CollapsePanel title="Panel title" key="1">
        <Collapse v-model:activeKey="activeKey2">
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
<script setup>
import { ref } from "vue";
const activeKey = ref(["1"]);
const activeKey2 = ref(["1-1"]);
const text = `A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; `;
</script>
```
