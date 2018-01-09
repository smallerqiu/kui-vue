<template>
  <div>
    <h2>Switch 开关</h2>
    <p>注意：没有使用 kui-loader 时，必须使用 k-switch 标签。</p>
    <h3>基本</h3>
    <p>{{m}}</p>
    <Switch v-model="m"></Switch>
    <Code lang="xml html">{{demo1}}</Code>
    <h3>主题</h3>
    <Switch v-model="m2"></Switch>&nbsp;&nbsp;
    <Switch v-model="m2" type="success"></Switch>&nbsp;&nbsp;
    <Switch v-model="m2" type="primary"></Switch>&nbsp;&nbsp;
    <Switch v-model="m2" type="warning"></Switch>&nbsp;&nbsp;
    <Code lang="xml html">{{demo2}}</Code>
    <h3>文字</h3>
    <Switch v-model="m3" true-text="是" false-text="否"></Switch>
    <Code lang="xml html">{{demo3}}</Code>
    <h3>禁用</h3>
    <Switch v-model="d1" disabled></Switch>&nbsp;&nbsp;
    <Switch v-model="d2" disabled></Switch>&nbsp;&nbsp;
    <Switch v-model="d2" disabled true-text="是" false-text="否"></Switch>
    <Code lang="xml html">{{demo4}}</Code>
    <h3>Switch props</h3>
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
      </table>
    </div>
    <h3>Switch events</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
        <tr>
          <td>change</td>
          <td>当value 改变时触发</td>
          <td>true | false</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      d1: false,
      d2: true,
      m: false,
      m2: true,
      demo1: `<Switch v-model="m"></Switch>`,
      demo2: `<Switch v-model="m2"></Switch>
<Switch v-model="m2" type="success"></Switch>
<Switch v-model="m2" type="primary"></Switch>
<Switch v-model="m2" type="warning"></Switch>`,
      demo3: `<Switch v-model="m3" true-text="是" false-text="否"></Switch>`,
      demo4: `<Switch v-model="d1" disabled></Switch>
<Switch v-model="d2" disabled></Switch>
<Switch v-model="d2" disabled true-text="是" false-text="否"></Switch>`
    };
  }
};
</script>
