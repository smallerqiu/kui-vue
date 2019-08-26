<template>
  <div>
    <h2>Select 选择器</h2>
    <Alert type="info">注意：非 template/render 模式下，需使用 k-select</Alert>
    <Alert>注意：若下拉展开内容被父级元素遮挡，请设置组件 属性 `transfer=true`。</Alert>
    <h3>代码示例</h3>
    <Row gutter="8">
      <Col span="12">
      <Demo title="基础用法">
        <div slot="content">
          <Select :width="200" v-model="select" transfer>
            <Option v-for="(x,y) in data" :key="y" :value="x.value">{{x.label}}</Option>
          </Select>
          <Button @click="select=''">清除</Button>
          <Button @click="select=1">选中橘子</Button>
        </div>
        <div slot="desc">通过
          <code>v-model</code>进行数据双向绑定</div>
        <div slot="code">{{code.base}}</div>
      </Demo>

      <Demo title="尺寸">
        <div slot="content">
          <Select :width="200" v-model="select1" :value="''">
            <Option v-for="(x,y) in data" :key="y" :value="x.value">{{x.label}}</Option>
          </Select>
          <Select :width="200" v-model="select1" mini :value="''">
            <Option v-for="(x,y) in data" :key="y" :value="x.value">{{x.label}}</Option>
          </Select>
        </div>
        <div slot="desc">通过
          <code>width</code>和
          <code>mini</code>可控制组件尺寸大小</div>
        <div slot="code">{{code.size}}</div>
      </Demo>
      <Demo title="可清除">
        <div slot="content">
          <Select :width="200" clearable v-model="select2">
            <Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label"></Option>
          </Select>
          <Select :width="200" clearable mini v-model="select2">
            <Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label"></Option>
          </Select>
        </div>
        <div slot="desc">通过
          <code>clearable</code>可控制组件是否显示清除按钮</div>
        <div slot="code">{{code.clearable}}</div>
      </Demo>
      </Col>
      <Col span="12">
      <Demo title="可搜索">
        <div slot="content">
          <Select :width="200" filterable v-model="select3">
            <Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label"></Option>
          </Select>
        </div>
        <div slot="desc">通过
          <code>filterable</code>可设置组件是否呈现搜索模式</div>
        <div slot="code">{{code.search}}</div>
      </Demo>
      <Demo title="禁用">
        <div slot="content">
          <Select disabled :width="200"></Select>
          <Select :width="200" v-model="select4">
            <Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label" :disabled="y==3"></Option>
          </Select>
        </div>
        <div slot="desc">通过
          <code>disabled</code>可设置组件是否被禁用</div>
        <div slot="code">{{code.disabled}}</div>
      </Demo>
      </Col>
    </Row>

    <h3>Select API</h3>
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
          <td>指定选中项目的 value 值，可以使用 v-model 双向绑定数据</td>
          <td>String,Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>width</td>
          <td>组件宽度</td>
          <td>String,Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>选择框默认文字</td>
          <td>String</td>
          <td>请选择</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用当前项</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>clearable</td>
          <td>是否可以清空选项</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>change</td>
          <td>在选项状态发生改变时触发，返回选择项{value:xx,label:xx}</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>open-change</td>
          <td>下拉框展开或收起时触发</td>
          <td>Function</td>
          <td>true / false</td>
        </tr>
      </table>
    </div>
    <h3>Option API</h3>
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
          <td>选项值，默认根据此属性值进行筛选，必填</td>
          <td>String,Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>label</td>
          <td>选项显示的内容</td>
          <td>String,Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>mini</td>
          <td>组件尺寸大小</td>
          <td>Boolean </td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用当前项</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>transfer</td>
          <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import code from '../code/select'
import Demo from '../components/demo'
export default {
  components: { Demo },
  data() {
    return {
      code: code,
      select: "3",
      select1: 2, select2: 2, select3: 1, select4: 1,
      data: [
        { label: "苹果🍎", value: 0 },
        { label: "橘子🍊", value: 1 },
        { label: "香蕉🍌", value: 2 },
        { label: "栗子🌰", value: 3 },
        { label: "葡萄🍇", value: 4 }
      ],
    };
  }
};
</script>


