<cn>
#### 极简式页签
简单的卡片呈现模式。
</cn>

```tpl
<template>
  <div class="demo-tabs-sample">
    <Tabs v-model="current" sample>
      <TabPane key="1" title="Tab 1">
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
      </TabPane>
      <TabPane key="2" title="Tab 2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </TabPane>
      <TabPane key="3" title="Tab 3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
export default{
  data(){
    return{
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

<style scoped>
.demo-tabs-sample{
  background:#f2f2f2;
  padding:10px;
}
</style>
```