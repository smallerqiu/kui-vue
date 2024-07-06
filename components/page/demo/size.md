<cn>
#### 尺寸
展示小尺寸。
</cn>

```vue
<template>
  <div class="demo-page">
    <Page :current="current" :total="50" size="small"/>
    <Page :current="current" :total="50" size="small" show-sizer/>
    <Page :current="current" :total="50" size="small" show-elevator/>
    <Page :current="current" :total="50" size="small" show-elevator show-total/>
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