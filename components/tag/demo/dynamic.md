<cn>
#### 动态添加和删除
通过 `closeable` 显示关闭按钮
</cn>

```vue
<template>
  <div>
    <Tag color="blue" closeable v-for="(t,i) in tags" :key="t">{{t}}</Tag>
    <Input v-show="showInput" @blur="add" size="small" style="width:81px" ref="input" :value="tag"/>
    <Button @click="show" size="small" :icon="Bookmark" v-show="!showInput">New Tag</Button>
  </div>
</template>
<script>
import { Bookmark } from "kui-icons";
export default {
  data() {
    return {
      Bookmark,
      showInput:false,
      tag:'',
      tags:['Apple','Banana','Cat','Dog']
    }
  },
  methods:{
    show(){
      this.showInput=true
      this.$refs.input.focus()
    },
    add(e){
      let value = e.target.value.trim()
      if(value && this.tags.indexOf(value)===-1){
        this.tags.push(value)
      }
      this.tag = ''
      this.showInput = false
    }
  }
}
</script>
```