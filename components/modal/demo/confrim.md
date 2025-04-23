<cn>
#### 提示框
全局的确认提示框，可以异步关闭
</cn>

```vue
<template>
  <Space>
    <Button @click="confirm()">标准调用</Button>
    <Button @click="custom()">国际化</Button>
    <Button @click="Async()">异步关闭</Button>
    <Button @click="closeAll()">Close All</Button>
  </Space>
</template>
<script>
export default{
  methods:{
    confirm() {
      modal.confirm({
        title: '您确认要这么做吗',
        content: '此操作不可逆转，谨慎！！！',
        onOk: () => {
          message.success('你点了确认')
        },
        onCancel: () => {
          message.info('你点了取消')
        }
      })
    },
    custom() {
      modal.confirm({
        title: 'Are you Ok?',
        content: 'Yes , I am fine, and you?',
        okText: 'OK',
        cancelText: 'Cancel'
      })
    },
    Async() {
      modal.confirm({
        title: '您确认要这么做吗',
        content: '此操作不可逆转，谨慎！！！',
        onOk: () => {
          return new Promise((resolve , reject)=>{
            setTimeout(resolve,2000)
          })
        },
        onCancel: () => {
          //用户点了取消 应该中断 异步执行
          clearTimeout(this.timer)
        }
      })
    },
    closeAll() {
      for(var o = 0; o < 3; o++){
        setTimeout(e=>{
          modal.confirm({
            title:'一次性弹出3个框',
            content:'给你一个惊喜！',
            cancelText:'全部关闭',
            onCancel: () => {
              modal.destroyAll()
            },
            onOk:()=>{
              return new Promise((resolve , reject)=>{
                setTimeout(resolve,2000)
              })
            }
          })
        },o*500)
      }

    },
  }
}
</script>
```
