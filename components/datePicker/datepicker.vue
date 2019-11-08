<template>
  <div :class="classes" :style="styles" v-docClick="close" v-winScroll="handleScroll">
    <input readonly :value="text" type="text" :class="inputClass" @click="toggleDrop" :disabled="disabled" :placeholder="placeholder" :name="name" ref="rel" />
    <a class="k-datepicker-close" @click.stop="clear" v-if="showClose"></a>
    <transition name="dropdown">
      <div class="k-datepicker-popup" :style="popupStyle" tabindex="-1" v-if="visible" ref="dom" v-transferDom :data-transfer="transfer">
        <template v-if="range">
          <Calendar v-model="dates[0]" :left="true" class="k-calendar-left"></Calendar>
          <Calendar v-model="dates[1]" :right="true" class="k-calendar-right"></Calendar>
        </template>
        <template v-else>
          <Calendar v-model="dates[0]"></Calendar>
        </template>
      </div>
    </transition>
  </div>
</template>
<script>
import calendar from "./datecalendar";
import emitter from "@/mixins/emitter";
import winScroll from "../_tool/winScroll";
import transferDom from "../_tool/transferDom";
import docClick from "../_tool/docClick";
import lang from './lang'
export default {
  name: "DatePicker",
  directives: { docClick, transferDom, winScroll },
  components: { Calendar: calendar },
  mixins: [emitter],
  props: {
    transfer: { type: Boolean, default: false },
    width: [String, Number],
    mini: Boolean,
    name: [String],
    value: [Date, Array, String, Number],
    disabled: [Boolean],
    rangeSeparator: { type: String, default: "~" },
    clearable: { type: Boolean, default: false },
    placeholder: [String],
    lang: {
      type: String,
      default: "zh",
      validator(value) {
        return ["zh", "en"].indexOf(value) >= 0;
      }
    },
    disabledDate: {
      type: Function,
      default: () => {
        return false;
      }
    },
    format: { type: String, default: "YYYY-MM-DD" }
  },
  data() {
    return {
      text: "",
      visible: false,
      left: 0,
      fadeInBottom: false,
      top: 0,
      dates: this.vi(this.value),
      local: {},
      childrens: []
    };
  },
  computed: {
    showClose() {
      return this.clearable && !this.disabled && this.text
    },
    styles() {
      return this.width > 0 ? { width: `${this.width}px` } : {};
    },
    classes() {
      return [
        "k-datepicker",
        {
          ["k-datepicker-range"]: this.rangeSeparator,
          ["k-datepicker-clearable"]: this.clearable && !this.disabled,
          ["k-datepicker-mini"]: this.mini
        }
      ];
    },
    inputClass() {
      return [
        "k-datepicker-input",
        {
          ["focus"]: this.visible
        }
      ];
    },
    popupStyle() {
      let style = {};
      this.range && (style.width = "442px");
      style.left = `${this.left}px`;
      style.top = `${this.top}px`;
      if (this.fadeInBottom) {
        style["transform-origin"] = "center bottom 0px";
      }
      return style;
    },
    range() {
      return Array.isArray(this.value)
    },
  },
  /* boforeCreated(){
    this.local = require(`./lang/${this.lang}.js`);
  }, */
  mounted() {
    this.local = lang[this.lang]
    if (this.value || (Array.isArray(this.value) && this.value.length)) {
      this.setText();
    }
  },
  watch: {
    value(val, old) {
      if (val != old) {
        let range = Array.isArray(val)
        let dates = range ? val.map(date => this.formatDate(date)) : this.formatDate(val);
        let d = range ? dates.join(this.rangeSeparator) : dates;
        this.text = d;
        this.$emit("change", dates);
        if (this.text && this.text.length) {
          this.dispatch("FormItem", "form-item-change", this.text);
        }
      }
    },
    dates(val) {
      let date = this.dates.map(date => this.formatDate(date));
      let txt = date.join(` ${this.rangeSeparator} `);
      let text = date.length == 1 ? date[0] : txt;
      this.$emit("change", text);
    }
  },
  methods: {
    close(e) {
      if (this.$refs.dom && !this.$refs.dom.contains(e.target)) {
        this.visible = false;
      }
      // if (!this.transfer) {
      //   this.visible = false;
      // } else {
      //   this.visible = this.$refs.dom.contains(e.target);
      // }
    },
    toggleDrop() {
      if (!this.disabled) {
        this.visible = !this.visible
        this.$nextTick(() => this.setPosition());
      }
    },
    handleScroll() {
      this.setPosition()
    },
    setPosition() {
      if (this.$isServer) return;
      let m = 5;
      let rel = this.$refs.rel;
      let dom = this.$refs.dom;
      if (!dom) return;
      let relPos = this.getElementPos(rel);
      let clientH = window.innerHeight;
      let clientW = window.innerWidth;

      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      let scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;

      let domH = dom.offsetHeight;
      let domW = dom.offsetWidth;
      let relH = rel.offsetHeight;
      let relW = rel.offsetWidth;
      if (this.transfer) this.left = relPos.left + scrollLeft;
      //new
      if (clientH - relPos.top - relH - m < domH) {
        //空出来的高度不足以放下dom
        this.fadeInBottom = true;
        this.top = this.transfer ? relPos.top - m - domH + scrollTop : -(domH + m);
      } else {
        this.fadeInBottom = false;
        this.top = this.transfer ? relPos.top + relH + m + scrollTop : relH + m;
      }
      if (clientW - relPos.left - domW - m < domW) {
        this.left = this.transfer ? (relPos.left - domW + relW) : (- (domW - relW - 1))
      }
    },
    setText() {
      let date = this.dates.map(date => this.formatDate(date));
      let txt = date.join(` ${this.rangeSeparator} `);
      this.text = this.value ? (date.length == 1 ? date[0] : txt) : "";
    },
    clear() {
      this.visible = false
      this.dates = []
      this.$emit("input", this.range ? [] : "");
      this.setText();
      this.dispatch("FormItem", "form-item-change", this.range ? [] : "");
    },
    vi(val) {
      //在ie,safari浏览器里面new Date() 格式必须为yyy/MM/dd 其他格式均不识别
      if (Array.isArray(val)) {
        return val.map((item, i) => item > 0 ? new Date(item) : new Date(item.toString().replace(/-/g, "/")))
      } else {
        return val
          ? new Array(val > 0 ? new Date(val) : new Date(val.toString().replace(/-/g, "/")))
          : [];
      }
    },
    ok() {
      if (this.range && (!this.dates[0] || !this.dates[1])) {
        this.visible = false
        return;
      }
      if (this.range && this.dates[1] < this.dates[0]) {
        let date0 = this.dates[0]
        this.dates[0] = this.dates[1]
        this.dates[1] = date0
      }
      let date = this.dates.map(date => this.formatDate(date));
      let txt = date.join(` ${this.rangeSeparator} `);
      this.text = !this.range ? date[0] : txt;

      this.$emit("input", !this.range ? date[0] : date);
      this.dispatch("FormItem", "form-item-change", !this.range ? date[0] : date);
      this.visible = false
    },
    formatDate(time, format) {
      if (!time) return '';
      time = new Date(time > 0 ? time : time.toString().replace(/-/g, "/"))
      const year = time.getFullYear();
      const month = time.getMonth();
      const day = time.getDate();
      const hours24 = time.getHours();
      const hours = hours24 % 12 === 0 ? 12 : hours24 % 12;
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      const milliseconds = time.getMilliseconds();
      const dd = t => ("0" + t).slice(-2);
      const map = {
        YYYY: year,
        MM: dd(month + 1),
        MMM: this.local.months[month],
        MMMM: this.local.monthsHead[month],
        M: month + 1,
        DD: dd(day),
        D: day,
        HH: dd(hours24),
        H: hours24,
        hh: dd(hours),
        h: hours,
        mm: dd(minutes),
        m: minutes,
        ss: dd(seconds),
        s: seconds,
        S: milliseconds
      };
      return (format || this.format).replace(/Y+|M+|D+|H+|h+|m+|s+|S+/g, str => map[str]);
    },
    update(value) {
      this.childrens.forEach(c => {
        c.update(value)
      })
    }
  },
};
</script>