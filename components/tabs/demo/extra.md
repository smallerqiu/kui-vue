<cn>
#### 附加内容 
可以在页签右边添加附加操作。
</cn>

```vue
<template>
  <Tabs v-model="current">
    <TabPanel key="1" title="Tab 1">
      Content of Tab Pane 1
    </TabPanel>
    <TabPanel key="2" title="Tab 2">
      Content of Tab Pane 2
    </TabPanel>
    <TabPanel key="3" title="Tab 3">
      Content of Tab Pane 3
    </TabPanel>
    <Button slot="extra" size="small">Extra Action</Button>
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
