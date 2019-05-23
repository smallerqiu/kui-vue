let code = {}

code.base =`<Button @click="bordered=!bordered" type="primary">表格边框</Button>
<Button @click="mini=!mini" type="primary">mini</Button>
<Table :data="data" :columns="col" :mini="mini" @selection="select" @row-click="rowClick" :text-max-length="20" :bordered="bordered" @editor-change="editorChange"></Table>
<script>
export default {
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
        { title: "姓名", key: "nick",type:'html' },
        { title: "右对其", key: "right", textAlign: "right" },
        { title: "居中", key: "center", textAlign: "center" },
        { title: "文字提示", key: "tip", },
        { title: "可以编辑", key: "edit", sortable: true, type: 'editor' },
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
    editorChange(a,b,c){
      this.$Message.info(a.edit,b,c)
      console.log(a,b,c)
    },
    rowClick(row) {
      console.log(row)
    },
    change(a, b) {
      this.$Message.info(a + ':' + b)
    },
    select(row) {
      this.row = row;
      console.log("当前选中：", row);
    }
  }
};
</script>`

export default code