<cn>
#### 主题
使用 `theme` 设定主题 ,`shape` 呈现圆角 
</cn>

```vue
<template>
  <div style="width:512px;">
    <Checkbox label="Shape" v-model="shape"/>
    <br/>
    <br/>
    <Input placeholder="请输入内容..." @blur="blur" @focus="focus" @change="change" theme="light"/>
    <Input placeholder="disabled..." disabled theme="light"/>
    <Input placeholder="请输入内容..." theme="light" icon="search" :shape="shape?'circle':''"/>
    <Input placeholder="请输入内容..." theme="light" @search="focus" clearable :shape="shape?'circle':''"/>
    <TextArea placeholder="请输入内容..." theme="light" :rows="3"/>
  </div>
</template>
<script>
export default{
  data(){
    return{
      shape :false
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