<template>
  <div>
    <h2>Table 表格</h2>
    <Alert>注意：非 template/render 模式下，需使用 k-table。</Alert>
    <h3>代码示例</h3>
    <Demo title="基础／组件嵌套" layout="vertical">
      <div slot="content">
        <Button @click="bordered=!bordered" type="primary" mini>表格边框</Button>
        <Button @click="mini=!mini" type="primary" mini>mini</Button>
        <Table :data="data" :columns="col" :mini="mini" @select="select" :bordered="bordered"></Table>
        <Button @click="test">test</Button>
      </div>
      <div slot="desc">表格没做太复杂的展示，通过
        <code>bordered</code>可以设置是否有边框，
        <code>mini</code>来设置表格大小模式</div>
      <div slot="code">{{code.base}}</div>
    </Demo>
    <h3>Table API</h3>
    <div class="table-border" style="overflow:visible;">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>bordered</td>
          <td>是否显示边框</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>header-fixed</td>
          <td>是否固定表头</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>mini</td>
          <td>表格是否为mini模式</td>
          <td>Boolean </td>
          <td>false</td>
        </tr>
        <tr>
          <td>data</td>
          <td>显示的结构化数据</td>
          <td>Array</td>
          <td>[ ]</td>
        </tr>
        <tr>
          <td>columns</td>
          <td>表格列的配置描述，</td>
          <td>Array</td>
          <td>[ ]</td>
        </tr>
        <tr>
          <td>noDataText</td>
          <td>数据为空时显示的提示内容</td>
          <td>String </td>
          <td>暂无数据</td>
        </tr>
        <tr>
          <td>selection</td>
          <td>多选或单选触发，多选：返回当前所有已经选择的项<br>单选：返回所有勾选和 当前选择单项 </td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </table>
    </div>
    <h3>Column API</h3>
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
          <td>列类型，可选值为 selection、html</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>title</td>
          <td>列头显示文字</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>textAlign</td>
          <td>列文字对其方式 ，可选值left，center，right</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>key</td>
          <td>对应列内容的字段名</td>
          <td>String </td>
          <td>-</td>
        </tr>
        <tr>
          <td>width</td>
          <td>列宽</td>
          <td>Number </td>
          <td>-</td>
        </tr>
        <tr>
          <td>overflow</td>
          <td>当设置列宽
            <code>width</code>之后，超出文字是否隐藏以点点点显示</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>tooltip</td>
          <td>文字过长隐藏之后，鼠标划过 是否展示title</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>render</td>
          <td>自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，分别指当前行数据，当前列数据，当前行索引</td>
          <td>Function </td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import code from '../code/table'
import Demo from '../components/demo'
export default {
  components: { Demo },
  data() {
    return {
      code: code,
      bordered: false,
      mini: false,
      data: [
        { nick: "毛毛", gender: "右对其", birthday: "", tip: '我是很长很长很长很长很长很长很长很长很长一段文字', action: "" },
        { nick: "高总", gender: "右对其", birthday: "", tip: '我是很长很长很长很长很长很长很长很长很长一段文字', action: "" },
        { nick: "娟娟", gender: "右对其", birthday: "", tip: '我是很长很长很长很长很长很长很长很长很长一段文字', action: "" },
        { nick: "鱼雷", gender: "右对其", birthday: "", tip: '我是很长很长很长很长很长很长很长很长很长一段文字', action: "" }
      ],
      col: [
        { type: "selection" },
        { title: "姓名", key: "nick" },
        { title: "右对其", key: "gender", textAlign: "right" },
        { title: "姓名", key: "nick" },
        { title: "居中", key: "gender", textAlign: "center" },
        { title: "姓名", key: "nick" },
        { title: "文字提示", key: "tip", width: '200', overflow: 'hidden', tooltip: true },
        {
          title: "出生年月",
          key: "birthday",
          width: 150,
          render: (h, p) => {
            return h("DatePicker",
              {
                props: { mini: true, width: 120, lang: "en", transfer: true, value: p.row.birthday },
                on: { change: v => { p.row.birthday = v; console.log('回调', this.data) } }
              },
            );
          }
        },
        {
          title: "操作",
          key: "action",
          width: 100,
          render: (h, p) => {
            return h("Poptip",
              {
                props: { transfer: true, confirm: true, title: "是否删除数据？", placement: "left-bottom" },
                on: { ok: () => { this.data.splice(p.index, 1); } }
              },
              [h("Button", { props: { type: "danger", mini: true } }, "删除")]
            );
          }
        }
      ],
      row: []
    };
  },
  methods: {
    test() {
      // this.data = [
      //   { nick: new Date() * 1, gender: "右对其", birthday: "", tip: '我是很长很长很长很长很长很长很长很长很长一段文字', action: "" },
      //   { nick: "高总", gender: "右对其", checked: true, birthday: "", tip: '我是很长很长很长很长很长很长很长很长很长一段文字', action: "" },
      //   { nick: "娟娟", gender: "右对其", birthday: "", tip: '我是很长很长很长很长很长很长很长很长很长一段文字', action: "" },
      //   { nick: "鱼雷", gender: "右对其", birthday: "", tip: '我是很长很长很长很长很长很长很长很长很长一段文字', action: "" }
      // ]
    },
    select(row) {
      this.row = row;
      // console.log("当前选中：", row);
    }
  }
};
</script>

