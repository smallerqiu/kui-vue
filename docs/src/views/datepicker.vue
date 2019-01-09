
<template>
  <div>
    <h2>DatePicker 日期选择器</h2>
    <Alert>注意：非 template/render 模式下，需使用 date-picker。</Alert>
    <h3>代码示例</h3>
    <Row gutter="8">
      <Col span="12">
      <Demo title="基础用法" layout="vertical">
        <div slot="content">
          <DatePicker></DatePicker>
        </div>
        <div slot="desc">可使用
          <code>v-model</code>进行数据双向绑定</div>
        <div slot="code">{{code.base}}</div>
      </Demo>
      <Demo title="可清除" layout="vertical">
        <div slot="content">
          <DatePicker clearable></DatePicker>
        </div>
        <div slot="desc">
          <div slot="desc">通过设置
            <code>clearble</code>属性可控制是否显示清空按钮</div>
        </div>
        <div slot="code">{{code.clearable}}</div>
      </Demo>
      <Demo title="尺寸" layout="vertical">
        <div slot="content">
          <DatePicker></DatePicker>
          <DatePicker mini></DatePicker>
        </div>
        <div slot="desc">
          <div slot="desc">通过设置
            <code>mini</code>可设置组件大小，
            <code>width</code>属性可控制组件宽度</div>
        </div>
        <div slot="code">{{code.size}}</div>
      </Demo>
      <Demo title="日期单位" layout="vertical">
        <div slot="content">
          <Row gutter="10">
            <Col span="8"> 年
            <DatePicker format="YYYY"></DatePicker>
            </Col>
            <Col span="8"> 月
            <DatePicker format="MM"></DatePicker>
            </Col>
            <Col span="8"> 时间
            <DatePicker format="YYYY-MM-DD HH:mm:ss"></DatePicker>
            </Col>
          </Row>
        </div>
        <div slot="desc">通过
          <code>format</code>来控制显示年月日或者其他格式</div>
        <div slot="code">{{code.date}}</div>
      </Demo>
      </Col>
      <Col span="12">
      <Demo title="选择日期范围" layout="vertical">
        <div slot="content">
          <Row padding="10">
            <Col span="8">
            <h4>范围</h4>
            <DatePicker :value="[]"></DatePicker>
            </Col>
            <Col span="8">
            <h4>范围符号</h4>
            <DatePicker range-separator="至" :value="[]"></DatePicker>
            </Col>
          </Row>
        </div>
        <div slot="desc">可以通过
          <code>range-separator</code>来设置展示分隔符</div>
        <div slot="code">{{code.range}}</div>
      </Demo>
      <Demo title="禁用" layout="vertical">
        <div slot="content">
          <Row padding="10">
            <Col span="8">
            <h4>局部禁用</h4>
            <DatePicker :disabled-date="disabledDate"></DatePicker>
            </Col>
            <Col span="8">
            <h4>禁用</h4>
            <DatePicker disabled></DatePicker>
            </Col>
          </Row>
        </div>
        <div slot="desc">
          <div slot="desc">设置
            <code>disabled</code>属性来控制组件是否可用</div>
        </div>
        <div slot="code">{{code.disabled}}</div>
      </Demo>
      <Demo title="多语言" layout="vertical">
        <div slot="content">英文：
          <DatePicker lang="en"></DatePicker>
          中文：
          <DatePicker></DatePicker>
        </div>
        <div slot="desc">通过
          <code>lang</code>来控制语言类型，目前有英文和中文两种，默认中文
          <code>zh-cn</code>
        </div>
        <div slot="code">{{code.lang}}</div>
      </Demo>
      </Col>
    </Row>

    <h3>API</h3>
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
          <td>mini</td>
          <td>组件尺寸大小</td>
          <td>Boolean </td>
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
          <td>transfer</td>
          <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
          <td>Boolean</td>
          <td>false</td>
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
        <tr>
          <td>change</td>
          <td>默认值改变之后的回调，返回当前选择的时间，字符串</td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import code from '../code/datepicker'
import Demo from '../components/demo'
export default {
  components: { Demo },
  data() {
    return {
      code: code,
    };
  },
  methods: {
    disabledDate: time => {
      var day = time.getDay();
      return day === 0 || day === 6;
    }
  }
};
</script>

