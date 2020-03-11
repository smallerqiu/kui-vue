<cn>
#### 提示框
全局的确认提示框，可以异步关闭
</cn>

```tpl
<template>
  <div>
    <Button @click="confirm()">标准调用</Button>
    <Button @click="custom()">国际化</Button>
    <Button @click="Async()">异步关闭</Button>
  </div>
</template>
<script>
export default{
  methods:{
    confirm() {
      this.$Modal.confirm({
        title: '您确认要这么做吗',
        content: '此操作不可逆转，谨慎！！！',
        onOk: () => {
          this.$Message.success('你点了确认')
        },
        onCancel: () => {
          this.$Message.info('你点了取消')
        }
      })
    },
    custom() {
      this.$Modal.confirm({
        title: 'Are you Ok?',
        content: 'Yes , I am fine, and you?',
        okText: 'OK',
        cancelText: 'Cancel'
      })
    },
    Async() {
      this.$Modal.confirm({
        title: '您确认要这么做吗',
        content: '此操作不可逆转，谨慎！！！',
        loading: true,
        onOk: () => {
          this.timer = setTimeout(e => {
            this.$Modal.destroy()
          }, 2000)
        },
        onCancel: () => {
          //用户点了取消 应该中断 异步执行
          clearTimeout(this.timer)
        }
      })
    },
  }
} 
</script>
```