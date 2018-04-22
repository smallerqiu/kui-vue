<template>
  <div class="demo-button">
    <h2>Button 按钮</h2>
    <Alert>注意：非 template/render 模式下，需使用 k-button。</Alert>
    <h3>代码示例</h3>
    <Demo title="基础">
      <div slot="content">
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="gray">gray</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">link</Button>
        <div style="margin:20px 0;">
          <Button hollow>Default</Button>
          <Button type="primary" hollow>Primary</Button>
          <Button type="gray" hollow>gray</Button>
          <Button type="success" hollow>Success</Button>
          <Button type="warning" hollow>Warning</Button>
          <Button type="danger" hollow>Danger</Button>
          <Button type="link" hollow>link</Button>
        </div>
        <Button circle>Default</Button>
        <Button type="primary" circle>Primary</Button>
        <Button type="gray" circle>gray</Button>
        <Button type="success" circle>Success</Button>
        <Button type="warning" circle>Warning</Button>
        <Button type="danger" circle>Danger</Button>
        <Button type="link" circle>link</Button>
      </div>
      <div slot="desc">使用<code>type</code>、<code>hollow</code>、<code>circle</code>属性来定义 <code>Button</code> 的样式。</div>
      <div slot="code">{{code.base}} </div>
    </Demo>
    <Demo title="禁用">
      <div slot="content">
        <Button disabled>Default</Button>
        <Button disabled type="primary">Primary</Button>
        <Button disabled type="gray">gray</Button>
        <Button disabled type="success">Success</Button>
        <Button disabled type="warning">Warning</Button>
        <Button disabled type="danger">Danger</Button>
        <Button disabled type="link">link</Button>
        <div style="margin:20px 0;">
          <Button disabled hollow>Default</Button>
          <Button disabled type="primary" hollow>Primary</Button>
          <Button disabled type="gray" hollow>gray</Button>
          <Button disabled type="success" hollow>Success</Button>
          <Button disabled type="warning" hollow>Warning</Button>
          <Button disabled type="danger" hollow>Danger</Button>
          <Button disabled type="link" hollow>link</Button>
        </div>
      </div>
      <div slot="desc">通过添加<code>disabled</code>属性可将按钮设置为不可用状态。</div>
      <div slot="code">{{code.disabled}}</div>
    </Demo>

    <Code lang="xml html"> </Code>
    <Demo title="带图标">
      <div slot="content">
        <Button type="primary" icon="ios-search">搜索</Button>
        <Button type="success" icon="ios-cloud-upload-outline">上传</Button>
        <Button type="danger" icon="ios-cloud-download-outline">下载</Button>
        <Button type="primary" icon="play"></Button>
        <Button type="primary" icon="pause"></Button>
        <Button type="primary" icon="stop"></Button>
      </div>
      <div slot="desc">通过添加
        <code>icon</code>属性 设置按钮按钮图标。</div>
      <div slot="code">{{code.withIcon}}</div>
    </Demo>
    <Demo title="尺寸">
      <div slot="content">
        <Button mini>Default</Button>
        <Button type="primary" mini>Primary</Button>
        <Button type="gray" mini>gray</Button>
        <Button type="success" mini>Success</Button>
        <Button type="warning" mini>Warning</Button>
        <Button type="warning" mini icon="alert-circled">Warning</Button>
        <Button type="danger" mini>Danger</Button>
        <Button type="link" mini>link</Button>
      </div>
      <div slot="desc">通过添加
        <code>mini</code>属性 设置按钮尺寸大小。</div>
      <div slot="code">{{code.size}}</div>
    </Demo>
    <Demo title="按钮组合">
      <div slot="content">
        <ButtonGroup>
          <Button>待发货</Button>
          <Button>已发货</Button>
          <Button>已签收</Button>
        </ButtonGroup>
        <ButtonGroup circle>
          <Button>待发货</Button>
          <Button>已发货</Button>
          <Button>已签收</Button>
        </ButtonGroup>
        <ButtonGroup mini>
          <Button>待发货</Button>
          <Button>已发货</Button>
          <Button>已签收</Button>
        </ButtonGroup>
      </div>
      <div slot="desc">将多个<code>Button</code>放入<code>ButtonGroup</code>内，可实现按钮组合的效果。</div>
      <div slot="code">{{code.group}}</div>
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
          <td>按钮类型，可选值为primary、ghost、link、success、warning、danger或者不设置</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>mini</td>
          <td>按钮尺寸大小</td>
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
        <tr>
          <td>icon</td>
          <td>按钮的图标</td>
          <td>String </td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import code from '../code/button'
import Demo from '../components/demo/'
export default {
  components: { Demo },
  data() {
    return {
      code: code
    }
  }
};
</script>

