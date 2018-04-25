let code = {}

code.base=`<Select :width="200" v-model="select">
<Option v-for="(x,y) in data" :key="y" :value="x.value">{{x.label}}</Option>
</Select>
<Button @click="select=''">清除</Button>
<Button @click="select=1">选中橘子</Button>
data() {
    return {
      select: "3",
      data: [
        { label: "苹果🍎", value: 0 },
        { label: "橘子🍊", value: 1 },
        { label: "香蕉🍌", value: 2 },
        { label: "栗子🌰", value: 3 },
        { label: "葡萄🍇", value: 4 }
      ],
    };
  }`

code.size=`<Select :width="200" v-model="select">
<Option v-for="(x,y) in data" :key="y" :value="x.value">{{x.label}}</Option>
</Select>
<Select :width="200" v-model="select" mini >
<Option v-for="(x,y) in data" :key="y" :value="x.value">{{x.label}}</Option>
</Select>`
code.clearable =`<Select :width="200" clearable>
<Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label"></Option>
</Select>
<Select :width="200" clearable mini>
<Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label"></Option>
</Select>`

code.search=`<Select :width="200" filterable>
<Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label"></Option>
</Select>`

code.disabled=`<Select disabled :width="200"></Select>
<Select :width="200">
  <Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label" :disabled="y==3"></Option>
</Select>
data() {
    return {
      select: "3",
      data: [
        { label: "苹果🍎", value: 0 },
        { label: "橘子🍊", value: 1 },
        { label: "香蕉🍌", value: 2 },
        { label: "栗子🌰", value: 3 },
        { label: "葡萄🍇", value: 4 }
      ],
    };
  }`

export default code