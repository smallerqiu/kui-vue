<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th v-for="(item,index) in columns" :key="index">
            <template v-if="item.type&&item.type=='selection'">
              <label for="k-checkbox-all">
                <input type="checkbox" id="k-checkbox-all" v-model="checked" @click="_checkAll()">全选</label>
            </template>
            <template v-else>{{item.title}}</template>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,m) in data" :key="m">
          <td v-for="(sub,n) in columns" :key="n">
            <template v-if="sub.type&&sub.type=='selection'">
              <label for="">
                <input type="checkbox" class="checkchild" v-model="item._checked" @click="check(item,m)">
              </label>
            </template>
            <template v-if="sub.type&&sub.type=='html'">
              <div v-html="item[sub.key]"></div>
            </template>
            <template v-if="sub.render">
              <Expand :render="sub.render" :row="item" :column="sub" :index="m"></Expand>
            </template>
            <template v-else>
              <div :style="`width:${sub.width}px;`">{{item[sub.key]}}</div>
            </template>
          </td>
        </tr>
        <tr v-show="!data||data.length==0">
          <td colspan="50" style="text-align:center">
            <div>暂无数据...</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Expand from "./expand.js";
import utils from "../utils";
export default {
  components: { Expand: Expand },
  name: "Table",
  props: {
    data: { required: false, default: [] }, // 表格数据
    columns: { required: false, default: [] }, // 表格类目
    // onselect: { type: Function, required: false,default:function(){} }, //单个选中触发
    // onselectAll: { type: Function, required: false,default:function(){} }, //所有选中触发
    onselection: { type: Function, required: false, default: function() {} } //选中的时候触发,
  },
  data() {
    return {
      checked: false,
      selectRow: [] //所有选择的数据
      // selectRow:{}  //当前单选出发所选择的数据
    };
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
  mounted() {
    this.data.forEach(item => {
      item._uuid = utils.uuid();
      item._checked = false;
    });
    // console.log(this.data)
  },
  methods: {
    check(item,index) {
      let is_checked = !item._checked
      this.data[index]._checked = is_checked;
      this.selectRow = this.data.filter(x => x._checked == true);
      this.onselection(this.selectRow);
    },
    checkAll(ischecked) { 
      this.data.forEach(item => (item._checked = ischecked));
      this.selectRow = ischecked ? JSON.parse(JSON.stringify(this.data)) : []; 
      this.onselection(this.selectRow);
    },
    _checkAll() {
      // var cheAll = e.target.checked;
      //this.is_all_check = !e.target.checked;
      // console.log(cheAll)
      this.checked = !this.checked
      this.checkAll(this.checked);
    }
  }
};
</script>