
<cn>
#### 全局加载
使用 全局模式。
</cn>

```vue
<template>
  <div>
    <Button @click="open">Open Image</Button>
    <Button @click="openMedia">Open Media</Button>
    <Button @click="openGroup">Open Image group</Button>
  </div>
</template>
<script>
export default{
  methods:{
    openMedia(){
      this.$Image.show({ 
        src: 'https://pro-video.xiaoheiban.cn/202004/132504dd-51b6-4722-9929-27000912a4c8.mp4',type:'media'
      })
    },
    open(){
      this.$Image.show({ 
        src: 'https://www.chuchur.com/upload/demo/kui-for-vue.jpg'
      })
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