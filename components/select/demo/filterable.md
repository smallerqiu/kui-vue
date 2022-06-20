<cn>
#### 过滤
通过设置 `filterable` 值来呈现过滤模式
</cn>

```vue
<template>
  <div class="demo-select">
    <span>单选过滤 :</span>
    <Select 
      size="large"
      :width="300"
      v-model="data" 
      placeholder="单选过滤" filterable>
      <Option :value="v" :label="v" v-for="(v,i) in options" :key="i"/>
    </Select>
    <p></p>
    <br/>
    <span>多选过滤 :</span>
    <Select 
      class="demo-select"
      multiple 
      :width="300"
      v-model="data2" 
      placeholder="多选过滤" filterable >
      <Option :value="v" :label="v" v-for="(v,i) in options" :key="i"/>
    </Select>
  </div>
</template>
<script>
export default{
  data() {
   return {
     options:['almond','apple','apple core','apple juice','apple skin','apricot','apricot flesh','apricot pit','areca nut','banana','banana skin','bargain price','beechnut','Beijing flowering crab','bitter','bitterness','bitter orange','blackberry','canned fruit','carambola','cherry','cherry pit','cherry pulp','chestnut','Chinese chestnut','Chinese date','Chinese gooseberry','Chinese walnut','coconut','coconut milk','coconut water','cold storage','cold store','crisp','cumquat','damson plum','Dangshan pear','date','date pit','decayed fruit','downy pitch','dry fruit','duke','early-maturing','fig','filbert','first class','flat peach','flavour','flesh','flesh fruit','fresh','fresh litchi','fruiterer','fruit in bags','fruit knife','fruits of the season','gingko','give full weigh','give short weight','grape','grape juice','grape skin','grapestone','greengage','Hami melon','Hard','haw','hawthorn','hazel','honey peach','in season','juicy','juicy peach','jujube','kernel','kumquat','late-maturing','lemon','litchi','litchi rind','longan','longan pulp','loquat','mandarine','mango','mature','morello','muskmelon','navel orange','nut','nut meat','nut shell','oleaster','olive','orange','orange peel','papaya','peach','pear','perishable','pineapple','plum','plumcot','pomegranate','pomelo','red bayberry','reduced price','ripe','rotten fruit','seasonable','seedless orange','special-grade','strawberry','sultana','superfine','tangerine','tart','tender','tinned fruit','unripe','walnut','walnut kernel','water chestnut','watermelon'],
     data:'',
     data2:[],
   } 
  }
}
</script> 
<style lang="less">
.demo-select {
  .k-select-item,.k-select-tag{
    text-transform: capitalize;
  }
}
</style>
```