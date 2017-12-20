<template>
  <div class="demo-button">
    <h2>Button 按钮</h2>
    <p>注意：非 template/render 模式下，需使用 k-button。</p>
    <h3>代码示例</h3>
    <div>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="gray">gray</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="danger">Error</Button>
      <Button type="link">link</Button>
      <br><br>
      <Button hollow>Default</Button>
      <Button type="primary" hollow>Primary</Button>
      <Button type="gray" hollow>gray</Button>
      <Button type="success" hollow>Success</Button>
      <Button type="warning" hollow>Warning</Button>
      <Button type="danger" hollow>Error</Button>
      <Button type="link" hollow>link</Button>
      <br><br>
      <Button circle>Default</Button>
      <Button type="primary" circle>Primary</Button>
      <Button type="gray" circle>gray</Button>
      <Button type="success" circle>Success</Button>
      <Button type="warning" circle>Warning</Button>
      <Button type="danger" circle>Error</Button>
      <Button type="link" circle>link</Button>
      <br><br>
      <Button mini>Default</Button>
      <Button type="primary" mini>Primary</Button>
      <Button type="gray" mini>gray</Button>
      <Button type="success" mini>Success</Button>
      <Button type="warning" mini>Warning</Button>
      <Button type="danger" mini>Error</Button>
      <Button type="link" mini>link</Button>
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
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
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
          <td>Boolean </td>
          <td>false</td>
        </tr>
        <tr>
          <td>circle</td>
          <td>按钮是否圆角</td>
          <td>Boolean </td>
          <td>false</td>
        </tr>
        <tr>
          <td>hollow</td>
          <td>按钮是否颜色镂空</td>
          <td>Boolean </td>
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
<Button type="gray">gray</Button>
<Button type="success">Success</Button>
<Button type="warning">Warning</Button>
<Button type="danger">Error</Button>
<Button type="link">link</Button>
//镂空
<Button hollow>Default</Button>
<Button type="primary" hollow>Primary</Button>
<Button type="gray" hollow>gray</Button>
<Button type="success" hollow>Success</Button>
<Button type="warning" hollow>Warning</Button>
<Button type="danger" hollow>Error</Button>
<Button type="link" hollow>link</Button>
//圆角
<Button circle>Default</Button>
<Button type="primary" circle>Primary</Button>
<Button type="gray" circle>gray</Button>
<Button type="success" circle>Success</Button>
<Button type="warning" circle>Warning</Button>
<Button type="danger" circle>Error</Button>
<Button type="link" circle>link</Button>
//迷你
<Button mini>Default</Button>
<Button type="primary" mini>Primary</Button>
<Button type="gray" mini>gray</Button>
<Button type="success" mini>Success</Button>
<Button type="warning" mini>Warning</Button>
<Button type="danger" mini>Error</Button>
<Button type="link" mini>link</Button>`
    };
  }
};
</script>

