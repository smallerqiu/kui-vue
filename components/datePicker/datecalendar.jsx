
import Button from '../button'
import moment from 'moment'
import animate from '../_tool/animate'
export default {
  name: "Calendar",
  props: {
    value: [String, Date, Number],
    showTime: Boolean,
    disabledDate: { type: Function, default: e => { } },
    disabledTime: { type: Function, default: e => { } },
    mode: { type: String, default: 'date' },
    format: { type: String, default: 'YYYY-MM-DD' },
    float: String,
  },
  data() {
    return {
      showYears: false,
      showMonths: false,
      showTimes: false,
      currentValue: this.value ? new Date(this.value) : '',
      today: new Date(),
      year: null,
      month: null,
      day: null,
      hour: null,
      minute: null,
      second: null,

      monthsHead: "1.2.3.4.5.6.7.8.9.10.11.12".split("."),
      months: "一.二.三.四.五.六.七.八.九.十.十一.十二".split("."), // months of panel
      weeks: "一.二.三.四.五.六.日".split("."), // weeks
      years: [],

    };
  },
  inject: {
    DatePicker: { default: {} }
  },
  watch: {
    value(val) {
      this.currentValue = val
      this.init()
    },
    showTimes(show) {
      // console.log(show)
      if (show) {
        this.$nextTick(e => {
          let d = [this.hour, this.minute, this.second].map(x => x * 24)
          let kid = this.$refs.timepicker.children;
          [0, 1, 2].map((e, i) => kid[i].scrollTop = d[i])
        })
      }
    }
  },
  computed: {
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

      if (this.mode == 'range' && this.float == 'right') {
        let value = this.DatePicker.currentValue || []
        if (new Date(value[1] - value[0]).getMonth() == 0 || !value[1]) {
          let v = new Date(value[0] || this.today)
          v.setMonth(v.getMonth() + 1)
          d = v
        }
      }
      this.year = d.getFullYear()
      this.month = d.getMonth()
      this.day = d.getDate()
      this.setYears(this.year);
      if (this.showTime && this.currentValue) {
        this.hour = d.getHours()
        this.minute = d.getMinutes()
        this.second = d.getSeconds()
      }
    },
    setYears(year) {
      const arr = [];
      let start = year - 1;
      while (arr.length < 12) {
        arr.push(start++);
      }
      this.years = arr
    },
    nextMonth() {
      if (this.month < 11) {
        this.month++;
      } else {
        this.month = 0;
        this.year++;
        this.setYears(this.year)
      }
    },
    prevMonth() {
      if (this.month > 0) {
        this.month--;
      } else {
        this.month = 11;
        this.year--;
        this.setYears(this.year)
      }
    },
    classes(Y, M, D, out, format) {
      const time = new Date(Y, M, D), fmtTime = moment(time).format(format)
      // console.log(format, fmtTime)
      let istoday = fmtTime == moment(this.today).format(format),
        isselected = false,
        on = false;
      if (this.mode == 'range') {
        let values = this.DatePicker.currentValue || [],
          float = this.float,
          temp = this.DatePicker.temp_range_one,
          temp_left = this.DatePicker.temp_range_left,
          temp_right = this.DatePicker.temp_range_right,
          isDay = format == 'YYYYMMDD'

        //set on
        //range click selected and out
        if (isDay)
          isselected = fmtTime == moment(temp_left).format(format) || fmtTime == moment(temp_right).format(format)
        else
          isselected = fmtTime == moment(this.currentValue).format(format)
        if (temp) {
          // default and not out
          // isselected = fmtTime == moment(this.currentValue).format(format) || isselected
          // hover selected
          if (!temp_left || !temp_right) {
            let { y, m, d } = this.DatePicker.temp_date_hover,
              date = new Date(y, m, d);
            if (!out && isDay) {
              isselected = isselected || (Y == y && M == m && D == d)
            }
            isDay && (on = (time > temp && time < date) || (time > date && time < temp))
          }
        } else {
          if (temp_left || temp_right) {
            isDay && (on = (time > temp_left && time < temp_right) || (time > temp_right && time < temp_left))
          } else if (values.length == 2 && isDay) {
            isselected = isselected ||
              (values[0] && fmtTime == moment(values[0]).format(format)) ||
              (values[1] && fmtTime == moment(values[1]).format(format));
            isDay && (on = time > new Date(values[0]) && time < new Date(values[1]))
          }
        }
      } else {
        isselected = fmtTime == moment(this.currentValue).format(format)
      }
      let disabled = this.disabledDate(time)

      let classes = {
        'k-calendar-date': true,
        'k-calendar-date-today': istoday,
        'k-calendar-date-on': on && !out && !disabled,
        'k-calendar-date-selected': isselected && !out,
        'k-calendar-date-disabled': disabled,
        'k-calendar-date-out': out
      }
      return classes
    },
    setMonth(e, m) {
      e.stopPropagation();
      if (e.target.className.indexOf('k-calendar-date-disabled') >= 0) {
        return
      }
      this.month = m
      this.currentValue = new Date(this.currentValue).setMonth(m)
      if (this.mode == 'month') {
        this.setDate()
      } else
        this.showMonths = 0
    },
    setYear(e, y) {
      e.stopPropagation();
      if (e.target.className.indexOf('k-calendar-date-disabled') >= 0) {
        return
      }
      this.year = y
      if (this.years.indexOf(y) == 0) {
        this.setYears(y - 10)
        return;
      }
      if (this.years.indexOf(y) == 11) {
        this.setYears(y)
        return;
      }
      this.currentValue = new Date(this.currentValue).setYear(y)
      this.showYears = 0
      if (this.mode == 'year') {
        this.$emit('input', this.currentValue)
      }
    },
    setDay(e, j) {
      e.stopPropagation();
      if (e.target.className.indexOf('k-calendar-date-disabled') >= 0) {
        return
      }
      let { y, m, d, p, n } = j
      if (this.mode == 'range') {
        // let value = this.DatePicker.currentValue || [];
        let date = new Date(y, m, d, this.hour, this.minute, this.second)
        let time = [];
        let temp = this.DatePicker.temp_range_one
        let float = this.float

        if (!temp) {
          this.DatePicker.temp_range_left = date
          this.DatePicker.temp_range_right = null
          this.DatePicker.temp_range_one = date
          // this.DatePicker.currentValue = []

        } else {
          this.DatePicker.temp_range_right = date
          this.DatePicker.temp_range_one = null
          if (!this.showTime) {
            time = temp < date ? [temp, date] : [date, temp]
            // this.DatePicker.currentValue = time
            this.$emit('input', time)
          }
        }
        if ((float == 'right' && n) || (float == 'left' && p)) {
          this.$nextTick(e => {
            this.currentValue = date
            this.year = y;
            this.month = m
            this.day = d
          })
        }

      } else {
        this.year = y
        this.month = m
        this.day = d
        this.currentValue = new Date(y, m, d)
        if (!this.showTime) {
          this.setDate()
        }
      }
    },
    fix(v) {
      return ('0' + v).slice(-2)
    },
    timeClass(v, f, d = []) {
      let date = new Date('', '', '', this.hour, this.minute, this.second)
      let isselected = this.fix(v) == moment(date).format(f)
      let classes = {
        'k-calendar-time-selected': isselected,
        'k-calendar-time-disabled': d.indexOf(v) >= 0,
      }
      return classes
    },
    getTime(l, t) {
      let { disabledHours, disabledMinutes, disabledSeconds } = this.disabledTime() || {}
      let x = { HH: disabledHours, mm: disabledMinutes, ss: disabledSeconds }
      let d;
      if (typeof x[t] == 'function') {
        d = x[t]()
      }
      return new Array(l).fill('').map((i, j) =>
        <li onClick={e => this.setTime(j, t, e)} class={this.timeClass(j, t, d)}>{this.fix(j)}</li>)
    },
    setShowTime() {
      this.showMonths = 0
      this.showYears = 0
      if (this.mode == 'range') {
        this.DatePicker.temp_range_showtime = !this.DatePicker.temp_range_showtime
        this.showTimes = this.DatePicker.temp_range_showtime
      } else {
        this.showTimes = !this.showTimes
      }
    },
    setShowYear() {
      !this.showTimes && (this.showYears = true)
    },
    setShowMonth(e) {
      e.stopPropagation()
      !this.showTimes && (this.showMonths = 1)
    },
    setTime(v, t, e) {
      e.stopPropagation();
      if (e.target.className.indexOf('k-calendar-time-disabled') >= 0) {
        return;
      }
      let date = new Date();
      if (this.mode == 'range') {
        let values = this.DatePicker.currentValue
        date = this.float == 'left' ? this.DatePicker.temp_range_left || values[0] : this.DatePicker.temp_range_right || values[1]
      }
      switch (t) {
        case 'HH':
          this.hour = v;
          this.currentValue = new Date(this.currentValue).setHours(v)
          date.setHours(v)
          break;
        case 'mm':
          this.minute = v;
          this.currentValue = new Date(this.currentValue).setMinutes(v)
          date.setMinutes(v)
          break;
        case 'ss':
          this.second = v;
          this.currentValue = new Date(this.currentValue).setSeconds(v)
          date.setSeconds(v)
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
          [0, 1, 2].map((e, i) => kid[i].scrollTop += progress * (d[i] - kid[i].scrollTop))
        }
      })
    },
    setDate() {
      if (this.mode == 'range') {
        let values = this.DatePicker.currentValue;
        let t1 = this.DatePicker.temp_range_left || values[0],
          t2 = this.DatePicker.temp_range_right || values[1];
        let date = t1 > t2 ? [t2, t1] : [t1, t2]
        this.$emit('input', date)
      } else {
        let date = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second)
        this.showTimes = false
        this.showMonths = false
        this.showYears = false
        this.currentValue = date
        this.$emit('input', date)
      }
    },
    setToday() {
      this.currentValue = new Date()
      this.init()
      this.setDate()
    },
    nextYear() {
      let y = this.year + (this.showMonths ? 1 : 10)
      this.year = y
      this.setYears(y)
    },
    prevYear() {
      let y = this.year - (this.showMonths ? 1 : 10)
      this.year = y
      this.setYears(y)
    }
  },
  mounted() {
    this.init()
  },
  render() {
    let { classes, year, month, day, hour, minute, second, showYears, showMonths, disabledDate,
      showTimes, getTime, mode, DatePicker, float, currentValue } = this
    let isRange = mode == 'range', values = DatePicker.currentValue || [];
    let temp_left, temp_right;
    if (isRange) {
      showTimes = DatePicker.temp_range_showtime
      temp_left = DatePicker.temp_range_left || values[0]
      temp_right = DatePicker.temp_range_right || values[1]
    }
    if (mode == 'month') {
      this.showMonths = true
    }
    if (mode == 'year') {
      this.showYears = true
    }
    let showArrow = true
    // 为range 时,不可联动选择
    if (isRange) {
      if (float == 'left') {

      } else if (float == 'right') {

      }
    }
    //header
    let headNode = []
    if (!showTimes || !showArrow)
      headNode.push(<span class="k-calendar-prev-year-btn" onClick={this.prevYear}>«</span>)
    if ((!showYears && !showMonths && !showTimes) || !showArrow)
      headNode.push(<span class="k-calendar-prev-month-btn" onClick={this.prevMonth}>‹</span>)
    headNode.push(<span class="k-calendar-year-select" onClick={this.setShowYear}>{year}年</span>)
    if (!showYears && !showMonths) {
      headNode.push(<span class="k-calendar-month-select" onClick={this.setShowMonth}>{month + 1}月</span>)
      if (!showTimes || !showArrow)
        headNode.push(<span class="k-calendar-next-month-btn" onClick={this.nextMonth}>›</span>)
      else
        headNode.push(<span class="k-calendar-day-select">{day}日</span>)
    }
    if (!showTimes || !showArrow)
      headNode.push(<span class="k-calendar-next-year-btn" onClick={this.nextYear}>»</span>)

    //body
    const bodyNode = []
    if (mode == 'date' || isRange) {
      let weekNode = this.weeks.map(w => <span class="k-calendar-week" key={w}>{w}</span>)
      const getDay = (j, x) => {
        const props = {
          domProps: { innerHTML: j.d },
          class: classes(j.y, j.m, j.d, j.p || j.n, 'YYYYMMDD'),
          on: {
            click: e => this.setDay(e, j),
            mouseenter: e => this.DatePicker.temp_date_hover = j
          },
          key: x
        }
        return <span {...props} />
      }
      let dayNode = this.days.map((j, x) => getDay(j, x))
      const daysNode = <div class="k-calendar-days">{weekNode}{dayNode}</div>
      bodyNode.push(daysNode)
    }
    if (showMonths) {
      const m = this.months.map((i, j) => <span key={i} class={classes(year, j, day, null, 'YYYYMM')} onClick={(e) => this.setMonth(e, j)}>{i}月</span >)
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
    if ((this.showTime && !isRange) || (this.showTime && isRange && float == 'right')) {

      //footer
      // let disabled = moment()
      let disabled = disabledDate(new Date())
      let time_disabled = isRange ? !(temp_left && temp_right) : (!currentValue);

      !isRange && footerNode.push(<Button type="link" mini disabled={disabled} class="k-calendar-btn-today" onClick={this.setToday}>此刻</Button>)
      footerNode.push(<Button type="link" mini disabled={time_disabled} onClick={this.setShowTime}>{showTimes ? '选择日期' : '选择时间'}</Button>)
      footerNode.push(<Button type="primary" mini disabled={time_disabled} onClick={this.setDate}>确定</Button>)
    } else if (mode == 'date') {
      let disabled = disabledDate(new Date())
      footerNode.push(<Button type="link" disabled={disabled} block mini onClick={this.setToday}>今天</Button>)
    }
    footerNode = footerNode.length || (isRange && this.showTime) ? <div class="k-calendar-footer">{footerNode}</div> : null


    return (
      <div class="k-calendar">
        <div class="k-calendar-head">{headNode}</div>
        <div class="k-calendar-body">{bodyNode}</div>
        {footerNode}
      </div>
    )
  }
};