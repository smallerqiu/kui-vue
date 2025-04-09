<cn>
#### 事件
本示例测试组件事件是否正常触发
</cn>

```vue
<template>
  <Space vertical style="width:512px;">
    <Input placeholder="请输入内容..." 
    clearable
    @change="events.change" 
    @keypress="events.keypress" 
    @keyup="events.keyup" 
    @keydown="events.keydown" 
    @keydown.enter="events.keydownEnter" 
    @blur="events.blur" 
    @focus="events.focus" >
    </Input>
    <TextArea placeholder="请输入内容..."
      @change="events.change" 
      @keypress="events.keypress" 
      @keyup="events.keyup" 
      @keydown="events.keydown" 
      @keydown.enter="events.keydownEnter" 
      @blur="events.blur" 
      @focus="events.focus" 
     />
  </Space>
</template>
<script setup>
const events = {};
['focus','blur','change','keypress','keyup','keydown',,'keydownEnter'].forEach(type=>{
  events[type] = function(e){
    // this.$Message.info(type)
    console.log(type,e.target.value)
  }
})
</script>
```