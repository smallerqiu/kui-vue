<cn>
### 附加内容 
可以在页签右边添加附加操作。
</cn>
<en>
### Extra Content 
You can add extra operations to the right of the tabs.
</en>

```vue
<template>
  <Tabs v-model="current">
    <TabPanel key="1" title="Tab 1"> Content of Tab Pane 1 </TabPanel>
    <TabPanel key="2" title="Tab 2"> Content of Tab Pane 2 </TabPanel>
    <TabPanel key="3" title="Tab 3"> Content of Tab Pane 3 </TabPanel>
    <template #extra>
      <Button size="small">Extra Operate</Button>
    </template>
  </Tabs>
</template>
<script setup lang="ts">
import { ref } from "vue";
const current = ref("1");
</script>
```
