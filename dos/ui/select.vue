<template>
  <div>
    <h2>Select 选择器</h2>
    <p>注意：非 template/render 模式下，需使用 k-select</p>
    <p>由于没有太多考虑适用场景，简单粗暴的实现了基础功能。</p>
    <h3>代码示例 </h3>
    <Button @click="test">test</Button>
    <Select :data="data" @change="change" :width="200" clearable></Select> &nbsp;
    <Select v-model="d" :data="data" @change="change" :width="300" ></Select> &nbsp;
    <Select v-model="d1" :data="data" disabled :width="200"></Select>
    <Select v-model="d2" :width="200"></Select>
    <br>
    <br>
    <div v-high>
      <pre><code class="javascript sql html">{{demo}}</code></pre>
    </div>
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
          <td>指定选中项目的 value 值，可以使用 v-model 双向绑定数据</td>
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
          <td>在选项状态发生改变时触发，返回选择项</td>
          <td>{value:xx,label:xx}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      d: "1",
      d1: "2",
      d2: "3",
      data: [
        { label: "苹果🍎", value: 0 },
        { label: "橘子🍊", value: 1 },
        { label: "香蕉🍌", value: 2 },
        { label: "栗子🌰", value: 3 },
        { label: "葡萄🍇", value: 4 }
      ],
      demo: `<Select :data="data" @change="change" :width="200" clearable></Select>
<Select v-model="d" :data="data" @change="change" :width="300" ></Select>
<Select v-model="d" :data="data" disabled :width="200"></Select>
<script>
export default {
  data() {
    return {
      d: "3",
      data: [
        { label: "苹果🍎", value: 0 },
        { label: "橘子🍊", value: 1 },
        { label: "香蕉🍌", value: 2 },
        { label: "栗子🌰", value: 3 },
        { label: "葡萄🍇", value: 4 }
      ],
    };
  },
  methods: {
    change(item) {
      console.log(item);
    }
  }
};
<\/script>`
    };
  },
  methods: {
    change(item) {
      console.log('call',item);
    },
    test(){
      this.d= ''
    }
  }
};
</script>
