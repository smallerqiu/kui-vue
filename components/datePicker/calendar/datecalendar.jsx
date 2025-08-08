
import { Button } from '../../button'
import dayjs from 'dayjs'
import zhCN from "../../locale/lang/zh-CN";
import {
  ChevronDoubleBack, ChevronBack, ChevronForward,
  ChevronDoubleForward
} from "kui-icons";
import { defineComponent, ref, inject, watch } from 'vue'
// import Time from './time'
import Days from './day'
import Month from './month';
import Year from './year';

export default defineComponent({
  name: "Calendar",
  props: {
    value: [String, Date, Number, Object],
    disabledDate: { type: Function, default: e => 0 },
    disabledTime: { type: Function, default: e => { } },
    type: {
      type: String, default: 'date', validator(value) {
        return ["year", "month", "date", 'time', 'dateTime', "dateRange", 'dateTimeRange'].indexOf(value) >= 0;
      }
    },
    format: String,
    isRight: Boolean,
    size: String,
  },
  setup(ps, { emit }) {
    const isShowYear = ref(false);
    let rootCls = ['k-calendar', {
      'k-calendar-small': ps.size == 'small',
      'k-calendar-only-year': ps.type == 'year',
      // 'k-calendar-only-time': isTime,
      'k-calendar-yearmonth': ps.type == 'month'
    }]
    const currentValue = ref(dayjs(ps.value))
    const local = dayjs().localeData();
    console.log(local)
    const weekDays = local.weekdaysMin()
    const showYearAndMonth = () => {
      isShowYear.value = !isShowYear.value
    }
    const setDate = (dateType, calcType) => {
      // console.log(dateType, calcType)
      // emit('setDate', dateType, calcType)
      let value = dayjs(ps.value)
      if (dateType == 'm') {
        if (calcType == 'p') {
          value = dayjs(value).add(1, 'month')
        } else {
          value = dayjs(value).subtract(1, 'month')
        }
      } else if (dateType == 'y') {
        if (calcType == 'p') {
          value = dayjs(value).add(1, 'year')
        } else {
          value = dayjs(value).subtract(1, 'year')
        }
      }
      console.log('update', ps.value)
      emit('update', value)
    }
    // watch(
    //   () => ps.value,
    //   (nv, no) => {
    //     console.log('up')
    //     currentValue.value = nv;
    //   }
    // );
    return () => {
      const date = dayjs(ps.value)
      console.log(date)
      const isCN = dayjs.locale() == 'zh-cn'
      return (<div class={rootCls}>
        <div class="k-calendar-header">
          <Button icon={ChevronDoubleBack} theme="normal" onClick={() => setDate('y', 'm')}></Button>
          <Button icon={ChevronBack} theme="normal" onClick={() => setDate('m', 'm')}></Button>
          <Button theme="normal" class="k-calendar-year-select" onClick={showYearAndMonth}>{date.format(isCN ? 'YYYY年M月' : 'MMM YYYY')}</Button>
          <Button icon={ChevronForward} theme="normal" onClick={() => setDate('m', 'p')}></Button>
          <Button icon={ChevronDoubleForward} theme="normal" onClick={() => setDate('y', 'p')}></Button>
        </div>
        <div class="k-calendar-body">
          {!isShowYear.value &&
            [<div class="k-calendar-weekdays">
              {
                weekDays.map(d => {
                  return <div class="k-calendar-weekday">{d}</div>
                })
              }
            </div>,
            <Days value={date} disabledTime={ps.disabledTime} />
            ]}
          {isShowYear.value && <div class="k-calendar-yearmonth-picker">
            <Year value={date} disabledDate={ps.disabledDate} />
            <Month value={date} disabledDate={ps.disabledDate} />
          </div>}
        </div>
      </div>
      )
    }

  }
})