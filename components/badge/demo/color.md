<cn>
#### 多彩徽标 
多种预设色彩的徽标样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。
</cn>

```tpl
<template>
  <div class="demo-dot">
    <h4 style="margin-bottom: 16px">
      Presets:
    </h4>
    <div>
      <div v-for="color in colors" :key="color">
        <Badge :color="color" :text="color" />
      </div>
    </div>
    <h4 style="margin: 16px 0">
      Custom:
    </h4>
    <div>
      <Badge color="#c20" text="#c20"  />
      <br />
      <Badge color="#39f" text="#39f" />
      <br />
      <Badge color="#e3f" text="#e3f" />
      <br />
      <Badge color="#6c0" text="#6c0" />
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      colors:[
      'pink',
      'red',
      'yellow',
      'orange',
      'cyan',
      'green',
      'blue',
      'purple',
      'geekblue',
      'magenta',
      'volcano',
      'gold',
      'lime',
      ]
    }
  }
} 
</script>
<style scoped>
.demo-dot .box{
  width:50px;
  height:50px;
  background:#ddd;
  border-radius:5px;
}
.demo-dot .k-badge{
  margin-right:20px;
}
</style>
```