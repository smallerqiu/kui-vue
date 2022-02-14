<template>
  <div :class="classes" :style="selectStyles" v-docClick="close" v-winScroll="handleScroll">
    <div :class="selectClass" @click="toggleDrop" ref="rel">
      <!-- <span class="k-select-placeholder" v-if="!showLabel">{{placeholder}}</span> -->
      <input type="text" class="k-select-label" :placeholder="placeholder" v-model="showLabel" readonly="readonly" :disabled="disabled" ref="input" />
      <span class="k-select-arrow"></span>
      <span class="k-select-clearable" v-if="isclearable" @click.stop="clear"></span>
    </div>
    <transition name="dropdown">
      <div class="k-select-dropdown" ref="dom" v-show="visible" :style="dropdownStyles" v-transferDom :data-transfer="transfer">
        <div class="k-treeselect-search" v-if="queryable">
          <input class="k-treeselect-input" :placeholder="queryPlaceholder" v-model="queryKey" />
          <input type="button" value="搜索" class="k-treeselect-btn" @click="queryChange" />
        </div>
        <Tree :data="Tdata" @load-data="loadData" @select="treeSelect" @expand="expand"></Tree>
      </div>
    </transition>
  </div>
</template>
<script> 
import emitter from "@/mixins/emitter";
import transferDom from "../_tool/transferDom";
import winScroll from "../_tool/resize";
import docClick from "../_tool/docClick";
import Tree from '../tree';
export default {
  name: "TreeSelect",
  directives: { docClick, transferDom, winScroll },
  components: { Tree },
  mixins: [emitter],
  props: {
    placeholder: { type: String, default: "请选择" },
    mini: Boolean,
    queryable: Boolean,
    transfer: Boolean,
    width: { type: [Number, String], default: 0 },
    value: { type: [String, Number], default: "" },
    label: { type: [String, Number], default: "" },
    clearable: Boolean,
    disabled: Boolean,
    data: { type: Array },
    queryPlaceholder: { type: String, default: '请输入关键字查询' },
  },
  data() {
    return {
      Tdata: this.data,
      visible: false,
      dropdownWith: 0,
      left: 0,
      fadeInBottom: false,
      top: 0,
      showLabel: this.label,
      queryKey: ''
    };
  },
  watch: {
    data(val) {
      this.Tdata = val
    },
    value(val) {
      if (val === '' || val === undefined || val === null) {
        this.showLabel = ''
      }
    },
    label(label) {
      this.showLabel = label
    }
  },
  computed: {
    isclearable() {
      return this.clearable && !this.disabled && this.showLabel;
    },
    classes() {
      return [
        "k-select",
        {
          ["k-select-disabled"]: this.disabled,
          ["k-select-open"]: this.visible,
          ["k-select-mini"]: this.mini
        }
      ];
    },
    selectClass() {
      return [
        "k-select-selection",
        {
          ["k-select-isclearable"]: this.clearable && this.showLabel
        }
      ];
    },
    selectStyles() {
      return this.width > 0 ? { width: `${this.width}px` } : {};
    },
    dropdownStyles() {
      let style = {};
      style.width = `${this.dropdownWith}px`;
      style.left = `${this.left}px`;
      style.top = `${this.top}px`;
      if (this.fadeInBottom) {
        style["transform-origin"] = "center bottom 0px";
      }
      return style;
    }
  },
  methods: {
    loadData(item, callback) {
      this.$emit('load-data', item, callback)
    },
    queryChange() {
      this.$emit('query-change', this.queryKey)
    },
    treeSelect(item) {
      let change = this.$listeners.change;
      item = item[0] || {}
      if (change) {
        this.$emit('change', item, value => {
          this.visible = value
          if (!value) {
            this.showLabel = item.title
            this.$emit('input', item.value || '')
            // this.visible = false;
          }
        })
        return;
      }
      this.showLabel = item.title
      this.$emit('input', item.value || '')
      this.$nextTick(() => this.visible = false);

    },
    expand(e) {
      this.handleScroll()
    },
    close(e) {
      if (this.$refs.dom && !this.$refs.dom.contains(e.target))
        this.visible = false;
    },
    clear() {
      this.showLabel = "";
      this.$emit("input", "");
      this.$emit("change", {});
    },
    toggleDrop() {
      if (this.disabled) {
        return false;
      }
      this.dropdownWith = this.$refs.rel.offsetWidth;
      this.visible = !this.visible;

      this.handleScroll();
    },
    handleScroll() {
      this.$nextTick(() => this.setPosition());
    },
    setPosition() {
      if (!this.$isServer) {
        let m = 3;
        let rel = this.$refs.rel;
        let dom = this.$refs.dom;
        if (!dom) return;
        this.dropdownWith = rel.offsetWidth;

        let relPos = this.getElementPos(rel);
        let clientH = window.innerHeight;
        let clientW = window.innerWidth;
        // console.log(relPos)
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        let scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;

        let domH = dom.offsetHeight;
        let relH = rel.offsetHeight;
        if (this.transfer) this.left = relPos.left + 1 + scrollLeft;
        //new
        if (clientH - relPos.top - relH - m < domH) {
          //空出来的高度不足以放下dom
          this.fadeInBottom = true;
          this.top = this.transfer
            ? relPos.top - m - domH + scrollTop
            : -(domH + m);
        } else {
          this.fadeInBottom = false;
          this.top = this.transfer ? relPos.top + relH + m + scrollTop : relH + m;
        }
        // console.log(this.top)
        // console.log(this.fadeInBottom, clientH, relPos.y, relH, m, domH)
        //old
        // if (h - (pos.y - s) - rh < dh) {
        //   this.fadeInBottom = true;
        //   this.top = !this.transfer ? -dh - m : pos.y - dh - m;
        // } else {
        //   this.fadeInBottom = false;
        //   this.top = !this.transfer ? rh + m : pos.y + rh + m;
        // }
      }
    },

  }
};
</script>

