<template>
   <div>
      <h2>ColorPicker 颜色</h2>
      <p>注意：非 template/render 模式下，需使用 color-picker。</p>
      <h3>代码示例</h3>
      <p>数据模型是从offce 颜色组件扒下来的。</p>
      <p>{{d}}</p>
      <ColorPicker v-model="d"></ColorPicker>
      <Code>{{demo}}</Code>
       <h3>ColorPicker props</h3>
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
      </table>
    </div>
    <h3>ColorPicker events </h3>
    <div class="table-border">
      <table>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
        <tr>
          <td>change</td>
          <td>当绑定值变化时触发</td>
          <td>当前值</td>
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
      demo:`<ColorPicker v-model="d"></ColorPicker>`
    };
  }
};
</script>

