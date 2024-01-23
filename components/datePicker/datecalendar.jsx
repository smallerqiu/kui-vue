
import Button from '../button'
import dayjs from 'dayjs'
// import animate from '../_tool/animate'
import { t } from '../locale'
import {
  ChevronDoubleBack, ChevronBack, ChevronForward,
  ChevronDoubleForward
} from "kui-icons";
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
    pickerSize: String,
  },
  data() {
    return {
      showYears: false,
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
      // months: t('k.datePicker.months'), // months of panel
      // weeks: t('k.datePicker.weeks'), // weeks
      // years: [],

    };
  },
  inject: {
    DatePicker: { default: {} }
  },
  watch: {
    value(val, oldVal) {
      if (val != oldVal) {
        this.currentValue = val
        this.updateStamp()
      }
    },
    showYears(show) {
      if (show) {
        this.$nextTick(e => {
          let year = new Date().getFullYear()
          let y = this.years.indexOf(this.year || year)
          let d = [y, this.month].map(x => x * 40)
          let years = this.$refs.yearspicker;
          let month = this.$refs.monthspicker;
          years.scrollTop = d[0]
          month.scrollTop = d[1]
        })
      }
    },
    showTimes(show) {
      if (show) {
        this.$nextTick(e => {
          let d = [this.hour, this.minute, this.second].map(x => x * 32)
          let childs = this.$refs.timepicker.children;
          [0, 1, 2].map((e, i) => childs[i].scrollTop = d[i])
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
    years() {
      let year = new Date().getFullYear()
      let min = year - 100, max = year + 100;
      let y = []
      for (let j = min; j <= max; j++) {
        y.push(j)
      }
      return y
    }
  },
  methods: {
    hideSubPicker() {
      this.showTimes = false
      this.showYears = false
    },
    updateStamp() {
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
      if (this.showTime && this.currentValue) {
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
    classes(Y, M, D, out, format) {
      const time = new Date(Y, M, D), fmtTime = dayjs(time).format(format)
      let istoday = fmtTime == dayjs(this.today).format(format),
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
          isselected = (temp_left && fmtTime == dayjs(temp_left).format(format)) ||
            (temp_right && fmtTime == dayjs(temp_right).format(format))
        else
          isselected = fmtTime == dayjs(this.currentValue).format(format)

        if (temp) {
          // default and not out
          // isselected = fmtTime == dayjs(this.currentValue).format(format) || isselected
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
              (values[0] && fmtTime == dayjs(values[0]).format(format)) ||
              (values[1] && fmtTime == dayjs(values[1]).format(format));
            isDay && (on = time > new Date(values[0]) && time < new Date(values[1]))
          }
        }
      } else {
        isselected = fmtTime == dayjs(this.currentValue).format(format)
      }
      let disabled = this.disabledDate(time)

      let classes = {
        'k-calendar-date': format == 'YYYYMMDD',
        'k-calendar-date-today': istoday,
        'k-calendar-date-on': on && !out && !disabled,
        'k-calendar-item-selected': isselected && !out,
        'k-calendar-item-disabled': disabled,
        'k-calendar-date-out': out,
        'k-calendar-year-item': format == 'YYYY',
        'k-calendar-month-item': format == 'YYYYMM',
      }
      return classes
    },
    setMonth(e, m) {
      e.stopPropagation();
      if (e.target.className.indexOf('disabled') >= 0) {
        return
      }
      this.month = m
      this.currentValue = new Date(this.currentValue).setMonth(m)
      if (this.mode == 'month') {
        this.setDate()
      }
      this.scrollToCenter(e)
      // this.$nextTick(() => {
      //   this.setYMScroll()
      // })
    },
    setYear(e, y) {
      e.stopPropagation();
      if (e.target.className.indexOf('disabled') >= 0) {
        return
      }
      this.year = y
      if (this.years.indexOf(y) == 0) {
        return;
      }
      if (this.years.indexOf(y) == 11) {
        return;
      }
      this.currentValue = new Date(this.currentValue).setYear(y)
      // this.showYears = 0
      if (this.mode == 'year') {
        this.$emit('input', this.currentValue)
        this.$emit('change', this.currentValue)
      }
      this.scrollToCenter(e)

      // this.$nextTick(() => {
      //   this.setYMScroll()
      // })
    },
    setDay(e, j) {
      e.stopPropagation();
      if (e.target.className.indexOf('k-calendar-item-disabled') >= 0) {
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
            this.$emit('change', time)
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
      let isselected = this.fix(v) == dayjs(date).format(f)
      let classes = {
        'k-calendar-time-item': 1,
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
        <span onClick={e => this.setTime(j, t, e)} class={this.timeClass(j, t, d)}>{this.fix(j)}</span>)
    },
    setShowTime() {
      this.showYears = 0
      // if (this.mode == 'range') {
      //   this.DatePicker.temp_range_showtime = !this.DatePicker.temp_range_showtime
      //   this.showTimes = this.DatePicker.temp_range_showtime
      // } else {
      this.showTimes = !this.showTimes
      // }
      if (this.showTimes) {
        this.initToCenter('timepicker')
      }
    },
    setShowYear() {
      !this.showTimes && (this.showYears = !this.showYears)
      if (!this.currentValue) {
        this.currentValue = new Date()
      }
      if (this.showYears) {
        this.initToCenter('ympicker')
      }
    },
    setTime(v, t, e) {
      e.stopPropagation();
      if (e.target.className.indexOf('k-calendar-time-disabled') >= 0) {
        return;
      }
      let date = new Date();
      if (this.mode == 'range') {
        // # not set hour and ...
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
        default:
          break;
      }

      this.scrollToCenter(e)
    },
    // setYMScroll() {
    //   let year = new Date().getFullYear()
    //   let y = this.years.indexOf(this.year || year)
    //   let d = [y, this.month].map(x => x * 40)
    //   let years = this.$refs.yearspicker
    //   let month = this.$refs.monthspicker
    // animate({
    //   draw: function (progress) {
    //     years.scrollTop += progress * (d[0] - years.scrollTop)
    //     month.scrollTop += progress * (d[1] - month.scrollTop)
    //   }
    // })
    // },
    initToCenter(key) {
      setTimeout(() => {
        //     this.setTimeScroll()
        let childs = this.$refs[key].children;
        // console.log(childs)
        for (let m of childs) {
          // console.log(m.children)
          for (let n of m.children) {
            // console.log(n)
            if (n.className.indexOf('selected') > -1) {
              this.scrollToCenter({ target: n })
              break
            }
          }
        }
      }, 10)
    },
    scrollToCenter(e) {
      // console.log(e)
      // 计算 span 元素相对于 div 元素的偏移
      const offset = e.target.offsetTop;
      const ul = e.target.parentNode
      // 计算滚动距离使 span 元素垂直居中
      const scrollDistance = offset - parseFloat((ul.clientHeight / 2).toFixed(2)) + parseFloat((e.target.clientHeight / 2).toFixed(2)) - 114 / 2;
      // 滚动到计算出的位置
      console.log(scrollDistance)
      // ul.scrollTop = scrollDistance
      // console.log(ul.scrollTop)
      ul.scrollTo({ top: scrollDistance, behavior: 'smooth' });
    },
    // setTimeScroll() {
    //   let d = [this.hour, this.minute, this.second].map(x => x * 32)
    // let childs = this.$refs.timepicker.children;
    // animate({
    //   draw: function (progress) {
    //     [0, 1, 2].map((e, i) => childs[i].scrollTop += progress * (d[i] - childs[i].scrollTop))
    //   }
    // })
    // },
    setDate() {
      if (this.mode == 'range') {
        let values = this.DatePicker.currentValue || [];
        let t1 = this.DatePicker.temp_range_left || values[0],
          t2 = this.DatePicker.temp_range_right || values[1];
        let date = t1 > t2 ? [t2, t1] : [t1, t2]
        this.$emit('input', date)
        this.$emit('change', date)
      } else {
        let date = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second)
        this.showTimes = false
        this.showYears = false
        this.currentValue = date
        this.$emit('input', date)
        this.$emit('change', date)
      }
      // this.showYears = false
      // this.showTimes = false
    },
    setToday(e) {
      let d = new Date()
      this.currentValue = d
      this.updateStamp()
      if (this.mode != 'range') {
        this.setDate()
      } else {
        let { float } = this
        this.hour = d.getHours()
        this.minute = d.getMinutes()
        this.second = d.getSeconds()
        let j = {
          y: d.getFullYear(),
          m: d.getMonth(),
          d: d.getDate(),
          p: float == 'left',
          n: float == 'right'
        }
        this.setDay(e, j)
      }
    },
    nextYear() {
      let y = this.year + 10
      this.year = y
    },
    prevYear() {
      let y = this.year - 10
      this.year = y
    },
    back() {
      this.showYears = false
      this.showTimes = false
    }
  },
  mounted() {
    this.updateStamp()
  },
  render() {
    let { classes, year, month, day, hour, minute, second, showYears, disabledDate, pickerSize,
      showTimes, getTime, mode, DatePicker, float, currentValue } = this
    let small = pickerSize == 'small', btnSize = small ? 'small' : null;
    let isRange = mode == 'range', values = DatePicker.currentValue || [];
    let temp_left, temp_right;
    if (isRange) {
      // showTimes = DatePicker.temp_range_showtime
      temp_left = DatePicker.temp_range_left || values[0]
      temp_right = DatePicker.temp_range_right || values[1]
    }

    showYears = showYears || mode == 'year' || mode == 'month'
    let months = t('k.datePicker.months');
    let weeks = t('k.datePicker.weeks');
    //header
    let headNode = []
    if (!showTimes && !showYears) {
      headNode.push(<Button icon={ChevronDoubleBack} size={btnSize} theme="normal" class="k-calendar-prev-year-btn" onClick={this.prevYear}></Button>)
      headNode.push(<Button icon={ChevronBack} size={btnSize} theme="normal" class="k-calendar-prev-month-btn" onClick={this.prevMonth}></Button>)
    } else if (mode != 'year' && mode != 'month') {
      headNode.push(<Button class="k-calendar-back" size={btnSize} icon={ChevronBack} theme="normal" onClick={this.back}>{t('k.datePicker.back')} </Button>)
    }
    headNode.push(<Button class="k-calendar-year-select" size={btnSize} theme="normal" onClick={this.setShowYear}>{year}{t('k.datePicker.year')} {months[month]} {!showYears && showTimes ? day : ''}</Button>)
    if (!showYears) {
      if (!showTimes)
        headNode.push(<Button theme="normal" size={btnSize} icon={ChevronForward} class="k-calendar-next-month-btn" onClick={this.nextMonth}></Button>)
      // else
      // headNode.push(<span class="k-calendar-day-select">{day}{t('k.datePicker.day')}</span>)
    }
    if (!showTimes && !showYears)
      headNode.push(<Button icon={ChevronDoubleForward} size={btnSize} theme="normal" class="k-calendar-next-year-btn" onClick={this.nextYear}></Button>)

    //days and week body
    let dayWeekBodyNode = null
    if ((mode == 'date' || isRange) && !showYears && !showTimes) {
      let weekNode = weeks.map(w => <span class="k-calendar-weekday" key={w}>{w}</span>)
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
      let wekday = [], temp = [];
      this.days.forEach((j, x) => {
        let d = getDay(j, x)
        temp.push(d)
        if ((x + 1) % 7 == 0) {
          wekday.push(<div class="k-calendar-week">{temp}</div>)
          temp = []
        }
      })
      const daysNode = <div class="k-calendar-weeks">{wekday}</div>
      const weeksNode = <div class="k-calendar-weekdays">{weekNode}</div>
      // bodyNode.push(weeksNode)
      // bodyNode.push(daysNode)
      dayWeekBodyNode = <div class="k-calendar-body">{weeksNode}{daysNode}</div>
    }
    // console.log(showYears)
    let yearsMonthNode = null
    if (showYears) {

      const m = months.map((i, j) => <span key={i} class={classes(year, j, day, null, 'YYYYMM')} onClick={(e) => this.setMonth(e, j)}>{i}</span >)
      const mouthNode = <div class="k-calendar-months" ref="monthspicker">{m}</div>
      // bodyNode.push(mouthNode)

      const y = this.years.map((i, j) => <span key={j} class={classes(i, month, day, null, 'YYYY')} onClick={(e) => this.setYear(e, i)}>{i}</span >)
      const yearNode = <div class="k-calendar-years" ref="yearspicker">{y}</div>
      // bodyNode.push(yearNode)
      yearsMonthNode = <div class="k-calendar-yearmonth-picker" ref="ympicker">{yearNode}{mouthNode}</div>
      // bodyNode.push(yearsNode)
    }

    let timeNode = null
    if (showTimes) {
      let time = []
      //hours
      let hh = getTime(24, 'HH');
      time.push(hh);
      //m
      let m = getTime(60, 'mm');
      time.push(m);
      //s
      let s = getTime(60, 'ss');
      time.push(s);
      let picker = time.map(t => <div class="k-calendar-time-picker-select">{t}</div>);

      timeNode = <div class="k-calendar-time-picker" ref="timepicker">{picker}</div>
      // bodyNode.push(timeNode)
    }

    //footer
    let footerNode = []

    if (this.showTime) {
      //footer
      // let disabled = dayjs()
      let disabled = disabledDate(new Date())
      let time_disabled = isRange ? !(temp_left && temp_right) : (!currentValue);

      footerNode.push(<Button theme="normal" size={btnSize} disabled={disabled} class="k-calendar-btn-today" onClick={this.setToday}>{t('k.datePicker.now')}</Button>)
      footerNode.push(<Button theme="normal" size={btnSize} disabled={time_disabled} onClick={this.setShowTime}>{showTimes ? t('k.datePicker.selectDate') : t('k.datePicker.selectTime')}</Button>)
      if (!isRange || float != 'left') footerNode.push(<Button type="primary" class="k-calendar-btn-ok" size={btnSize} disabled={time_disabled} onClick={this.setDate}>{t('k.datePicker.ok')}</Button>)
    } else if (mode == 'date') {
      let disabled = disabledDate(new Date())
      footerNode.push(<Button theme="normal" size={btnSize} disabled={disabled} block onClick={this.setToday}>{t('k.datePicker.today')}</Button>)
    }
    footerNode = footerNode.length || (isRange && this.showTime) ? <div class="k-calendar-footer">{footerNode}</div> : null
    return (
      <div class={['k-calendar', { 'k-calendar-small': small }]}>
        <div class="k-calendar-head">{headNode}</div>
        {dayWeekBodyNode}
        {yearsMonthNode}
        {timeNode}
        {/* <div class="k-calendar-body">{bodyNode}</div> */}
        {footerNode}
      </div>
    )
  }
};