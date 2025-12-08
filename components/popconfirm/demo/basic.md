<cn>
### 基础用法
最简单的用法。
</cn>

```vue
<template>
  <Popconfirm 
    title="Are you sure delete this task?"
    @ok="ok"
    @cancel="cancel"
   >
    <a type="primary">Delete</a>
  </Popconfirm>
</template>
<script>
export default{
  methods:{
    ok(){
      this.$message.success('Clicked on ok')
    },
    cancel(){
      this.$message.info('Clicked on cancel')
    }
  }
}
</script>h
```