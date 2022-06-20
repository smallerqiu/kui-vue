<cn>
#### 间距大小
间距预设大、中、小三种大小。
通过设置 size 为 large middle 分别把间距设为大、中间距。若不设置 size，则间距为小。
</cn>

```vue
<template>
  <Tabs v-model="current" @change="change" style="width:350px;">
    <TabPane key="1" title="Small">
      <Space size="small" >
        <Button size="small" v-for="x in 5" :key="x">Small</Button>
      </Space>
    </TabPane>
    <TabPane key="2" title="Middle ">
      <Space size="middle">
        <Button size="small" v-for="x in 5" :key="x">Middle</Button>
      </Space>
    </TabPane>
    <TabPane key="3" title="Large">
      <Space size="large" >
        <Button size="small" v-for="x in 5" :key="x">Large</Button>
      </Space>
    </TabPane>
    <TabPane key="4" title="Array">
      <Space :size="[8,20]" wrap>
        <Button size="small" v-for="x in 10" :key="x">Array</Button>
      </Space>
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
  methods:{
    change(key){
      console.log(key)
    }
  }
}
</script>

```