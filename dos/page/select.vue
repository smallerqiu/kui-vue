<template>
  <div>
    <h2>Select 选择器</h2>
    <Alert>注意：非 template/render 模式下，需使用 k-select</Alert>
    <Select width="200">
    </Select>
    <h3>基础 </h3>
    <Select :width="200" v-model="v1">
      <Option v-for="(x,y) in data2" :key="y" :value="x.value">{{x.label}}</Option>
    </Select>
    <Button @click="v1=''">清除</Button>
    <Button @click="v1='1'">选中橘子</Button>
    <Code lang="xml html">{{demo1}}</Code>
    <h3>尺寸</h3>
    <Select :width="200" v-model="v1">
      <Option v-for="(x,y) in data2" :key="y" :value="x.value">{{x.label}}</Option>
    </Select>
    <Select :width="200" v-model="v1" mini >
      <Option v-for="(x,y) in data2" :key="y" :value="x.value">{{x.label}}</Option>
    </Select>
    <Code lang="xml html">{{mini}}</Code>
    <h3>可清除</h3>
    <Select :width="200" clearable>
      <Option v-for="(x,y) in data2" :key="y" :value="x.value" :label="x.label"></Option>
    </Select>
    <Select :width="200" clearable mini>
      <Option v-for="(x,y) in data2" :key="y" :value="x.value" :label="x.label"></Option>
    </Select>
    <Code lang="xml html">{{demo2}}</Code>
    <h3>可搜索</h3>
    <Select :width="200" filterable>
      <Option v-for="(x,y) in data2" :key="y" :value="x.value" :label="x.label"></Option>
    </Select>
    <Code lang="xml html">{{demo2}}</Code>
    <h3>禁用</h3>
    <Select disabled :width="200"></Select>&nbsp;&nbsp;
    <Select :width="200">
      <Option v-for="(x,y) in data3" :key="y" :value="x.value" :label="x.label" :disabled="x.disabled"></Option>
    </Select>
    <Code lang="xml html">{{demo3}}</Code>
    <h3>Select API</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>value</td>
          <td>指定选中项目的 value 值，可以使用 v-model 双向绑定数据</td>
          <td>String,Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>width</td>
          <td>组件宽度</td>
          <td>String,Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>选择框默认文字</td>
          <td>String</td>
          <td>请选择</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用当前项</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>clearable</td>
          <td>是否可以清空选项</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>change</td>
          <td>在选项状态发生改变时触发，返回选择项{value:xx,label:xx}</td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </table>
    </div>
    <h3>Option API</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>value</td>
          <td>选项值，默认根据此属性值进行筛选，必填</td>
          <td>String,Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>label</td>
          <td>选项显示的内容</td>
          <td>String,Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>mini</td>
          <td>组件尺寸大小</td>
          <td>Boolean </td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用当前项</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>transfer</td>
          <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      v1: "3",
      d: "1",
      d1: "2",
      d2: "3",
      data1: [],
      data2: [
        { label: "苹果🍎", value: 0 },
        { label: "橘子🍊", value: 1 },
        { label: "香蕉🍌", value: 2 },
        { label: "栗子🌰", value: 3 },
        { label: "葡萄🍇", value: 4 }
      ],
      data3: [
        { label: "苹果🍎", value: 0 },
        { label: "橘子🍊", value: 1 },
        { label: "香蕉🍌", value: 2, disabled: true },
        { label: "栗子🌰", value: 3 },
        { label: "葡萄🍇", value: 4 }
      ],
      mini: `<Select :width="200" v-model="v1">
  <Option v-for="(x,y) in data2" :key="y" :value="x.value">{{x.label}}</Option>
</Select>
<Select :width="200" v-model="v1" mini>
  <Option v-for="(x,y) in data2" :key="y" :value="x.value">{{x.label}}</Option>
</Select>`,
      demo1: `<Select :width="200" v-model="v1">
  <Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label"></Option>
</Select>
<script>
export default {
  data(){
    return{
      data: [
        { label: "苹果🍎", value: 0 },
        { label: "橘子🍊", value: 1 },
        { label: "香蕉🍌", value: 2 },
        { label: "栗子🌰", value: 3 },
        { label: "葡萄🍇", value: 4 }
      ]
    }
  }
}
<\/script>`,
      demo2: `<Select :width="200" v-model="v1" clearable>
  <Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label"></Option>
</Select>
<script>
export default {
  data(){
    return{
      data: [
        { label: "苹果🍎", value: 0 },
        { label: "橘子🍊", value: 1 },
        { label: "香蕉🍌", value: 2 },
        { label: "栗子🌰", value: 3 },
        { label: "葡萄🍇", value: 4 }
      ]
    }
  }
}
<\/script>`,
      demo3: `<Select disabled :width="200"></Select>
    <Select :width="200">
<Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label"></Option>
</Select>
<script>
export default {
  data(){
    return{
      data: [
        { label: "苹果🍎", value: 0 },
        { label: "橘子🍊", value: 1 },
        { label: "香蕉🍌", value: 2, disabled:true },
        { label: "栗子🌰", value: 3 },
        { label: "葡萄🍇", value: 4 }
      ]
    }
  }
}
<\/script>`
    };
  }
};
</script>


