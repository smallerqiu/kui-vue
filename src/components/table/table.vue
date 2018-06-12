<template>
  <div :class="classes" :style="styles" ref="table">
    <table>
      <thead>
        <tr>
          <th v-for="(item,index) in columns" :key="index">
            <template v-if="item.type&&item.type=='selection'">
              <label for="k-checkbox-all">
                <k-checkbox @change="checkAll" v-model="checked">全选</k-checkbox>
              </label>
            </template>
            <template v-else>{{item.title}}</template>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,m) in data" :key="m">
          <td v-for="(sub,n) in columns" :key="n" :style="tdStyle(sub.textAlign)">
            <template v-if="sub.type&&sub.type=='selection'">
              <label for="">
                <k-checkbox v-model="item._checked" @change="check(item,m)"></k-checkbox>
              </label>
            </template>
            <template v-else-if="sub.type&&sub.type=='html'">
              <div v-html="item[sub.key]"></div>
            </template>
            <template v-else-if="sub.render">
              <Expand :render="sub.render" :row="item" :column="sub" :index="m"></Expand>
            </template>
            <template v-else>
              <div :style="`width:${sub.width}px;`">{{item[sub.key]}}</div>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="!data||data.length==0" class="no-data">{{noDataText}}</div>
  </div>
</template>
<script>
import { Checkbox } from "../checkbox";
import Expand from "./expand.js";
export default {
  components: { Expand: Expand, "k-checkbox": Checkbox },
  name: "Table",
  props: {
    bordered: Boolean,
    mini: Boolean,
    noDataText: { type: String, default: "暂无数据..." },
    data: { type: Array, default: () => [] }, // 表格数据
    columns: { type: Array, default: () => [] } // 表格类目
  },
  computed: {
    classes() {
      return [
        "k-table",
        {
          ["k-table-bordered"]: this.bordered,
          ["k-table-mini"]: this.mini
        }
      ];
    },
    styles() {
      return this.data.length == 0 ? { overflow: "hidden" } : {};
    }
  },
  data() {
    return {
      checked: false,
      selectRow: [] //所有选择的数据
      // selectRow:{}  //当前单选出发所选择的数据
    };
  },
  watch: {
    data: {
      handler(items) {
        // if(!data) return;
        if (this.data.length == 0) {
          this.$refs.table.scrollLeft = 0;
        }
        this.checked = false;
        this.selectRow = this.data.filter(x => x._checked == true);
        this.$emit("selection", this.selectRow);
      },
      deep: true
    }
  },
  /* updated() {
    this.data.forEach(item => {
      item._checked = false;
    });
    var type = this.columns.filter(x => {
      return x.type == "selection";
    });
    if (type.length > 0) {
      this.checkAll(false);
      this.is_all_check = false;
    }
  }, */

  methods: {
    tdStyle(align) {
      let obj = {};
      if (align) obj["text-align"] = "right";
      return obj;
    },
    check(item, index) {
      let is_checked = item._checked;
      this.data[index]._checked = is_checked;
      this.selectRow = this.data.filter(x => x._checked == true);
      this.$emit("selection", this.selectRow, item);
      this.checked = this.selectRow.length == this.data.length
    },
    checkAll(ischecked) {
      this.data.forEach(item => (item._checked = ischecked));
      this.selectRow = ischecked ? JSON.parse(JSON.stringify(this.data)) : [];
      this.$emit("selection", this.selectRow);
    }
  }
};
</script>