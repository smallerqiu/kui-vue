<cn>
#### 禁用节点
设置属性 `disabled` 可以禁用节点。
</cn>

```vue
<template>
  <Tree :data="data" checkable @check="select"/>
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
              disabled:true,
              children: [
                { title: 'leaf 1-1-1',disabled:true },
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
      // console.log(data)
    }
  }
}
</script>
```