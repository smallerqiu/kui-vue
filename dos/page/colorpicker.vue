<template>
  <div>
    <h2>ColorPicker 颜色</h2>
    <Alert>注意：非 template/render 模式下，需使用 color-picker。</Alert>
    <h3>基础</h3>
    <p>数据模型是从offce 颜色组件扒下来的。</p>
    <p>{{d}}</p>
    <ColorPicker v-model="d"></ColorPicker>
    <Code>{{demo}}</Code>
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
          <td>value</td>
          <td>绑定的值，可使用 v-model 双向绑定</td>
          <td>String</td>
          <td>'#000000'</td>
        </tr>
        <tr>
          <td>transfer</td>
          <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>change</td>
          <td>当绑定值变化时触发，返回当前值</td>
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
      d: "#eeece1",
      demo: `<ColorPicker v-model="d"></ColorPicker>`
    };
  }
};
</script>

