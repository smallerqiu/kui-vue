/* istanbul ignore file */
import DatePicker from './DatePicker';
import Calendar from './calendar/calendar';
import CalendarRange from './calendar/range';
import TimePanel from './time/panel';
import TimeRange from './time/range';
import DateTime from './datetime/datetime';
import DateTimeRange from './datetime/range';
import { locale } from './locale';

const api = {
  locale,
  install(app) {
    app.component('DatePicker', DatePicker);
  },
};

export default Object.assign(DatePicker, api, {
  Calendar,
  CalendarRange,
  TimePanel,
  TimeRange,
  DateTime,
  DateTimeRange,
});