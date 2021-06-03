import Calendar from './datecalendar'
import Icon from "../icon";
import { isNotEmpty } from '../_tool/utils'
import moment from 'moment'
import Drop from '../base/drop'

export default {
  name: 'DatePicker',
  props: {
    value: [String, Date, Number, Array],
    mode: { type: String, default: 'date' },
    showTime: Boolean,
    disabled: Boolean,
    transfer: { type: Boolean, default: true },
    disabledDate: { type: Function, default: e => { } },
    disabledTime: { type: Function, default: e => { } },
    format: { type: String, default: 'YYYY-MM-DD' },
    clearable: { type: Boolean, default: true },
    bordered: { type: Boolean, default: true },
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
    placeholder: [String, Array]
  },
  provide() {
    return {
      DatePicker: this,
    }
  },
  inject: {
    FormItem: { default: null },
  },
  data() {
    return {
      opened: false,
      currentValue: this.value,
      leftPicker: null,
      rightPicker: null,
      temp_date_hover: {}, //range hover date
      temp_range_one: null, //range one select
      temp_range_left: null, // range left value
      temp_range_right: null, // range right value
      temp_range_showtime: false, //range showtime
    }
  },
  computed: {
    label() {
      return this.getDate(this.currentValue)
    },
  },
  watch: {
    value(v) {
      if (this.v != this.currentValue) {
        this.currentValue = v
        this.FormItem && this.FormItem.testValue(v)
      }
    }
  },
  methods: {
    getDate(value) {
      let { format, mode } = this
      let isDefaultFormat = format == 'YYYY-MM-DD'
      if (mode == 'range') {
        if (isDefaultFormat) {
          if (this.showTime) {
            format = 'YYYY-MM-DD HH:mm:ss'
          }
        }
        value = value || []
        let label = []
        let [v1, v2] = value

        v1 = v1 ? new Date(v1) : ''
        v2 = v2 ? new Date(v2) : ''
        if (v1) label[0] = moment(v1).format(format)
        if (v2) label[1] = moment(v2).format(format)
        return label
      } else {
        if (isDefaultFormat) {
          if (mode == 'month') {
            format = 'YYYY-MM'
          }
          if (mode == 'year') {
            format = 'YYYY'
          }
          if (this.showTime) {
            format = 'YYYY-MM-DD HH:mm:ss'
          }
        }
        return value ? moment(value).format(format) : ''
      }
    },
    updateValue(value) {
      let date = this.getDate(value)
      // console.log(date)
      this.$emit('input', date)
      this.$emit('change', date)
      this.currentValue = value
      this.opened = false
      this.temp_date_hover = {};
      this.temp_range_one = null
      this.temp_range_left = null
      this.temp_range_right = null
      this.temp_range_showtime = false
    },
    clear(e) {
      if (Array.isArray(this.currentValue)) {
        this.currentValue = []
        this.temp_range_one = null
      } else {
        this.currentValue = ''
      }
      this.$emit("input", this.currentValue);
      this.$emit("change", this.currentValue);
      e.stopPropagation()
    },
    toggleDrop() {
      if (this.disabled) {
        return false;
      }
      this.opened = !this.opened;
    },
  },
  render() {
    let { currentValue, placeholder, disabled, clearable,
      opened, size, label, transfer, bordered,
      format, mode, disabledTime, disabledDate, showTime
    } = this
    let childNode = [], isRange = mode == 'range';

    childNode.push(<Icon type="calendar-outline" class="k-icon-calendar" />)
    if (isRange) {
      placeholder = placeholder || []
      if (placeholder && !Array.isArray(placeholder)) {
        console.error('Please set placeholder as array !')
        placeholder = []
      }
      let p1 = placeholder[0] || '开始日期', p2 = placeholder[1] || '结束日期'
      let v1 = label[0], v2 = label[1]
      if (v1) {
        childNode.push(<div class="k-datepicker-value">{v1}</div>)
      } else {
        childNode.push(<div class="k-datepicker-placeholder">{p1}</div>)
      }
      childNode.push(<div class="k-datepicker-separator">~</div>)
      if (v2) {
        childNode.push(<div class="k-datepicker-value">{v2}</div>)
      } else {
        childNode.push(<div class="k-datepicker-placeholder">{p2}</div>)
      }
    } else {
      placeholder = placeholder || '请选择日期'
      if (label) {
        childNode.push(<div class="k-datepicker-value">{label}</div>)
      } else if (placeholder) {
        childNode.push(<div class="k-datepicker-placeholder">{placeholder}</div>)
      }
    }


    let calendar = []
    if (isRange) {
      currentValue = currentValue || []
      let v1 = currentValue[0] || '', v2 = currentValue[1] || '';
      let leftProps = {
        props: { format, mode, disabledTime, disabledDate, showTime, float: 'left', value: v1 },
        on: {
          input: e => this.updateValue(e)
        }
      }
      let rightProps = {
        props: { format, mode, disabledTime, disabledDate, showTime, float: 'right', value: v2 },
        on: {
          input: e => this.updateValue(e)
        }
      };

      calendar.push(<Calendar {...leftProps} />, <Calendar {...rightProps} />)
    } else {
      const props = {
        props: { format, mode, disabledTime, disabledDate, showTime, value: currentValue },
        on: {
          input: e => {
            this.updateValue(e);
            this.opened = false
          }
        }
      }
      calendar.push(<Calendar {...props} />)
    }
    const props = {
      props: {
        className: ['k-datepicker-dropdown', { 'k-datepicker-range-dropdown': isRange }],
        transfer: transfer,
        selection: this.$el,
        value: this.opened,
        transitionName: 'k-date-picker'
      },
      on: {
        input: e => {
          this.opened = e
          if (!e) {
            this.temp_date_hover = {};
            this.temp_range_one = null
            this.temp_range_left = null
            this.temp_range_right = null
            this.temp_range_showtime = false
          }
        },
        hide: () => {
          this.opened = false
          this.temp_date_hover = {};
          this.temp_range_one = null
          this.temp_range_left = null
          this.temp_range_right = null
          this.temp_range_showtime = false
        },
      }
    }
    let overlay = <Drop {...props}>{calendar}</Drop >

    let showClear = !disabled && clearable && isNotEmpty(label) && label.length > 0
    showClear && childNode.push(<Icon class="k-datepicker-clearable" type="close-circle" onClick={this.clear} />)
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
      { 'k-datepicker-disabled': disabled },
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