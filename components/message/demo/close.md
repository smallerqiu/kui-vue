<cn>
#### 自定义时长
可以自定义配置，其中 `duration` 来控制自动关闭时长,默认 `3s` , `closable` 显示关闭按钮
</cn>

```vue
<template>
  <div>
    <Button @click="config" type="success">10秒后关闭</Button>
    <Button @click="config2" type="primary">5秒后关闭</Button>
    <Button @click="config3" type="primary">手动关闭</Button>
  </div>
</template>
<script>
export default{
  methods:{
    config() {
      this.$Message.success("10秒后关闭", 10);
    },
    config2() {
      this.$Message.config({
        type: "info",
        duration: 5,
        content: "5秒后关闭"
      });
    },
    config3() {
      this.$Message.config({
        type: "info",
        duration: 20,
        closable: true,
        content: "手动关闭",
        close: () => { this.$Message.success("我是回调"); }
      });
    }
  }
}
</script>
```