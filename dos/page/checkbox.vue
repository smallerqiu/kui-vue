<template>
  <div>
    <h2>Checkbox 多选框</h2>
    <h3>代码示例 </h3>
    <Demo title="基础用法">
      <div slot="content">
        <p>{{checked}}</p>
        <Checkbox v-model="checked">单选框 </Checkbox>
        <Button @click="checked=!checked">Click me</Button>
      </div>
      <div slot="desc">单独使用 ,使用
        <code>v-model</code> 可以双向绑定数据。</div>
      <div slot="code">{{code.base}}</div>
    </Demo>
    <Demo title="组合使用">
      <div slot="content">{{data}}<br/>
        <CheckboxGroup v-model="data">
          <Checkbox label="苹果🍎"></Checkbox>
          <Checkbox label="橘子🍊"></Checkbox>
          <Checkbox label="香蕉🍌"></Checkbox>
          <Checkbox label="栗子🌰"></Checkbox>
          <Checkbox label="葡萄🍇" disabled></Checkbox>
          <Checkbox label="梨子🍐" disabled></Checkbox>
        </CheckboxGroup>
        <Button @click="data=[]">清除</Button>
        <Button @click="data=['苹果🍎']">选中苹果</Button>
      </div>
      <div slot="desc">结合
        <code>CheckboxGroup</code>来组合使用,通过
        <code>disabled</code>可以设置组件是否被禁用</div>
      <div slot="code">{{code.group}}</div>
    </Demo>
    <Demo title="全选">
      <div slot="content">
        <Checkbox :value="checkAll" :indeterminate="indeterminate" @click.prevent.native="handelCheckAll">全选</Checkbox>
        <CheckboxGroup v-model="check" @change="handelCheck">
          <Checkbox label="苹果🍎"></Checkbox>
          <Checkbox label="橘子🍊"></Checkbox>
          <Checkbox label="香蕉🍌"></Checkbox>
          <Checkbox label="栗子🌰"></Checkbox>
        </CheckboxGroup>
      </div>
      <div slot="desc"> </div>
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
        <tr>
          <td>change</td>
          <td>在选项状态发生改变时触发，返回当前状态</td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </table>
    </div>
    <h3>CheckboxGroup API</h3>
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
          <td>disabled</td>
          <td>是否禁用当前项</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>change</td>
          <td>在选项状态发生改变时触发，返回当前选中的项</td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import code from '../code/checkbox'
import Demo from '../components/demo'
export default {
  components: { Demo },
  data() {
    return {
      code: code,
      checked: true,
      data: ["苹果🍎", "香蕉🍌", "葡萄🍇"],
      checkAll: false,
      indeterminate: false,
      check: []
    };
  },
  methods: {
    handelCheckAll(v) {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;

      if (this.checkAll) {
        this.check = ["苹果🍎", "香蕉🍌", "葡萄🍇", '栗子🌰'];
      } else {
        this.check = [];
      }
    },
    handelCheck(data) {
      if (data.length === 4) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    }
  }
};
</script>

