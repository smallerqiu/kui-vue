<template>
  <div :class="classes" :style="styles" ref="table">
    <table class="k-table-header" v-if="headerFixed">
      <thead>
        <tr>
          <th v-for="(item,index) in columns" :key="index" :style="`width:${colWidths[index]}px`">
            <div class="k-table-cell">
              <template v-if="item.type&&item.type=='selection'">
                <label for="k-checkbox-all">
                  <k-checkbox @change="checkAll" v-model="checkedAll"></k-checkbox>
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
                  <k-checkbox @change="checkAll" v-model="checkedAll"></k-checkbox>
                </label>
              </template>
              <template v-else>
                <span :class="{'sort':item.sortable}" @click="sort(item)">{{item.title}}</span>
                <span v-if="item.sortable" class="k-table-sort">
                  <span :class="['k-table-sort-asc',{'active':item._sort=='ASC'}]" @click="sort(item,'ASC')"></span>
                  <span :class="['k-table-sort-desc',{'active':item._sort=='DESC'}]" @click="sort(item,'DESC')"></span>
                </span>
              </template>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in data" :key="index">
          <td v-for="(sub,n) in columns" :key="n" :style="tdStyle(sub.textAlign)" @click="rowClick(sub,item,index,$event)">
            <div v-if="sub.type&&sub.type=='selection'" class="k-table-cell">
              <label for="">
                <k-checkbox v-model="item.checked" @change="checkChange(item)"></k-checkbox>
              </label>
            </div>
            <template v-else-if="sub.type&&sub.type=='html'">
              <template v-if="isShowTip(item,sub)">
                <Tooltip :content="item[sub.key].replace(/<\/?.+?>/g,'')" breaked transfer>
                  <div :style="`width:${sub.width||textMaxLength*12}px;`" class="k-table-cell k-table-cell-hidden" v-html="item[sub.key]"> </div>
                </Tooltip>
              </template>
              <div v-html="item[sub.key]" class="k-table-cell" v-else></div>
            </template>
            <div v-else-if="sub.render" class="k-table-cell" :style="`width:${sub.width}px;overflow:hidden;`">
              <Expand :render="sub.render" :row="item" :column="sub" :index="Number(index)"></Expand>
            </div>
            <template v-else>
              <template v-if="isShowTip(item,sub)">
                <Tooltip :content="item[sub.key]" breaked transfer>
                  <div :style="`width:${sub.width||textMaxLength*12}px;`" class="k-table-cell k-table-cell-hidden" v-if="!item[sub.key+'_editor']" @click="showEditor(item,sub,$event)"> {{item[sub.key]}}</div>
                </Tooltip>
              </template>
              <template v-else>
                <div :style="`width:${sub.width}px;`" :class="['k-table-cell',{'k-table-cell-hidden':sub.overflow=='hidden'}]" v-if="!item[sub.key+'_editor']" @click="showEditor(item,sub,$event)"> {{item[sub.key]}}</div>
              </template>
              <Input :mini="mini" :value="item[sub.key]" v-show="item[sub.key+'_editor']" @blur="editorChange(item,sub,index,$event)" autofocus />
            </template>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="!data||data.length==0" class="no-data">{{noDataText}}</div>
    <div class="k-loading-warp" v-if="isloading">
      <div class="k-loading-inner">
        <div class="k-loading-animate k-loading-animate-zoom"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Checkbox } from "../checkbox";
import Input from "../input";
import Tooltip from "../tooltip";
import Expand from "./expand.js";
// import scroll from '../_tool/winScroll.js'
let copyData = (data) => {
  const t = Object.prototype.toString.call(data)
  let o = t === '[object Array]' ? [] : (t === '[object Object]' ? {} : data)

  if (t === '[object Array]') {
    for (let i = 0; i < data.length; i++) {
      o.push(copyData(data[i]));
    }
  } else if (t === '[object Object]') {
    for (let i in data) {
      o[i] = copyData(data[i]);
    }
  }
  return o;
}
export default {
  components: { Expand: Expand, "k-checkbox": Checkbox, Tooltip, Input },
  name: "Table",
  // directives: { scroll },
  props: {
    width: [String, Number],
    height: [String, Number],
    bordered: Boolean,
    headerFixed: Boolean,
    mini: Boolean,
    loading: Boolean,
    noDataText: { type: String, default: "暂无数据..." },
    data: { type: Array, default: () => [] }, // 表格数据
    columns: { type: Array, default: () => [] }, // 表格类目
    textMaxLength: { type: Number, default: 0 },
    sortSingle: Boolean,
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
      let style = { width: this.width + 'px', height: this.height + 'px' }
      style.overflow = (this.data.length == 0 || this.isloading) ? 'hidden' : ''
      style.position = this.headerFixed ? 'relative' : ''
      return style
    }
  },
  data() {
    return {
      colWidths: [],
      checkedAll: false,
      isloading: this.loading,
      selectRow: [], //所有选择的数据
    };
  },
  mounted() {
  },
  watch: {
    loading(v) {
      this.isloading = v
      if (v) {
        this.$refs.table.scrollLeft = 0
      }
    },
    data: {
      handler(r1, r2) {
        let count = this.data.filter(x => x.checked == true).length
        this.checkedAll = this.data.length && count == this.data.length
        this.setWidths()
      },
      deep: true
    }
  },
  methods: {
    editorChange(item, sub, index, e) {
      let olditem = JSON.parse(JSON.stringify(this.data[index]))
      item[sub.key] = e.target.value
      this.$set(item, sub.key + '_editor', false)
      delete item[sub.key + '_editor']
      // e.target.style.display = 'none'
      // e.target.tagName == 'INPUT' && ()
      // this.$set(item, item[sub.key], e.target.value)
      if (item[sub.key] != olditem[sub.key]) {
        this.$emit('editor-change', sub.key, item, olditem, index)
      }
    },
    showEditor(item, sub, e) {
      if (sub.type == 'editor' && !item[sub.key + '_editor']) {
        this.$set(item, sub.key + '_editor', true)
        let input = e.target.parentNode.querySelector('input')
        this.$nextTick(a => {
          input.focus()
        })
        // console.log()
        // console.log(e.target.parentNode.querySelector('input').select())
      }
    },
    sort(item, sort) {
      if (this.data && this.data.length && item.sortable) {
        if (this.sortSingle) {
          this.columns.map(d => item != d && (d._sort = ''))
        }
        let value = !sort ? (item._sort == 'ASC' ? 'DESC' : 'ASC') : sort
        this.$set(item, '_sort', value)
        this.$emit('sort-change', item.key, value)
      }
    },
    rowClick(sub, item, index, e) {
      if (sub.type == 'editor' || sub.type == 'selection' || sub.type == 'action') return;
      this.$emit('row-click', item, index, e)
    },
    isShowTip(item, sub) {
      if (!item || !sub || !sub.key) return false
      return (this.textMaxLength && (item[sub.key] && item[sub.key].length > this.textMaxLength)) || sub.tooltip;
    },
    setWidths() {
      if (this.headerFixed && this.columns && this.columns.length) {
        let td = this.$refs.dom.childNodes[2].lastElementChild.childNodes
        let colWidths = []
        td.forEach(x => {
          colWidths.push(x.offsetWidth)
        })
        console.log(colWidths)
        this.colWidths = colWidths
      }
    },
    tdStyle(align) {
      let obj = {};
      if (align) obj["text-align"] = align;
      return obj;
    },
    checkChange(item) {
      this.$set(item, 'checked', item.checked)
      // this.data[index].checked = checked
      this.selectRow = this.data.filter(item => item.checked == true);
      this.$emit("selection", this.selectRow, item);
      this.checkedAll = this.data.length && this.selectRow.length == this.data.length
    },
    checkAll(checked) {
      this.data.forEach(item => {
        this.$set(item, 'checked', checked)
      })
      this.selectRow = checked ? JSON.parse(JSON.stringify(this.data)) : [];
      this.$emit("selection", this.selectRow);
    }
  }
};
</script>