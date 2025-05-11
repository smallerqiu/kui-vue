<cn>
#### 居中
标签居中展示。
</cn>

```vue
<template>
  <Tabs v-model:activeKey="current" centered>
    <TabPane key="1" title="Tab 1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane key="2" title="Tab 2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane key="3" title="Tab 3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
</template>
<script setup>
import { ref } from "vue";
const current = ref('1');
</script>
```
