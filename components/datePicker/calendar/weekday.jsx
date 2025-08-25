import dayjs from 'dayjs'
export function WeekDay(props) {
  const local = dayjs().localeData();
  const weekDays = local.weekdaysMin()
  return (<div class="k-calendar-weekdays">
    {
      weekDays.map(d => {
        return <div class="k-calendar-weekday">{d}</div>
      })
    }
  </div>)
}