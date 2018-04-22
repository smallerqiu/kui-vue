let code = {}

code.base=`<p>{{checked}}</p>
<Radio v-model="checked" @change="change">测试</Radio>
<Button @click="checked=!checked">Click me</Button>`

code.disabled = `<Radio label="葡萄🍇" disabled :value="true"></Radio>
<Radio label="梨子🍐" disabled></Radio>`
code.group = `<p>{{data}}</p>
<RadioGroup v-model="data" @change="change">
  <Radio label="苹果🍎"></Radio>
  <Radio label="橘子🍊"></Radio>
  <Radio label="香蕉🍌"></Radio>
  <Radio label="栗子🌰"></Radio>
  <Radio label="葡萄🍇"></Radio>
  <Radio label="梨子🍐" disabled></Radio>
</RadioGroup>
<Button @click="data=''">清除</Button>
<Button @click="data='苹果🍎'">选中苹果</Button>
data() {
    return {
      checked:true,
      data: "苹果🍎",
    };
  },
  methods: {
    change(v) {
      console.log(v);
    }
  }`
export default code