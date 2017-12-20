
<template>
  <div>
    <h2>DatePicker 日期选择器</h2>
    <h3>代码示例</h3>
    <Row padding="10">
      <Col span="6">
      <h4>默认</h4>
      <DatePicker></DatePicker>
      </Col>
      <Col span="6">
      <h4>年</h4>
      <DatePicker format="YYYY"></DatePicker>
      </Col>
      <Col span="6">
      <h4>月</h4>
      <DatePicker format="MM"></DatePicker>
      </Col>
      <Col span="6">
      <h4>时间</h4>
      <DatePicker format="YYYY-MM-DD HH:mm:ss"></DatePicker>
      </Col>
    </Row>
    <Row padding="10">
      <Col span="6">
      <h4>范围</h4>
      <DatePicker v-model="d2" clearable></DatePicker>
      </Col>
      <Col span="6">
      <h4>范围分离</h4>
      <DatePicker range-separator="至" v-model="d2" clearable></DatePicker>
      </Col>
      <Col span="6">
      <h4>清除</h4>
      <DatePicker clearable></DatePicker>
      </Col>
      <Col span="6">
      <h4>禁用</h4>
      <DatePicker disabled></DatePicker>
      </Col>
    </Row>
    <Row padding="10">
      <Col span="6">
      <h4>局部禁用</h4>
      <DatePicker :disabled-date="disabledDate" v-model="d" clearable></DatePicker>
      </Col>
      <Col span="6">
      <h4>本地化</h4>
      <DatePicker :lang="en" v-model="d" clearable></DatePicker>
      </Col>
      <Col span="6">
      <h4>时间回调</h4>
      <DatePicker :change="test"></DatePicker>
      </Col>
      <Col span="6"></Col>
    </Row>
<br>
    <div v-high>
      <pre><code class="js javascript xml">{{demo}}</code></pre>
    </div>
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
      demo: `//默认
<DatePicker></DatePicker>
//年
<DatePicker format="YYYY"></DatePicker>
//月
<DatePicker format="MM"></DatePicker>
//时间
<DatePicker format="YYYY-MM-DD HH:mm:ss"></DatePicker>
//清除
<DatePicker clearable></DatePicker>
//禁用
<DatePicker disabled></DatePicker>
//范围
<DatePicker v-model="d2" clearable></DatePicker>
//范围分离
<DatePicker range-separator="至" v-model="d2" clearable></DatePicker>
//局部禁用
<DatePicker :disabled-date="disabledDate" v-model="d" clearable></DatePicker>
//本地化
<DatePicker :lang="en" v-model="d" clearable></DatePicker>
//时间回调
<DatePicker :change="test"></DatePicker>
<script>
export default {
  data() {
    return {
      d:"",d2:[]
    }
  },
  methods: {
    test: v => { //回调
      alert("当前时间为：" + v);
    },
    disabledDate: time => { //时间局部禁用
        var day = time.getDay();
        return day === 0 || day === 6;
    }
  }
};
<\/script>`
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

