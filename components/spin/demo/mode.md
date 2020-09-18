<cn>
#### Spin类型
可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。
</cn>

```tpl
<template>
<div>
  <Spin v-model="spinning" :mode="mode">
    <div class="deme-spin-container">
        床前明月光，疑是地上霜。<br>
        举头望明月，低头思故乡。
    </div>
  </Spin>
    <br/>
  Loading state：<Switch v-model="spinning" @change="change"/>
  <br/>
  <RadioGroup v-model="mode" @change="changeMode">
    <Radio value="bounce" label="type1"/>
    <Radio value="flip" label="type2"/>
    <Radio value="rotate" label="type3"/>
    <Radio value="zoom" label="type4"/>
  </RadioGroup>
</div>
</template>
<style>
.deme-spin-container{
  padding:100px 50px;
  background:#f5f5f5;
}
</style>
<script>
export default{
  data(){
    return{
      spinning:false,
      mode:"bounce"
    }
  },
  methods:{
    change(checked){
      this.spinning = checked
    },
    changeMode(mode){
      this.mode = mode
    }
  }
}
</script>

```
