<cn>
#### 基本用法
默认选中第一项。
</cn>

```vue
<template>
  <Tabs v-model="current" @change="change">
    <TabPanel key="1" title="Tab 1">
      Content of Tab Pane 1
    </TabPanel>
    <TabPanel key="2" title="Tab 2">
      Content of Tab Pane 2
    </TabPanel>
    <TabPanel key="3" title="Tab 3">
      Content of Tab Pane 3
    </TabPanel>
  </Tabs>
</template>
<script>
export default{
  data() {
    return {
      current:'1'
    }
  },
  methods:{
    change(key){
      console.log(key)
    }
  }
}
</script>
```
