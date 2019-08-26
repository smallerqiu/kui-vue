<template>
  <div class="k-calendar">
    <div class="k-calendar-head">
      <template v-if="showTime">
        <div class="k-calendar-time-title">{{left?local.startTimeTip:(right?local.endTimeTip:local.timeTip)}}</div>
      </template>
      <template v-else>
        <span class="k-calendar-prev-decade-btn" v-show="showYears" @click="year-=10">«</span>
        <span class="k-calendar-prev-year-btn" v-show="!showYears && !right" @click="setDate('Y-')">«</span>
        <span class="k-calendar-prev-month-btn" v-show="!showYears&&!showMonths && !right" @click="prevMonth">‹</span>
        <span class="k-calendar-year-select" v-show="showYears">{{ys+'-'+ye}}</span>
        <template v-if="local.yearSuffix">
          <span class="k-calendar-year-select" @click="showYears=!showYears" v-show="!showYears">{{year}}{{local.yearSuffix}}</span>
          <span class="k-calendar-month-select" @click="showMonths=!showMonths" v-show="!showYears&&!showMonths">{{local.monthsHead[month]}}</span>
        </template>
        <template v-else>
          <span class="k-calendar-month-select" @click="showMonths=!showMonths" v-show="!showYears&&!showMonths">{{local.monthsHead[month]}}</span>
          <span class="k-calendar-year-select" @click="showYears=!showYears" v-show="!showYears">{{year}}</span>
        </template>
        <span class="k-calendar-next-month-btn" v-show="!showYears&&!showMonths && !left" @click="nextMonth">›</span>
        <span class="k-calendar-next-year-btn" v-show="!showYears && !left" @click="setDate('Y+')">»</span>
        <span class="k-calendar-next-decade-btn" v-show="showYears" @click="year+=10">»</span>
      </template>
    </div>
    <div class="k-calendar-body">
      <div class="k-calendar-days">
        <span class="k-calendar-week" v-for="(i) in local.weeks" :key="i">{{i}}</span>
        <span v-for="(j,x) in days" :key="x" @click="is($event)&&(day=j.i,ok(j))" :class="[(j.p||j.n)?`k-calendar-date-out`:'',status(j.y,j.m,j.i,hour,minute,second,'YYYYMMDD',j)]">{{j.i}}</span>
      </div>
      <div class="k-calendar-months" v-show="showMonths">
        <span v-for="(i,j) in local.months" :key="j" @click="setDate('M',$event,j)" :class="[status(year,j,day,hour,minute,second,'YYYYMM',j)]">{{i}}</span>
      </div>
      <div class="k-calendar-years" v-show="showYears">
        <span v-for="(i,j) in years" :key="j" @click="setDate('Y',$event,i)" :class="[(j===0||j===11)?`k-calendar-date-out`:'',status(i,month,day,hour,minute,second,'YYYY',j)]">{{i}}</span>
      </div>
      <!-- <div class="k-calendar-hours" v-show="showHours">
        <div class="k-calendar-title">{{local.hourTip}}</div>
        <span v-for="(j,i) in 24" :key="i" @click="is($event)&&(showHours=false,hour=i,ok('h'))" :class="[status(year,month,day,i,minute,second,'YYYYMMDDHH')]">{{i}}</span>
      </div> -->
      <!-- <div class="k-calendar-minutes" v-show="showMinutes">
        <div class="k-calendar-title">{{local.minuteTip}}</div>
        <span v-for="(j,i) in 60" :key="i" @click="is($event)&&(showMinutes=false,minute=i,ok('h'))" :class="[status(year,month,day,hour,i,second,'YYYYMMDDHHmm')]">{{i}}</span>
      </div> -->
      <!-- <div class="k-calendar-seconds" v-show="showSeconds">
        <div class="k-calendar-title">{{local.secondTip}}</div>
        <span v-for="(j,i) in 60" :key="i" @click="is($event)&&(showSeconds=false,second=i,ok('h'))" :class="[status(year,month,day,hour,minute,i,'YYYYMMDDHHmmss')]">{{i}}</span>
      </div> -->
      <transition name="fade">
        <div class="k-calendar-time" v-if="m==='H' && showTime">
          <div class="k-calendar-hours">
            <span v-for="(j,i) in 24" :key="i" @click="setDate('h',$event,i)" :class="[status(year,month,day,i,minute,second,'YYYYMMDDHH',j)]">{{i|dd}}</span>
          </div>
          <div class="k-calendar-minutes">
            <span v-for="(j,i) in 60" :key="i" @click="setDate('m',$event,i)" :class="[status(year,month,day,hour,i,second,'YYYYMMDDHHmm',j)]">{{i|dd}}</span>
          </div>
          <div class="k-calendar-seconds">
            <span v-for="(j,i) in 60" :key="i" @click="setDate('s',$event,i)" :class="[status(year,month,day,hour,minute,i,'YYYYMMDDHHmmss',j)]">{{i|dd}}</span>
          </div>
        </div>
      </transition>
    </div>
    <div class="k-calendar-foot" v-if="m==='H'">
      <span :class="['k-calendar-timetip',{'disabled':tipDis}]" v-if="!this.right" @click="toggleShowTime">{{local.timeTip}}</span>
      <Button class="k-calendar-btn" mini type="primary" v-if="!this.left" @click="$parent.ok()">{{local.btn}}</Button>
      <!-- <div class="k-calendar-hour">
        <span :title="local.hourTip" @click="showHours=!showHours,showMinutes=showSeconds=false" :class="{on:showHours}">{{hour|dd}}</span>
        <span>:</span>
        <span :title="local.minuteTip" @click="showMinutes=!showMinutes,showHours=showSeconds=false" :class="{on:showMinutes}">{{minute|dd}}</span>
        <span>:</span>
        <span :title="local.secondTip" @click="showSeconds=!showSeconds,showHours=showMinutes=false" :class="{on:showSeconds}">{{second|dd}}</span>
      </div> -->
    </div>
  </div>
</template>
<script>
import './calendar.less'
import { Button } from '../button'
export default {
  name: "Calendar",
  props: { value: null, left: false, right: false },
  compoents: { Button },
  data() {
    const time = this.get(this.value);
    return {
      m: "D",
      showYears: false,
      showMonths: false,
      showHours: false,
      showMinutes: false,
      showSeconds: false,
      showTime: false,
      year: time.year,
      month: time.month,
      day: time.day,
      hour: time.hour,
      minute: time.minute,
      second: time.second,
      tipDis: false,
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
    },
  },
  computed: {
    local() {
      return this.$parent.local;
    },
    format() {
      return this.$parent.format;
    },
    // start() {
    //   return this.parse(this.$parent.dates[0]);
    // },
    // end() {
    //   return this.parse(this.$parent.dates[1]);
    // },
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
    },
  },
  filters: {
    dd: val => ("0" + val).slice(-2)
  },
  methods: {
    toggleShowTime() {
      if (!this.value && !this.$parent.range) return;
      if (!this.$parent.dates[0] && !this.$parent.dates[1]) return;
      if (this.left) {
        this.$parent.childrens.left.showTime = this.$parent.childrens.right.showTime = !this.showTime
      } else {
        this.showTime = !this.showTime
      }

    },
    setDate(type, e, v) {
      if (e && e.target.className.indexOf(`k-calendar-date-disabled`) >= 0) return;

      switch (type) {
        case 'Y+':
          this.year++
          this.right && this.$parent.childrens.left.year++
          break;
        case 'Y-':
          this.year--
          this.left && this.$parent.childrens.right.year--
          break;
        case 'M':
          this.showMonths = this.m === 'M'
          this.month = v
          if (this.$parent.range) {
            let _right = this.$parent.childrens.right
            let _left = this.$parent.childrens.left
            if (this.left) {
              if (this.year == _right.year && v >= _right.month) {
                if (v < 11) {
                  _right.month = v + 1
                } else {
                  _right.month = 0
                  _right.year++
                }
              }
            }
            if (this.right) {
              if (this.year == _left.year && v <= _left.month) {
                if (v > 0) {
                  _left.month = v - 1
                } else {
                  _left.month = 11
                  _left.year--
                }
              }
            }
          }
          this.showMonths && this.ok('M')

          break;
        case 'Y':
          this.year = v
          this.showYears = this.m === 'Y'

          if (this.$parent.range) {
            let _right = this.$parent.childrens.right
            let _left = this.$parent.childrens.left

            if (this.left && this.year > _right.year) {
              _right.year = this.year
            }
            if (this.right && this.year < _left.year) {
              _left.year = this.year
            }
            this.setDate('M', null, this.month)
          }
          this.showYears && this.ok('Y')

          break;
        case 'h':
          this.showHours = false, this.hour = v, this.ok('h', v)
          break;
        case 'm':
          this.showMinutes = false, this.minute = v, this.ok('m', v)
          break;
        case 's':
          this.showSeconds = false, this.second = v, this.ok('s', v)
          break;
      }
    },

    get(time) {
      let f = this.$parent.formatDate;
      let dt = new Date()
      let y = dt.getFullYear(), m = dt.getMonth(), d = dt.getDate();
      let date = new Date(time || new Date(y, m, d, 0, 0, 0))
      let dates = this.$parent.dates
      if (this.right) {
        if (!this.value || f(dates[0], 'YYYYMM') == f(dates[1], 'YYYYMM')) {
          date = new Date(dates[0] || new Date(y, m, d, 0, 0, 0))
          date.setMonth(date.getMonth() + 1)
        }
      }
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      };
    },
    // parse(num) {
    //   return parseInt(num / 1000);
    // },
    status(year, month, day, hour, minute, second, format, j) {
      const maxDay = new Date(year, month + 1, 0).getDate();
      const time = new Date(year, month, Math.min(maxDay, day), hour, minute, second);
      const today = new Date();

      // const t = this.parse(time);
      const f = this.$parent.formatDate;
      let dates = this.$parent.dates

      const classObj = {};
      let flag = false;
      let istoday = false

      if (format === "YYYY") {
        flag = f(this.value, 'YYYY') === f(time, 'YYYY');
        istoday = today.getFullYear() == year
      } else if (format === "YYYYMM") {
        flag = f(this.value, 'YYYYMM') === f(time, 'YYYYMM');
        istoday = today.getFullYear() == year && today.getMonth() == month
      } else if (format === "YYYYMMDD") {
        flag = f(dates[0], 'YYYYMMDD') === f(time, 'YYYYMMDD') || f(dates[1], 'YYYYMMDD') === f(time, 'YYYYMMDD');

        istoday = today.getFullYear() == year && today.getMonth() == month && today.getDate() == day
      } else {
        flag = f(this.value, format) === f(time, format);
        // istoday = today.getFullYear() == year && today.getMonth() == month && today.getDate() == day
      }
      let ism = format != 'YYYYMMDDHH' && format != 'YYYYMMDDHHmm' && format != 'YYYYMMDDHHmmss'

      classObj['k-calendar-date'] = true;
      classObj['k-calendar-date-disabled'] = this.$parent.disabledDate(time);
      classObj['k-calendar-date-on'] = ism && dates[0] && dates[1] && (time > dates[0] && time < dates[1]) && (!j.p && !j.n)
      classObj['k-calendar-date-selected'] = flag && (!j.p && !j.n);
      classObj['k-calendar-date-today'] = istoday;
      return classObj;
    },
    nextMonth() {
      let _right = this.$parent.childrens.right
      let _left = this.$parent.childrens.left
      if (this.month < 11) {
        this.month++;

        if (this.right) {
          _left.month = this.month - 1
          _left.year = this.year
        }
        if (this.left) {
          if (this.month < 11) {
            _right.month = this.month + 1
          } else {
            _right.month = 0
            _right.year++
          }
        }
      } else {
        this.month = 0;
        this.year++;
        this.right && (_left.month = 11)
        this.left && (_right.month = 1)
      }
    },
    prevMonth() {
      let _right = this.$parent.childrens.right
      let _left = this.$parent.childrens.left
      if (this.month > 0) {
        this.month--;
        if (this.right) {
          if (this.month > 0) {
            _left.month = this.month - 1
          } else {
            _left.month = 11
            _left.year--
          }
        }
        if (this.left) {
          _right.month = this.month + 1
          _right.year = this.year
        }
      } else {
        this.month = 11;
        this.year--;
        this.left && (_right.month = 0)
        this.right && (_left.month--)
      }
    },
    is(e) {
      return e.target.className.indexOf(`k-calendar-date-disabled`) === -1;
    },
    hover() {
      if (this.$parent.range && this.$parent.dates[0]) {
        let d = new Date(year || this.year, month || this.month, this.day, this.hour, this.minute, this.second);

      }
    },
    ok(info, i) {
      let year = "";
      let month = "";
      info && info.n && this.nextMonth();
      info && info.p && this.prevMonth();
      // if (info === "h") {
      //   this.hour = i
      //   const time = this.get(this.value);
      //   year = time.year;
      //   month = time.month;
      // }
      info == 'h' && (this.hour = i)
      info == 'm' && (this.minute = i)
      info == 's' && (this.second = i)
      let d = new Date(year || this.year, month || this.month, this.day, this.hour, this.minute, this.second);

      if (!this.left && !this.right) {
        this.$emit("input", d);
        this.tipDis = false
        this.m != 'H' && this.$parent.ok();
        return;
      }
      //time
      if (info == 'h' || info == 'm' || info == 's') {
        this.$emit("input", d);
        return;
      }

      //date
      let date0 = this.$parent.dates[0]
      let date1 = this.$parent.dates[1]
      let _right = this.$parent.childrens.right
      let _left = this.$parent.childrens.left
      if (date0 && date1 || (!date0 && !date1)) {
        this.$parent.update(true)
        this.$parent.dates = []
        this.$parent.dates[this.left ? 0 : 1] = d
        _left.tipDis = _right.tipDis = true
      } else {
        this.$parent.update(false)
        this.$parent.dates[this.$parent.dates[0] ? 1 : 0] = d;
        _left.tipDis = _right.tipDis = false
        this.m != 'H' && this.$parent.ok();
      }
    },
    update(v) {
      this.$set('tipDis', !v)
    }
  },
  mounted() {
    let p = this.$parent
    if (this.left) {
      p.childrens.left = this
    }
    if (this.right) {
      p.childrens.right = this
    }
    this.tipDis = (!p.range && !this.value) || (p.range && (!p.dates[0] || !p.dates[1]))

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