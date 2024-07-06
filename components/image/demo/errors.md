
<cn>
#### 容错处理
加载失败显示图像占位符。
</cn>

```vue
<template>  
  <Space>
    <Image 
      :width="120"
      src="https://k-ui.cn/error.jpg"
      placeholder="https://cdn.chuchur.com/img/thumb.png"
      />
    <Image 
      :width="120"
      :height="120" 
      src="https://k-ui.cn/error.jpg"
      />
    <Image 
      :width="120"
      :height="120" 
      :src="src"
      />
    <Button @click="loadOrigin">Load origin</Button>
  </Space>
</template>
<script>
export default{
  data() {
    return {
      src:'https://cdn.chuchur.com/upload/demo/test_300.jpg'
    }
  },
  methods:{
    loadOrigin(){
      this.src = 'https://k-ui.cn/error.jpg'
    }
  }
}
</script>
```