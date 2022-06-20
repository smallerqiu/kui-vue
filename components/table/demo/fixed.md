<cn>
#### 固定头和列
适合同时展示有大量数据和数据列。需要设置表格 `width`, `height` 和 `column ` 的宽度(不指定默认150)。
> 如果布局被破坏，请把宽度 `width` 值改大。
</cn>

```vue
<template>
  <Table :data="data" :columns="columns" :width="1900" :height="300">
      <a slot="action1">action1</a>
      <a slot="action2">action2</a>
      <a slot="action3">action3</a>
      <a slot="action4">action4</a>
  </Table>
</template>
<script>
export default{
  data() {
     const data = [],columns = [];
     for(let i = 0; i < 10; i++){
       columns.push({ title:'Col'+i, key:'name' })
       data.push({ key:i, name:'Li Lei', age:28, address:'Wu Han Guanggu No.'+i })
     }
    return {
      data,
      columns:[
        {title:'Name', key:'name', width:110 , fixed:'left' },
        // {title:'Name', key:'name', width:120 , fixed:'left' },
        // {title:'Name', key:'name', width:130 , fixed:'left' },
        // {title:'Age', key:'age' , width:140 , fixed:'left' },
        ...columns,
        {title:'Action1', key:'action1', width:110 , fixed:'right' },
        // {title:'Action2', key:'action2', width:120 , fixed:'right' },
        // {title:'Action3', key:'action3', width:130 , fixed:'right' },
        // {title:'Action4', key:'action4', width:140 , fixed:'right' },
      ]
    }
  }
}
</script>
```
