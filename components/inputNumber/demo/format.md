<cn>
#### 高精度小数/格式化展示 
通过 formatter 格式化数字，以展示具有具体含义的数据，往往需要配合 parser 一起使用。 
</cn>

```vue
<template>
    <div style="width:520px;">
     0.1+0.2 = 0.3 (yes)     ,输出：{{n}}  
     <InputNumber :step="0.2" v-model="n"/>
     <br/>
     <br/>
     步长为 0.00000000000001 ,输出：{{n1}}     
     <InputNumber
      v-model="n1"
      :min="0"
      :max="10"
      :step="0.00000000000001"/>
     <br/>
     <br/>
     保留2位小数<br/>
     <InputNumber :precision="2" :value="3.14159" />
     <br/>
     <br/>
     货币，千分位<br/>
     <InputNumber 
      @change="log"
      :min="0"
      :value="1000"
      :formatter="value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
      :parser="value => value.replace(/\￥\s?|(,*)/g, '')"
      />
      <br/>
      <br/>
      百分比%<br/>
      <InputNumber
        :value="100"
        :min="0"
        :max="100"
        :formatter="value => `${value}%`"
        :parser="value => value.replace('%', '')"
      />
      <br/>
      <br/>
      只能输入数字<br/>
      <InputNumber
        :formatter="value => value.replace(/\D/g, '')"
      />
      <br/>
      <br/>
      自定义<br/>
      <InputNumber
        :value="111111"
        :formatter="value => String(value).split('').join('-')"
        :parser="value => value.replace(/\-/g, '')"
      />
  </div>
</template>
<script>
export default{
  data(){
    return {
      n:0.1,
      n1: 1
    }
  },
  methods:{
    log(value){
      console.log(value)
    }
  }
}
</script>
```