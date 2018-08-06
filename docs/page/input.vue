<template>
  <div>
    <h2>Input 输入框</h2>
    <Alert>注意：非 template/render 模式下，需使用 k-input。</Alert>
    <h3>代码示例</h3>
    <Row gutter="8">
      <Col span="12" >
      <Demo title="基础用法" layout='vertical'>
        <div slot="content">
          <Input width="200" placeholder="请输入内容..." /> <br/>
          <Input width="200" placeholder="disabled..." disabled />
        </div>
        <div slot="desc">使用
          <code>v-model</code>进行数据双向绑定</div>
        <div slot="code">{{code.base}}</div>
      </Demo>
      <Demo title="可清除" layout='vertical'>
        <div slot="content">
          <Input type="text" width="200" placeholder="请输入内容..." clearable></Input>
        </div>
        <div slot="desc">通过设置
          <code>clearble</code>属性可控制是否显示清空按钮</div>
        <div slot="code">{{code.clearable}}</div>
      </Demo>
      <Demo title="带图标" layout='vertical'>
        <div slot="content">
          <Input type="text" width="200" placeholder="请输入用户名..."  icon-align="left" icon="ios-person" @iconClick="iconClick"></Input>
          <Input type="text" width="200" placeholder="请输入内容..." icon="ios-search" @iconClick="iconClick"></Input>
        </div>
        <div slot="desc">通过设置
          <code>icon</code>属性，可设置按钮图标，<code>icon-align</code> 设置显示位置
          <code>iconClick</code>可触发图标点击事件</div>
        <div slot="code">{{code.withIcon}}</div>
      </Demo>
      </Col>
      <Col span="12">
      <Demo title="尺寸" layout='vertical'>
        <div slot="content">
          <Input type="text" width="200" placeholder="请输入..."></Input>
          <Input type="text" width="200" mini placeholder="mini" icon="ios-person" @iconClick="iconClick"></Input>
        </div>
        <div slot="desc">通过设置
          <code>mini</code>可设置组件大小，
          <code>width</code>属性可控制组件宽度</div>
        <div slot="code">{{code.size}}</div>
      </Demo>
      <Demo title="文本域" layout='vertical'>
        <div slot="content">
          <Input width="300" type="textarea" :rows="4" placeholder="请输入内容..."></Input>
          <Input width="300" type="textarea"  :rows="1" placeholder="请输入内容..."></Input>
        </div>
        <div slot="desc">当
          <code>type</code>属性取值为
          <code>textarea</code>时组件呈现文本玉</div>
        <div slot="code">{{code.textArea}}</div>
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
          <td>输入框图标，仅在 text 类型下有效 </td>
          <td>String</td>
          <td>-</td>
        </tr>
          <tr>
          <td>icon-align </td>
          <td>输入框图标位置，可选值为left、right，仅在 text 类型下有效 </td>
          <td>String</td>
          <td>right</td>
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
          <td>iconClick</td>
          <td>icon的点击事件</td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import code from '../code/input'
import Demo from '../components/demo'
export default {
  components: { Demo },
  data() {
    return {
      code: code
    }
  },
  methods: {
    iconClick() {
      this.$Message.info("点击图标事件");
    }
  }
};
</script>
