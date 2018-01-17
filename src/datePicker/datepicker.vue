<template>
  <div :class="classes"  :style="styles">
    <input readonly :value="text" :class="inputClass" :disabled="disabled" :placeholder="placeholder" :name="name" ref="kInput" />
    <a class="k-datepicker-close" @click.stop="cls" v-if="clearable&&!disabled"></a>
    <transition name="dropdown">
      <div class="k-datepicker-popup" :style="popupStyle" tabindex="-1" v-show="show" ref="kCalendar">
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
import utils from "../utils";
export default {
  name: "DatePicker",
  components: {
    Calendar: calendar
  },
  props: {
    width: [String, Number],
    mini: Boolean,
    name: [String],
    popupClass: [String],
    value: [Date, Array, String],
    disabled: [Boolean],
    change: { type: Function, default: () => {} },
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
      show: false,
      dates: this.vi(this.value),
      local: {}
    };
  },
  computed: {
    styles(){
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
          ["focus"]: this.show
        }
      ];
    },
    popupStyle() {
      return this.range ? { width: "405px" } : "";
    },
    range() {
      return this.dates.length === 2;
    }
    /* local() {
      let x =  require(`./lang/${this.lang}.js`);
    } */
    /*  text() {
      const val = this.value;
      const txt = this.dates
        .map(date => this.tf(date))
        .join(` ${this.rangeSeparator} `);
      if (Array.isArray(val)) {
        return val.length > 1 ? txt : "";
      } else {
        return val ? txt : "";
      }
    } */
  },
  /* boforeCreated(){
    this.local = require(`./lang/${this.lang}.js`);
  }, */
  created() {
    this.local = require(`./lang/${this.lang}.js`);
    this.value != "" && this.value != [] && this.setText();
  },
  watch: {
    show(v) {
      if (v) {
        //获取元素的位置
        let obj = this.$refs.kInput;
        var pos = utils.getElementPos(obj);
        let cal = this.$refs.kCalendar;
        if (pos.x > document.body.clientWidth - 215) {
          cal.style.right = "0";
        }
        if (pos.y > document.body.clientHeight - 260) {
          cal.style.bottom = "36px";
        }
      }
    },
    value(val) {
      let d = Array.isArray(val) ? val.join(this.rangeSeparator) : val;
      this.text = d;
      this.change(this.text);
      // this.$emit("input", this.range ? [] : "");
      // this.$emit("input", d);
    },
    dates(val) {
      let date = this.dates.map(date => this.tf(date));
      let txt = date.join(` ${this.rangeSeparator} `);
      let text = date.length == 1 ? date[0] : txt;
      this.change(text);
    }
  },
  methods: {
    setText() {
      let date = this.dates.map(date => this.tf(date));
      let txt = date.join(` ${this.rangeSeparator} `);
      this.text = this.value ? (date.length == 1 ? date[0] : txt) : "";
    },
    cls() {
      this.setText();
      this.$emit("input", this.range ? [] : "");
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

      setTimeout(() => {
        this.show = this.range;
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
    },
    dc(e) {
      this.show = this.$el.contains(e.target) && !this.disabled;
    }
  },
  mounted() {
    document.addEventListener("click", this.dc);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.dc);
  }
};
</script>