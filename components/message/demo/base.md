<cn>
#### 普通提示
信息提醒反馈。
</cn>

```vue
<template>
  <div>
    <Button @click="info" type="primary">Show base info </Button>
  </div>
</template>
<script>
let count = 0
export default{
  methods:{
    info() {
      count++
      this.$Message.info("this is a base message number : "+count);
    }
  }
}
</script>
```