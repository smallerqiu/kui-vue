<template>
  <div>
    <h2>Switch 开关</h2>
    <p>注意：没有使用 kui-loader 时，必须使用 k-switch 标签。</p>
    <p>{{m}}</p>
    <Switch v-model="m"></Switch> &nbsp;&nbsp;
    <Switch v-model="m2"></Switch>&nbsp;&nbsp;
    <Switch v-model="m2" type="success"></Switch>&nbsp;&nbsp;
    <Switch v-model="m2" type="primary"></Switch>&nbsp;&nbsp;
    <Switch v-model="m2" type="warning"></Switch>&nbsp;&nbsp;
    <Switch v-model="m3" true-text="是" false-text="否"></Switch>&nbsp;&nbsp;
    <br>
    <br>
    <div v-high>
      <pre><code>{{demo}}</code></pre>
    </div>
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
    <h3>Page events</h3>
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
      m: false,
      m2: true,
      demo: `<\Switch v-model="m"><\/Switch>
<\Switch v-model="m2"><\/Switch>
<\Switch v-model="m2" type="success"><\/Switch>
<\Switch v-model="m2" type="danger"><\/Switch>
<\Switch v-model="m2" type="primary"><\/Switch>
<\Switch v-model="m2" type="warning"><\/Switch>
<\Switch v-model="m3" true-text="是" false-text="否"><\/Switch>
<script>
export default {
  data() {
    return {
      m: false,
      m2: true,
  }
};
<\/script>`
    };
  }
};
</script>
