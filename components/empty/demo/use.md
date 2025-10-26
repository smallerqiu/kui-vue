
<cn>
#### 默认展示
默认会在以上组件展示
</cn>

```vue
<template>
  <Space vertical>
    Select: 
    <Select  :width="220"/>
    Table: 
    <Table :data="[]" :columns="columns" />
  </Space>
</template>
<script>
export default{
  data() {
    return {
      columns:[
        { title:'Name' ,},
        { title:'Age'},
      ]
    }
  }
}
</script>
```