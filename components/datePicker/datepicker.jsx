import Calendar from './datecalendar'
import transfer from "../_tool/transfer";
import Resize from "../_tool/resize";
import outsideclick from "../_tool/outsiteclick";
import Icon from "../icon";
import { isNotEmpty, getElementPos } from '../_tool/utils'
import moment from 'moment'

export default {
  name: 'DatePicker',
  directives: { transfer, Resize, outsideclick },
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
    mini: Boolean,
    large: Boolean,
    placeholder: [String, Array]
  },
  provide() {
    return {
      DatePicker: this,
    }
  },
  data() {
    return {
      showDropInit: false,
      showDrop: false,
      left: 0,
      top: 0,
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
      this.currentValue = v
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
        let v1 = value[0] || '', v2 = value[1] || ''
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
      this.$emit('input', date)
      this.$emit('change', date)
      this.currentValue = date
      this.showDrop = false
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
        this.$emit("input", []);
        this.$emit("change", []);
      } else {
        this.currentValue = ''
        this.$emit("input", "");
        this.$emit("change", '');
      }
      e.stopPropagation()
    },
    hidedrop(e) {
      if (this.showDropInit && typeof (e.target.className) === 'string') {
        if (!this.$el.contains(e.target) &&
          !this.$refs.dom.contains(e.target) &&
          e.target.className.indexOf('k-calendar-date') < 0 &&
          e.target.className.indexOf('k-calendar-month-select') < 0
        ) {
          this.showDrop = false
          this.temp_date_hover = {};
          this.temp_range_one = null
          this.temp_range_left = null
          this.temp_range_right = null
          this.temp_range_showtime = false
        }
      }
    },
    toggleDrop() {
      if (this.disabled) {
        return false;
      }
      if (!this.showDropInit) {
        this.showDropInit = true
        this.$nextTick(e => this.setShowDrop())
      } else {
        this.setShowDrop()
      }
    },
    setShowDrop() {
      this.showDrop = !this.showDrop;
      this.$nextTick(e => this.setPosition())
    },
    setPosition() {
      let top = 0, left = 0, height = this.$el.offsetHeight, offset = 3;
      // this.selectWidth = this.$el.offsetWidth

      if (this.transfer) {
        let pos = getElementPos(this.$el)
        top = pos.top + height + offset
        left = pos.left + 1
      } else {
        top = height + offset
      }
      if (this.$refs.dom) {
        let clientH = document.body.scrollHeight
        let domH = this.$refs.dom.offsetHeight
        if (clientH - top - height - offset < domH + 5) {
          top = this.transfer ? top - domH - offset : -(domH + 3)
          this.placement = 'top'
        } else {
          this.placement = 'bottom'
        }
      }

      this.top = top
      this.left = left
    },
  },
  render() {
    let { currentValue, placeholder, disabled, clearable, showDrop, mini, label, mode } = this
    let childNode = [], isRange = mode == 'range';

    childNode.push(<Icon type="ios-calendar" class="k-icon-calendar" />)
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

    let drop;
    const dropStyle = {
      left: `${this.left}px`,
      top: `${this.top}px`,
      transformOrigin: this.placement == 'top' ? 'center bottom' : ''
    }
    if (this.showDropInit) {
      let { format, mode, disabledTime, disabledDate, showTime } = this.$props
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
              this.$emit('input', e)
              this.$emit('change', e)
              this.currentValue = e
              this.showDrop = false
            }
          }
        }
        calendar.push(<Calendar {...props} />)
      }
      const dropClass = ['k-datepicker-dropdown', { 'k-datepicker-range-dropdown': isRange }]
      drop = (
        <transition name="dropdown">
          <div class={dropClass} ref="dom" v-show={showDrop} style={dropStyle} v-transfer={transfer} v-resize={this.setPosition}>
            {calendar}
          </div>
        </transition >
      )
    }
    let showClear = !disabled && clearable && isNotEmpty(label)
    showClear && childNode.push(<Icon class="k-datepicker-clearable" type="ios-close-circle" onClick={this.clear} />)
    const selectCls = [
      "k-datepicker-selection", {
        "k-datepicker-has-clear": showClear
      }
    ]
    const classes = ['k-datepicker',
      { 'k-datepicker-open': showDrop },
      { 'k-datepicker-range': isRange },
      { 'k-datepicker-mini': mini },
      { 'k-datepicker-large': this.large && !mini },
      { 'k-datepicker-disabled': disabled },
    ]
    return (
      <div class={classes} v-outsideclick={this.hidedrop}>
        <div class={selectCls} onClick={this.toggleDrop}>
          {childNode}
        </div>
        {drop}
      </div>
    )
  }
}