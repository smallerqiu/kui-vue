let code = {}

code.base=`<p>{{checked}}</p>
<Checkbox v-model="checked">单选框 </Checkbox>
<Button @click="checked=!checked">Click me</Button>`

code.group =`<CheckboxGroup v-model="data">
  <Checkbox label="苹果🍎"></Checkbox>
  <Checkbox label="橘子🍊"></Checkbox>
  <Checkbox label="香蕉🍌"></Checkbox>
  <Checkbox label="栗子🌰"></Checkbox>
  <Checkbox label="葡萄🍇" disabled></Checkbox>
  <Checkbox label="梨子🍐" disabled></Checkbox>
</CheckboxGroup>
<Button @click="data=[]">清除</Button>
<Button @click="data=['苹果🍎']">选中苹果</Button>
data() {
    return {
      checked: true,
      data: ["苹果🍎", "香蕉🍌", "葡萄🍇"],
    };
}`
export default code