<cn>
#### 固定头和列
适合同时展示有大量数据和数据列。需要设置表格 `width`, `height` 和 `column ` 的宽度(不指定默认150)。
> 如果布局被破坏，请把宽度 `width` 值改大。
</cn>

```tpl
<template>
  <Table :data="data" :columns="columns" :width="1800" :height="300">
      <a slot="action">action</a>
  </Table>
</template>
<script>
export default{
  data(){
     const data = [],columns = [];
     for(let i = 0; i < 10; i++){
       columns.push({ title:'Col'+i, key:'name' })
       data.push({ key:i, name:'Han Lin', age:28, address:'Wu Han Guanggu No.'+i })
     }
    return{
      data,
      columns:[
        {title:'Name', key:'name', width:100 , fixed:'left' },
        {title:'Age', key:'age' , width:100 , fixed:'left' },
        ...columns,
        {title:'Action', key:'action', width:100 , fixed:'right' },
      ]
    }
  }
}
</script>
```
