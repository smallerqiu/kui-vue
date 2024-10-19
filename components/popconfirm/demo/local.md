<cn>
#### 国际化
使用 `okText` 和 `cancelText` 自定义按钮文字。
</cn>

```vue
<template>
  <Space>
    <Popconfirm 
      title="您确认删除这条内容吗?"
      @ok="ok"
      @cancel="cancel"
      >
      <Button type="primary">确认</Button>
    </Popconfirm>
    <Popconfirm title="Are you sure delete this task?"
      ok-text="Yes"
      cancel-text="No"
      @ok="ok"
      @cancel="cancel"
      >
      <Button type="primary">Confirm</Button>
    </Popconfirm>
  </Space>
</template>
<script>
export default{
  methods:{
    ok(){
      this.$Message.success('Clicked on Yes')
    },
    cancel(){
      this.$Message.info('Clicked on No')
    }
  }
}
</script>  
```