<cn>
#### 新增和关闭页签 
只有卡片样式的页签支持新增和关闭选项。
使用 `closable={false}` 禁止关闭。
</cn>

```vue
<template>
  <Tabs v-model="activeKey" card @remove="remove">
    <TabPanel :title="panel.title" v-for="panel in panels" :key="panel.key" :closable="panel.closable">
      {{panel.content}}
    </TabPanel>
    <Button slot="extra" :icon="Add" size="small" @click="add"/>
  </Tabs>
</template>
<script>
import { Add } from "kui-icons";
export default{
  data() {
    const panels = [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2', closable:true },
      { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable:true },
    ];
    return {
      Add,
      panels,
      activeKey: panels[0].key,
      newTabIndex: 1
    }
  },
  methods:{
    remove(key){
      let panels = this.panels
      
      const index = panels.map(p=>p.key).indexOf(key)

      if (this.activeKey == key) {
        if(index == panels.length-1) {
          this.activeKey = panels[index-1].key
        } else {
          this.activeKey = panels[index+1].key
        }

      }
      panels.splice(index,1)

    },
    add() {
      const panels = this.panels;
      const activeKey = `A${this.newTabIndex++}`;
      panels.push({ title: `New Tab${this.newTabIndex}`, content: `Content of new Tab ${activeKey}`, key: activeKey, closable:true });
      this.panels = panels;
      this.activeKey = activeKey;
    },
  }
}
</script>
```
