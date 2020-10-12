<cn>
#### 带图标的提醒
通过调用不同的方法，可展示不同的类型
</cn>

```vue
<template>
  <div>
    <Button @click="notice('info')" type="primary">消息提示 </Button>
    <Button @click="notice('warning')" type="warning">警告提示 </Button>
    <Button @click="notice('success')" type="success">成功提示 </Button>
    <Button @click="notice('error')" type="danger">错误提示 </Button>
  </div>
</template>
<script>
export default{  
  methods:{
    notice(type) {
      this.$Notice[type]({
        title: "通知的标题",
        content: "通知的描述",
        duration: 5
      });
    }
  }
}
</script>
```