
import Button from '../button'
import moment from 'moment'
import './styles/calendar.less';
import animate from '../_tool/animate'
export default {
  name: "Calendar",
  props: {
    value: [String, Date, Number],
    showTime: Boolean,
    disabledDate: { type: Function, default: e => { } },
    disabledTime: { type: Function, default: e => { } },
    type: { type: String, default: 'date' },
    format: { type: String, default: 'YYYY-MM-DD' },
  },
  data() {
    return {
      showYears: false,
      showMonths: false,
      showTimes: false,
      currentValue: this.value,
      today: new Date(),
      year: null,
      month: null,
      day: null,
      hour: null,
      minute: null,
      second: null,

      monthsHead: "1.2.3.4.5.6.7.8.9.10.11.12".split("."),
      months: "一.二.三.四.五.六.七.八.九.十.十一.十二".split("."), // months of panel
      weeks: "一.二.三.四.五.六.日".split(".") // weeks
    };
  },
  inject: {
    DatePicker: { default: null }
  },
  watch: {
    value(val) {
      this.currentValue = val
      this.init()
    },
  },
  computed: {
    years() {
      const arr = [];
      let start = this.year - 1;
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
      const dow = 1 // Monday is the first day of the week
      time.setDate(0); // switch to the last day of last month
      let lastDay = time.getDate();
      const week = time.getDay() || 7;
      let count = dow <= week ? week - dow + 1 : week + (7 - dow + 1);
      while (count > 0) {
        days.push({
          d: lastDay - count + 1,
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
        days.push({ d: i, y: year, m: month });
      }
      for (i = 1; days.length < 42; i++) {
        days.push({
          d: i,
          y: month < 11 ? year : year + 1,
          m: month < 11 ? month + 1 : 0,
          n: true
        });
      }
      return days;
    },
  },
  methods: {
    init() {
      let d = new Date(this.currentValue || this.today)
      this.year = d.getFullYear()
      this.month = d.getMonth()
      this.day = d.getDate()
      if (this.showTime) {
        this.hour = d.getHours()
        this.minute = d.getMinutes()
        this.second = d.getSeconds()
      }
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
    classes(y, m, d, out, format) {
      // let { hour, minute, second } = this
      // const maxDay = new Date(y, m + 1, 0).getDate();
      const time = new Date(y, m, d);
      let istoday = moment(time).format(format) == moment(this.today).format(format)
      let isselected = moment(time).format(format) == moment(this.currentValue).format(format)
      let classes = {
        'k-calendar-date': true,
        'k-calendar-date-today': istoday,
        'k-calendar-date-on': false,
        'k-calendar-date-selected': isselected,
        'k-calendar-date-disabled': this.disabledDate(time),
        'k-calendar-date-out': out
      }
      return classes
    },
    setMonth(e, m) {
      if (e.target.className.indexOf('k-calendar-date-disabled') >= 0) {
        return
      }
      this.month = m
      this.currentValue = new Date(this.currentValue).setMonth(m)
      this.showMonths = 0
    },
    setYear(e, y) {
      if (e.target.className.indexOf('k-calendar-date-disabled') >= 0) {
        return
      }
      this.year = y
      this.currentValue = new Date(this.currentValue).setYear(y)
      this.showYears = 0
    },
    setDay(e, j) {
      if (e.target.className.indexOf('k-calendar-date-disabled') >= 0) {
        return
      }
      this.year = j.y
      this.month = j.m
      this.day = j.d
      this.currentValue = new Date(j.y, j.m, j.d)
      if (!this.showTime) {
        this.setDate()
      }
    },
    fix(v) {
      return ('0' + v).slice(-2)
    },
    timeClass(v, f) {
      let d = new Date('', '', '', this.hour, this.minute, this.second)
      let isselected = this.fix(v) == moment(d).format(f)
      let classes = {
        'k-calendar-time-selected': isselected,
        'k-calendar-time-disabled': false,
      }
      return classes
    },
    getTime(l, t) {
      return new Array(l).fill('').map((i, j) =>
        <li onClick={e => this.setTime(j, t)}
          class={this.timeClass(j, t)}>{this.fix(j)}</li>)
    },
    setShowTime() {
      this.showMonths = 0
      this.showYears = 0
      this.showTimes = !this.showTimes
      if (this.showTimes) {
        this.$nextTick(e => {
          let d = [this.hour, this.minute, this.second].map(x => x * 24)
          let kid = this.$refs.timepicker.children;
          [0, 1, 2].map((e, i) => kid[i].scrollTop = d[i])
          // let h = parseInt(this.hour)
          // let m = parseInt(this.minute)
          // let s = parseInt(this.second)
          // d[0].scrollTop = h * 24
          // d[1].scrollTop = m * 24
          // d[2].scrollTop = s * 24
        })
      }
    },
    setShowYear() {
      !this.showTimes && (this.showYears = 1)
    },
    setShowMonth() {
      !this.showTimes && (this.showMonths = 1)
    },
    setTime(v, t) {
      switch (t) {
        case 'HH':
          this.hour = v;
          this.currentValue = new Date(this.currentValue).setHours(v)
          break;
        case 'mm':
          this.minute = v;
          this.currentValue = new Date(this.currentValue).setMinutes(v)
          break;
        case 'ss':
          this.second = v;
          this.currentValue = new Date(this.currentValue).setSeconds(v)
          break;
        default: ;
      }
      this.setTimeScroll()
    },
    setTimeScroll() {
      let d = [this.hour, this.minute, this.second].map(x => x * 24)
      let kid = this.$refs.timepicker.children;
      animate({
        draw: function (progress) {
          console.log('ee');
          [0, 1, 2].map((e, i) => kid[i].scrollTop += progress * (d[i] - kid[i].scrollTop))
        }
      })
    },
    setDate() {
      let date = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second)
      let format = this.format
      this.showTimes = false
      this.showMonths = false
      this.showYears = false
      if (this.showTime) {
        format = 'YYYY-MM-DD HH:mm:ss'
      }
      let time = moment(date).format(format)
      this.$emit('input', time)
    },
    setToday() {
      this.currentValue = new Date()
      this.init()
      this.setDate()
    },
    nextYear() {
      this.year += this.showMonths ? 1 : 10
    },
    prevYear() {
      this.year -= this.showMonths ? 1 : 10
    }
  },
  mounted() {
    console.log(moment().endOf('day') < Date.now())
    this.init()
  },
  render() {
    let { classes, year, month, day, showYears, showMonths, showTimes, getTime } = this
    //header
    let headNode = []
    if (!showTimes)
      headNode.push(<span class="k-calendar-prev-year-btn" onClick={this.prevYear}>«</span>)
    if (!showYears && !showMonths && !showTimes)
      headNode.push(<span class="k-calendar-prev-month-btn" onClick={this.prevMonth}>‹</span>)
    headNode.push(<span class="k-calendar-year-select" onClick={this.setShowYear}>{year}年</span>)
    if (!showYears && !showMonths) {
      headNode.push(<span class="k-calendar-month-select" onClick={this.setShowMonth}>{month + 1}月</span>)
      if (!showTimes)
        headNode.push(<span class="k-calendar-next-month-btn" onClick={this.nextMonth}>›</span>)
      else
        headNode.push(<span class="k-calendar-day-select">{day}日</span>)
    }
    if (!showTimes)
      headNode.push(<span class="k-calendar-next-year-btn" onClick={this.nextYear}>»</span>)

    //body
    const bodyNode = []

    let weekNode = this.weeks.map(w => <span class="k-calendar-week" key={w}>{w}</span>)
    let dayNode = this.days.map((j, x) => <span key={x} class={classes(j.y, j.m, j.d, j.p || j.n, 'YYYYMMDD')} onClick={e => this.setDay(e, j)}>{j.d}</span>)
    const daysNode = <div class="k-calendar-days">{weekNode}{dayNode}</div>
    bodyNode.push(daysNode)

    if (showMonths) {
      const m = this.months.map((i, j) => <span key={j} class={classes(year, j, day, null, 'YYYYMM')} onClick={(e) => this.setMonth(e, j)}>{i}月</span >)
      const mouthNode = <div class="k-calendar-months">{m}</div>
      bodyNode.push(mouthNode)
    }
    if (showYears) {
      const y = this.years.map((i, j) => <span key={j} class={classes(i, month, day, (j == 0 || j == 11), 'YYYY')} onClick={(e) => this.setYear(e, i)}>{i}</span >)
      const yearNode = <div class="k-calendar-years">{y}</div>
      bodyNode.push(yearNode)
    }
    //footer
    let footerNode = []

    if (showTimes) {
      let time = []
      //hours
      let h = getTime(24, 'HH')
      time.push(h)
      //m
      let m = getTime(60, 'mm')
      time.push(m)
      //s
      let s = getTime(60, 'ss')
      time.push(s)
      let picker = time.map(t => <div class="k-calendar-time-picker-select"><ul>{t}</ul></div>)

      let timeNode = <div class="k-calendar-time-picker" ref="timepicker">{picker}</div>

      bodyNode.push(timeNode)

    }
    if (this.showTime) {
      //footer
      footerNode.push(<Button type="link" mini class="k-calendar-btn-today" onClick={this.setToday}>此刻</Button>)
      footerNode.push(<Button type="link" mini onClick={this.setShowTime}>{showTimes ? '选择日期' : '选择时间'}</Button>)
      footerNode.push(<Button type="primary" mini onClick={this.setDate}>确定</Button>)
    } else if (this.type == 'date') {
      footerNode.push(<Button type="link" block mini onClick={this.setToday}>今天</Button>)
    }
    footerNode = footerNode.length ? <div class="k-calendar-footer">{footerNode}</div> : null


    return (
      <div class="k-calendar">
        <div class="k-calendar-head">{headNode}</div>
        <div class="k-calendar-body">{bodyNode}</div>
        {footerNode}
      </div>
    )
  }
};