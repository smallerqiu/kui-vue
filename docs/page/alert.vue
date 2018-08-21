<template>
  <div>
    <h2>Alert 警告提示</h2>
    <h3>代码示例</h3>
    <Demo title="基础">
      <div slot="content">
        <Alert type="success">Success Text</Alert>
        <Alert type="info">Info Text</Alert>
        <Alert type="warning">Warning Text</Alert>
        <Alert type="error">Error Text</Alert>
      </div>
      <div slot="desc">通过
        <code>type</code>来控制展示类型</div>
      <div slot="code">{{code.base}}</div>
    </Demo>
    <Demo title="图标">
      <div slot="content">
        <Alert type="success" showIcon>Success Text</Alert>
        <Alert type="info" showIcon>Info Text</Alert>
        <Alert type="warning" showIcon>Warning Text</Alert>
        <Alert type="error" showIcon>Error Text</Alert>
      </div>
      <div slot="desc">
        <code>showIcon</code>来设置是否显示图标</div>
      <div slot="code">{{code.icon}}</div>
    </Demo>
    <Demo title="可关闭">
      <div slot="content">
        <Alert type="success" showIcon closable>Success Text</Alert>
        <Alert type="info" showIcon closable>Info Text</Alert>
        <Alert type="warning" showIcon closable>Warning Text</Alert>
        <Alert type="error" showIcon closable>Error Text</Alert>
      </div>
      <div slot="desc">
        <code>closable</code>来控制是否显示可关闭按钮</div>
      <div slot="code">{{code.close}}</div>
    </Demo>
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
          <td>type</td>
          <td>按钮类型，可选值为success、info、warning、error或者不设置</td>
          <td>String</td>
          <td>warning</td>
        </tr>
        <tr>
          <td>show-icon</td>
          <td>是否显示图标</td>
          <td>Boolean </td>
          <td>false</td>
        </tr>
        <tr>
          <td>closable</td>
          <td>是否显示关闭按钮</td>
          <td>Boolean </td>
          <td>false</td>
        </tr>
        <tr>
          <td>close</td>
          <td>关闭时触发的回调函数 </td>
          <td>Function </td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import Demo from '../components/demo'
import code from '../code/alert'
export default {
  components: { Demo },
  data() {
    return {
      code: code
    };
  }
};
</script>
