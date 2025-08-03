
import { Button } from '../../button'
import dayjs from 'dayjs'
import zhCN from "../../locale/lang/zh-CN";
import {
  ChevronDoubleBack, ChevronBack, ChevronForward,
  ChevronDoubleForward
} from "kui-icons";
import { defineComponent, ref, inject } from 'vue'
// import Time from './time'
import Days from './day'
import localeData from 'dayjs/plugin/localeData';
import Month from './month';
import Year from './year';
dayjs.extend(localeData);

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
    const local = dayjs().localeData();
    // console.log(dayjs.locale())
    const weekDays = local.weekdaysMin()
    const showYearAndMonth = () => {
      isShowYear.value = !isShowYear.value
    }
    return () => {
      const date = dayjs(ps.value)
      const isCN = dayjs.locale() == 'zh-cn'
      return (<div class={rootCls}>
        <div class="k-calendar-header">
          <Button icon={ChevronDoubleBack} theme="normal"></Button>
          <Button icon={ChevronBack} theme="normal"></Button>
          <Button theme="normal" class="k-calendar-year-select" onClick={showYearAndMonth}>{date.format(isCN ? 'YYYY年M月' : 'MMM YYYY')}</Button>
          <Button icon={ChevronForward} theme="normal"></Button>
          <Button icon={ChevronDoubleForward} theme="normal"></Button>
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
              <Days value={ps.value} disabledTime={ps.disabledTime} />
            ]}
          {isShowYear.value && <div class="k-calendar-yearmonth-picker">
            <Year value={ps.value} disabledDate={ps.disabledDate} />
            <Month value={ps.value} disabledDate={ps.disabledDate} />
          </div>}
        </div>
      </div>
      )
    }

  }
})