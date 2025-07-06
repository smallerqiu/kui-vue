import { defineComponent, ref } from 'vue'
import List from './scrollitem'


import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(localeData);
const localeDataObj = dayjs().localeData();
console.log(localeDataObj);

export default defineComponent({
  props: {
    value: Object,
    disabledTime: Function,
  },
  setup(ps) {
    const getCalendar = ({
      firstDayOfWeek,
      year,
      month,
    }) => {
      const arr = [];
      // change to the last day of the last month
      const calendar = createDate(year, month, 0);
      const lastDayInLastMonth = calendar.getDate();
      // getDay() 0 is Sunday, 1 is Monday
      const firstDayInLastMonth = lastDayInLastMonth - ((calendar.getDay() + 7 - firstDayOfWeek) % 7);
      for (let i = firstDayInLastMonth; i <= lastDayInLastMonth; i++) {
        arr.push(createDate(year, month, i - lastDayInLastMonth));
      }
      // change to the last day of the current month
      calendar.setMonth(month + 1, 0);
      const lastDayInCurrentMonth = calendar.getDate();
      for (let i = 1; i <= lastDayInCurrentMonth; i++) {
        arr.push(createDate(year, month, i));
      }

      const lastMonthLength = lastDayInLastMonth - firstDayInLastMonth + 1;
      const nextMonthLength = 6 * 7 - lastMonthLength - lastDayInCurrentMonth;
      for (let i = 1; i <= nextMonthLength; i++) {
        arr.push(createDate(year, month, lastDayInCurrentMonth + i));
      }
      return arr;
    }

    return () => <List items={getCalendar(ps)} />
  }
})
