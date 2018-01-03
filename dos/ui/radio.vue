<template>
  <div>
    <h2>Radio 单选框</h2>
    <h3>基础</h3>
    <p>单独使用可使用v-model双向绑定数据</p>
    <p>{{m}}</p>
    <Radio v-model="m" @change="test">测试</Radio>
    <Code lang="xml html">{{demo1}}</Code>
    <h3>禁用</h3>
    <Radio label="葡萄🍇" disabled v-model="m1"></Radio>
    <Radio label="梨子🍐" disabled></Radio>
    <Code lang="xml html">{{demo2}}</Code>
    <h3>组合使用</h3>
    <p>{{d}}</p>
    <RadioGroup v-model="d" @change="test">
      <Radio label="苹果🍎"></Radio>
      <Radio label="橘子🍊"></Radio>
      <Radio label="香蕉🍌"></Radio>
      <Radio label="栗子🌰"></Radio>
      <Radio label="葡萄🍇" ></Radio>
      <Radio label="梨子🍐" disabled></Radio>
    </RadioGroup>
    <Code lang="xml html">{{demo3}}</Code>
    <h3>Radio props</h3>
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
          <td>只在单独使用时有效。可以使用 v-model 双向绑定数据</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>label</td>
          <td>只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目</td>
          <td> String | Number</td>
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
    <h3>Radio events </h3>
    <div class="table-border">
      <table>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
        <tr>
          <td>change</td>
          <td>在选项状态发生改变时触发，返回当前状态</td>
          <td>-</td>
        </tr>
      </table>
    </div>
    <h3>RadioGroup props</h3>
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
          <td>只在单独使用时有效。可以使用 v-model 双向绑定数据</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </table>
    </div>
    <h3>RadioGroup events </h3>
    <div class="table-border">
      <table>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
        <tr>
          <td>change</td>
          <td>在选项状态发生改变时触发，返回当前选中的项</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      m:true,
      m1:true,
      d: "苹果🍎",
      m: false,
      demo1: `<Radio v-model="m" @change="test">测试</Radio>`,
      demo2: `<Radio label="葡萄🍇" disabled v-model="m"></Radio>
<Radio label="梨子🍐" disabled></Radio>`,
      demo3: `<RadioGroup v-model="d">
  <Radio label="苹果🍎"></Radio>
  <Radio label="橘子🍊"></Radio>
  <Radio label="香蕉🍌"></Radio>
  <Radio label="栗子🌰"></Radio>
  <Radio label="葡萄🍇" disabled></Radio>
  <Radio label="梨子🍐" disabled></Radio>
</RadioGroup>`
    };
  },
  methods: {
    test(v) {
      console.log(v);
    }
  }
};
</script>
