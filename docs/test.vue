<template>
    <div style="width:520px;font-size:12px;padding:200px;">
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
     保留2位小数, 输出：{{n3}}<br/>
     <InputNumber :precision="2" v-model="n3" />
     <br/>
     <br/>
     货币，千分位,输出： {{n4}}<br/>
     <InputNumber 
      @change="log"
      v-model="n4"
      :min="0"
      :formatter="value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
      :parser="value => value.replace(/\￥\s?|(,*)/g, '')"
      />
      <br/>
      <br/>
      百分比% ,输出： {{n5}}<br/>
      <InputNumber
        v-model="n5"
        :min="0"
        :max="100"
        :formatter="value => `${value}%`"
        :parser="value => value.replace('%', '')"
      />
      <br/>
      <br/>
      只能输入数字,输出： {{n6}}<br/>
      <InputNumber
        v-model="n6"
        :formatter="value => value.replace(/\D/g, '')"
      />
      <br/>
      <br/>
      自定义 ,输出：{{n7}}<br/>
      <InputNumber
        v-model="n7"
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
      n1: 1,
      n3: 3.14159,
      n4: 1000,
      n5: 100,
      n6: '',
      n7: 111111
    }
  },
  methods:{
    log(value){
      console.log(value)
    }
  }
}
</script>
