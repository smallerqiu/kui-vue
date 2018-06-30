<template>
  <div :class="`${pre}`">
    <div :class="`${pre}-head`">
      <span :class="`${pre}-prev-decade-btn`" v-show="showYears" @click="year-=10">«</span>
      <span :class="`${pre}-prev-year-btn`" v-show="!showYears" @click="year--">«</span>
      <span :class="`${pre}-prev-month-btn`" v-show="!showYears&&!showMonths" @click="prevMonth">‹</span>
      <span :class="`${pre}-year-select`" v-show="showYears">{{ys+'-'+ye}}</span>
      <template v-if="local.yearSuffix">
        <span :class="`${pre}-year-select`" @click="showYears=!showYears" v-show="!showYears">{{year}}{{local.yearSuffix}}</span>
        <span :class="`${pre}-month-select`" @click="showMonths=!showMonths" v-show="!showYears&&!showMonths">{{local.monthsHead[month]}}</span>
      </template>
      <template v-else>
        <span :class="`${pre}-month-select`" @click="showMonths=!showMonths" v-show="!showYears&&!showMonths">{{local.monthsHead[month]}}</span>
        <span :class="`${pre}-year-select`" @click="showYears=!showYears" v-show="!showYears">{{year}}</span>
      </template>
      <span :class="`${pre}-next-month-btn`" v-show="!showYears&&!showMonths" @click="nextMonth">›</span>
      <span :class="`${pre}-next-year-btn`" v-show="!showYears" @click="year++">»</span>
      <span :class="`${pre}-next-decade-btn`" v-show="showYears" @click="year+=10">»</span>
    </div>
    <div :class="`${pre}-body`">
      <div :class="`${pre}-days`">
        <span :class="`${pre}-week`" v-for="(i) in local.weeks" :key="i">{{i}}</span>
        <span v-for="(j,x) in days" :key="x" @click="is($event)&&(day=j.i,ok(j))" :class="[(j.p||j.n)?`${pre}-date-out`:'',status(j.y,j.m,j.i,hour,minute,second,'YYYYMMDD')]">{{j.i}}</span>
      </div>
      <div :class="`${pre}-months`" v-show="showMonths">
        <span v-for="(i,j) in local.months" :key="j" @click="is($event)&&(showMonths=(m==='M'),month=j,(m==='M'&&ok()))" :class="[status(year,j,day,hour,minute,second,'YYYYMM')]">{{i}}</span>
      </div>
      <div :class="`${pre}-years`" v-show="showYears">
        <span v-for="(i,j) in years" :key="j" @click="is($event)&&(showYears=(m==='Y'),year=i,(m==='Y'&&ok()))" :class="[(j===0||j===11)?`${pre}-date-out`:'',status(i,month,day,hour,minute,second,'YYYY')]">{{i}}</span>
      </div>
      <div :class="`${pre}-hours`" v-show="showHours">
        <div :class="`${pre}-title`">{{local.hourTip}}</div>
        <span v-for="(j,i) in 24" :key="i" @click="is($event)&&(showHours=false,hour=i,ok('h'))" :class="[status(year,month,day,i,minute,second,'YYYYMMDDHH')]">{{i}}</span>
      </div>
      <div :class="`${pre}-minutes`" v-show="showMinutes">
        <div :class="`${pre}-title`">{{local.minuteTip}}</div>
        <span v-for="(j,i) in 60" :key="i" @click="is($event)&&(showMinutes=false,minute=i,ok('h'))" :class="[status(year,month,day,hour,i,second,'YYYYMMDDHHmm')]">{{i}}</span>
      </div>
      <div :class="`${pre}-seconds`" v-show="showSeconds">
        <div :class="`${pre}-title`">{{local.secondTip}}</div>
        <span v-for="(j,i) in 60" :key="i" @click="is($event)&&(showSeconds=false,second=i,ok('h'))" :class="[status(year,month,day,hour,minute,i,'YYYYMMDDHHmmss')]">{{i}}</span>
      </div>
    </div>
    <div :class="`${pre}-foot`" v-if="m==='H'">
      <div :class="`${pre}-hour`">
        <span :title="local.hourTip" @click="showHours=!showHours,showMinutes=showSeconds=false" :class="{on:showHours}">{{hour|dd}}</span>
        <span>:</span>
        <span :title="local.minuteTip" @click="showMinutes=!showMinutes,showHours=showSeconds=false" :class="{on:showMinutes}">{{minute|dd}}</span>
        <span>:</span>
        <span :title="local.secondTip" @click="showSeconds=!showSeconds,showHours=showMinutes=false" :class="{on:showSeconds}">{{second|dd}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Calendar",
  props: {
    value: null,
    left: false,
    right: false
  },
  data() {
    const time = this.get(this.value);
    return {
      pre: "k-calendar",
      m: "D",
      showYears: false,
      showMonths: false,
      showHours: false,
      showMinutes: false,
      showSeconds: false,
      year: time.year,
      month: time.month,
      day: time.day,
      hour: time.hour,
      minute: time.minute,
      second: time.second
    };
  },
  watch: {
    value(val) {
      const time = this.get(val);
      this.year = time.year;
      this.month = time.month;
      this.day = time.day;
      this.hour = time.hour;
      this.minute = time.minute;
      this.second = time.second;
    }
  },
  computed: {
    local() {
      return this.$parent.local;
    },
    format() {
      return this.$parent.format;
    },
    start() {
      return this.parse(this.$parent.dates[0]);
    },
    end() {
      return this.parse(this.$parent.dates[1]);
    },
    ys() {
      return parseInt(this.year / 10) * 10;
    },
    ye() {
      return this.ys + 10;
    },
    years() {
      const arr = [];
      let start = this.ys - 1;
      while (arr.length < 12) {
        arr.push(start++);
      }
      return arr;
    },
    days() {
      const days = [];
      const year = this.year;
      const month = this.month;
      const time = new Date(year, month, 1);
      const dow = this.local.dow || 7;
      time.setDate(0); // switch to the last day of last month
      let lastDay = time.getDate();
      const week = time.getDay() || 7;
      let count = dow <= week ? week - dow + 1 : week + (7 - dow + 1);
      while (count > 0) {
        days.push({
          i: lastDay - count + 1,
          y: month > 0 ? year : year - 1,
          m: month > 0 ? month - 1 : 11,
          p: true
        });
        count--;
      }
      time.setMonth(time.getMonth() + 2, 0); // switch to the last day of the current month
      lastDay = time.getDate();
      let i = 1;
      for (i = 1; i <= lastDay; i++) {
        days.push({ i: i, y: year, m: month });
      }
      for (i = 1; days.length < 42; i++) {
        days.push({
          i: i,
          y: month < 11 ? year : year + 1,
          m: month < 11 ? month + 1 : 0,
          n: true
        });
      }
      return days;
    }
  },
  filters: {
    dd: val => ("0" + val).slice(-2)
  },
  methods: {
    get(time) {
      if (!time) {
        let d1 = this.$parent.dates[0]
        time = new Date()
        if (this.right && !d1) {
          let d2 = new Date()
          d2.setMonth(d2.getMonth() + 1)
          time = d2
        }
      }
      return {
        year: time.getFullYear(),
        month: time.getMonth(),
        day: time.getDate(),
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      };
    },
    parse(num) {
      return parseInt(num / 1000);
    },
    status(year, month, day, hour, minute, second, format) {
      const maxDay = new Date(year, month + 1, 0).getDate();
      const time = new Date(
        year,
        month,
        day > maxDay ? maxDay : day,
        hour,
        minute,
        second
      );
      const today = new Date();

      const t = this.parse(time);
      const f = this.$parent.formatDate;
      const classObj = {};
      let flag = false;
      let istoday = false
      if (format == 'YYYYMMDD') {
        istoday = today.getFullYear() == year && today.getMonth() == month && today.getDate() == day
      }
      if (format === "YYYY") {
        flag = year === this.year;
      } else if (format === "YYYYMM") {
        flag = month === this.month;
      } else {
        flag = f(this.value, format) === f(time, format);
      }
      classObj[`${this.pre}-date`] = true;
      classObj[`${this.pre}-date-disabled`] = (this.right && t < this.start) || (this.left && t > this.end) || this.$parent.disabledDate(time);
      classObj[`${this.pre}-date-on`] = (this.left && t > this.start) || (this.right && t < this.end);
      classObj[`${this.pre}-date-selected`] = flag;
      classObj[`${this.pre}-date-today`] = istoday;
      return classObj;
    },
    nextMonth() {
      if (this.month < 11) {
        this.month++;
      } else {
        this.month = 0;
        this.year++;
      }
    },
    prevMonth() {
      if (this.month > 0) {
        this.month--;
      } else {
        this.month = 11;
        this.year--;
      }
    },
    is(e) {
      return e.target.className.indexOf(`${this.pre}-date-disabled`) === -1;
    },
    ok(info) {
      let year = "";
      let month = "";
      info && info.n && this.nextMonth();
      info && info.p && this.prevMonth();
      if (info === "h") {
        const time = this.get(this.value);
        year = time.year;
        month = time.month;
      }
      let d = new Date(
        year || this.year,
        month || this.month,
        this.day,
        this.hour,
        this.minute,
        this.second
      );
      this.$emit("input", d);
      let d1 = this.$parent.dates[0]
      if (d1 && this.right || !this.$parent.range) {
        this.$parent.ok();
      }
    }
  },
  mounted() {
    const is = c => this.format.indexOf(c) !== -1;
    if (is("s") && is("m") && (is("h") || is("H"))) {
      this.m = "H";
    } else if (is("D")) {
      this.m = "D";
    } else if (is("M")) {
      this.m = "M";
      this.showMonths = true;
    } else if (is("Y")) {
      this.m = "Y";
      this.showYears = true;
    }
  }
};
</script>