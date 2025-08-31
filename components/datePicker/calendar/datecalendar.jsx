
import { Button } from '../../button'
import dayjs from 'dayjs'
import {
  ChevronDoubleBack, ChevronBack, ChevronForward,
  ChevronDoubleForward
} from "kui-icons";
import { defineComponent, ref, inject, emits, watch, nextTick, onMounted } from 'vue'
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
        return ["year", "month", "date", 'time', 'dateTime', "dateRange", 'dateTimeRange', 'monthRange'].indexOf(value) >= 0;
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
      // 'k-calendar-only-year': ps.type == 'year',
      // 'k-calendar-only-time': isTime,
      // 'k-calendar-yearmonth': ps.type == 'month'
    }]
    // const local = dayjs().localeData();
    const showYearAndMonth = () => {
      isShowYear.value = !isShowYear.value
      isShowTime.value = false
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
    }

    const updateDate = (item, type) => {
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
        isYear.value = ps.type == 'year'
      })
    })
    const switchTime = () => {
      isShowYear.value = false
      isShowTime.value = !isShowTime.value
    }
    const switchDate = () => {
      isShowYear.value = false
      isShowTime.value = false
    }
    // watch(
    //   () => ps.value,
    //   (nv, no) => {
    //     console.log('up')
    //     currentValue.value = nv;
    //   }
    // );
    const isYear = ref()
    const getChildren = () => {
      const children = []
      const isMonth = ps.type == 'month'
      const isTime = ps.type == 'time'
      // const isYear = ps.type == 'year'
      const date = dayjs(currentValue.value)

      if (!isMonth && !isTime && !isYear.value) {
        const isCN = dayjs.locale() == 'zh-cn'
        children.push(<div class="k-calendar-header">
          <Button size={ps.size} icon={ChevronDoubleBack} theme="normal" onClick={() => setDate('y', 'm')}></Button>
          <Button size={ps.size} icon={ChevronBack} theme="normal" onClick={() => setDate('m', 'm')}></Button>
          <Button size={ps.size} theme="normal" class="k-calendar-year-select" onClick={showYearAndMonth}>{date.format(isCN ? 'YYYY年M月' : 'MMM YYYY')}</Button>
          <Button size={ps.size} icon={ChevronForward} theme="normal" onClick={() => setDate('m', 'p')}></Button>
          <Button size={ps.size} icon={ChevronDoubleForward} theme="normal" onClick={() => setDate('y', 'p')}></Button>
        </div>)
      }
      // time
      if (ps.type == 'time' || isShowTime.value) {
        children.push(<Time disabledTime={ps.disabledTime} current={date} value={ps.value} onSetTime={updateDate} />)
      }
      // days
      //todo:
      if ((ps.type == 'date' || ps.type == 'dateTime'||ps.type=='') && !isShowYear.value && !isShowTime.value) {
        children.push(
          <div class="k-calendar-body">
            <WeekDay />
            <Days value={ps.value} current={date} disabledTime={ps.disabledTime} onSetDay={updateDate} />
          </div>
        )
      }
      // year
      if (isYear.value) {
        children.push(
          <div class="k-calendar-year-picker">
            <Year value={ps.value} current={date.year()} disabledDate={ps.disabledDate} onSetYear={updateDate} />
          </div>
        )
      }
      // year and month
      if (isShowYear.value) {
        children.push(
          <div class="k-calendar-yearmonth-picker">
            <Year value={ps.value} current={date.year()} disabledDate={ps.disabledDate} onSetYear={updateDate} />
            <Month value={ps.value} current={date.month()} disabledDate={ps.disabledDate} onSetMonth={updateDate} />
          </div>
        )
      }

      // footer
      if (withTime && !isTime) {
        children.push(
          <div class="k-calendar-footer">
            <div role="button" class="k-calendar-switch-date" onClick={switchDate}><span>{date.format('YYYY-MM-DD')}</span></div>
            <div role="button" class="k-calendar-switch-time" onClick={switchTime}><span>{date.format("HH:mm:ss")}</span></div>
          </div>
        )
      }
      return children
    }
    return () => {
      // console.log(date)
      // console.log(ps.size, isCN, isMonth)


      return (<div class={rootCls} x-type={ps.type}>
        {getChildren()}
      </div>
      )
    }
  }
})