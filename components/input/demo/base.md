<cn>
#### 基础用法
使用 `v-model` 进行数据双向绑定
</cn>

```tpl
<template>
  <div>
    <Input placeholder="请输入内容..." @blur="blur" @focus="focus" @change="change" />
    <Input placeholder="disabled..." disabled />
  </div>
</template>
<script>
export default{
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