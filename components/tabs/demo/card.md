<cn>
#### 卡片式页签 
另一种样式的页签。
</cn>

```vue
<template>
  <Tabs v-model="current" card>
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
<script>
export default{
  data() {
    return {
      current:'1'
    }
  },
}
</script>
```
