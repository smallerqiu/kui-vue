<template>
   <div>
      <h2>Alert 警告提示</h2>
      <h3>基础</h3>
      <Alert type="success">Success Text</Alert>
      <Alert type="info">Info Text</Alert>
      <Alert type="warning">Warning Text</Alert>
      <Alert type="error">Error Text</Alert>
      <Code lang="xml html">{{demo1}}</Code>
      <h3>图标</h3>
      <Alert type="success" showIcon>Success Text</Alert>
      <Alert type="info" showIcon>Info Text</Alert>
      <Alert type="warning" showIcon>Warning Text</Alert>
      <Alert type="error" showIcon>Error Text</Alert>
      <Code lang="xml html" showIcon>{{demo2}}</Code>
      <h3>可关闭</h3>
      <Alert type="success" showIcon closable>Success Text</Alert>
      <Alert type="info" showIcon closable>Info Text</Alert>
      <Alert type="warning" showIcon closable>Warning Text</Alert>
      <Alert type="error" showIcon closable>Error Text</Alert>
      <Code lang="xml html">{{demo3}}</Code>
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
               <td>showIcon</td>
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
               <td>on-close</td>
               <td>关闭时触发的回调函数 </td>
               <td>Function </td>
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
      demo1: `<Alert type="success">Success Text</Alert>
<Alert type="info">Info Text</Alert>
<Alert type="warning">Warning Text</Alert>
<Alert type="error">Error Text</Alert>`,
      demo2: `<Alert type="success" showIcon>Success Text</Alert>
<Alert type="info" showIcon>Info Text</Alert>
<Alert type="warning" showIcon>Warning Text</Alert>
<Alert type="error" showIcon>Error Text</Alert>`,
      demo3: `<Alert type="success" showIcon closable>Success Text</Alert>
<Alert type="info" showIcon closable>Info Text</Alert>
<Alert type="warning" showIcon closable>Warning Text</Alert>
<Alert type="error" showIcon closable>Error Text</Alert>`
    };
  }
};
</script>
