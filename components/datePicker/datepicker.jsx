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
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/en-gb';

dayjs.extend(duration);
dayjs.extend(isBetween);
dayjs.extend(localeData);
dayjs.locale('en-gb');

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
    const localeData = dayjs().localeData();
    try {
      // console.log(localeData.longDateFormat);    // MM/DD/YYYY
      console.log(localeData.longDateFormat('L'));    // MM/DD/YYYY
      console.log(localeData.longDateFormat('LL'));   // MMMM D, YYYY
      console.log(localeData.longDateFormat('LLL'));  // MMMM D, YYYY h:mm A
      console.log(localeData.longDateFormat('LLLL')); // dddd, MMMM D, YYYY h:mm A
    } catch (e) {
      console.log(e)
    }
    const locale = inject("locale", null) || zhCN;
    const currentValue = ref(ps.value ? dayjs(ps.value) : null)
    const v1 = ref()
    const v2 = ref()
    const fmt = {
      'year': 'YYYY',
      'month': 'YYYY-MM',
      'date': localeData.longDateFormat('L'),
      'dateRange': localeData.longDateFormat('L'),
      'time': 'HH:mm:ss',
      'dateTime': localeData.longDateFormat('LL'),
      'dateTimeRange': localeData.longDateFormat('LL')
    }

    const rendered = ref(false);
    const visible = ref(false)
    const refPopper = ref();
    const transOrigin = ref("bottom");
    const refCtx = ref();
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref(ps.placement);


    const isRange = /Range/.test(ps.type)
    const withTime = /(t|T)ime/.test(ps.type)

    onBeforeMount(() => {
      document.removeEventListener("click", outsideClick);
    });
    onMounted(() => {

    })
    watch(
      () => ps.value,
      (nv, no) => {
        if (isRange) {
          currentValue.value = nv;
        } else {
          currentValue.value = nv;
        }
      }
    );
    const clear = (e) => {
      if (isRange) {
        currentValue.value = [];
      } else {
        currentValue.value = null
      }
      emit('update:value', currentValue.value)
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
      if (ps.disabled || visible.value) {
        return false;
      }
      if (!rendered.value) {
        rendered.value = true;
        document.addEventListener("click", outsideClick);
        nextTick(() => {
          visible.value = true;
          updatePosition();
          input.value.focus()
        });
      } else {
        visible.value = show || !visible.value;
        if (visible.value) {
          updatePosition();
          input.value.focus()
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


    const input = ref()
    return () => {
      let calendar = []
      let presetsNode = getPresetsNode()
      if (presetsNode) {
        calendar.push(presetsNode)
      }
      const leftProps = {
        value: currentValue.value,
        type: 'month',
        onUpdateDate: (value, t) => {
          currentValue.value = value
          visible.value = t == 'd' ? false : true
          console.log(ps.value)
          if (ps.value || t == 'd') {
            emit('update:value', value)
            emit('change', value, dayjs(currentValue.value).format(fmt[ps.mode]))
          }
        },
      }
      calendar.push(<Calendar {...leftProps} />)

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
      let childNode = [];
      let dateIcon = ps.dateIcon === undefined ? CalendarOutline : ps.type == 'time' ? TimeOutline : null;

      dateIcon && childNode.push(<Icon type={dateIcon} class="k-icon-calendar" />)
      let placeholder = ps.placeholder
      if (isRange) {
        placeholder = placeholder || []
        if (placeholder && !Array.isArray(placeholder)) {
          console.error('Please set placeholder as array !')
          placeholder = []
        }
        let p1 = placeholder[0] || locale?.k.datePicker.startDate, p2 = placeholder[1] || locale?.k.datePicker.endDate
        // if (l1) {
        //   childNode.push(<div class="k-datepicker-value">{l1}</div>)
        // } else {
        childNode.push(<input class="k-datepicker-input" placeholder={placeholder}>{p1}</input>)
        // }
        childNode.push(<div class="k-datepicker-separator">~</div>)
        // if (l2) {
        //   childNode.push(<div class="k-datepicker-value">{l2}</div>)
        // } else {
        childNode.push(<input class="k-datepicker-input" placeholder={placeholder}>{p2}</input>)
        // }

      } else {
        placeholder = placeholder || locale?.k.datePicker.placeholder
        // if (label) {
        //   childNode.push(<div class="k-datepicker-value">{label}</div>)
        // } else if (placeholder) {
        let value = ps.value ? dayjs(ps.value).format(fmt[ps.mode]) : null
        childNode.push(<input class="k-datepicker-input" value={value} ref={input} placeholder={placeholder}></input>)
        // }

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
      let showClear = !ps.disabled && ps.clearable && currentValue.value
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