
import { Button } from '../../button'
import dayjs from 'dayjs'
import {
  ChevronDoubleBack, ChevronBack, ChevronForward,
  ChevronDoubleForward
} from "kui-icons";
import { defineComponent, ref, inject, watch, nextTick, onMounted } from 'vue'
import Time from './time'
import Days from './day'
import Month from './month';
import Year from './year';
import { WeekDay } from './weekday';

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
    const isShowTime = ref(false);
    const withTime = /(t|T)ime/.test(ps.type)
    let rootCls = ['k-calendar', {
      'k-calendar-small': ps.size == 'small',
      'k-calendar-only-year': ps.type == 'year',
      // 'k-calendar-only-time': isTime,
      // 'k-calendar-yearmonth': ps.type == 'month'
    }]
    // const local = dayjs().localeData();
    const showYearAndMonth = () => {
      isShowYear.value = !isShowYear.value
    }
    const currentValue = ref(ps.value || new Date())
    const setDate = (dateType, calcType) => {
      // console.log(dateType, calcType)
      // emit('setDate', dateType, calcType)
      let value = dayjs(currentValue.value)
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
      currentValue.value = value
      // console.log('update', ps.value)
      // emit('update', value)
    }

    const update = (item, type) => {
      if (type == 'date') {
        currentValue.value = item
      } else {
        const value = dayjs(currentValue.value).set(type, item)
        currentValue.value = value
      }
      emit('updateDate', currentValue.value, type)
    }
    onMounted(() => {
      nextTick(() => {
        // update delay for render
        isShowYear.value = ps.type == 'month'
      })
    })
    const switchTime = () => {
      isShowYear.value = false
      isShowTime.value = !isShowTime.value
    }
    // watch(
    //   () => ps.value,
    //   (nv, no) => {
    //     console.log('up')
    //     currentValue.value = nv;
    //   }
    // );
    return () => {
      const date = dayjs(currentValue.value)
      // console.log(date)
      const isCN = dayjs.locale() == 'zh-cn'
      const isMonth = ps.type == 'month'
      // console.log(ps.size, isCN, isMonth)
      return (<div class={rootCls} x-type={ps.type}>
        {ps.type != 'month' && <div class="k-calendar-header">
          {!isMonth ? <Button size={ps.size} icon={ChevronDoubleBack} theme="normal" onClick={() => setDate('y', 'm')}></Button> : null}
          {!isMonth ? <Button size={ps.size} icon={ChevronBack} theme="normal" onClick={() => setDate('m', 'm')}></Button> : null}
          <Button theme="normal" size={ps.size} class="k-calendar-year-select" onClick={showYearAndMonth}>{date.format(isCN ? 'YYYY年M月' : 'MMM YYYY')}</Button>
          {!isMonth ? <Button size={ps.size} icon={ChevronForward} theme="normal" onClick={() => setDate('m', 'p')}></Button> : null}
          {!isMonth ? <Button size={ps.size} icon={ChevronDoubleForward} theme="normal" onClick={() => setDate('y', 'p')}></Button> : null}
        </div>
        }
        {
          isShowTime.value ?
            <Time disabledTime={ps.disabledTime} current={date} value={ps.value} onUpdate={update} /> :
            !isShowYear.value ?
              <div class="k-calendar-body">
                <WeekDay />
                <Days value={ps.value} current={date} disabledTime={ps.disabledTime} onUpdate={update} />
              </div> :
              <div class="k-calendar-yearmonth-picker">
                <Year value={ps.value} current={date.year()} disabledDate={ps.disabledDate} onUpdate={update} />
                <Month value={ps.value} current={date.month()} disabledDate={ps.disabledDate} onUpdate={update} />
              </div>
        }
        {
          withTime &&
          <div class="k-calendar-footer">
            <div role="button" class="k-calendar-switch-date" ><span>{date.format('YYYY-MM-DD')}</span></div>
            <div role="button" class="k-calendar-switch-time" onClick={switchTime}><span>{date.format("HH:mm:ss")}</span></div>
          </div>
        }
      </div>
      )
    }
  }
})