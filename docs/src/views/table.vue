<template>
  <div>
    <h2>Table 表格</h2>
    <Alert>注意：非 template/render 模式下，需使用 k-table。</Alert>
    <h3>代码示例</h3>
    <Demo title="基础／组件嵌套" layout="vertical">
      <div slot="content">
        <Button @click="bordered=!bordered" type="primary" mini>表格边框</Button>
        <Button @click="mini=!mini" type="primary" mini>mini</Button>
        <Table :data="data" :columns="col" :mini="mini" @selection="select" @sort-change="change" :text-max-length="20" :bordered="bordered" @row-click="rowClick" @editor-change="editorChange"></Table>
      </div>
      <div slot="desc">表格没做太复杂的展示，通过
        <code>bordered</code>可以设置是否有边框，
        <code>mini</code>来设置表格大小模式,
        type等于<code>editor</code>时，数值可以编辑</div>
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
          <td>scrollbar-fixed</td>
          <td>是否表格底部固定横向滚动条</td>
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
        <tr>
          <td>row-click</td>
          <td>单击某一行时触发 </td>
          <td>Function</td>
          <td>返回当前行的数据，index</td>
        </tr>
        <tr>
          <td>editor-change</td>
          <td>当编辑框离开焦点时触发 ，type 为editor 有效</td>
          <td>Function</td>
          <td>返回当前行的数据，当前列的key、index</td>
        </tr>
        <tr>
          <td>sort-change</td>
          <td>排序发生改变时处罚 </td>
          <td>Function</td>
          <td>返回当前key值和排序的顺序 asc / desc</td>
        </tr>
        <tr>
          <td>sort-single</td>
          <td>是否单个排序，当异步执行时，当前触发的排序生效，其他排序不生效</td>
          <td>Boolen</td>
          <td>false</td>
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
          <td>列类型，可选值为 selection、html、editor</td>
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
          <td>text-align</td>
          <td>列文字对其方式 ，可选值left，center，right</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>text-max-length</td>
          <td>表格的字符最大限度，超过部分会以点点点显示</td>
          <td>Number</td>
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
        { nick: "<a>链接文字长--链接文字长--链接文字长--</a>", center: "居中", right: "右对其", birthday: "", tip: '短文字提示', action: "", edit: '点我编辑' },
        { nick: "高总", center: "居中", right: "右对其", birthday: "", tip: '我是很长很长很长很长很长很长很长很长很长一段文字', action: "", edit: '点我编辑' },
        { nick: "娟娟", center: "居中", right: "右对其", birthday: "", tip: '短文字提示', action: "", edit: '点我编辑' },
        { nick: "鱼雷", center: "居中", right: "右对其", birthday: "", tip: '我是很长很长很长很长很长很长很长很长很长一段文字', action: "", edit: '点我编辑' }
      ],
      col: [
        { type: "selection" },
        { title: "姓名", key: "nick", type: 'html', sortable: true },
        { title: "右对其", key: "right", textAlign: "right", sortable: true },
        { title: "居中", key: "center", textAlign: "center", sortable: true },
        { title: "文字提示", key: "tip", sortable: true },
        { title: "可以编辑", key: "edit", sortable: true, type: 'editor' },
        {
          title: "出生年月",
          key: "birthday",
          width: 150, sortable: true,
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
    editorChange(a, b) {
      this.$Message.info(a.edit,b,+','+c)
      console.log(a, b)
    },
    rowClick(row) {
      console.log(row)
    },
    change(a, b) {
      this.$Message.info(a + ':' + b)
    },
    select(row, item) {
      this.row = row;
      console.log("当前选中：", row, item);
    }
  }
};
</script>

