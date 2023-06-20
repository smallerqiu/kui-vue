<cn>
#### 盘仪表进度条
盘仪表进度条。可通过`gapDegree`调节缺口大小。`strokeLinecap="square|round"` 可以调整进度条边缘的形状。
</cn>

```vue
<template>
  gapDegree：{{gap}}
  <Slider v-model="gap" :min="50" :max="160" />
  <br/>
  <br/>
  <RadioGroup :options="caps" v-model="strokeLinecap" type="button" theme="light"/>
  <br/>
  <br/>
  <Progress type="dashboard" :percent="50" :gapDegree="gap"  :strokeLinecap="strokeLinecap"/>
  <Progress type="dashboard" :percent="100" :gapDegree="gap" :strokeLinecap="strokeLinecap"/>
</template>
<script>
export default{
  data() {
    return {
      gap:140,
      strokeLinecap:'round',
      caps:[
       {label:'Butt',value:'butt'},
       {label:'Round',value:'round'},
       {label:'Square',value:'square'},
      ]
    }
  }
}
</script>
```