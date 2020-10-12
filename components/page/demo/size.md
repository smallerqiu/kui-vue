<cn>
#### 条目数和自定义条目数
改变每页显示条目数。
</cn>

```vue
<template>
  <div class="demo-collapse">
    <Page :current="3" :total="200" showSizer/>
    <Page :current="4" :total="200" showSizer :page-size="20"/>
    <Page :current="4" :total="1000" showSizer :page-size="30" :size-data="sizeData"/>
  </div>
</template>
<script>
export default{
  data(){
    return{
      sizeData:[30,50,80,100]
    }
  }
}
</script>  
```