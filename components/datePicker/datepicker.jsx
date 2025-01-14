import Calendar from './datecalendar'
import Icon from "../icon";
// import { isNotEmpty } from '../_tool/utils'
import dayjs from 'dayjs'
import Drop from '../base/drop'
import { t } from '../locale'
import { CloseCircle, CalendarOutline, TimeOutline } from 'kui-icons'
const duration = require('dayjs/plugin/duration');
const isBetween = require('dayjs/plugin/isBetween');

dayjs.extend(duration);
dayjs.extend(isBetween);
export default {
  name: 'DatePicker',
  props: {
    value: [String, Date, Number, Array, Object],
    mode: {
      type: String, default: 'date', validator(value) {
        return ["year", "month", "date", 'time', 'dateTime', "dateRange", 'dateTimeRange'].indexOf(value) >= 0;
      }
    },
    disabled: Boolean,
    transfer: { type: Boolean, default: true },
    disabledDate: { type: Function, default: e => { } },
    disabledTime: { type: Function, default: e => { } },
    format: String,
    clearable: { type: Boolean, default: true },
    bordered: { type: Boolean, default: true },
    pickerSize: String,
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
    placement: String,
    theme: String,
    shape: String,
    placeholder: [String, Array],
    dateIcon: [String, Array],
    presets: Array
  },
  provide() {
    return {
      DatePicker: this,
    }
  },
  data() {
    return {
      opened: false,
      currentValue: this.value,
      v1: null, // render selected
      v2: null, //
      d1: null, //render date view
      d2: null,
      h2: null,
      fmt: {
        'year': 'YYYY',
        'month': 'YYYY-MM',
        'date': 'YYYY-MM-DD',
        'dateRange': 'YYYY-MM-DD',
        'time': 'HH:mm:ss',
        'dateTime': 'YYYY-MM-DD HH:mm:ss',
        'dateTimeRange': 'YYYY-MM-DD HH:mm:ss'
      }
    }
  },
  created() {
    this.updateCalendDate()
  },
  computed: {
    label() {
      let { currentValue, isRange, format, fmt, mode } = this
      let ft = format || fmt[mode]
      if (isRange) {
        let [v1, v2] = currentValue || []
        return [v1 ? dayjs(v1).format(ft) : null, v2 ? dayjs(v2).format(ft) : null]
      } else {
        return currentValue ? dayjs(currentValue).format(ft) : null
      }
    },
    isRange() {
      return this.mode.indexOf('Range') >= 0
    },
    withTime() {
      return this.mode.indexOf('Time') >= 0// && this.mode != 'time'
    }
  },
  watch: {
    value(v) {
      if (this.v != this.currentValue) {
        console.log(v)
        if (!this.isRange) {
          this.currentValue = v ? dayjs(v) : ''
        } else {
          let [a, b] = v || []
          this.currentValue = [a ? dayjs(a) : null, b ? dayjs(b) : null]
        }
        this.updateCalendDate()
      }
    }
  },
  methods: {
    updateCalendDate() {
      let { currentValue, isRange } = this
      if (isRange) {
        let [a, b] = currentValue || []
        // if (!this.v1 && a) {
        //   this.v1 = dayjs(a)
        // }
        // if (!this.v2 && b) {
        //   this.v2 = dayjs(b)
        // }
        this.d1 = a ? dayjs(a) : dayjs()
        this.d2 = b ? dayjs(b) : dayjs().add(1, 'month')

        const oneMonth = dayjs.duration(1, 'month').asDays();
        const diff = this.d2.diff(this.d1, 'day');
        if (diff < oneMonth) {
          this.d2 = dayjs(this.d1).add(1, 'month')
        }
        if (!this.v1 && a) {
          this.v1 = dayjs(a)
        }
        if (!this.v2 && b) {
          this.v2 = dayjs(b)
        }

        // this.currentValue = [dayjs(this.d1), dayjs(this.d2)]
      } else {
        this.d1 = currentValue ? dayjs(currentValue) : dayjs()
        if (!this.v1 && currentValue) {
          this.v1 = dayjs(currentValue)
        }
      }
    },
    clear(e) {
      let v = null;
      if (!this.isRange) {
        this.currentValue = null
        v = ''
        this.v1 = null
      } else {
        this.currentValue = []
        v = []
        this.v1 = null
        this.v2 = null
      }
      this.updateCalendDate()

      this.$emit("input", v);
      this.$emit("change", v, v);
      e && e.stopPropagation()
    },
    toggleDrop() {
      if (this.disabled) {
        return false;
      }
      this.opened = !this.opened;

      if (this.opened) {
        this.updateCalendDate()
      } else {
        this.validValue()
      }
    },
    picker1Update(value, type) {
      let { v1, v2, withTime, format, fmt, mode, isRange } = this
      if (isRange) {
        if (!type) { //day
          let result = dayjs(value)
          if (!v1) {
            this.v1 = result
            this.currentValue = [dayjs(value), v2]
          } else if (v1 && !v2) {
            this.v2 = result
            this.currentValue = [v1, this.v2]
            if (!withTime) {
              this.opened = false
            }
          } else if (v1 && v2) {
            this.v1 = result
            this.v2 = null
            this.currentValue = [dayjs(value), null]
          }
          this.updateStr()

        } else {
          let _v1 = (v1 || dayjs(this.d1))[type](value)
          this.v1 = _v1
          if (v2) {
            const oneMonth = dayjs.duration(1, 'month').asDays();
            const diff = _v1.diff(v2, 'day');
            // console.log(oneMonth, diff)
            if (diff > oneMonth) {
              v2 = dayjs(_v1).add(1, 'month')
            }
            this.v2 = v2
          }
          this.currentValue = [_v1, v2]
          this.updateStr()
        }
      } else {
        let result = !type ? dayjs(value) : (this.v1 || dayjs())[type](value)
        this.v1 = dayjs(result)
        this.currentValue = dayjs(result)
        this.updateStr()
      }
    },
    picker2Update(value, type) {
      let { v1, v2, withTime, format, fmt, mode } = this
      if (!type) { //day
        let result = dayjs(value)
        if (!v1) {
          this.v1 = result
          this.currentValue = [dayjs(value), v2]
        } else if (v1 && !v2) {
          this.v2 = result
          this.currentValue = [v1, this.v2]
          if (!withTime) {
            this.opened = false
          }
        } else if (v1 && v2) {
          this.v1 = result
          this.v2 = null
          this.currentValue = [dayjs(value), null]
        }
        this.updateStr()
      } else {
        let _v2 = (v2 || dayjs(this.d2))[type](value)
        this.v2 = _v2
        if (v1) {
          const oneMonth = dayjs.duration(1, 'month').asDays();
          const diff = _v2.diff(v1, 'day');
          // console.log(oneMonth, diff)
          if (diff < 0) {
            v1 = dayjs(_v2).subtract(1, 'month')
          }
          this.v1 = v1
        }
        this.currentValue = [v1, _v2]
        this.updateStr()
      }
    },
    updateStr() {
      let { v1, v2, isRange, format, fmt, mode } = this
      let ft = format || fmt[mode]
      let dateStr = isRange ? [v1 ? v1.format(ft) : null, v2 ? v2.format(ft) : null] : v1.format(ft)
      this.$emit('input', dateStr)
      this.$emit('change', this.currentValue, dateStr)
      this.updateCalendDate()
    },
    validValue(e) {
      // 只有一个值的时候, 直接置空
      if (this.isRange) {
        let [a, b] = this.currentValue || []
        if ((a && !b) || (!a && b)) {
          this.clear(e)
        }
      }
    },
    getPresetsNode() {
      let { presets } = this
      if (presets && presets.length > 1) {
        let childs = []
        for (let i = 0; i < presets.length; i++) {
          childs.push(<Button theme="normal" size="small" onClick={() => this.setPreset(presets[i])}>{presets[i].label}</Button>)
        }
        return <div class="k-date-picker-presets">{childs}</div>
      }
      return null
    },
    setPreset({ value }) {
      let { isRange, format, fmt, mode } = this
      let ft = format || fmt[mode]
      if (isRange) {
        let [a, b] = value || []
        if (a && b) {
          this.v1 = dayjs(a)
          this.v2 = dayjs(b)
          this.currentValue = [dayjs(a), dayjs(b)]
          let dateStr = [dayjs(a).format(ft), dayjs(b).format(ft)]
          this.$emit('input', dateStr)
          this.$emit('change', this.currentValue, dateStr)
        }
      } else {
        this.v1 = dayjs(value)
        this.currentValue = dayjs(value)
        let dateStr = this.v1.format(ft)
        this.$emit('input', dateStr)
        this.$emit('change', this.currentValue, dateStr)
      }
      this.opened = false
    },
  },
  render() {
    // console.log(t('k.datePicker'))
    let { currentValue, placeholder, disabled, clearable, v1, v2, d1, d2, h2,
      opened, size, label, transfer, bordered, theme, shape, dateIcon,
      format, mode, disabledTime, isRange, withTime, disabledDate, pickerSize
    } = this
    let childNode = [];
    if (dateIcon === undefined) {
      dateIcon = CalendarOutline
    }
    if (mode == 'time') {
      dateIcon = TimeOutline
    }
    dateIcon && childNode.push(<Icon type={dateIcon} class="k-icon-calendar" />)
    let dv1, dv2;
    if (isRange) {
      placeholder = placeholder || []
      if (placeholder && !Array.isArray(placeholder)) {
        console.error('Please set placeholder as array !')
        placeholder = []
      }
      let p1 = placeholder[0] || t('k.datePicker.startDate'), p2 = placeholder[1] || t('k.datePicker.endDate')
      let [l1, l2] = label
      if (l1) {
        childNode.push(<div class="k-datepicker-value">{l1}</div>)
      } else {
        childNode.push(<div class="k-datepicker-placeholder">{p1}</div>)
      }
      childNode.push(<div class="k-datepicker-separator">~</div>)
      if (l2) {
        childNode.push(<div class="k-datepicker-value">{l2}</div>)
      } else {
        childNode.push(<div class="k-datepicker-placeholder">{p2}</div>)
      }
      let [a, b] = currentValue || []
      dv1 = a
      dv2 = b
    } else {
      placeholder = placeholder || t('k.datePicker.placeholder')
      if (label) {
        childNode.push(<div class="k-datepicker-value">{label}</div>)
      } else if (placeholder) {
        childNode.push(<div class="k-datepicker-placeholder">{placeholder}</div>)
      }

      dv1 = currentValue
    }

    // console.log(dv1, dv2)

    let calendar = []
    let presetsNode = this.getPresetsNode()
    if (presetsNode) {
      calendar.push(presetsNode)
    }
    const leftProps = {
      props: {
        format, mode, opened, disabledTime,
        disabledDate, value: dv1, date: d1, v1, v2, h2, pickerSize: pickerSize || size
      },
      on: {
        input: (e, f) => this.picker1Update(e, f),
        close: (v) => {
          if (v) {
            this.opened = false
          }
        },
        hd: (v) => {
          this.h2 = v
        },
        np: (v) => {
          this.d1 = v
          if (this.isRange && (this.d1.isSame(this.d2, 'month') || this.d1.isAfter(d2, 'month'))) {
            this.d2 = v.add(1, 'month')
          }
        }
      }
    }
    calendar.push(<Calendar {...leftProps} />)

    if (isRange) {
      let rightProps = {
        props: { format, opened, mode, disabledTime, disabledDate, isRight: true, value: dv2, date: d2, v1, v2, h2, pickerSize },
        on: {
          input: (e, f) => this.picker2Update(e, f),
          close: (v, e) => {
            if (v) {
              this.opened = false
              this.validValue(e)
            }
          },
          hd: (v) => {
            this.h2 = v
          },
          np: (v) => {
            this.d2 = v
            if (this.d2.isSame(this.d1, 'month') || this.d2.isBefore(d1, 'month')) {
              this.d1 = v.subtract(1, 'month')
            }
          }
        }
      };
      calendar.push(<Calendar {...rightProps} />)
    }

    const props = {
      props: {
        className: ['k-datepicker-dropdown', { 'k-datepicker-range-dropdown': isRange }],
        transfer: true,
        selection: this.$el,
        value: this.opened,
        placement: 'bottom-left',
        transitionName: 'k-date-picker'
      },
      on: {
        // render: () => {
        // },
        input: e => {
          this.opened = e
        },
        hide: () => {
          this.opened = false
          this.validValue()
        },
      }
    }
    let overlay = <Drop {...props}>{calendar}</Drop >

    let showClear = !disabled && clearable && ((isRange && v1 && v2) || (!isRange && v1))
    showClear && childNode.push(<Icon class="k-datepicker-clearable" type={CloseCircle} onClick={this.clear} />)
    const selectCls = [
      "k-datepicker-selection", {
        "k-datepicker-has-clear": showClear
      }
    ]
    const classes = ['k-datepicker',
      { 'k-datepicker-open': opened },
      { 'k-datepicker-range': isRange },
      { 'k-datepicker-borderless': bordered === false },
      { 'k-datepicker-sm': size == 'small' },
      { 'k-datepicker-lg': size == 'large' },
      { 'k-datepicker-with-time': withTime },
      { 'k-datepicker-disabled': disabled },
      { 'k-datepicker-light': theme == 'light' },
      { 'k-datepicker-circle': shape == 'circle' },
    ]
    return (
      <div tabIndex="0" class={classes}>
        <div class={selectCls} onClick={this.toggleDrop}>
          {childNode}
        </div>
        {overlay}
      </div>
    )
  }
}