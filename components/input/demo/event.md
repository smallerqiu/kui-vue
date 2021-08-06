<cn>
#### 事件
本示例测试组件事件是否正常触发
</cn>

```vue
<template>
  <div style="width:512px;">
    <Input placeholder="请输入内容..." 
    clearable
    @change="change" 
    @keypress="keypress" 
    @keyup="keyup" 
    @keydown="keydown" 
    @keydown.enter="keydownEnter" 
    @blur="blur" 
    @focus="focus" >
    </Input>
    <TextArea placeholder="请输入内容..."
      @change="change" 
      @keypress="keypress" 
      @keyup="keyup" 
      @keydown="keydown" 
      @keydown.enter="keydownEnter" 
      @blur="blur" 
      @focus="focus" 
     />
  </div>
</template>
<script>
let events = {};
['focus','blur','change','keypress','keyup','keydown',,'keydownEnter'].map(type=>{
  events[type] = function(e){
    this.$Message.info(type)
  }
})
export default{
  methods:{
    ...events
  }
}
</script>
```