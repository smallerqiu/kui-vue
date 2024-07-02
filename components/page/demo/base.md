<cn>
#### 基本用法
基础分页。
</cn>

```vue
<template>
  <div class="demo-page">
    <Page v-model:current="current" :total="50"/>
  </div>
</template>
<script>
export default{
  data(){
    return {
      current:1
    }
  }
}
</script>
```