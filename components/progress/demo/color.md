<cn>
#### 颜色和格式
自定义颜色和自定义格式。
</cn>

```vue
<template>
  <Progress :percent="percent" :format="format1" :color="color"  style="width:300px;margin-bottom:30px;"/>
  <Progress :percent="percent" type="circle" :format="format2" :color="color" />
  <Progress :percent="percent" type="dashboard" :format="format3" :color="color" />
  <br/>
  <ButtonGroup circle>
    <Button @click="decline" :icon="Remove" />
    <Button @click="increase" :icon="Add" />
  </ButtonGroup>
</template>
<script>
import { Remove, Add } from "kui-icons";
export default{
  data() {
    return {
      Remove,Add,
      percent:0,
      color:''
    }
  },
  methods:{
    format2(percent){
      return percent + '℃'
    },
    format3(percent){
      return percent + '升'
    },
    format1(){
      let percent = this.percent
      if(percent < 30){
        return '空';
      } else if( percent >= 30 && percent < 50 ){
        return '弱'
      } else if( percent >= 50 && percent < 80 ){
        return '中'
      } else if( percent >= 80 ){
        return '强'
      }
    },
    increase() {
      let percent = this.percent + 5;
      if (percent > 100) {
        percent = 100;
      }
      this.percent = percent;
      this.changeColor(percent)
    },
    decline() {
      let percent = this.percent - 5;
      if (percent < 0) {
        percent = 0;
      }
      this.percent = percent;
      this.changeColor(percent)
    },
    changeColor(percent){
      let {color} = this
      if( percent >= 30 && percent < 50 ){
        color = '#bdc78d'
      } else if( percent >= 50 && percent < 80 ){
        color = '#c7b98d'
      } else if( percent >= 80 ){
        color = '#f79e08'
      }
      this.color = color
    }
  }
}
</script>  
```