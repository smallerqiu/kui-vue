<cn>
#### 基础用法
最简单的用法，浮层的大小由内容区域决定。
</cn>

```vue
<template>
  <Tooltip>
    <template slot="title">
      <p>明月几时有,把酒问青天!</p>
      <p>不知天上宫阙,今夕是何年 ?</p>
    </template>
    <a>月几时有,把酒问青天</a>
  </Tooltip>
  <br/>
  <br/>
  <br/>
  <Tooltip :title="change?'窗前明月光':'凝视地上霜,好冷！'">
    <a @click="clickHandle">Click me!</a>
  </Tooltip>

</template>
<script>
export default{
  data() {
    return {
      change:false
    }
  },
  methods:{
    clickHandle(){
      this.change = !this.change
    }
  }
}
</script>
```