
import Button from '../button'
import dayjs from 'dayjs'
import { t } from '../locale'
import {
  ChevronDoubleBack, ChevronBack, ChevronForward,
  ChevronDoubleForward
} from "kui-icons";
export default {
  name: "Calendar",
  props: {
    v1: [String, Date, Number, Object],
    v2: [String, Date, Number, Object],
    value: [String, Date, Number, Object],
    disabledDate: { type: Function, default: e => 0 },
    disabledTime: { type: Function, default: e => { } },
    mode: {
      type: String, default: 'date', validator(value) {
        return ["year", "month", "date", 'time', 'dateTime', "dateRange", 'dateTimeRange'].indexOf(value) >= 0;
      }
    },
    format: String,
    isRight: Boolean,
    date: Object,
    h2: Object,
    pickerSize: String,
    opened: Boolean,
  },
  data() {
    return {
      showYears: false,
      showTimes: false,
      currentValue: this.value || dayjs(),
    };
  },
  watch: {
    opened(v) {
      if (v) {
        this.initYearMonth()
      } else {
        if (this.mode != 'year' || this.mode != 'month') {
          this.hideSubPicker()
        }
      }
    },
    v1() {
      if (this.showTimes) {
        this.initToCenter('timepicker', 1)
      }

      if (this.showYears) {
        this.initToCenter('ympicker', 1)
      }
    },
    v2() {
      if (this.showTimes) {
        this.initToCenter('timepicker', 1)
      }

      if (this.showYears) {
        this.initToCenter('ympicker', 1)
      }
    },
    value(c, o) {
      if (c != o && c) {
        this.currentValue = c
      }
    },
  },
  computed: {
    isRange() {
      return this.mode.indexOf('Range') >= 0
    },
    isTime() {
      return this.mode == 'time'
    },
    withTime() {
      return this.mode.indexOf('Time') >= 0 && !this.isTime
    }
  },
  methods: {
    hideSubPicker() {
      this.showTimes = false
      this.showYears = false
    },
    fix(v) {
      return ('0' + v).slice(-2)
    },
    setShowTime() {
      this.showYears = false
      this.showTimes = !this.showTimes
      if (this.showTimes) {
        this.initToCenter('timepicker')
      }
    },
    setShowYear() {
      if (this.mode == 'year' || this.mode == 'month') {
        return;
      }
      this.showTimes = false
      this.showYears = !this.showYears
      this.initYearMonth()
    },
    initToCenter(key, animate = false) {
      this.$nextTick(() => {
        let childs = (this.$refs[key] || {}).children || []
        for (let m of childs) {
          // console.log(m.children)
          for (let n of m.children) {
            // console.log(n)
            if (n.className.indexOf('selected') > -1 || (!this.value && n.className.indexOf('this') > -1)) {
              // console.log(n)
              this.scrollToCenter({ target: n }, animate)
              break
            }
          }
        }
      })
    },
    scrollToCenter(e, animate = true) {
      // 计算 span 元素相对于 div 元素的偏移
      const offset = e.target.offsetTop;
      const ul = e.target.parentNode
      // 计算滚动距离使 span 元素垂直居中
      const scrollDistance = offset - parseFloat((ul.clientHeight / 2).toFixed(2)) + parseFloat((e.target.clientHeight / 2).toFixed(2)) - (this.pickerSize == 'small' ? 84 / 2 : 84 / 2);
      // 滚动到计算出的位置
      // console.log(scrollDistance)
      if (animate) {
        ul.scrollTo({ top: scrollDistance, behavior: 'smooth' });
      } else {
        ul.scrollTop = scrollDistance
      }
      // console.log(ul.scrollTop)
    },
    ok(e) {
      this.$emit('close', true, e)
    },
    nextAndPrev(isNext, t) {
      let date = this.date
      date = isNext ? date.add(1, t) : date.subtract(1, t)
      // if (this.isRange) {
      this.$emit('np', date)
      // }
    },
    // back() {
    //   this.showYears = false
    //   this.showTimes = false
    // },
    initYearMonth() {
      this.initToCenter('ympicker')
    },
    getWeekDaysNode() {
      let weeks = t('k.datePicker.weeks');
      let weekNode = weeks.map(w => <span class="k-calendar-weekday" key={w}>{w}</span>)
      const weeksNode = <div class="k-calendar-weekdays">{weekNode}</div>
      return weeksNode
    },
    isSelectDay(sdate) {
      let { v1, v2, isRight, isRange, value } = this
      if (isRange) {
        return (v1 && dayjs(v1).isSame(sdate, 'date')) || (v2 && dayjs(v2).isSame(sdate, 'date'))
      } else {
        return v1 && value && dayjs(value).isSame(sdate, 'date')
      }
    },
    isDisabled(date) {
      return (this.v1 && this.isRange && dayjs(date).isBefore(this.v1, 'date') && !this.v2)
        || (this.v2 && this.isRange && dayjs(date).isAfter(this.v2, 'date') && !this.v1)
        || this.disabledDate(date)
    },
    dayMouseHover(date) {
      if (this.v1 && !this.v2) {
        this.$emit('hd', dayjs(date))
      }
    },
    dayMouseOut() {
      this.$emit('hd', null)
    },
    isInRange(date) {
      //range v1, h2
      let rv1h2 = this.h2 && dayjs(date).isAfter(this.v1, 'date') && dayjs(date).isBefore(this.h2, 'date')
      //range v1,v2
      let rv1v2 = this.v2 && dayjs(date).isAfter(this.v1, 'date') && dayjs(date).isBefore(this.v2, 'date')
      // console.log(rv1h2, rv1v2)
      return this.isRange && this.v1 && (rv1h2 || rv1v2)
    },
    getDaysNode() {
      // console.log(this.currentDay)
      let year = this.date.$y
      let month = this.date.$M
      const weeks = [];
      //这个月有多少天
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      //这个月的第一天是周几
      const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0-based index (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

      let currentWeek = [];
      const calendar = [];

      // 上个月
      const time = new Date(year, month, 0);
      const lastMonthDays = time.getDate(); //上个月有多少天
      const startDay = lastMonthDays - firstDayOfWeek + 1; //不足7天补上
      for (let i = 0; i < firstDayOfWeek; i++) {
        let date = time.setDate(startDay + i)
        let cls = {
          'k-calendar-day-item': 1,
          'k-calendar-day-out': 1,
          'k-calendar-day-disabled': this.isDisabled(date),
          // 'k-calendar-day-in': this.isInRange(date)
        }
        currentWeek.push(<span class={cls} onMouseleave={this.dayMouseOut} onMouseenter={() => this.dayMouseHover(date)} onClick={e => this.setDay(e, date)}>{startDay + i}</span>);
        // currentWeek.push((startDay + i).toString().padStart(2, '0'));
      }
      time.setMonth(time.getMonth() + 1, 1)
      // 这个月的天数
      for (let day = 1; day <= daysInMonth; day++) {
        let date = time.setDate(day);;
        let cls = {
          'k-calendar-day-item': 1,
          'k-calendar-day-this': dayjs(date).isSame(dayjs(), 'day'),
          'k-calendar-day-selected': this.isSelectDay(date),
          'k-calendar-day-disabled': this.isDisabled(date),
          'k-calendar-day-in': this.isInRange(date)
        }
        currentWeek.push(<span class={cls} onMouseleave={this.dayMouseOut} onMouseenter={() => this.dayMouseHover(date)} onClick={e => this.setDay(e, date)}>{day}</span>);
        // currentWeek.push(day.toString().padStart(2, '0'));

        // Start a new week on Sunday (index 0)
        if (currentWeek.length == 7) {
          calendar.push([...currentWeek]);
          currentWeek = [];
        }
      }

      // 下个月要补上
      time.setMonth(time.getMonth() + 1, 1)
      let nextMonthDay = 1;
      let lostDay = 42 - firstDayOfWeek - daysInMonth

      for (let i = 1; i <= lostDay; i++) {
        let date = time.setDate(nextMonthDay)
        let cls = {
          'k-calendar-day-item': 1,
          'k-calendar-day-out': 1,
          'k-calendar-day-disabled': this.isDisabled(date),
          // 'k-calendar-day-in': this.isInRange(date)
        }
        currentWeek.push(<span class={cls} onMouseleave={this.dayMouseOut} onMouseenter={() => this.dayMouseHover(date)} onClick={e => this.setDay(e, date)}>{nextMonthDay}</span>);
        nextMonthDay++
        if (currentWeek.length == 7) {
          calendar.push([...currentWeek]);
          currentWeek = [];
        }
        // currentWeek.push((nextMonthDay++).toString().padStart(2, '0'));
      }
      if (currentWeek.length) {
        calendar.push([...currentWeek]);
      }

      for (const week of calendar) {
        weeks.push(<span class={'k-calendar-week-item'}>{week}</span>)
      }
      return weeks
    },
    getYearsNode() {
      let thisYear = new Date().getFullYear()
      let years = []
      let min = thisYear - 100, max = thisYear + 100;
      let { $y } = this.date || {}
      for (let j = min; j <= max; j++) {
        let cls = {
          'k-calendar-year-item': 1,
          'k-calendar-year-this': thisYear == j,
          'k-calendar-item-selected': this.value && $y == j,
          'k-calendar-year-disabled': this.isDisabled(new Date().setFullYear(j))
        }
        years.push(<span class={cls} onClick={(e) => this.setYear(e, j)}>{j}</span>)
      }
      let node = <div class="k-calendar-years" ref="yearspicker">{years}</div>
      return node
    },
    getMonthsNode() {
      let months = t('k.datePicker.months');
      let month = []
      let { $M } = this.date || {}
      let _month = new Date().getMonth()
      for (let i = 0; i < 12; i++) {
        let cls = {
          'k-calendar-month-item': 1,
          'k-calendar-month-this': _month == i,
          'k-calendar-item-selected': this.value && $M == i,
          'k-calendar-year-disabled': this.disabledDate(new Date().setMonth(i))
        }
        month.push(<span class={cls} onClick={(e) => { this.setMonth(e, i) }}>{months[i]}</span >)
      }
      const monthNode = <div class="k-calendar-months" ref="monthspicker">{month}</div>
      return monthNode
    },
    fix(v) {
      return ('0' + v).slice(-2)
    },
    isDisabledTime(types, value) {
      let fdtime = this.disabledTime()
      if (fdtime && types in fdtime && typeof fdtime[types] === 'function') {
        let [a, b] = fdtime[types]() || []
        if (a && b) {
          return value >= a && value <= b
        }
        return false
      }
      return false
    },
    getTimesNode() {
      let { $H, $m, $s } = this.date
      // console.log($H, $m, $s)
      let hours = [], minus = [], sec = [];
      //hour
      for (let j = 0; j < 24; j++) {
        let cls = {
          'k-calendar-time-item': 1,
          'k-calendar-time-this': $H == j,
          'k-calendar-item-selected': this.value && $H == j,
          'k-calendar-time-disabled': this.isDisabledTime('disabledHours', j),
        }
        hours.push(<span class={cls} onClick={(e) => this.setTime(e, j, 'hour')}>{this.fix(j)}</span>)
      }
      //minus
      for (let m = 0; m < 60; m++) {
        let cls = {
          'k-calendar-time-item': 1,
          'k-calendar-time-this': $m == m,
          'k-calendar-item-selected': this.value && $m == m,
          'k-calendar-time-disabled': this.isDisabledTime('disabledMinutes', m),
        }
        minus.push(<span class={cls} onClick={(e) => this.setTime(e, m, 'minute')}>{this.fix(m)}</span>)
      }
      //sec
      for (let s = 0; s < 60; s++) {
        let cls = {
          'k-calendar-time-item': 1,
          'k-calendar-time-this': $s == s,
          'k-calendar-item-selected': this.value && $s == s,
          'k-calendar-time-disabled': this.isDisabledTime('disabledSeconds', s),
        }
        sec.push(<span class={cls} onClick={(e) => this.setTime(e, s, 'second')}>{this.fix(s)}</span>)
      }
      hours = <div class='k-calendar-time-picker-select'>{hours}</div>
      minus = <div class='k-calendar-time-picker-select'>{minus}</div>
      sec = <div class='k-calendar-time-picker-select'>{sec}</div>
      let timeNode = <div class="k-calendar-time-picker" ref="timepicker">{hours}{minus}{sec}</div>
      return timeNode
    },
    setMonth(e, month) {
      e.stopPropagation();
      if (e.target.className.indexOf('disabled') >= 0) {
        return
      }
      // let date = this.date.month(month)
      this.$emit('input', month, 'month')
      this.$emit('close', this.mode == 'month')
      if (this.mode != 'month' && this.mode != 'year') {
        this.showYears = false
      }
      this.scrollToCenter(e)
    },
    setYear(e, year) {
      e.stopPropagation();
      if (e.target.className.indexOf('disabled') >= 0) {
        return
      }
      // let date = this.date.year(year)
      this.$emit('input', year, 'year')
      this.$emit('close', this.mode == 'year')
      this.scrollToCenter(e)
    },
    setDay(e, day) {
      e.stopPropagation();
      if (e.target.className.indexOf('disabled') >= 0) {
        return
      }
      let date = this.date
      let { $y, $M, $D } = dayjs(day)
      // console.log($y, $M, $D)
      // return
      date = date.year($y).month($M).date($D)
      // console.log(date)
      // return
      this.$emit('input', date)
      this.$emit('close', !this.withTime && !this.isRange)
    },
    setTime(e, value, type) {
      e.stopPropagation();
      if (e.target.className.indexOf('disabled') >= 0) {
        return;
      }
      // let date = this.date[type](value)
      this.$emit('input', value, type)
      this.scrollToCenter(e)
    },
  },
  mounted() {
    if (this.mode == 'month' || this.mode == 'year') {
      this.initYearMonth()
    }
    if (this.isTime) {
      this.initToCenter('timepicker')
    }
  },
  render() {
    let { showYears, pickerSize, showTimes, isTime, mode, isRange, withTime } = this
    let months = t('k.datePicker.months');

    showYears = showYears || mode == 'year' || mode == 'month'
    let { $y, $M, $D } = this.date || dayjs()
    //header
    let headNodeChilds = []
    if (!isTime) {
      if (!showTimes && !showYears) {
        headNodeChilds.push(<Button icon={ChevronDoubleBack} size={pickerSize} theme="normal" class="k-calendar-prev-year-btn" onClick={() => this.nextAndPrev(0, 'year')}></Button>)
        headNodeChilds.push(<Button icon={ChevronBack} size={pickerSize} theme="normal" class="k-calendar-prev-month-btn" onClick={() => this.nextAndPrev(0, 'month')}></Button>)
      }
      // else if (mode != 'year' && mode != 'month') {
      //   headNode.push(<Button class="k-calendar-back" size={pickerSize} icon={ChevronBack} theme="normal" onClick={this.back}>{t('k.datePicker.back')} </Button>)
      // }
      headNodeChilds.push(<Button class="k-calendar-year-select" size={pickerSize} theme="normal" onClick={this.setShowYear}>{$y}{t('k.datePicker.year')} {mode != 'year' ? months[$M] : ''} {(!showYears && showTimes) ? $D : ''}</Button>)

      if (!showTimes && !showYears) {
        headNodeChilds.push(<Button theme="normal" size={pickerSize} icon={ChevronForward} class="k-calendar-next-month-btn" onClick={() => this.nextAndPrev(1, 'month')}></Button>)
        headNodeChilds.push(<Button icon={ChevronDoubleForward} size={pickerSize} theme="normal" class="k-calendar-next-year-btn" onClick={() => this.nextAndPrev(1, 'year')}></Button>)
      }
    } else {
      headNodeChilds.push(<div class="k-calendar-time-label">{t('k.datePicker.selectTime')}</div>)
    }
    const headNode = <div class="k-calendar-head">{headNodeChilds}</div>

    //days and week body
    let dayWeekBodyNode = null
    if (!showYears && !showTimes && !isTime) {
      const weeksNode = this.getWeekDaysNode()
      const daysNode = this.getDaysNode()
      dayWeekBodyNode = <div class="k-calendar-body">{weeksNode}{daysNode}</div>
    }
    // console.log(showYears)
    let yearsMonthNode = null
    if (showYears) {
      let childs = []
      const yearNode = this.getYearsNode()
      childs.push(yearNode)

      if (mode != 'year') {
        const monthNode = this.getMonthsNode()
        childs.push(monthNode)
      }
      yearsMonthNode = <div class="k-calendar-yearmonth-picker" ref="ympicker">{childs}</div>
    }

    let timeNode = null
    if (showTimes || isTime) {
      timeNode = this.getTimesNode()
    }

    //footer
    let footerNode = []
    if (withTime) {
      // footerNode.push(<Button theme="normal" size={pickerSize} disabled={disabled} class="k-calendar-btn-today" onClick={this.setToday}>{t('k.datePicker.now')}</Button>)
      footerNode.push(<Button theme="normal" size={pickerSize} onClick={this.setShowTime}>{showTimes ? t('k.datePicker.selectDate') : t('k.datePicker.selectTime')}</Button>)
      if (!isRange || this.isRight) footerNode.push(<Button type="primary" class="k-calendar-btn-ok" size={pickerSize} onClick={e => this.ok(e)}>{t('k.datePicker.ok')}</Button>)
    }
    footerNode = footerNode.length || (isRange && withTime) ? <div class="k-calendar-footer">{footerNode}</div> : null
    let rootCls = ['k-calendar', {
      'k-calendar-small': pickerSize == 'small',
      'k-calendar-only-year': mode == 'year',
      'k-calendar-only-time': isTime,
      'k-calendar-yearmonth': mode == 'month'
    }]
    return (
      <div class={rootCls}>
        {headNode}
        {dayWeekBodyNode}
        {yearsMonthNode}
        {timeNode}
        {footerNode}
      </div>
    )
  }
};