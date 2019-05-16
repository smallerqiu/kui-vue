 
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
  </div>
</template>

<script>
export default {
  data() {
    return {
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

  }
}
</script>

