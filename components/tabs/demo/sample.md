<cn>
#### 极简式页签
简单的卡片呈现模式。
</cn>

```vue
<template>
  <div class="demo-tabs-sample">
    <Tabs v-model:activeKey="current" sample @change="change">
      <TabPanel key="1" title="Tab 1">
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
      </TabPanel>
      <TabPanel key="2" title="Tab 2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </TabPanel>
      <TabPanel key="3" title="Tab 3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </TabPanel>
    </Tabs>
  </div>
</template>
<script setup>
import { ref } from "vue";
const current = ref("1");
const change = (key) => {
  console.log(key);
}
</script>

<style scoped>
.demo-tabs-sample{
  padding:10px;
  background-color:rgba(0,0,0,.2);
}
</style>
```