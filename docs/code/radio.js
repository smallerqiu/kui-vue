let code = {}

code.base=`<p>{{checked}}</p>
<Radio v-model="checked" @change="change">测试</Radio>
<Button @click="checked=!checked">Click me</Button>`

code.disabled = `<Radio label="葡萄🍇" disabled :value="true"></Radio>
<Radio label="梨子🍐" disabled></Radio>`
code.group = `<p>当前选中值：{{data}}</p>
<RadioGroup v-model="data" @change="change">
  <Radio label="0">苹果🍎</Radio>
  <Radio label="1">橘子🍊</Radio>
  <Radio label="2">香蕉🍌</Radio>
  <Radio label="3">栗子🌰</Radio>
  <Radio label="4">葡萄🍇</Radio>
  <Radio label="5" disabled>梨子🍐</Radio>
</RadioGroup>
<Button @click="data=''">清除</Button>
<Button @click="data='0'">选中苹果</Button>
data() {
  return {
    checked:true,
    data: "0",
  };
},
methods: {
  change(v) {
    console.log(v);
  }
}`
code.groupbutton =`<RadioGroup value="苹果">
  <RadioButton label="苹果"></RadioButton>
  <RadioButton label="橘子"></RadioButton>
  <RadioButton label="香蕉"></RadioButton>
  <RadioButton label="梨子"></RadioButton>
</RadioGroup>
<br/>
<br/>
<RadioGroup value="苹果"  mini>
  <RadioButton label="苹果"></RadioButton>
  <RadioButton label="橘子"></RadioButton>
  <RadioButton label="香蕉"></RadioButton>
  <RadioButton label="梨子" disabled></RadioButton>
</RadioGroup>
<br/>
<br/>
<RadioGroup value="苹果"  disabled mini>
  <RadioButton label="苹果"></RadioButton>
  <RadioButton label="橘子"></RadioButton>
  <RadioButton label="香蕉"></RadioButton>
  <RadioButton label="梨子" disabled></RadioButton>
</RadioGroup>`
export default code