<cn>
#### 颜色和格式
自定义颜色和自定义格式。
</cn>

```vue
<template>
  <Progress :percent="percent" :format="format1" :color="color"/>
  <Progress :percent="percent" type="circle" :format="format2" :color="color" />
  <Progress :percent="percent" type="dashboard" :format="format3" :color="color" />
  <br/>
  <ButtonGroup circle>
    <Button @click="decline" icon="ios-remove" />
    <Button @click="increase" icon="ios-add"/>
  </ButtonGroup>
</template>
<script>
export default{
  data(){
    return {
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
        this.color = '#bdc78d'
        return '弱'
      } else if( percent >= 50 && percent < 80 ){
        this.color = '#c7b98d'
        return '中'
      } else if( percent >= 80 ){
        this.color = '#f79e08'
        return '强'
      }
    },
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