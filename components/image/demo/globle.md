
<cn>
#### 全局加载
使用 全局模式。
</cn>

```vue
<template>
  <div>
    <Button @click="open">Open Image</Button>
    <Button @click="openGroup">Open Image group</Button>
  </div>
</template>
<script>
export default{
  methods:{
    open(){
      this.$Image.show({ src: 'https://www.chuchur.com/upload/demo/kui-for-vue.jpg' })
    },
    openGroup(){
      this.$Image.show({ 
        data: [ 
          'https://www.chuchur.com/upload/demo/kui-react.jpg' ,
          'https://www.chuchur.com/upload/demo/kui-for-vue.jpg' ,
          'https://www.chuchur.com/upload/demo/test.jpg' 
        ],
        index:1
      })
    } 
  }
}
</script>
```