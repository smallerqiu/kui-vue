<template>
  <div>
    <h2>Radio 单选框</h2>
    <h3>代码示例</h3>
    <Row gutter="8">
      <Col span="12">
      <Demo title="基础" layout="vertical">
        <div slot="content">
          <span>{{checked}}</span><br/>
          <Radio v-model="checked" @change="change">测试</Radio>
          <Button @click="checked=!checked" mini style="margin:0">Click me</Button>
        </div>
        <div slot="desc">单独使用可使用
          <code>v-model</code>双向绑定数据</div>
        <div slot="code">{{code.base}}</div>
      </Demo>
      <Demo title="组合使用">
        <div slot="content">
          <p>当前选中值：{{data}}</p>
          <RadioGroup v-model="data" @change="change" >
            <Radio label="0">苹果🍎</Radio>
            <Radio label="1">橘子🍊</Radio>
            <Radio label="2">香蕉🍌</Radio>
            <Radio label="3">栗子🌰</Radio>
            <Radio label="4">葡萄🍇</Radio>
            <Radio label="5" disabled>梨子🍐</Radio>
          </RadioGroup>
          <br/>
          <br/>
          <Button @click="data=''">清除</Button>
          <Button @click="data='0'">选中苹果</Button>
        </div>
        <div slot="desc">结合
          <code>RadioGroup</code>可以组合使用</div>
        <div slot="code">{{code.group}}</div>
      </Demo>
      </Col>
      <Col span="12">
      <Demo title="禁用" layout="vertical">
        <div slot="content">
          <Radio label="葡萄🍇" disabled :value="true"></Radio>
          <Radio label="梨子🍐" disabled></Radio>
        </div>
        <div slot="desc">通过
          <code>disabled</code>设置组件是否被禁用</div>
        <div slot="code">{{code.disabled}}</div>
      </Demo>
      <Demo title="组合使用">
        <div slot="content">
          <RadioGroup v-model="data1" @change="change">
            <RadioButton label="苹果"></RadioButton>
            <RadioButton label="橘子"></RadioButton>
            <RadioButton label="香蕉"></RadioButton>
            <RadioButton label="梨子"></RadioButton>
          </RadioGroup>
          <br/>
          <br/>
          <RadioGroup v-model="data2" @change="change" mini>
            <RadioButton label="苹果"></RadioButton>
            <RadioButton label="橘子"></RadioButton>
            <RadioButton label="香蕉"></RadioButton>
            <RadioButton label="梨子" disabled></RadioButton>
          </RadioGroup>
          <br/>
          <br/>
          <RadioGroup v-model="data3" @change="change" disabled mini>
            <RadioButton label="苹果"></RadioButton>
            <RadioButton label="橘子"></RadioButton>
            <RadioButton label="香蕉"></RadioButton>
            <RadioButton label="梨子" disabled></RadioButton>
          </RadioGroup>
        </div>
        <div slot="desc">结合
          <code>RadioGroup</code>可以组合使用</div>
        <div slot="code">{{code.groupbutton}}</div>
      </Demo>
      </Col>
    </Row>

    <h3>Radio API</h3>
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
        <tr>
          <td>change</td>
          <td>在选项状态发生改变时触发，返回当前状态</td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </table>
    </div>
    <h3>RadioGroup API</h3>
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
          <td>change</td>
          <td>在选项状态发生改变时触发，返回当前选中的项</td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import code from '../code/radio'
import Demo from '../components/demo'
export default {
  components: { Demo },
  data() {
    return {
      code: code,
      checked: true,
      data: "0",
      data1: '苹果',
      data2: '苹果',
      data3: '苹果',
    };
  },
  methods: {
    change(v) {
      console.log(v);
    }
  }
};
</script>

