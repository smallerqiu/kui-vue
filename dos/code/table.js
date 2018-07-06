let code = {}

code.base =`<Button @click="border=!border" type="primary">表格边框</Button>
<Button @click="mini=!mini" type="primary">mini</Button>
<Table :data="data" :columns="col" :mini="mini" @selection="select" :border="border"></Table>
<script>
export default {
  data() {
    return {
      border: false,
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
        { title: "文字对其", key: "gender", textAlign: "right" },
        { title: "姓名", key: "nick" },
        { title: "文字对其", key: "gender", textAlign: "right" },
        { title: "姓名", key: "nick" },
        { title: "文字提示", key: "tip", width: '200',overflow:'hidden',tooltip:true },
        {
          title: "出生年月",
          key: "birthday",
          render: (h, p) => {
            return h("DatePicker",
              {
                props: { mini: true, width: 120, lang: "en", transfer: true },
                on: { change: v => { console.log("回调", v); p.row.birthday = v; } }
              },
            );
          }
        },
        {
          title: "操作",
          key: "action",
          render: (h, p) => {
            return h(
              "Poptip",
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
    select(row) {
      this.row = row;
      console.log("当前选中：", row);
    }
  }
};
</script>`

export default code