<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th v-for="(item,index) in columns" v-if="item.title" :key="index">
            <template v-if="item.type&&item.type=='selection'">
              <label for="check">
                <input type="checkbox" id="check" ref="checkall" @click="_checkAll($event)">全选</label>
            </template>
            <template v-else>{{item.title}}</template>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,m) in data" :key="m">
          <td v-for="(sub,n) in columns" v-if="sub.title" :key="n">
            <template v-if="sub.type&&sub.type=='selection'">
              <label for="">
                <input type="checkbox" class="checkchild" @click="check($event,item)">
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
  components: { 'Expand': Expand },
  name: "Table",
  props: {
    data: {
      required: false,
      default: []
    }, // 表格数据
    columns: {
      required: false,
      default: []
    }, // 表格类目
    // onselect: { type: Function, required: false,default:function(){} }, //单个选中触发
    // onselectAll: { type: Function, required: false,default:function(){} }, //所有选中触发
    onselection: {
      type: Function,
      required: false,
      default: function() {}
    } //选中的时候触发,
  },
  data() {
    return {
      row: [] //所有选择的数据
      // selectRow:{}  //当前单选出发所选择的数据
    };
  },
  updated() {
    this.data.forEach(item => {
      item._uuid = utils.uuid();
    });
    var type = this.columns.filter(x => {
      return x.type == "selection";
    })[0];
    if (type) {
      this.checkAll(false);
      this.$refs.checkall.checked = false;
    }
  },
  mounted() {
    // console.log(this.data)
  },
  methods: {
    check(e, item) {
      var che = e.target.checked;
      var index = -1;
      this.row.map((x, i) => {
        x._uuid == item._uuid && (index = i);
      });
      if (che) {
        // this.selectRow = item;
        index < 0 && this.row.push(item);
      } else {
        // this.selectRow = null
        index >= 0 && this.row.splice(index, 1);
      }
      // this.onselect(this.selectRow,this.row)
      this.onselection(this.row);
    },
    checkAll(cheAll) {
      var childs = document.querySelectorAll(".checkchild");
      for (var item of childs) {
        item.checked = cheAll;
      }
      this.row = cheAll ? JSON.parse(JSON.stringify(this.data)) : [];
      // this.onselectAll(this.row)
      // console.log(this.row)
      this.onselection(this.row);
    },
    _checkAll(e) {
      var cheAll = e.target.checked;
      this.checkAll(cheAll);
    }
  }
};
</script>