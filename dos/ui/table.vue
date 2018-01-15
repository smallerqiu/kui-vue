<template>
  <div class="">
    <h2>Table 表格</h2>
    <Alert>注意：非 template/render 模式下，需使用 k-table。</Alert>
    <h3>基础／组件嵌套</h3>
    <!-- <Button @click="test">tetew</Button>-->
    <Button @click="border=!border" type="primary">表格边框</Button>
    <Table :data="data" :columns="col" :onselection="test2" :border="border"></Table>
    <Code>{{demo}}</Code>
    <h3>Table API</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>border</td>
          <td>是否显示边框</td>
          <td>Boolean</td>
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
          <td>onselection</td>
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
export default {
  data() {
    return {
      border: false,
      demo: `<Table :data="data" :columns="col"></Table>
<script>
export default {
  data() {
    return { 
      data: [
        { nick: "毛毛", gender: "男", birthday: "", action: "" },
        { nick: "高总", gender: "男", birthday: "", action: "" },
        { nick: "娟娟", gender: "男", birthday: "", action: "" },
        { nick: "鱼雷", gender: "男", birthday: "", action: "" }
      ],
      col: [
        { type: "selection" },
        { title: "姓名", key: "nick" },
        { title: "性别", key: "gender" ,textAlign:'right'},
        {
          title: "出生年月",
          key: "birthday",
          render: (h, p) => {
            return h(
              "DatePicker",
              {
                props: {
                  value: this.d,
                  lang: "en",
                  change: v => {
                    console.log("回调", v);
                  }
                }
              },
              this.d
            );
          }
        },
        {
          title: "操作",
          key: "action",
          render: (h, p) => {
            return h(
              "Button",
              {
                props: { type: "danger", mini: true },
                on: {
                  click: () => {
                    this.data.splice(p.index, 1);
                  }
                }
              },
              "删除"
            );
          }
        }
      ]
    };
  },
  methods: {}
};
<\/script>
      `,
      data: [
        { nick: "毛毛", gender: "右对其", birthday: "", action: "" },
        { nick: "高总", gender: "右对其", birthday: "", action: "" },
        { nick: "娟娟", gender: "右对其", birthday: "", action: "" },
        { nick: "鱼雷", gender: "右对其", birthday: "", action: "" }
      ],
      col: [
        { type: "selection" },
        { title: "姓名", key: "nick" },
        { title: "文字对其", key: "gender",textAlign:'right' },
        {
          title: "出生年月",
          key: "birthday",
          render: (h, p) => {
            return h(
              "DatePicker",
              {
                props: {
                  value: this.d,
                  lang: "en",
                  change: v => {
                    console.log("回调", v);
                    p.row.birthday = v;
                  }
                }
              },
              this.d
            );
          }
        },
        {
          title: "操作",
          key: "action",
          render: (h, p) => {
            return h(
              "Button",
              {
                props: { type: "danger", mini: true },
                on: {
                  click: () => {
                    this.data.splice(p.index, 1);
                  }
                }
              },
              "删除"
            );
          }
        }
      ],
      row: []
    };
  },
  methods: {
    test() {
      // this.data[0].birthday ='2017-12-12'//
      this.data = [
        { nick: "毛毛1", gender: "男1", birthday: "", action: "" },
        { nick: "高总", gender: "男", birthday: "", action: "" },
        { nick: "娟娟", gender: "男", birthday: "", action: "" },
        { nick: "鱼雷", gender: "男", birthday: "", action: "" },
        { nick: "鱼雷", gender: "男", birthday: "", action: "" }
      ];

      // console.log(this.data)
    },
    test2(v) {
      this.row = v;
      console.log(v);
    },
    test1() {
      console.log(this.row);
    }
  }
};
</script>

