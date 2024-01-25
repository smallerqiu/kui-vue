
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
    value: [String, Date, Number, Object],
    showTime: Boolean,
    disabledDate: { type: Function, default: e => { } },
    disabledTime: { type: Function, default: e => { } },
    mode: { type: String, default: 'date' },
    format: { type: String, default: 'YYYY-MM-DD' },
    isRight: Boolean,
    startDate: [String, Date, Number, Object],
    endDate: [String, Date, Number, Object],
    pickerSize: String,
    opened: Boolean,
  },
  data() {
    return {
      showYears: false,
      showTimes: false,
      currentValue: dayjs(this.value),
      // monthsHead: "1.2.3.4.5.6.7.8.9.10.11.12".split("."),
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
    value(c, o) {
      if (c != o) {
        // this.currentValue = c
      }
    },
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
    initToCenter(key) {
      this.$nextTick(() => {
        let childs = (this.$refs[key] || {}).children || []
        for (let m of childs) {
          // console.log(m.children)
          for (let n of m.children) {
            // console.log(n)
            if (n.className.indexOf('selected') > -1 || n.className.indexOf('this') > -1) {
              this.scrollToCenter({ target: n }, false)
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
      const scrollDistance = offset - parseFloat((ul.clientHeight / 2).toFixed(2)) + parseFloat((e.target.clientHeight / 2).toFixed(2)) - 114 / 2;
      // 滚动到计算出的位置
      // console.log(scrollDistance)
      if (animate) {
        ul.scrollTo({ top: scrollDistance, behavior: 'smooth' });
      } else {
        ul.scrollTop = scrollDistance
      }
      // console.log(ul.scrollTop)
    },
    setDate() {
      // todo
      // if (this.mode == 'range') {
      //   // this.$emit('input', date)
      //   // this.$emit('change', date)
      // } else {
      //   let date = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second)
      //   this.currentValue = date
      this.$emit('input', date)
      this.$emit('change', date)
      // }
    },
    nextAndPrev(isNext, t) {
      let date = dayjs(this.currentValue)
      this.currentValue = isNext ? date.add(1, t) : date.subtract(1, t)
      console.log(isNext, t)
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
    getDaysNode() {
      // console.log(this.currentDay)
      let year = this.currentValue.$y
      let month = this.currentValue.$M
      // console.log(year)
      const weeks = [];
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0-based index (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

      let currentWeek = [];
      const calendar = [];

      // Fill in preceding days from the last month
      const time = new Date(year, month, 0);
      const lastDay = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1
      const startDay = time.getDate() - lastDay;
      for (let i = 0; i < lastDay; i++) {
        let cls = {
          'k-calendar-day-item': 1,
          'k-calendar-day-out': 1,
        }
        let date = time.setDate(startDay + i)
        currentWeek.push(<span class={cls} onClick={e => this.setDay(e, date)}>{startDay + i}</span>);
        // currentWeek.push((startDay + i).toString().padStart(2, '0'));
      }
      time.setMonth(time.getMonth() + 1, 1)
      // Fill in days of the current month
      for (let day = 1; day <= daysInMonth; day++) {
        let date = time.setDate(day)
        let cls = {
          'k-calendar-day-item': 1,
          'k-calendar-day-this': dayjs(date).isSame(dayjs(), 'day'),
        }
        currentWeek.push(<span class={cls} onClick={e => this.setDay(e, date)}>{day}</span>);
        // currentWeek.push(day.toString().padStart(2, '0'));

        // Start a new week on Sunday (index 0)
        if (currentWeek.length == 7) {
          calendar.push([...currentWeek]);
          currentWeek = [];
        }
      }

      // Fill in remaining days from the next month
      time.setMonth(time.getMonth() + 1, 1)
      let nextMonthDay = 1;
      let lostDay = 42 - (calendar.length + 1) * 7 + currentWeek.length
      console.log(calendar.length, lostDay, calendar.length)
      for (let i = 1; i < lostDay; i++) {
        let cls = {
          'k-calendar-day-item': 1,
          'k-calendar-day-out': 1,
        }
        let date = time.setDate(nextMonthDay)
        currentWeek.push(<span class={cls} onClick={e => this.setDay(e, date)}>{nextMonthDay}</span>);
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
        // console.log(week.join(' '));
        weeks.push(<span class={'k-calendar-week-item'}>{week}</span>)
      }

      /**
       * const days = [];
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
       * /
      // let currentDay = new Date(firstDay);

      // // 找到第一个周日
      // while (currentDay.getDay() !== 0) {
      //   currentDay.setDate(currentDay.getDate() - 1);
      // }
      // let lastDayOfAdjacentMonth = null;
      // while (currentDay <= lastDay) {
      //   const week = [];
      //   for (let i = 0; i < 7; i++) {
      //     if (currentDay.getMonth() === month) {
      //       let cls = {
      //         'k-calendar-day-item': 1,
      //         'k-calendar-day-this': dayjs(currentDay).isSame(dayjs(), 'day'),
      //       }
      //       let { $D } = dayjs(currentDay)
      //       week.push(<span class={cls} onClick={e => this.setDay(e, $D)}>{$D}</span>);
      //     } else {
      //       // 补齐上一个月和下一个月的最后几天
      //       const adjacentMonth = currentDay.getMonth() < month ? month - 1 : month + 1;
      //       lastDayOfAdjacentMonth = new Date(year, adjacentMonth + 1, 0);
      //       lastDayOfAdjacentMonth.setDate(lastDayOfAdjacentMonth.getDate() - (6 - i))
      //       week.push(<span class={'k-calendar-day-item k-calendar-day-out'}>{lastDayOfAdjacentMonth.getDate()}</span>);
      //     }
      //     currentDay.setDate(currentDay.getDate() + 1);
      //   }
      //   weeks.push(<span class={'k-calendar-week-item'}>{week}</span>);
      // }
      // //不足6周
      // if (weeks.length < 6) {
      //   currentDay = lastDayOfAdjacentMonth || lastDay
      //   const week = [];
      //   for (let i = 0; i < 7; i++) {
      //     currentDay.setDate(currentDay.getDate() + 1);
      //     week.push(<span class={'k-calendar-day-item k-calendar-day-out'}>{currentDay.getDate()}</span>);
      //   }
      //   weeks.push(<span class={'k-calendar-week-item'}>{week}</span>);
      // }
      return weeks;
    },
    getYearsNode() {
      let { $y } = this.currentValue
      let years = []
      let min = $y - 100, max = $y + 100;
      let _year = new Date().getFullYear()
      for (let j = min; j <= max; j++) {
        let cls = {
          'k-calendar-year-item': 1,
          'k-calendar-year-this': _year == j,
        }
        years.push(<span class={cls}>{j}</span>)
      }
      let node = <div class="k-calendar-years" ref="yearspicker">{years}</div>
      return node
    },
    getMonthsNode() {
      let months = t('k.datePicker.months');
      let month = []
      let _month = new Date().getMonth()
      for (let i = 0; i < 12; i++) {
        let cls = {
          'k-calendar-month-item': 1,
          'k-calendar-month-this': _month == i,
        }
        month.push(<span class={cls}>{months[i]}</span >)
      }
      const monthNode = <div class="k-calendar-months" ref="monthspicker">{month}</div>
      return monthNode
    },
    fix(v) {
      return ('0' + v).slice(-2)
    },
    getTimesNode() {
      let { $H, $m, $s } = this.currentValue
      let hours = [], minus = [], sec = [];
      //hour
      for (let j = 0; j < 25; j++) {
        let cls = {
          'k-calendar-time-item': 1,
          'k-calendar-time-this': $H == j
        }
        hours.push(<span class={cls}>{this.fix(j)}</span>)
      }
      //minus
      for (let m = 0; m < 61; m++) {
        let cls = {
          'k-calendar-time-item': 1,
          'k-calendar-time-this': $m == m
        }
        minus.push(<span class={cls}>{this.fix(m)}</span>)
      }
      //sec
      for (let s = 0; s < 61; s++) {
        let cls = {
          'k-calendar-time-item': 1,
          'k-calendar-time-this': $s == s
        }
        sec.push(<span class={cls}>{this.fix(s)}</span>)
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
      this.scrollToCenter(e)
    },
    setYear(e, year) {
      e.stopPropagation();
      if (e.target.className.indexOf('disabled') >= 0) {
        return
      }
      this.scrollToCenter(e)
    },
    setDay(e, day) {
      e.stopPropagation();
      if (e.target.className.indexOf('disabled') >= 0) {
        return
      }
      console.log(day)
    },
    setTime(e, value, type) {
      e.stopPropagation();
      if (e.target.className.indexOf('disabled') >= 0) {
        return;
      }
      // switch (t) {
      //   case 'HH':
      //     this.hour = v;
      //     this.currentValue = new Date(this.currentValue).setHours(v)
      //     break;
      //   case 'mm':
      //     this.minute = v;
      //     this.currentValue = new Date(this.currentValue).setMinutes(v)
      //     break;
      //   case 'ss':
      //     this.second = v;
      //     this.currentValue = new Date(this.currentValue).setSeconds(v)
      //     break;
      //   default:
      //     break;
      // }

      this.scrollToCenter(e)
    },
  },
  mounted() {
    this.initYearMonth()
  },
  render() {
    let { showYears, pickerSize, showTimes, mode, } = this
    let isRange = mode == 'range';
    let months = t('k.datePicker.months');

    showYears = showYears || mode == 'year' || mode == 'month'
    let { $y, $M, $D } = this.currentValue
    //header
    let headNode = []
    if (!showTimes && !showYears) {
      headNode.push(<Button icon={ChevronDoubleBack} size={pickerSize} theme="normal" class="k-calendar-prev-year-btn" onClick={() => this.nextAndPrev(0, 'year')}></Button>)
      headNode.push(<Button icon={ChevronBack} size={pickerSize} theme="normal" class="k-calendar-prev-month-btn" onClick={() => this.nextAndPrev(0, 'month')}></Button>)
    }
    // else if (mode != 'year' && mode != 'month') {
    //   headNode.push(<Button class="k-calendar-back" size={pickerSize} icon={ChevronBack} theme="normal" onClick={this.back}>{t('k.datePicker.back')} </Button>)
    // }
    headNode.push(<Button class="k-calendar-year-select" size={pickerSize} theme="normal" onClick={this.setShowYear}>{$y}{t('k.datePicker.year')} {mode != 'year' ? months[$M] : ''} {(!showYears && showTimes) ? $D : ''}</Button>)

    if (!showTimes && !showYears) {
      headNode.push(<Button theme="normal" size={pickerSize} icon={ChevronForward} class="k-calendar-next-month-btn" onClick={() => this.nextAndPrev(1, 'month')}></Button>)
      headNode.push(<Button icon={ChevronDoubleForward} size={pickerSize} theme="normal" class="k-calendar-next-year-btn" onClick={() => this.nextAndPrev(1, 'year')}></Button>)
    }
    //days and week body
    let dayWeekBodyNode = null
    if ((mode == 'date' || isRange) && !showYears && !showTimes) {
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
    if (showTimes) {
      timeNode = this.getTimesNode()
    }

    //footer
    let footerNode = []
    if (this.showTime) {
      // footerNode.push(<Button theme="normal" size={pickerSize} disabled={disabled} class="k-calendar-btn-today" onClick={this.setToday}>{t('k.datePicker.now')}</Button>)
      footerNode.push(<Button theme="normal" size={pickerSize} onClick={this.setShowTime}>{showTimes ? t('k.datePicker.selectDate') : t('k.datePicker.selectTime')}</Button>)
      if (!isRange || this.isRight) footerNode.push(<Button type="primary" class="k-calendar-btn-ok" size={pickerSize} onClick={this.setDate}>{t('k.datePicker.ok')}</Button>)
    }
    footerNode = footerNode.length || (isRange && this.showTime) ? <div class="k-calendar-footer">{footerNode}</div> : null
    return (
      <div class={['k-calendar', { 'k-calendar-small': pickerSize == 'small' }]}>
        <div class="k-calendar-head">{headNode}</div>
        {dayWeekBodyNode}
        {yearsMonthNode}
        {timeNode}
        {footerNode}
      </div>
    )
  }
};