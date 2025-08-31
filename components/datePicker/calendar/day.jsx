import { defineComponent } from 'vue'
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
dayjs.extend(localeData);

export default defineComponent({
  props: {
    value: Object,
    current: Object,
    disabledTime: Function,
  },
  emits: ['setDay'],
  setup(ps, { emit }) {

    const getCalendar = ({ firstDayOfWeek, year, month }) => {
      const result = [];
      // first day of this month
      const firstOfMonth = dayjs([year, month, 1]);
      // last day of this month
      // const lastOfMonth = firstOfMonth.endOf("month");
      let start = firstOfMonth;
      const diff = (firstOfMonth.day() - firstDayOfWeek + 7) % 7;
      if (diff > 0) {
        start = firstOfMonth.subtract(diff, "day");
      }
      const totalDays = 6 * 7;
      const days = []
      for (let i = 0; i < totalDays; i++) {
        const day = start.add(i, "day");
        days.push(day);
      }
      let i = 0
      while (i < totalDays) {
        result.push(days.slice(i, (i += 7)));
      }
      return result;
    }
    const local = dayjs().localeData();
    const today = new Date();
    const getDayClass = (date) => {
      const now = dayjs(ps.current);

      return [
        'k-calendar-day-item', {
          'k-calendar-day-this': date.isSame(today, 'day'),
          'k-calendar-day-selected': date.isSame(ps.value, 'day') && date.isSame(ps.value, 'month') && date.isSame(ps.value, 'year'),
          'k-calendar-day-out': !date.isSame(now, 'month') || !date.isSame(now, 'year'),
          // 'k-calendar-day-disabled': # todo
        }
      ]
    };
    const setDay = cell => {
      emit('setDay', cell, 'date')
    }
    return () => {
      const dayInfo = {
        firstDayOfWeek: local.firstDayOfWeek(),
        year: dayjs(ps.current).year(),
        month: dayjs(ps.current).month() + 1
      }
      const dates = getCalendar(dayInfo)

      return dates.map((row, i) => {
        return <div class="k-calendar-week-item" key={i}>
          {
            row.map((cell, index) => {
              return <span class={getDayClass(cell)} key={index} onClick={() => setDay(cell)}>{cell.date()}</span>
            })
          }
        </div>
      })
    }
  }
})
