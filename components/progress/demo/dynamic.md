<cn>
#### 动态展示
会动的进度条才是好进度条。
</cn>

```vue
<template>
  <Progress :percent="percent" style="width:300px;margin-bottom:30px;"/>
  <Progress :percent="percent" type="circle"/>
  <Progress :percent="percent" type="dashboard" />
  <br/>
  <ButtonGroup circle>
    <Button @click="decline" :icon="Remove" />
    <Button @click="increase" :icon="Add"/>
  </ButtonGroup>
</template>
<script>
import { Remove, Add } from "kui-icons";
export default{
  data() {
    return {
      Remove,Add,
      percent:30
    }
  },
  methods:{
    increase() {
      let percent = this.percent + 5;
      if (percent > 100) {
        percent = 100;
      }
      this.percent = percent;
    },
    decline() {
      let percent = this.percent - 5;
      if (percent < 0) {
        percent = 0;
      }
      this.percent = percent;
    },
  }
}
</script>  
```