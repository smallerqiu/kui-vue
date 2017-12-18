<template>
  <div class="">
    <h2>Table 表格</h2>
    <p>注意：非 template/render 模式下，需使用 i-table。</p>
    <h3>代码示例</h3>
    <Button @click="test">tetew</Button>
    <Table :data="data" :columns="col" :onselection="test2"></Table>
    <div v-high>
      <pre>
        <code>{{demo}}</code>
      </pre>
    </div>
    <h3>Table props</h3>
    <div class="table-border">
      <table>
        <tr>
          <td>属性</td>
          <td>说明</td>
          <td>类型</td>
          <td>默认值</td>
        </tr>
        <tr>
          <td>data</td>
          <td>显示的结构化数据</td>
          <td>Array</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>columns</td>
          <td>表格列的配置描述，</td>
          <td>Array</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>noDataText</td>
          <td>数据为空时显示的提示内容</td>
          <td>String </td>
          <td>暂无数据</td>
        </tr>
      </table>
    </div>
    <h3>Table events</h3>
    <div class="table-border">
      <table>
        <tr>
          <td>事件名</td>
          <td>说明</td>
          <td>返回值</td>
        </tr>
        <tr>
          <td>onselection</td>
          <td>多选或单选触发</td>
          <td>多选：返回当前所有已经选择的项<br>单选：返回所有勾选和 当前选择单项 </td>
        </tr>
      </table>
    </div>
    <h3>column</h3>
    <div class="table-border">
      <table>
        <tr>
          <td>属性</td>
          <td>说明</td>
          <td>类型</td>
          <td>默认值</td>
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
        { title: "性别", key: "gender" },
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
                  click: () => {}
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
        { nick: "毛毛", gender: "男", birthday: "", action: "" },
        { nick: "高总", gender: "男", birthday: "", action: "" },
        { nick: "娟娟", gender: "男", birthday: "", action: "" },
        { nick: "鱼雷", gender: "男", birthday: "", action: "" }
      ],
      col: [
        { type: "selection" },
        { title: "姓名", key: "nick" },
        { title: "性别", key: "gender" },
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
                    p.row.birthday =v
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
                  click: () => {}
                }
              },
              "删除"
            );
          }
        }
      ]
    };
  },
  methods: {
    test() {
      this.data[0].birthday ='2017-12-12'// { nick: "毛毛1", gender: "男1", birthday: "", action: "" };
      // { nick: "高总", gender: "男", birthday: "", action: "" },
      // { nick: "娟娟", gender: "男", birthday: "", action: "" },
      // { nick: "鱼雷", gender: "男", birthday: "", action: "" }
      console.log(this.data)
    },
    test2(v){
      console.log(v)
    }
  }
};
</script>

