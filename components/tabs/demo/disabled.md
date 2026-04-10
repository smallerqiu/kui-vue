<cn>
### 禁用
禁用某一项。
</cn>
<en>
### Disabled
Disable a specific tab.
</en>

```vue
<template>
  <div>
    <Button @click="disabled = !disabled" size="small">
      {{ disabled ? "UnDisable" : "Disabled" }}
    </Button>
    <br />
    <br />
    <Tabs v-model="current">
      <TabPanel key="1" title="Tab 1"> Content of Tab Pane 1 </TabPanel>
      <TabPanel key="2" title="Tab 2" :disabled="disabled"> Content of Tab Pane 2 </TabPanel>
      <TabPanel key="3" title="Tab 3"> Content of Tab Pane 3 </TabPanel>
    </Tabs>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const current = ref("1");
const disabled = ref(true);
</script>
```
