<cn>
#### 远程搜索
通过设置 `search` 值来呈现过滤模式,设置 `loading` 展示加载模式
</cn>

```vue
<template>
  <div class="demo-select">
    <Space>
      <span>单选搜索: </span>
      <Select 
        v-model="s1" 
        :width="300"
        @search="search1"
        :loading="loading1"
        placeholder="单选搜索">
        <Option :value="v" :label="v" v-for="(v,i) in options1" :key="i"/>
      </Select>
      </Space>
    <p></p>
    <br/>
    <Space>
      <span>多选搜索</span>
      <Select 
        class="demo-select"
        multiple 
        :width="300"
        :loading="loading2"
        @search="search2"
        v-model="s2" 
        placeholder="多选过滤">
        <Option :value="v" :label="v" v-for="(v,i) in options2" :key="i"/>
      </Select>
    </Space>
  </div>
</template>
<script>
let timeout;
export default{
  data() {
   return {
     data:['almond','apple','apple core','apple juice','apple skin','apricot','apricot flesh','apricot pit','areca nut','banana','banana skin','bargain price','beechnut','Beijing flowering crab','bitter','bitterness','bitter orange','blackberry','canned fruit','carambola','cherry','cherry pit','cherry pulp','chestnut','Chinese chestnut','Chinese date','Chinese gooseberry','Chinese walnut','coconut','coconut milk','coconut water','cold storage','cold store','crisp','cumquat','damson plum','Dangshan pear','date','date pit','decayed fruit','downy pitch','dry fruit','duke','early-maturing','fig','filbert','first class','flat peach','flavour','flesh','flesh fruit','fresh','fresh litchi','fruiterer','fruit in bags','fruit knife','fruits of the season','gingko','give full weigh','give short weight','grape','grape juice','grape skin','grapestone','greengage','Hami melon','Hard','haw','hawthorn','hazel','honey peach','in season','juicy','juicy peach','jujube','kernel','kumquat','late-maturing','lemon','litchi','litchi rind','longan','longan pulp','loquat','mandarine','mango','mature','morello','muskmelon','navel orange','nut','nut meat','nut shell','oleaster','olive','orange','orange peel','papaya','peach','pear','perishable','pineapple','plum','plumcot','pomegranate','pomelo','red bayberry','reduced price','ripe','rotten fruit','seasonable','seedless orange','special-grade','strawberry','sultana','superfine','tangerine','tart','tender','tinned fruit','unripe','walnut','walnut kernel','water chestnut','watermelon'],
     options1:[],options2:[],
     s1:'',
     loading1:false,
     loading2:false,
     s2:[],
   } 
  },
  methods:{
    search1(e){
      this.loading1 = true
      //模拟异步请求
      if(timeout){
        clearTimeout(timeout)
        timeout = null
      }
      timeout = setTimeout(t=>{
       this.options1 =  this.data.filter(x=>x.indexOf(e.target.value)>=0)
       this.loading1 = false
      },1500)
    },
    search2(e){
      this.loading2 = true
      //模拟异步请求
      if(timeout){
        clearTimeout(timeout)
        timeout = null
      }
      timeout = setTimeout(t=>{
       this.options2 =  this.data.filter(x=>x.indexOf(e.target.value)>=0)
       this.loading2 = false
      },1500)
    }
  }
}
</script>
```