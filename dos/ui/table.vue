<template>
  <div class="">
    <h2>表格</h2>
    <Table :data="data" :columns="col"></Table>
    <!-- <Button type="test">fsds</Button> -->
    {{d}}----{{d1}}<br/>
    <datePicker v-model="d" :change="t1"></datePicker><br/>
    <!-- <datePicker v-model="d1"></datePicker> -->
    <!-- <input type="date" v-model="d"> -->
    <Button @click="reset">重置</Button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      d: "",
      d1: [],
      data: [{ abc: "abc" }, { test: "test" }],
      col: [
        {
          title: "测试",
          key: "test",
          render: (h, p) => {
            return h(
              "Button",
              {
                props: { type: "danger", mini: true },
                on: {
                  click: () => {
                    // this.test()
                    console.log(this);
                  }
                }
              },
              "删除"
            );
          }
        },
        {
          title: "测试",
          key: "abc"
        },
        {
          title: "测试",
          key: "111",
          render: (h, p) => {
            return h(
              "datePicker",
              {
                // attrs: { value: this.d },
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
        { type: "selection" }
      ]
    };
  },
  methods: {
    reset() {
      this.data[0].abc = "232";
      // this.data = [{ abc: "abc" }, { test: "test" }]
    },
    test() {
      alert("ddd");
    },
    t1(v) {
      // console.log(v)
    }
  }
};
</script>

