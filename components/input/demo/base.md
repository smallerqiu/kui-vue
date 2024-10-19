<cn>
#### 基础用法
使用 `v-model` 进行数据双向绑定
</cn>

```vue
<template>
  <Space vertical style="width:512px;" >
    <Input placeholder="请输入内容..." @blur="blur" @focus="focus" @change="change" />
    <Input placeholder="disabled..." disabled />
  </Space>
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