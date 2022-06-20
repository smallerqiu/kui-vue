<cn>
#### 附加内容 
可以在页签右边添加附加操作。
</cn>

```vue
<template>
  <Tabs v-model="current">
    <TabPane key="1" title="Tab 1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane key="2" title="Tab 2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane key="3" title="Tab 3">
      Content of Tab Pane 3
    </TabPane>
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
