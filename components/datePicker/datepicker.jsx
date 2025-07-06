import Calendar from './calendar/datecalendar'
import Icon from "../icon";
import dayjs from 'dayjs'
import transfer from "../directives/transfer";
import { setPlacement } from "../utils/placement";
import { CloseCircle, CalendarOutline, TimeOutline } from 'kui-icons'
import { defineComponent, watch, onBeforeMount, nextTick, Transition, onMounted, ref, inject } from 'vue'
import zhCN from "../locale/lang/zh-CN";
const duration = require('dayjs/plugin/duration');
const isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(duration);
dayjs.extend(isBetween);

export default defineComponent({
  name: 'DatePicker',
  directives: {
    transfer,
  },
  props: {
    value: [String, Date, Number, Array, Object],
    mode: {
      type: String, default: 'date', validator(value) {
        return ["year", "month", "date", 'time', 'dateTime', "dateRange", 'dateTimeRange'].indexOf(value) >= 0;
      }
    },
    disabled: Boolean,
    disabledDate: { type: Function, default: e => { } },
    disabledTime: { type: Function, default: e => { } },
    format: String,
    clearable: { type: Boolean, default: true },
    bordered: { type: Boolean, default: true },
    pickerSize: String,
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].includes(value);
      }
    },
    theme: String,
    shape: String,
    placeholder: [String, Array],
    dateIcon: [String, Array],
    presets: Array,
    placement: {
      validator(value) {
        return ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-bottom", "left-top", "right", "right-top", "right-bottom"].includes(value);
      },
      default: "bottom-left",
    },
  },
  setup(ps, { slots, emit }) {
    const locale = inject("locale", null) || zhCN;



    const currentValue = ref(ps.value)
    const v1 = ref(null)
    const v2 = ref(null)
    const d1 = ref(null)
    const d2 = ref(null)
    const h2 = ref(null)
    const fmt = {
      'year': 'YYYY',
      'month': 'YYYY-MM',
      'date': 'YYYY-MM-DD',
      'dateRange': 'YYYY-MM-DD',
      'time': 'HH:mm:ss',
      'dateTime': 'YYYY-MM-DD HH:mm:ss',
      'dateTimeRange': 'YYYY-MM-DD HH:mm:ss'
    }

    const rendered = ref(false);
    const visible = ref(false)
    const refPopper = ref(null);
    const transOrigin = ref("bottom");
    const refCtx = ref(null);
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref(ps.placement);


    const isRange = ps.type === 'dateRange' || ps.type === 'dateTimeRange' || ps.type === 'timeRange'
    const withTime = ps.type === 'time' || ps.type === 'dateTimeRange' || ps.type === 'timeRange'

    onBeforeMount(() => {
      document.removeEventListener("click", outsideClick);
    });
    onMounted(() => {
      updateCalendDate()
    })
    const updateCalendDate = () => {
      if (isRange) {
        let [a, b] = currentValue.value || []
        // if (!v1.value && a) {
        //   v1.value = dayjs(a)
        // }
        // if (!v2.value && b) {
        //   v2.value = dayjs(b)
        // }
        d1.value = a ? dayjs(a) : dayjs()
        d2.value = b ? dayjs(b) : dayjs().add(1, 'month')

        const oneMonth = dayjs.duration(1, 'month').asDays();
        const diff = d2.value.diff(d1.value, 'day');
        if (diff < oneMonth) {
          d2.value = dayjs(d1.value).add(1, 'month')
        }
        if (!v1.value && a) {
          v1.value = dayjs(a)
        }
        if (!v2.value && b) {
          v2.value = dayjs(b)
        }

      } else {
        d1.value = currentValue.value ? dayjs(currentValue.value) : dayjs()
        if (!v1.value && currentValue.value) {
          v1.value = dayjs(currentValue.value)
        }
      }
    }
    const clear = (e) => {
      let v = null;
      if (!isRange) {
        currentValue.value = null
        v = ''
        v1.value = null
      } else {
        currentValue.value = []
        v = []
        v1.value = null
        v2.value = null
      }
      updateCalendDate()

      emit("input", v);
      emit("change", v, v);
      e && e.stopPropagation()
    }
    const outsideClick = (e) => {
      const ctx = refCtx.value?.$el || refCtx.value;
      if (
        refPopper.value &&
        !refPopper.value.contains(e.target) &&
        ctx &&
        !ctx.contains(e.target)
      ) {
        visible.value = false;
      }
    };
    const updatePosition = () => {
      nextTick(() => {
        setPlacement(
          refCtx,
          refPopper,
          currentPlacement,
          transOrigin,
          top,
          left,
          3
        );
      });
    };
    const toggle = (show = false) => {
      if (ps.disabled) {
        return false;
      }
      if (!rendered.value) {
        rendered.value = true;
        document.addEventListener("click", outsideClick);
        nextTick(() => {
          visible.value = true;
          updatePosition();
        });
      } else {
        visible.value = show || !visible.value;
        if (visible.value) {
          updatePosition();
        }
      }
    }
    const picker1Update = (value, type) => {
      // let { v1, v2, withTime, format, fmt, mode, isRange } = this
      if (isRange) {
        if (!type) { //day
          let result = dayjs(value)
          if (!v1.value) {
            v1.value = result
            currentValue.value = [dayjs(value), v2.value]
          } else if (v1.value && !v2.value) {
            v2.value = result
            currentValue.value = [v1.value, v2.value]
            if (!withTime) {
              visible.value = false
            }
          } else if (v1.value && v2.value) {
            v1.value = result
            v2.value = null
            currentValue.value = [dayjs(value), null]
          }
          updateStr()

        } else {
          let _v1 = (v1.value || dayjs(d1.value))[type](value)
          v1.value = _v1
          if (v2.value) {
            const oneMonth = dayjs.duration(1, 'month').asDays();
            const diff = _v1.diff(v2, 'day');
            // console.log(oneMonth, diff)
            if (diff > oneMonth) {
              v2.value = dayjs(_v1).add(1, 'month')
            }
            // v2.value = v2.value
          }
          currentValue.value = [_v1, v2.value]
          updateStr()
        }
      } else {
        let result = !type ? dayjs(value) : (v1.value || dayjs())[type](value)
        v1.value = dayjs(result)
        currentValue.value = dayjs(result)
        updateStr()
      }
    }
    const picker2Update = (value, type) => {
      let { v1, v2, withTime, format, fmt, mode } = this
      if (!type) { //day
        let result = dayjs(value)
        if (!v1) {
          v1.value = result
          currentValue.value = [dayjs(value), v2]
        } else if (v1 && !v2) {
          v2.value = result
          currentValue.value = [v1, v2.value]
          if (!withTime) {
            visible.value = false
          }
        } else if (v1 && v2) {
          v1.value = result
          v2.value = null
          currentValue.value = [dayjs(value), null]
        }
        updateStr()
      } else {
        let _v2 = (v2 || dayjs(d2.value))[type](value)
        v2.value = _v2
        if (v1) {
          // const oneMonth = dayjs.duration(1, 'month').asDays();
          const diff = _v2.diff(v1, 'day');
          // console.log(oneMonth, diff)
          if (diff < 0) {
            v1 = dayjs(_v2).subtract(1, 'month')
          }
          v1.value = v1
        }
        currentValue.value = [v1, _v2]
        updateStr()
      }
    }
    const updateStr = () => {
      let ft = format || fmt[type]
      let dateStr = isRange ? [v1.value ? v1.value.format(ft) : null, v2.value ? v2.value.format(ft) : null] : v1.format(ft)
      emit('input', dateStr)
      emit('change', currentValue.value, dateStr)
      updateCalendDate()
    }
    const validValue = e => {
      // 只有一个值的时候, 直接置空
      if (isRange) {
        let [a, b] = currentValue.value || []
        if ((a && !b) || (!a && b)) {
          clear(e)
        }
      }
    }
    const getPresetsNode = () => {
      let { presets } = ps
      if (presets && presets.length > 1) {
        let children = []
        for (let i = 0; i < presets.length; i++) {
          children.push(<Button theme="normal" size="small" onClick={() => setPreset(presets[i])}>{presets[i].label}</Button>)
        }
        return <div class="k-date-picker-presets">{children}</div>
      }
      return null
    }
    const setPreset = ({ value }) => {
      let ft = ps.format || fmt[ps.type]
      if (isRange) {
        let [a, b] = value || []
        if (a && b) {
          v1.value = dayjs(a)
          v2.value = dayjs(b)
          currentValue.value = [dayjs(a), dayjs(b)]
          let dateStr = [dayjs(a).format(ft), dayjs(b).format(ft)]
          emit('input', dateStr)
          emit('change', currentValue.value, dateStr)
        }
      } else {
        v1.value = dayjs(value)
        currentValue.value = dayjs(value)
        let dateStr = v1.value.format(ft)
        emit('input', dateStr)
        emit('change', currentValue.value, dateStr)
      }
      visible.value = false
    }
    const getLabel = () => {
      let ft = ps.format || fmt[ps.mode]
      if (isRange) {
        let [v1, v2] = currentValue.value || []
        return [v1 ? dayjs(v1).format(ft) : null, v2 ? dayjs(v2).format(ft) : null]
      } else {
        return currentValue.value ? dayjs(currentValue.value).format(ft) : null
      }
    }
    let childNode = [];
    let dateIcon = ps.dateIcon === undefined ? CalendarOutline : ps.type == 'time' ? TimeOutline : null;

    dateIcon && childNode.push(<Icon type={dateIcon} class="k-icon-calendar" />)
    let dv1, dv2;
    let placeholder = ps.placeholder
    const label = getLabel();
    if (isRange) {
      placeholder = placeholder || []
      if (placeholder && !Array.isArray(placeholder)) {
        console.error('Please set placeholder as array !')
        placeholder = []
      }
      let p1 = placeholder[0] || locale?.k.datePicker.startDate, p2 = placeholder[1] || locale?.k.datePicker.endDate
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
      let [a, b] = currentValue.value || []
      dv1 = a
      dv2 = b
    } else {
      placeholder = placeholder || locale?.k.datePicker.placeholder
      if (label) {
        childNode.push(<div class="k-datepicker-value">{label}</div>)
      } else if (placeholder) {
        childNode.push(<div class="k-datepicker-placeholder">{placeholder}</div>)
      }

      dv1 = currentValue.value
    }

    // console.log(dv1, dv2)

    let calendar = []
    let presetsNode = getPresetsNode()
    if (presetsNode) {
      calendar.push(presetsNode)
    }
    const leftProps = {
      // props: {
      //   format: ps.format,
      //   type: ps.type,
      //   visible,
      //   disabledTime,
      //   disabledDate,
      //   value: dv1,
      //   date: d1,
      //   v1,
      //   v2,
      //   h2,
      //   pickerSize: pickerSize || size
      // },
      on: {
        input: (e, f) => picker1Update(e, f),
        close: (v) => {
          if (v) {
            visible.value = false
          }
        },
        hd: (v) => {
          h2.value = v
        },
        np: (v) => {
          d1.value = v
          if (isRange && (d1.value.isSame(d2.value, 'month') || d1.value.isAfter(d2, 'month'))) {
            d2.value = v.add(1, 'month')
          }
        }
      }
    }
    calendar.push(<Calendar {...leftProps} />)

    if (isRange) {
      let rightProps = {
        // props: { format, visible, mode, disabledTime, disabledDate, isRight: true, value: dv2, date: d2, v1, v2, h2, pickerSize },
        on: {
          input: (e, f) => picker2Update(e, f),
          close: (v, e) => {
            if (v) {
              visible.value = false
              validValue(e)
            }
          },
          hd: (v) => {
            h2.value = v
          },
          np: (v) => {
            d2.value = v
            if (d2.value.isSame(d1.value, 'month') || d2.value.isBefore(d1, 'month')) {
              d1.value = v.subtract(1, 'month')
            }
          }
        }
      };
      calendar.push(<Calendar {...rightProps} />)
    }

    return () => {
      let overlay = null;
      if (rendered.value) {
        let props = {
          ref: refPopper,
          style: {
            left: `${left.value}px`,
            top: `${top.value}px`,
            transformOrigin: transOrigin.value,
          },
          class: ['k-datepicker-dropdown', { 'k-datepicker-range-dropdown': isRange }]
        }
        overlay = <Transition name='k-date-picker'>
          <div v-show={visible.value} {...props} v-transfer={true}>
            {...calendar}
          </div>
        </Transition>
      }
      const classes = ['k-datepicker',
        { 'k-datepicker-open': visible.value },
        { 'k-datepicker-range': isRange },
        { 'k-datepicker-borderless': ps.bordered === false },
        { 'k-datepicker-sm': ps.size == 'small' },
        { 'k-datepicker-lg': ps.size == 'large' },
        { 'k-datepicker-with-time': withTime },
        { 'k-datepicker-disabled': ps.disabled },
        { 'k-datepicker-light': ps.theme == 'light' },
        { 'k-datepicker-circle': ps.shape == 'circle' },
      ]
      let showClear = !ps.disabled && ps.clearable && ((isRange && v1 && v2) || (!isRange && v1))
      showClear && childNode.push(<Icon class="k-datepicker-clearable" type={CloseCircle} onClick={clear} />)
      const selectCls = [
        "k-datepicker-selection", {
          "k-datepicker-has-clear": showClear
        }
      ]

      return (<div tabIndex="0" class={classes} ref={refCtx}>
        <div class={selectCls} onClick={toggle}>
          {childNode}
        </div>
        {overlay}
      </div>
      )
    }
  }
})