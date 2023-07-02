<cn>
#### 在内部展示
嵌入其他组件内部
</cn>

```vue
<template>
  <div>
    <Button @click="show=true">在Modal</Button>
    <Button @click="show2=true">在 Drawer</Button>

    <Modal v-model="show" 
          :title="null" 
          :footer="null"
          :showClose="false"
          :width="316"
          >
      <DateCalendar v-model="date" @change="change"></DateCalendar>
    </Modal>

    <div class="date-demo">
      <div class="date-demo-inner" ref="demo-date">
        <div class="demo-nav"><Icon :type="ChevronBack" />商城首页</div>
        <Drawer v-model="show2" height="340" 
          :closable="false" 
          :footer="null" 
          :title="null"
          :height="300"
          placement="bottom"
          :target="()=>$refs['demo-date']">
          <DateCalendar v-model="date2" @change="change2" picker-size="small"></DateCalendar>
        </Drawer>
      </div>
    </div>
  </div>
</template>
<script>
import { ChevronBack } from 'kui-icons'
export default{
  data() {
    return {
      ChevronBack,
      show:false,
      show2:false,
      date:'',
      date2:''
    }
  },
  methods: {
    change(date){
      this.show = false
      console.log(date.toString())
      this.$Message.info(date.toString())
    },
    change2(date){
      this.show2 = false
      console.log(date.toString())
      this.$Message.info(date.toString())
    }
  },
}
</script>
<style lang="less">
.date-demo{
  width:256px;
  height:400px;
  border:1px solid var(--kui-color-border);
  margin-top:10px;
  position:relative;
  overflow:hidden;
}
.demo-nav{
  border-bottom:1px solid var(--kui-color-border);
  padding:8px 10px;
  font-size:12px;
}
</style>
```