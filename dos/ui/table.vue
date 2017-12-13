<template>
  <div class="">
    <h2>表格</h2>
    <Table :data="data" :columns="col"></Table>
    <!-- <Button type="test">fsds</Button> -->
    {{d}}----{{d1}}
    <datePicker v-model="d"></datePicker>
    <datePicker v-model="d1"></datePicker>
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
                    console.log(p);
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
            return h("datePicker", { prop: { value: '' } });
          }
        },
        { type: "selection" }
      ]
    };
  }
};
</script>

