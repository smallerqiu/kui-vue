import { h } from 'vue';
import Calendar from './calendar/calendar';
import CalendarRange from './calendar/range';
import TimePanel from './time/panel';
import TimeRange from './time/range';
import DateTime from './datetime/datetime';
import DateTimeRange from './datetime/range';
import { pick } from './util/base';
import { withInstall } from '../utils/vue';
import { keys, resolveProps } from './util/vue';

const formatMap = {
  date: 'YYYY-MM-DD',
  datetime: 'YYYY-MM-DD HH:mm:ss',
  year: 'YYYY',
  month: 'YYYY-MM',
  time: 'HH:mm:ss',
  week: 'w',
};

const booleanKeys = keys([
  'range',
  'open',
  'appendToBody',
  'clearable',
  'confirm',
  'disabled',
  'editable',
  'multiple',
  'partialUpdate',
  'showHour',
  'showMinute',
  'showSecond',
  'showTimeHeader',
  'showTimePanel',
  'showWeekNumber',
  'use12h',
]);

const DatePicker = (originalProps, { slots }) => {
  const type = originalProps.type || 'date';
  const format = originalProps.format || formatMap[type] || formatMap.date;
  const props = { ...resolveProps(originalProps, booleanKeys), type, format };

  return h(Picker, pick(props, Picker.props), {
    content: (slotProps) => {
      if (props.range) {
        const Content =
          type === 'time'
            ? TimeRange
            : type === 'datetime'
            ? DateTimeRange
            : CalendarRange;
        return h(Content, pick({ ...props, ...slotProps }, Content.props));
      } else {
        const Content =
          type === 'time'
            ? TimePanel
            : type === 'datetime'
            ? DateTime
            : Calendar;
        return h(Content, pick({ ...props, ...slotProps }, Content.props));
      }
    },
    'icon-calendar': () => (type === 'time' ? h(IconTime) : h(IconCalendar)),
    ...slots,
  });
};

DatePicker.props = {
  // Vue 3 setup: 手动定义 props 可选；如果你已有类型推导的方案可略
};

export default withInstall(DatePicker);