<cn>
#### Spin类型
可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。
</cn>

```vue
<template>
<div>
  <Spin v-model="spinning" :mode="mode">
    <div class="deme-spin-container demo-back">
        床前明月光，疑是地上霜。<br>
        举头望明月，低头思故乡。
    </div>
  </Spin>
    <br/>
  <br/>
  Loading state：<Switch v-model="spinning" @change="change"/>
  <br/>
  <br/>
  <RadioGroup v-model="mode" @change="changeMode">
    <Radio value="bounce" label="Bounce"/>
    <Radio value="flip" label="Flip"/>
    <Radio value="rotate" label="Rotate"/>
    <Radio value="zoom" label="Zoom"/>
  </RadioGroup>
</div>
</template>
<style scoped>
.deme-spin-container{
  padding:100px 50px;
}
</style>
<script>
export default{
  data() {
    return {
      spinning:false,
      mode:"bounce"
    }
  },
  methods:{
    change(checked){
      this.spinning = checked
    },
    changeMode({value}){
      this.mode = value
    }
  }
}
</script>

```
