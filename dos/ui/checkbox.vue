<template>
  <div>
    <h2>Checkbox 多选框</h2>
    <h3>基础 </h3>
    <h4>单独使用 ,使用 v-model 可以双向绑定数据。</h4>
    <p>{{d}}</p>
    <Checkbox v-model="d">单选框 </Checkbox>
    <Button @click="d=!d">Click me</Button>
    <h3>组合使用</h3>
    {{g}}
    <CheckboxGroup v-model="g">
      <Checkbox label="苹果🍎"></Checkbox>
      <Checkbox label="橘子🍊"></Checkbox>
      <Checkbox label="香蕉🍌"></Checkbox>
      <Checkbox label="栗子🌰"></Checkbox>
      <Checkbox label="葡萄🍇" disabled></Checkbox>
      <Checkbox label="梨子🍐" disabled></Checkbox>
    </CheckboxGroup>
    <Code>{{demo}}</Code>
    <h3>Checkbox props</h3>
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
          <td>只在单独使用时有效。可以使用 v-model 双向绑定数据</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>label</td>
          <td>只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目</td>
          <td> String | Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用当前项</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </table>
    </div>
    <h3>Checkbox events </h3>
    <div class="table-border">
      <table>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
        <tr>
          <td>change</td>
          <td>在选项状态发生改变时触发，返回当前状态</td>
          <td>-</td>
        </tr>
      </table>
    </div>
    <h3>CheckboxGroup props</h3>
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
          <td>只在单独使用时有效。可以使用 v-model 双向绑定数据</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </table>
    </div>
    <h3>CheckboxGroup events </h3>
    <div class="table-border">
      <table>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
        <tr>
          <td>change</td>
          <td>在选项状态发生改变时触发，返回当前选中的项</td>
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
      d: true,
      g: ["苹果🍎", "香蕉🍌",'葡萄🍇'],
      demo1:`<Checkbox v-model="d">单选框 </Checkbox>`,
      demo: `<CheckboxGroup v-model="g">
      <Checkbox label="苹果🍎"></Checkbox>
      <Checkbox label="橘子🍊"></Checkbox>
      <Checkbox label="香蕉🍌"></Checkbox>
      <Checkbox label="葡萄🍇" disabled></Checkbox>
      <Checkbox label="梨子🍐" disabled></Checkbox>
</CheckboxGroup>
<script>
export default {
  data() {
    return {
      d: true,
      g: ["苹果🍎", "香蕉🍌",'葡萄🍇'],
    }
  }
}
<\/script>`
    };
  }
};
</script>

