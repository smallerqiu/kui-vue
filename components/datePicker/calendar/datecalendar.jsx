
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
    date: Object,
    h2: Object,
    size: String,
    opened: Boolean,
  },
  setup(ps, { emit }) {
    let rootCls = ['k-calendar', {
      'k-calendar-small': ps.size == 'small',
      'k-calendar-only-year': ps.type == 'year',
      // 'k-calendar-only-time': isTime,
      'k-calendar-yearmonth': ps.type == 'month'
    }]
    const local = dayjs().localeData();
    // console.log(local)
    const weekDays = local.weekdaysMin()
    return () => {
      const date = dayjs(ps.value)
      return (<div class={rootCls}>
        <div class="k-calendar-header">
          <Button icon={ChevronDoubleBack} theme="normal"></Button>
          <Button icon={ChevronBack} theme="normal"></Button>
          <Button theme="normal" class="k-calendar-year-select">2012-12</Button>
          <Button icon={ChevronForward} theme="normal"></Button>
          <Button icon={ChevronDoubleForward} theme="normal"></Button>
        </div>
        <div class="k-calendar-body">
          <div class="k-calendar-weekdays">
            {
              weekDays.map(d => {
                return <div class="k-calendar-weekday">{d}</div>
              })
            }
          </div>
          <Days />
        </div>
      </div>
      )
    }

  }
})