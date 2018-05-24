let code = {}

code.base=`<p>{{checked}}</p>
<Checkbox v-model="checked">单选框 </Checkbox>
<Button @click="checked=!checked">Click me</Button>
<script>
export default {
  data() {
      return {
        checked: true,
      };
  }
</script>`
code.disabled = `<CheckboxGroup :value="['苹果🍎','香蕉🍌']">
  <Checkbox label="苹果🍎" disabled></Checkbox>
  <Checkbox label="葡萄🍇" disabled></Checkbox>
  <Checkbox label="香蕉🍌" disabled></Checkbox>
  <Checkbox label="栗子🌰" disabled></Checkbox>
</CheckboxGroup>`

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
<script>
export default {
  data() {
      return {
        checked: true,
        data: ["苹果🍎", "香蕉🍌", "葡萄🍇"],
      };
  }
</script>
`

code.checkAll =`<Checkbox :value="checkAll" :indeterminate="indeterminate" @click.prevent.native="handelCheckAll">全选</Checkbox>
<CheckboxGroup v-model="check" @change="handelCheck">
  <Checkbox label="苹果🍎"></Checkbox>
  <Checkbox label="葡萄🍇"></Checkbox>
  <Checkbox label="香蕉🍌"></Checkbox>
  <Checkbox label="栗子🌰"></Checkbox>
</CheckboxGroup>
<script>
export default {
  data() {
    return {
      checkAll: false,
      indeterminate: false,
      check: []
    };
  },
  methods: {
    handelCheckAll(v) {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;

      if (this.checkAll) {
        this.check = ["苹果🍎", "香蕉🍌", "葡萄🍇", "栗子🌰"];
      } else {
        this.check = [];
      }
    },
    handelCheck(data) {
      if (data.length === 4) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    }
  }
};
</script>
`
export default code