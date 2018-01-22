<template>
  <div :class="classes">
    <table>
      <thead>
        <tr>
          <th v-for="(item,index) in columns" :key="index">
            <template v-if="item.type&&item.type=='selection'">
              <label for="k-checkbox-all">
                <k-checkbox @change="checkAll" v-model="checked">全选</k-checkbox>
                <!-- <input type="checkbox" id="k-checkbox-all" v-model="checked" @change="checkAll(checked)">全选 -->
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
                <!-- <input type="checkbox" v-model="item._checked" @change="check(item,m)"> -->
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
// import utils from "../utils";
export default {
  components: { Expand: Expand, "k-checkbox": Checkbox },
  name: "Table",
  props: {
    border: Boolean,
    noDataText: { type: String, default: "暂无数据..." },
    data: { type: Array, default: () => [] }, // 表格数据
    columns: { type: Array, default: () => [] }, // 表格类目
    // onselect: { type: Function, default:function(){} }, //单个选中触发
    // onselectAll: { type: Function, default:function(){} }, //所有选中触发
    onselection: { type: Function, default: function() {} } //选中的时候触发,
  },
  computed: {
    classes() {
      return [
        "k-table",
        {
          ["k-table-border"]: this.border
        }
      ];
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
        this.checked = false;
        this.selectRow = this.data.filter(x => x._checked == true);
        this.onselection(this.selectRow);
      },
      deep: true
    }
  },
  /* updated() {
    this.data.forEach(item => {
      item._uuid = utils.uuid();
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
      this.onselection(this.selectRow, item);
    },
    checkAll(ischecked) {
      this.data.forEach(item => (item._checked = ischecked));
      this.selectRow = ischecked ? JSON.parse(JSON.stringify(this.data)) : [];
      this.onselection(this.selectRow);
    }
  }
};
</script>