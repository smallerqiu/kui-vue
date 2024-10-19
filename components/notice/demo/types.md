<cn>
#### 带图标的提醒
通过调用不同的方法，可展示不同的类型
</cn>

```vue
<template>
  <Space>
    <Button @click="notice('info')">消息提示 </Button>
    <Button @click="notice('warning')">警告提示 </Button>
    <Button @click="notice('success')">成功提示 </Button>
    <Button @click="notice('error')">错误提示 </Button>
  </Space>
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