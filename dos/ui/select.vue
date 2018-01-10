<template>
  <div>
    <h2>Select 选择器</h2>
    <p>注意：非 template/render 模式下，需使用 k-select</p>
    <p>由于没有太多考虑适用场景，简单粗暴的实现了基础功能。</p>
    <h3>基础 </h3>
    <Select :width="200" v-model="v1">
      <Option v-for="(x,y) in data2" :key="y" :value="x.value">{{x.label}}</Option>
    </Select>
    <Code lang="xml html">{{demo1}}</Code>
    <h3>可清除</h3>
    <Select :width="200" clearable>
      <Option v-for="(x,y) in data2" :key="y" :value="x.value" :label="x.label"></Option>
    </Select>
    <Code lang="xml html">{{demo2}}</Code>
    <h3>禁用</h3>
    <Select disabled :width="200"></Select>&nbsp;&nbsp;
    <Select :width="200">
      <Option v-for="(x,y) in data3" :key="y" :value="x.value" :label="x.label" :disabled="x.disabled"></Option>
    </Select>
    <Code lang="xml html">{{demo3}}</Code>
    <h3>Select props</h3>
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
      </table>
    </div>
    <h3>Select events </h3>
    <div class="table-border">
      <table>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
        <tr>
          <td>change</td>
          <td>在选项状态发生改变时触发，返回选择项</td>
          <td>{value:xx,label:xx}</td>
        </tr>
      </table>
    </div>
    <h3>Option props</h3>
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
          <td>disabled</td>
          <td>是否禁用当前项</td>
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


