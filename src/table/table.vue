<template>
      <div class="table">
            <table>
                  <thead>
                        <tr>
                              <th class="selection" v-if="columns[0].type=='selection'">
                                    <label for="check">
                                          <input type="checkbox" id="check" ref="checkall" @click="_checkAll($event)">全选</label>
                              </th>
                              <th v-for="(item,index) in columns" v-if="item.title" :key="index">{{item.title}}</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr v-for="(item,i) in data" :key="i">
                              <td v-if="columns[0].type=='selection'">
                                    <label for="">
                                          <input type="checkbox" class="checkchild" @click="check($event,item)">
                                    </label>
                              </td>
                              <td v-for="(sub,ii) in columns" v-if="sub.title" :key="ii">
                                    <div v-if="sub.render" v-html="sub.render(item,i)" :style="`width:${sub.width}px;`"></div>
                                    <div v-else :style="`width:${sub.width}px;`">{{item[sub.key]}}</div>
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
export default {
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
      item._uuid = uuid();
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