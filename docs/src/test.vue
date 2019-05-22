 
<!--单独调试组件专用-->
 
<template>
  <div style="padding:300px;">

    <RadioGroup v-model="t">
      <Radio :label="x.b" v-for="(x,i) in test" :key="i">{{x.a}}</Radio>
    </RadioGroup>
    <Select v-model="t">
      <Option :value="x.b" v-for="(x,i) in test" :key="i">{{x.a}}</Option>
    </Select>
    <div>{{cr}}</div>
    <CheckboxGroup v-model="cr">
      <Checkbox v-for="(x,i) in test" :key="i" :label="x.b">{{x.a}}</Checkbox>
    </CheckboxGroup>
    <Modal v-model="a">
      <!-- <iframe src="https://www.baidu.com" style="height:100%;width:100%;"></iframe> -->
    </Modal>
    {{page}}
    <Page :total="total" :curent="page" :pagesize="10" show-sizer show-total show-elevator mini @change="(p)=>page=p" ></Page>
    <Button @click="ttt">test</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 100,page:1,
      a: false,
      cr: [],
      test: [],
      t: '',
      // test: [{ a: 1, b: 1 }, { a: 2, b: 0 }]
    }
  },
  mounted() {
    setTimeout(e => {
      this.test = [{ a: 'a1', b: 'b1' }, { a: 'a2', b: 'b2' }]
      // this.t = 1
    }, 1000)
  },
  methods: {
    ttt() {
      this.total = 79
    }
  }
}
</script>

