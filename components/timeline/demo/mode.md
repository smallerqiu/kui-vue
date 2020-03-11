<cn>
#### 呈现方向
指定 `mode` 可以改变呈现方向
</cn>

```tpl
<template>
  <div>
    <RadioGroup v-model="mode">
      <Radio label="left" value="left" />
      <Radio label="center" value="center" />
      <Radio label="right" value="right" />
    </RadioGroup>
    <br />
    <br />
    <TimeLine :mode="mode">
      <TimeLineItem color="green">优化成吨的改善和体验</TimeLineItem>
      <TimeLineItem color="orange">新增一些很友好的功能</TimeLineItem>
      <TimeLineItem icon="ios-ribbon">发布2.0版本</TimeLineItem>
      <TimeLineItem icon="ios-bug" color="red">修复bug</TimeLineItem>
      <TimeLineItem>发布1.0版本</TimeLineItem>
    </TimeLine>
  </div>
</template>
<script>
export default{
  data(){
    return{
      mode:'right'
    }
  }
}
</script>
```