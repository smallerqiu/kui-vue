<cn>
#### 基本 
最简单的用法。
</cn>

```tpl
<template>
  <div class="demo-affix-scroll" ref="container">
     <div class="demo-affix-inner">
        <Affix :target="() => this.$refs.container">
          <Button type="primary">Affix at the top of container</Button>
        </Affix>
     </div>
  </div>
</template>

<style>
.demo-affix-scroll{
  height:100px;
  overflow-y:scroll;
}
.demo-affix-inner{
  height:300px;
  background:#efefef;
}
</style>
```