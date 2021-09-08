<cn>
#### 基本用法 
最简单的用法。
</cn>

```vue
<template>
  <div>
    <Button @click="start()">start</Button>
    <Button @click="finish">finish</Button>
    <Button @click="error">error</Button>
    <Button @click="upload(30)">upload 30%</Button>
    <Button @click="upload(80)">upload 80%</Button>
    <Button @click="destroy()">destroy</Button>
  </div>
</template>
<script>
export default{
  methods: {
    upload(percent){
      this.$Loading.upload(percent);
    },
    start() {
      this.$Loading.start();
    },
    finish() {
      this.$Loading.finish();
    },
    error() {
      this.$Loading.error();
    },
    destroy(){
      this.$Loading.destroy();
    }
  }
}
</script>
```