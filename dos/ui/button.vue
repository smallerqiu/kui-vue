<template>
   <div>
      <h2>Button 按钮</h2>
      <p>注意：非 template/render 模式下，需使用 k-button。</p>
      <h3>代码示例</h3>
      <div>
         <Button>Default</Button>
         <Button type="primary">Primary</Button>
         <Button type="ghost">Ghost</Button>
         <Button type="link">link</Button>
         <br><br>
         <Button type="success">Success</Button>
         <Button type="warning">Warning</Button>
         <Button type="danger">Error</Button>
         <br><br>
         <Button type="success" mini>Success</Button>
         <Button type="warning" circle>Warning</Button>
         <Button type="primary" circle mini>primary</Button>
      </div>
      <p>代码如下</p>
      <div v-high>
         <pre>
            <code class="xml html">{{btn}}</code>
         </pre>
      </div>
      <h3>Button props</h3>
      <div class="table-border">
         <table>
            <tr>
               <td>属性</td>
               <td>说明</td>
               <td>类型</td>
               <td>默认值</td>
            </tr>
            <tr>
               <td>type</td>
               <td>按钮类型，可选值为primary、ghost、link、success、warning、danger或者不设置</td>
               <td>String</td>
               <td>-</td>
            </tr>
            <tr>
               <td>mini</td>
               <td>按钮大小</td>
               <td>Boolean	</td>
               <td>false</td>
            </tr>
            <tr>
               <td>circle</td>
               <td>按钮是否圆角</td>
               <td>Boolean	</td>
               <td>false</td>
            </tr>
         </table>
      </div>
   </div>
</template>
<script>
export default {
  data() {
    return {
      btn: `<Button>Default</Button>
<Button type="primary">Primary</Button>
<Button type="ghost">Ghost</Button>
<Button type="link">link</Button>
<br><br>
<Button type="success">Success</Button>
<Button type="warning">Warning</Button>
<Button type="danger">Error</Button>`
    };
  }
};
</script>

