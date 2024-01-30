import Calendar from './datecalendar'
import Icon from "../icon";
// import { isNotEmpty } from '../_tool/utils'
import dayjs from 'dayjs'
import Drop from '../base/drop'
import { t } from '../locale'
import { CloseCircle, CalendarOutline, TimeOutline } from 'kui-icons'
export default {
  name: 'DatePicker',
  props: {
    value: [String, Date, Number, Array],
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
      v2: null,
      d1: null, //render date 
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
        if (!this.isRange) {
          this.currentValue = dayjs(v)
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
        this.d1 = a ? dayjs(a) : dayjs(), this.d2 = b ? dayjs(b) : dayjs().add(1, 'month')
        if (this.d1.isSame(this.d2, 'month')) {
          this.d2 = this.d1.add(1, 'month')
        }
      } else {
        this.d1 = currentValue ? dayjs(currentValue) : dayjs()
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
      let { isRange, format, fmt, mode } = this
      if (!isRange) {
        if (!type) {
          this.d1 = dayjs(value)
          this.v1 = dayjs(value)
        } else {
          this.d1 = this.d1[type](value)
          this.v1 = (this.v1 || dayjs())[type](value)

          if (type == 'second' && mode == 'time') {
            this.opened = false
          }
        }
        let ft = format || fmt[mode]
        let dateStr = this.v1.format(ft)
        this.currentValue = dayjs(this.v1)
        this.$emit('input', dateStr)
        this.$emit('change', this.currentValue, dateStr)

      } else {
        let { v1, v2, withTime } = this
        if (!type) { //只改变年月时间
          this.d1 = dayjs(value)
          if (!v1 && !v2) {
            this.v1 = dayjs(value)
            this.currentValue = [dayjs(value),]
          } else if (v1 && !v2) {
            this.v2 = dayjs(value)
            this.currentValue = [v1, this.v2]

            let ft = format || fmt[mode]
            let dateStr = [v1.format(ft), this.v2.format(ft)]
            // console.log(dateStr)
            // return
            this.$emit('input', dateStr)
            this.$emit('change', this.currentValue, dateStr)
            this.updateCalendDate()
            if (!withTime) {
              this.opened = false
            }
          } else if (v1 && v2) {
            this.v1 = dayjs(value)
            this.v2 = null
            this.currentValue = [dayjs(value),]
          }
        } else {
          this.v1 = (this.v1 || dayjs())[type](value)

          this.currentValue = [this.v1, v2]
          this.d1 = this.d1[type](value)
        }
        if (this.d1.isSame(this.d2, 'month') || this.d1.isAfter(this.d2, 'month')) {
          this.d2 = this.d1.add(1, 'month')
        }
      }
    },
    picker2Update(value, type) {
      let { v1, v2, withTime, format, fmt, mode } = this
      if (!type) { //day
        this.d2 = value
        if (!v1 && !v2) {
          this.v1 = dayjs(value)
          this.currentValue = [dayjs(value),]
        } else if (v1 && !v2) {
          this.v2 = dayjs(value)
          this.currentValue = [v1, this.v2]

          let ft = format || fmt[mode]
          let dateStr = [v1.format(ft), this.v2.format(ft)]
          this.$emit('input', dateStr)
          this.$emit('change', this.currentValue, dateStr)
          this.updateCalendDate()

          // console.log(dateStr)
          if (!withTime) {
            this.opened = false
          }
        } else if (v1 && v2) {
          this.v1 = dayjs(value)
          this.v2 = null
          this.currentValue = [dayjs(value),]
        }
      } else {  //for year , month , datetime 
        if (!this.v1) {
          this.v1 = (this.v1 || dayjs())[type](value)
          this.currentValue = [this.v1, v2]
          this.d2 = this.d2[type](value)
        } else {
          this.v2 = (this.v2 || dayjs())[type](value)
          this.currentValue = [v1, this.v2]
          this.d2 = this.d2[type](value)
        }
      }
      if (this.d2.isSame(this.d1, 'month') || this.d2.isBefore(this.d1, 'month')) {
        this.d1 = this.d2.subtract(1, 'month')
      }
    },
    validValue(e) {
      // 只有一个值的时候, 直接置空
      if (this.isRange) {
        let [a, b] = this.currentValue || []
        if (a && !b) {
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
      props: { format, mode, opened, disabledTime, disabledDate, value: dv1, date: d1, v1, v2, h2, pickerSize },
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
        transfer: transfer,
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

    let showClear = !disabled && clearable && ((isRange && this.v1 && this.v2) || (!isRange && this.v1))
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