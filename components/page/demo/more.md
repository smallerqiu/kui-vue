<cn>
#### 更多
更多分页。
</cn>

```vue
<template>
  <div class="demo-page">
    <Page v-model:current="current" :total="200"/>
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