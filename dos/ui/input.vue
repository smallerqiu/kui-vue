<template>
  <div>
    <h2>Input 输入框</h2>
    <p>注意：非 template/render 模式下，需使用 k-input。</p>
    <br>
    <p>当前输入：{{d}}</p>
    <Row>
      <Col span="6">
      <Input type="text" width="200" v-model="d" placeholder="请输入银行卡号"></Input>
      </Col>
      <Col span="6">
      <Input type="password" width="200" placeholder="请输入银行卡密码"></Input>
      </Col>
      <Col span="6">
      <Input type="password" width="200" placeholder="请输入银行卡密码" mini></Input>
      </Col>
      <Col span="6">
      <Input type="password" width="200" placeholder="请输入银行卡密码" disabled></Input>
      </Col>
    </Row>
    <br>
    <Row>
      <Col span="12">
      <Input v-model="d" width="300" type="textarea" :rows="4" placeholder="请输入银行卡密码"></Input>
      </Col>
      <Col span="12">
      <Input v-model="d" width="300" type="textarea" :rows="4" placeholder="请输入银行卡密码" disabled></Input>
      </Col>
    </Row>
    <br>
    <div v-high>
      <pre><code>{{demo}}</code></pre>
    </div>
    <h3>Input props </h3>
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
          <td>输入框类型，可选值为 text、password、textarea、url、email、date</td>
          <td>String</td>
          <td>text</td>
        </tr>
        <tr>
          <td>value </td>
          <td>绑定的值，可使用 v-model 双向绑定 </td>
          <td>String | Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>占位文本 </td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>设置输入框为禁用状态</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>readonly</td>
          <td>设置输入框为只读</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>maxlength</td>
          <td>最大输入长度</td>
          <td>Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>rows</td>
          <td>文本域默认行数，仅在 textarea 类型下有效</td>
          <td>Number</td>
          <td>2</td>
        </tr>
        <tr>
          <td>number</td>
          <td>将用户的输入转换为 Number 类型</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>autocomplete</td>
          <td>原生的自动完成功能，可选值为 off 和 on</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>spellcheck</td>
          <td>原生的 spellcheck 属性</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </table>
    </div>
    <h3>Input events</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>说明 返回值</th>
        </tr>
        <tr>
          <td>enter</td>
          <td>按下回车键时触发</td>
          <td>无</td>
        </tr>
        <tr>
          <td>focus</td>
          <td>输入框聚焦时触发</td>
          <td>输入框聚焦时触发</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>输入框失去焦点时触发</td>
          <td>无</td>
        </tr>
        <tr>
          <td>keyup</td>
          <td>原生的 keyup 事件</td>
          <td>event</td>
        </tr>
        <tr>
          <td>keydown</td>
          <td>原生的 keydown 事件</td>
          <td>event</td>
        </tr>
        <tr>
          <td>keypress</td>
          <td>原生的 keypress 事件</td>
          <td>event</td>
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
      demo: `<Row>
  <Col span="6">
  <Input type="text" width="200" v-model="d" placeholder="请输入银行卡号"></Input>
  </Col>
  <Col span="6">
  <Input type="password" width="200" placeholder="请输入银行卡密码"></Input>
  </Col>
  <Col span="6">
  <Input type="password" width="200" placeholder="请输入银行卡密码" mini></Input>
  </Col>
    <Col span="6">
  <Input type="password" width="200" placeholder="请输入银行卡密码" disabled ></Input>
  </Col>
</Row>
<br>
<Row>
  <Col span="12">
  <Input v-model="d" width="300" type="textarea" :rows="4" placeholder="请输入银行卡密码"></Input>
  </Col>
  <Col span="12">
  <Input v-model="d" width="300" type="textarea" :rows="4" placeholder="请输入银行卡密码" disabled></Input>
  </Col>
</Row>`
    };
  }
};
</script>
