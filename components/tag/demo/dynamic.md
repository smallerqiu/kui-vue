<cn>
#### 动态添加和删除
通过 `closeable` 显示关闭按钮
</cn>

```vue
<template>
  <Space>
    <Tag color="blue" closeable v-for="(t,i) in tags" :key="t">{{t}}</Tag>
    <Input v-show="showInput" @blur="add" size="small" style="width:81px" :ref="input" :value="tag"/>
    <Button @click="show" size="small" :icon="Bookmark" v-show="!showInput">New Tag</Button>
  </Space>
</template>
<script setup>
import { Bookmark } from "kui-icons";
import { ref } from "vue";
const showInput = ref(false)
const tag = ref('')
const tags = ['Apple','Banana','Cat','Dog']
const input = ref(null)
const show = ()=>{
  showInput.value = true
  input.value.focus()
}
const add = (e)=>{
  let value = e.target.value.trim()
  if(value && this.tags.indexOf(value)===-1){
    this.tags.push(value)
  }
  tag.value = ''
  showInput.value = false
}
</script>
```