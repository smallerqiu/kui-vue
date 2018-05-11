<template>
  <div :class="classes" :style="styles" v-docClick="close" v-winScroll="setPosition">
    <input readonly :value="text" type="text" :class="inputClass" @click="toggleDrop" :disabled="disabled" :placeholder="placeholder" :name="name" ref="rel" />
    <a class="k-datepicker-close" @click.stop="clear" v-if="clearable&&!disabled"></a>
    <transition name="dropdown">
      <div class="k-datepicker-popup" :style="popupStyle" tabindex="-1" v-show="visible" ref="dom" v-transferDom :data-transfer="transfer">
        <template v-if="range">
          <Calendar v-model="dates[0]" :left="true"></Calendar>
          <Calendar v-model="dates[1]" :right="true"></Calendar>
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
import emitter from '../../mixins/emitter'
import winScroll from "../../directives/winScroll";
import transferDom from "../../directives/transferDom";
import docClick from "../../directives/docClick";
export default {
  name: "DatePicker",
  directives: { docClick, transferDom, winScroll },
  components: {
    Calendar: calendar
  },
  mixins: [emitter],
  props: {
    transfer: { type: Boolean, default: true },
    width: [String, Number],
    mini: Boolean,
    name: [String],
    popupClass: [String],
    value: [Date, Array, String],
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
      local: {}
    };
  },
  computed: {
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
      this.range && (style.width = "405px");
      style.left = `${this.left}px`;
      style.top = `${this.top}px`;
      if (this.fadeInBottom) {
        style["transform-origin"] = "center bottom 0px";
      }
      return style;
    },
    range() {
      return this.dates.length === 2;
    }
  },
  /* boforeCreated(){
    this.local = require(`./lang/${this.lang}.js`);
  }, */
  created() {
    this.local = require(`./lang/${this.lang}.js`);
    this.value != "" && this.value != [] && this.setText();
  },
  watch: {
    value(val) {
      let d = Array.isArray(val) ? val.join(this.rangeSeparator) : val;
      this.text = d;
      this.$emit("change", this.text);
    },
    dates(val) {
      let date = this.dates.map(date => this.tf(date));
      let txt = date.join(` ${this.rangeSeparator} `);
      let text = date.length == 1 ? date[0] : txt;
      this.$emit("change", text);
    }
  },
  methods: {
    close(e) {
      if (!this.transfer) {
        this.visible = false;
      } else {
        this.visible = this.$refs.dom.contains(e.target);
      }
    },
    toggleDrop() {
      this.visible = !this.visible && !this.disabled;
      this.$nextTick(() => this.setPosition());
    },
    setPosition() {
      let m = 5;
      let rel = this.$refs.rel;
      let dom = this.$refs.dom;
      let relPos = this.getElementPos(rel);
      let clientH = window.innerHeight
      let clientW = window.innerWidth

      let scrollTop = window.scrollY;

      let domH = dom.offsetHeight;
      let relH = rel.offsetHeight;
      if (this.transfer) this.left = relPos.x + 1;
      //new
      if (clientH - relPos.y - relH - m < domH) {  //空出来的高度不足以放下dom
        this.fadeInBottom = true
        this.top = this.transfer ? relPos.y - m - domH + scrollTop : -(domH + m)
      } else {
        this.fadeInBottom = false
        this.top = this.transfer ? relPos.y + relH + m + scrollTop : relH + m
      }
      // if (h - (pos.y - s) - rh < dh) {
      //   this.fadeInBottom = true;
      //   this.top = !this.transfer ? -dh - m : pos.y - dh - m;
      // } else {
      //   this.fadeInBottom = false;
      //   this.top = !this.transfer ? rh + m : pos.y + rh + m;
      // }
    },
    setText() {
      let date = this.dates.map(date => this.tf(date));
      let txt = date.join(` ${this.rangeSeparator} `);
      this.text = this.value ? (date.length == 1 ? date[0] : txt) : "";
    },
    clear() {
      this.setText();
      this.$emit("input", this.range ? [] : "");
      this.dispatch('FormItem', 'form-item-change', this.range ? [] : "")
    },
    vi(val) {
      if (Array.isArray(val)) {
        // var d1 = new Date();
        // var d2 = new Date(d1.setMonth(d1.getMonth() + 1 + 1));
        return val.length > 1
          ? val.map(item => new Date(item))
          : [new Date(), new Date()];
      } else {
        return val ? new Array(new Date(val)) : [new Date()];
      }
    },
    ok() {
      let date = this.dates.map(date => this.tf(date));
      let txt = date.join(` ${this.rangeSeparator} `);
      this.text = date.length == 1 ? date[0] : txt;

      this.$emit("input", date.length == 1 ? date[0] : date);
      this.dispatch('FormItem', 'form-item-change', date.length == 1 ? date[0] : date)

      setTimeout(() => {
        this.visible = this.range;
      });
    },
    tf(time, format) {
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
      return (format || this.format).replace(
        /Y+|M+|D+|H+|h+|m+|s+|S+/g,
        str => map[str]
      );
    }
  }
};
</script>