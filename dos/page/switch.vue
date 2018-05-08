<template>
  <div>
    <h2>Switch 开关</h2>
    <Alert>注意：没有使用 kui-loader 时，必须使用 k-switch 标签。</Alert>
    <h3>代码示例</h3>
    <Row gutter="8">
      <Col span="12">
      <Demo title="基本用法" layout="vertical">
        <div slot="content">
          <span>{{checked}}</span>
          <Switch v-model="checked"></Switch>
          <!-- <Button @click="test" mini>test</Button> -->
        </div>
        <div slot="desc">可使用
          <code>v-model</code>进行数据双向绑定</div>
        <div slot="code">{{code.base}}</div>
      </Demo>
      </Col>
      <Col span="12">
      <Demo title="主题" layout="vertical">
        <div slot="content">
          <Switch :value="true"></Switch>
          <Switch :value="true" type="success"></Switch>
          <Switch :value="true" type="danger"></Switch>
          <Switch :value="true" type="warning"></Switch>
        </div>
        <div slot="desc">设置
          <code>type</code>属性可改变组件主题</div>
        <div slot="code">{{code.theme}}</div>
      </Demo>
      </Col>
    </Row>
    <Row gutter="8">
      <Col span="12">
      <Demo title="文字" layout="vertical">
        <div slot="content">
          <Switch :value="false" true-text="是" false-text="否"></Switch>
        </div>
        <div slot="desc">通过
          <code>true-text</code>和
          <code>false-text</code>设置选中和非选中呈现文字</div>
        <div slot="code">{{code.text}}</div>
      </Demo>
      </Col>
      <Col span="12">
      <Demo title="禁用" layout="vertical">
        <div slot="content">
          <Switch :value="false" disabled></Switch>
          <Switch :value="true" disabled></Switch>
          <Switch :value="true" disabled true-text="是" false-text="否"></Switch>
        </div>
        <div slot="desc">通过
          <code>disabled</code>属性设置组件是否被禁用</div>
        <div slot="code">{{code.disabled}}</div>
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
          <td>指定当前是否选中，可以使用 v-model 双向绑定数据</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>禁用开关 </td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>type</td>
          <td>主题颜色 可传入 success，warning，danger，primary </td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>true-text</td>
          <td>当value为true时 ，显示的文字</td>
          <td>String </td>
          <td>-</td>
        </tr>
        <tr>
          <td>false-text</td>
          <td>当value为false时 ，显示的文字</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>change</td>
          <td>当value 改变时触发,返回true | false</td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import code from '../code/switch'
import Demo from '../components/demo'
export default {
  components: { Demo },
  data() {
    return {
      code: code,
      checked: false,
    };
  },
};
</script>
