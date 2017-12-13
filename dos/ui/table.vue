<template>
  <div class="">
    <h2>表格</h2>
    <Table :data="data" :columns="col"></Table>
    <!-- <Button type="test">fsds</Button> -->
    {{d}}----{{d1}}<br/>
    <datePicker v-model="d"></datePicker><br/>
    <datePicker v-model="d1"></datePicker>
    <input type="date" v-model="d">
  </div>
</template>
<script>
export default {
  data() {
    return {
      d:'',
      d1:[],
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
          key: "abc",
          render: (h, p) => {
            console.log('1111',this.d)
            return h("datePicker", { attrs: { value: this.d } });
          }
        },
        { type: "selection" }
      ]
    };
  },
  methods:{
    test(){
      alert('ddd')
    }
  }
};
</script>

