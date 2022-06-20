<cn>
#### 主题
使用 `theme` 设定主题 ,`shape` 呈现圆角 
</cn>

```vue
<template>
  <div style="width:512px;">
    <Checkbox label="Shape" v-model="isShape"/>
    <br/>
    <br/>
    <Input placeholder="请输入内容..." @blur="blur" @focus="focus" @change="change" theme="light" :shape="shape"/>
    <Input placeholder="disabled..." disabled theme="light" :shape="shape"/>
    <Input placeholder="请输入内容..." theme="light" :icon="Search" :shape="shape"/>
    <Input placeholder="请输入内容..." theme="light" @search="focus" clearable :shape="shape"/>
    <TextArea placeholder="请输入内容..." theme="light" :rows="3"/>
  </div>
</template>
<script>
import { Search } from "kui-icons";
export default{
  data() {
    return {
      Search,
      isShape :false
    }
  },
  computed:{
    shape() { 
      return this.isShape ? 'circle' : null
    }
  },
  methods:{
    blur(){
      console.log('blur')
    },
    focus(){
      console.log('focus')
    },
    change(e){
      console.log('change')
    },
  }
}
</script>
```