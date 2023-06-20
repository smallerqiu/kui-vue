<cn>
#### 固定表头
方便一页内展示大量数据。指定 `Table` 的高度 `height` 和 `column ` 的宽度(不指定默认150)。
`sticky` 为 `true`, 表示全局吸顶，为 `number` 时，表示全局吸顶的距离
> 表头全局吸顶，依赖 sticky 属性，当父级style 存在 `overflow` 属性，吸顶会失效
</cn>

```vue
<template>
  <Table :data="data" :columns="columns" :height="300" :sticky="52"/>
</template>
<script>
export default{
  data() {
     const data = []
     for(let i = 0; i < 15; i++){
       data.push({ key:i, name:'Li Lei',tag:'Java', age:28, address:'Wu Han Guanggu No.'+i })
     }
    return {
      data,
      columns:[
        {title:'Name', key:'name' },
        {title:'Age', key:'age' },
        {title:'Tag', key:'tag' },
        {title:'Address', key:'address'},
      ]
    }
  }
}
</script>
```
