import { defineComponent } from 'vue'
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
dayjs.extend(localeData);

export default defineComponent({
  props: {
    value: Object,
    disabledTime: Function,
  },
  setup(ps) {

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
    return () => {
      const dayInfo = {
        firstDayOfWeek: local.firstDayOfWeek(),
        year: dayjs(ps.value).year(),
        month: dayjs(ps.value).month() + 1
      }
      const dates = getCalendar(dayInfo)
      return dates.map((row, i) => {
        return <div class="k-calendar-week-item" key={i}>
          {
            row.map((cell, index) => {
              return <span class="k-calendar-day-item" key={index}>{cell.date()}</span>
            })
          }
        </div>
      })
    }
  }
})
