<cn>
#### 跳转
快速跳转到某一页。
</cn>

```vue
<template>
  <div class="demo-page">
    <Page v-model:current="current" :total="200" show-elevator/>
  </div>
</template>
<script>
export default{
  data(){
    return {
      current:10
    }
  }
}
</script>
```