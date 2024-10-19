<cn>
#### 自定义时长
可以自定义配置，其中 `duration` 来控制自动关闭时长,默认 `3s`
</cn>

```vue
<template>
  <Space>
    <Button @click="config">10秒后关闭</Button>
    <Button @click="config2" type="primary">5秒后关闭</Button>
    <Button @click="config3" type="primary">手动关闭</Button>
  </Space>
</template>
<script>
export default{
  methods:{
    config() {
      this.$Notice.open({
        type: "success",
        duration: 10,
        title:'温馨提示',
        content: "10秒后关闭"
      });
    },
    config2() {
      this.$Notice.open({
        type: "info",
        duration: 5,
        title:'温馨提示',
        content: "5秒后关闭"
      });
    },
    config3() {
      this.$Notice.open({
        type: "info",
        duration: 0,
        title:'温馨提示',
        content: "手动关闭",
        close: () => { this.$Message.success("我是回调"); }
      });
    }
  }
}
</script>
```