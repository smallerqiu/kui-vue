<template>
  <div>
    <h2>Radio 单选框</h2>
    <h3>代码示例</h3>
    <p>单独使用可使用v-model双向绑定数据</p>
    {{m}}
    <Radio v-model="m" @change="test">测试</Radio>
    <br>
    <h3>组合使用</h3>
    {{d}}<br>
    <RadioGroup v-model="d" @change="test">
      <Radio label="苹果🍎"></Radio>
      <Radio label="橘子🍊"></Radio>
      <Radio label="香蕉🍌"></Radio>
      <Radio label="栗子🌰"></Radio>
      <Radio label="葡萄🍇" disabled></Radio>
    </RadioGroup>
    <br>
    <div v-high>
      <pre><code>{{demo}}</code></pre>
    </div>
    <h3>Radio props</h3>
    <div class="table-border">
      <table>
        <tr>
          <td>属性</td>
          <td>说明</td>
          <td>类型</td>
          <td>默认值</td>
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
          <td>事件名</td>
          <td>说明</td>
          <td>返回值</td>
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
          <td>属性</td>
          <td>说明</td>
          <td>类型</td>
          <td>默认值</td>
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
          <td>事件名</td>
          <td>说明</td>
          <td>返回值</td>
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
      d: "苹果🍎",
      m: false,
      demo: `//单独使用
<Radio v-model="m">测试</Radio>
//组合使用
<RadioGroup v-model="d">
  <Radio label="苹果🍎"></Radio>
  <Radio label="橘子🍊"></Radio>
  <Radio label="香蕉🍌"></Radio>
  <Radio label="栗子🌰"></Radio>
  <Radio label="葡萄🍇" disabled></Radio>
</RadioGroup>
<script>
export default {
  data() {
    return {
      d: "苹果🍎",
      m: false,
    }
  }
}
<\/script>
`
    };
  },
  methods: {
    test(v) {
      console.log(v);
    }
  }
};
</script>
