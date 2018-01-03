
<template>
  <div>
    <h2>DatePicker 日期选择器</h2>
    <h3>基础</h3>
    <DatePicker></DatePicker>
    <Code lang="xml html">{{demo1}}</Code>
    <h3>可清除</h3>
    <DatePicker clearable></DatePicker>
    <Code lang="xml html">{{demo5}}</Code>
    <h3>日期单位</h3>
    <Row gutter="10">
      <Col span="8">
      <h4>年</h4>
      <DatePicker format="YYYY"></DatePicker>
      </Col>
      <Col span="8">
      <h4>月</h4>
      <DatePicker format="MM"></DatePicker>
      </Col>
      <Col span="8">
      <h4>时间</h4>
      <DatePicker format="YYYY-MM-DD HH:mm:ss"></DatePicker>
      </Col>
    </Row>
    <Code lang="xml html">{{demo2}}</Code>
    <h3>选择日期范围</h3>
    <Row padding="10">
      <Col span="8">
      <h4>范围</h4>
      <DatePicker v-model="d2"></DatePicker>
      </Col>
      <Col span="8">
      <h4>范围符号</h4>
      <DatePicker range-separator="至" v-model="d2"></DatePicker>
      </Col>
    </Row>
    <h3>禁用</h3>
    <Row padding="10">
      <Col span="8">
      <h4>局部禁用</h4>
      <DatePicker :disabled-date="disabledDate" v-model="d"></DatePicker>
      </Col>
      <Col span="8">
      <h4>禁用</h4>
      <DatePicker disabled></DatePicker>
      </Col>
    </Row>
    <Code lang="xml html">{{demo3}}</Code>
    <h3>多语言</h3>
    英文：<DatePicker lang="en"></DatePicker>&nbsp;&nbsp;
    中文：<DatePicker></DatePicker>
    <Code lang="xml html">{{demo4}}</Code>
    <h3>DatePicker props</h3>
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
          <td>默认时间值</td>
          <td>Date, Array, String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>Boolen</td>
          <td>false</td>
        </tr>
        <tr>
          <td>rangeSeparator</td>
          <td>日期区间间隔符</td>
          <td>String</td>
          <td>～</td>
        </tr>
        <tr>
          <td>clearable</td>
          <td>是否显示清除图标</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>提示语</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>lang</td>
          <td>本地化，提供2中语言切换 中英，zh，en</td>
          <td>String</td>
          <td>zh</td>
        </tr>
        <tr>
          <td>disabledDate</td>
          <td>范围分离</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>format</td>
          <td>时间格式化，支持YYYY-MM-DD HH:mm:ss </td>
          <td>String</td>
          <td>YYYY-MM-DD</td>
        </tr>
      </table>
    </div>
    <h3>DatePicker events</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
        <tr>
          <td>change</td>
          <td>默认值改变之后的回调</td>
          <td>返回当前选择的时间，字符串</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      d: "",
      d2: [],
      demo1: `<DatePicker></DatePicker>`,
      demo2: `//年
<DatePicker format="YYYY"></DatePicker>
//月
<DatePicker format="MM"></DatePicker>
//时间
<DatePicker format="YYYY-MM-DD HH:mm:ss"></DatePicker>`,
      demo3: `<DatePicker :disabled-date="disabledDate" v-model="d"></DatePicker>
<DatePicker disabled></DatePicker>
<script>
export default {
    methods: {
        disabledDate: time => {
          var day = time.getDay();
          return day === 0 || day === 6;
        }
    }
}
<\/script>`,
      demo4: `<DatePicker lang="en"></DatePicker>
<DatePicker></DatePicker>`,
      demo5: `<DatePicker clearable></DatePicker>`
    };
  },
  methods: {
    test: v => {
      alert("当前时间为：" + v);
    },
    disabledDate: time => {
      var day = time.getDay();
      return day === 0 || day === 6;
    }
  }
};
</script>

