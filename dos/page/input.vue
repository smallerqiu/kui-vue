<template>
  <div>
    <h2>Input 输入框</h2>
    <Alert>注意：非 template/render 模式下，需使用 k-input。</Alert>
    <h3>基础</h3>
    <Input type="text" width="200" placeholder="请输入内容..."></Input>
    <Code lang="xml html">{{demo1}}</Code>
     <h3>可清除</h3>
    <Input type="text" width="200" placeholder="请输入内容..." clearable></Input>
    <Code lang="xml html">{{demo6}}</Code>
    <h3>带图标</h3>
    <Input type="text" width="200" placeholder="请输入内容..." icon="ios-person" @onClick="iconClick"></Input>
    <Input type="text" width="200" placeholder="请输入内容..." icon="ios-search" @onClick="iconClick"></Input>
    <Code lang="xml html">{{demo5}}</Code>
    <h3>尺寸</h3>
    <div style="display:inline-block;">
      <Input type="text" width="200" placeholder="请输入内容..."></Input>
      <Input type="text" width="200" mini placeholder="请输入内容..."></Input>
      <Input type="text" width="200" mini placeholder="请输入内容1..." icon="ios-person" @onClick="iconClick"></Input>
    </div>
    <Code lang="xml html">{{demo2}}</Code>
    <h3>文本域</h3>
    <Input width="300" type="textarea" :rows="4" placeholder="请输入内容..."></Input>
    <Code lang="xml html">{{demo3}}</Code>
    <h3>禁用</h3>
    <div style="display:inline-block;">
      <Input width="300" type="textarea" :rows="4" placeholder="请输入银行卡密码" disabled style="float:left;"></Input>
      <Input type="text" width="200" placeholder="请输入内容..." disabled style="margin-left:15px;float:left;"></Input>
    </div>
    <Code lang="xml html">{{demo4}}</Code>
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
          <td>输入框类型，可选值为 text、password、textarea、url、email、date</td>
          <td>String</td>
          <td>text</td>
        </tr>
        <tr>
          <td>width</td>
          <td>组件的宽度</td>
          <td>String,Number</td>
          <td>200</td>
        </tr>
        <tr>
          <td>value </td>
          <td>绑定的值，可使用 v-model 双向绑定 </td>
          <td>String | Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>icon </td>
          <td>输入框尾部图标，仅在 text 类型下有效 </td>
          <td>String</td>
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
        <tr>
          <td>enter</td>
          <td>按下回车键时触发</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>focus</td>
          <td>输入框聚焦时触发</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>输入框失去焦点时触发</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>keyup</td>
          <td>原生的 keyup 事件</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>keydown</td>
          <td>原生的 keydown 事件</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>keypress</td>
          <td>原生的 keypress 事件</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>onClick</td>
          <td>icon的点击事件</td>
          <td>Function</td>
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
      demo1: `<Input type="text" width="200"  placeholder="请输入内容..."></Input>`,
      demo2: `<Input type="text" width="200"  placeholder="请输入内容..."></Input>
<Input type="text" width="200"  mini placeholder="请输入内容..."></Input>`,
      demo3: `<Input  width="300" type="textarea" :rows="4" placeholder="请输入内容..."></Input>`,
      demo4: `<Input  width="300" type="textarea" :rows="4" placeholder="请输入银行卡密码" disabled></Input>
<Input type="text" width="200"  placeholder="请输入内容..." disabled></Input>`,
      demo5: `<Input type="text" width="200" placeholder="请输入内容..." icon="ios-person" @onClick="iconClick"></Input>
<Input type="text" width="200" placeholder="请输入内容..." icon="ios-search" @onClick="iconClick"></Input>
methods: {
    iconClick() {
      this.$Message.info("点击图标事件");
    }
}`,
  demo6:`<Input type="text" width="200" placeholder="请输入内容..." clearable></Input>`
    };
  },
  methods: {
    iconClick() {
      this.$Message.info("点击图标事件");
    }
  }
};
</script>
