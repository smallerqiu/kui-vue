<template>
  <div :class="classes" :style="styles" v-docClick="close" v-winScroll="setPosition">
    <input readonly :value="text" type="text" :class="inputClass" @click="toggleDrop" :disabled="disabled" :placeholder="placeholder" :name="name" ref="rel" />
    <a class="k-datepicker-close" @click.stop="clear" v-if="clearable&&!disabled"></a>
    <transition name="dropdown">
      <div class="k-datepicker-popup" :style="popupStyle" tabindex="-1" v-show="visible" ref="dom" v-transferDom :data-transfer="transfer">
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
import emitter from "../../mixins/emitter";
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
      // return this.dates.length === 2;
      // console.log(Array.isArray(this.dates),)
      return Array.isArray(this.value)
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
      if(!this.$refs.dom.contains(e.target)){
        this.visible = false;
      }
      // if (!this.transfer) {
      //   this.visible = false;
      // } else {
      //   this.visible = this.$refs.dom.contains(e.target);
      // }
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
      let clientH = window.innerHeight;
      let clientW = window.innerWidth;

      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      let scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;

      let domH = dom.offsetHeight;
      let relH = rel.offsetHeight;
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
      this.dates = []
      this.$emit("input", this.range ? [] : "");
      this.setText();
      this.dispatch("FormItem", "form-item-change", this.range ? [] : "");
    },
    vi(val) {
      console.log(val,this.value)
      //在ie浏览器里面new Date() 格式必须为yyy/MM/dd 其他格式均不识别
      if (Array.isArray(val)) {
        // var d1 = new Date();
        // var d2 = new Date();
        // d2.setMonth(d2.getMonth()+1)

        return val.length > 1
          ? val.map((item,i) => item?new Date(item.toString().replace(/-/g, "/")):'')
          : [];
      } else {
        return val
          ? new Array(new Date(val.toString().replace(/-/g, "/")))
          : [];
      }
    },
    ok() {
      let date = this.dates.map(date => this.tf(date));
      let txt = date.join(` ${this.rangeSeparator} `);
      this.text = date.length == 1 ? date[0] : txt;

      this.$emit("input", date.length == 1 ? date[0] : date);
      this.dispatch(
        "FormItem",
        "form-item-change",
        date.length == 1 ? date[0] : date
      );
     
      // setTimeout(() => {
        this.visible = false
       console.log(this.visible)
       // });
    },
    tf(time, format) {
      if(!time) return '';
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