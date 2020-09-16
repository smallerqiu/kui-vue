<cn>
#### 可勾选
设置属性 `checkable` 可以对节点进行勾选。
</cn>

```tpl
<template>
  <Tree :data="data" checkable @check="select" @select="select"/>
</template>
<script>
export default{
  data(){
    return{
      data: [
        {
          title: 'tree 1',
          expand: true,
          children: [
            {
              title: 'tree 1-1',
              expand: true,
              children: [
                { title: 'leaf 1-1-1' },
                { title: 'leaf 1-1-2' }
              ]
            },
            {
              title: 'tree 1-2',
              expand: true,
              children: [
                { title: 'leaf 1-2-1' },
                { title: 'leaf 1-2-2' }
              ]
            }
          ]
        }
      ],
    }
  },
  methods:{
    select(data){
      console.log(data)
    }
  }
}
</script>
```