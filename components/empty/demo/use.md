
<cn>
#### 默认展示
默认会在以上组件展示
</cn>

```vue
<template>
  <div>
    Select: <br/><br/>
    <Select  :width="220"/>
    <br/>
    <br/>
    Table: <br/><br/>
    <Table :data="[]" :columns="columns" />
  </div>
</template>
<script>
export default{
  data(){
    return{
      columns:[
        { title:'Name' ,},
        { title:'Age'},
      ]
    }
  }
}
</script>
```