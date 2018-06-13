<template>
  <div :class="classes" :style="styles" ref="table" v-scroll="scroll">
    <table class="k-table-header" v-if="headerFixed && fixed" :style="`top:${fixedTop}px;width:${fixedWidth}px`">
      <thead>
        <tr>
          <th v-for="(item,index) in columns" :key="index" :style="`width:${colWidths[index]}px`">
            <div class="k-table-cell">
              <template v-if="item.type&&item.type=='selection'">
                <label for="k-checkbox-all">
                  <k-checkbox @change="checkAll" v-model="checked">全选</k-checkbox>
                </label>
              </template>
              <template v-else>{{item.title}}</template>
            </div>
          </th>
        </tr>
      </thead>
    </table>
    <table ref="dom">
      <thead>
        <tr>
          <th v-for="(item,index) in columns" :key="index">
            <div class="k-table-cell">
              <template v-if="item.type&&item.type=='selection'">
                <label for="k-checkbox-all">
                  <k-checkbox @change="checkAll" v-model="checked">全选</k-checkbox>
                </label>
              </template>
              <template v-else>{{item.title}}</template>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,m) in data" :key="m">
          <td v-for="(sub,n) in columns" :key="n" :style="tdStyle(sub.textAlign)">
            <div v-if="sub.type&&sub.type=='selection'" class="k-table-cell">
              <label for="">
                <k-checkbox v-model="item._checked" @change="check(item,m)"></k-checkbox>
              </label>
            </div>
            <template v-else-if="sub.type&&sub.type=='html'">
              <div v-html="item[sub.key]" class="k-table-cell"></div>
            </template>
            <div v-else-if="sub.render" class="k-table-cell" :style="`width:${sub.width}px;overflow:hidden;`">
              <Expand :render="sub.render" :row="item" :column="sub" :index="m"></Expand>
            </div>
            <template v-else>
              <template v-if="sub.tooltip">
                <Tooltip :content="item[sub.key]" breaked>
                  <div :style="`width:${sub.width}px;`" :class="['k-table-cell',{'td-hidden':sub.overflow=='hidden'}]"> {{item[sub.key]}}</div>
                </Tooltip>
              </template>
              <template v-else>
                <div :style="`width:${sub.width}px;`" :class="['k-table-cell',{'td-hidden':sub.overflow=='hidden'}]"> {{item[sub.key]}}</div>
              </template>
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
import Tooltip from "../tooltip";
import Expand from "./expand.js";
import scroll from '../../directives/winScroll.js'
export default {
  components: { Expand: Expand, "k-checkbox": Checkbox, Tooltip, },
  name: "Table",
  directives: { scroll },
  props: {
    bordered: Boolean,
    headerFixed: Boolean,
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
          ["k-table-mini"]: this.mini,
          ["k-table-fixed"]: this.headerFixed
        }
      ];
    },
    styles() {
      let style = {}
      style.overflow = this.data.length == 0 ? 'hidden' : ''
      style.position = this.fixed ? 'relative' : ''
      return style
    }
  },
  data() {
    return {
      colWidths: [],
      fixed: false,
      fixedTop: 0,
      fixedWidth:0,
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
    setWidths() {
      if (this.headerFixed && this.columns && this.columns.length && this.data && this.data.length) {
        let td = this.$refs.dom.childNodes[2].lastElementChild.childNodes
        let colWidths = []
        td.forEach(x => {
          colWidths.push(x.offsetWidth)
        })
        this.colWidths = colWidths
      }
    },
    scroll() {
      if (!this.headerFixed) return;
      let t = this.$refs.table.getBoundingClientRect().top
      this.fixedTop = t * -1;
      this.fixedWidth = this.$refs.dom.offsetWidth;
      if (this.headerFixed && t < 0) {
        this.setWidths()
      }
      this.fixed = t < 0
    },
    tdStyle(align) {
      let obj = {};
      if (align) obj["text-align"] = align;
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