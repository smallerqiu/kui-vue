<cn>
#### 固定状态改变的回调 
可以获得是否固定的状态。
</cn>

```tpl
<template>
  <Affix @change="change" :offsetTop="200">
    <Button type="primary">200px to affix top</Button>
  </Affix>
</template>
<script>
export default{
  methods:{
    change(value){
      this.$Message.info(value?'fixed':'reset')
    }
  }
}
</script> 
```