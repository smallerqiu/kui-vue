import { computed, ref, watchEffect } from 'vue';
import {
  getValidDate,
  isValidDate,
  setMonth,
  setYear,
  startOfDay,
  startOfMonth,
  startOfYear,
} from '../util/date';
import { TableDate } from './date';
import { TableMonth } from './month';
import { TableYear } from './year';
import { defineVueComponent, keys, withDefault } from '../util/vue';

function Calendar(originalProps) {
  const props = withDefault(originalProps, {
    defaultValue: startOfDay(new Date()),
    type: 'date',
    disabledDate: () => false,
    getClasses: () => [],
    titleFormat: 'YYYY-MM-DD',
  });

  const innerValue = computed(() => {
    const value = Array.isArray(props.value) ? props.value : [props.value];
    return value.filter(isValidDate).map((v) => {
      if (props.type === 'year') return startOfYear(v);
      if (props.type === 'month') return startOfMonth(v);
      return startOfDay(v);
    });
  });

  const innerCalendar = ref(new Date());
  watchEffect(() => {
    let calendarDate = props.calendar;
    if (!isValidDate(calendarDate)) {
      const { length } = innerValue.value;
      calendarDate = getValidDate(length > 0 ? innerValue.value[length - 1] : props.defaultValue);
    }
    innerCalendar.value = startOfMonth(calendarDate);
  });

  const handleCalendarChange = (calendar) => {
    innerCalendar.value = calendar;
    props.onCalendarChange?.(calendar);
  };

  const panel = ref('date');
  watchEffect(() => {
    const panels = ['date', 'month', 'year'];
    const index = Math.max(panels.indexOf(props.type), panels.indexOf(props.defaultPanel));
    panel.value = index !== -1 ? panels[index] : 'date';
  });

  const handelPanelChange = (value) => {
    const oldPanel = panel.value;
    panel.value = value;
    props.onPanelChange?.(value, oldPanel);
  };

  const isDisabled = (date) => {
    return props.disabledDate(new Date(date), innerValue.value);
  };

  const emitDate = (date, type) => {
    if (!isDisabled(date)) {
      props.onPick?.(date);
      if (props.multiple === true) {
        const nextDates = innerValue.value.filter((v) => v.getTime() !== date.getTime());
        if (nextDates.length === innerValue.value.length) {
          nextDates.push(date);
        }
        props['onUpdate:value']?.(nextDates, type);
      } else {
        props['onUpdate:value']?.(date, type);
      }
    }
  };

  const handleSelectDate = (date) => {
    emitDate(date, props.type === 'week' ? 'week' : 'date');
  };

  const handleSelectYear = (date) => {
    if (props.type === 'year') {
      emitDate(date, 'year');
    } else {
      handleCalendarChange(date);
      handelPanelChange('month');
      if (props.partialUpdate && innerValue.value.length === 1) {
        const value = setYear(innerValue.value[0], date.getFullYear());
        emitDate(value, 'year');
      }
    }
  };

  const handleSelectMonth = (date) => {
    if (props.type === 'month') {
      emitDate(date, 'month');
    } else {
      handleCalendarChange(date);
      handelPanelChange('date');
      if (props.partialUpdate && innerValue.value.length === 1) {
        const value = setMonth(setYear(innerValue.value[0], date.getFullYear()), date.getMonth());
        emitDate(value, 'month');
      }
    }
  };

  const getCellClasses = (cellDate, classes = []) => {
    if (isDisabled(cellDate)) {
      classes.push('disabled');
    } else if (innerValue.value.some((v) => v.getTime() === cellDate.getTime())) {
      classes.push('active');
    }
    return classes.concat(props.getClasses(cellDate, innerValue.value, classes.join(' ')));
  };

  const getDateClasses = (cellDate) => {
    const notCurrentMonth = cellDate.getMonth() !== innerCalendar.value.getMonth();
    const classes = [];
    if (cellDate.getTime() === new Date().setHours(0, 0, 0, 0)) {
      classes.push('today');
    }
    if (notCurrentMonth) {
      classes.push('not-current-month');
    }
    return getCellClasses(cellDate, classes);
  };

  const getMonthClasses = (cellDate) => {
    if (props.type !== 'month') {
      return innerCalendar.value.getMonth() === cellDate.getMonth() ? 'active' : '';
    }
    return getCellClasses(cellDate);
  };

  const getYearClasses = (cellDate) => {
    if (props.type !== 'year') {
      return innerCalendar.value.getFullYear() === cellDate.getFullYear() ? 'active' : '';
    }
    return getCellClasses(cellDate);
  };

  const getWeekActive = (row) => {
    if (props.type !== 'week') return false;
    const start = row[0].getTime();
    const end = row[6].getTime();
    return innerValue.value.some((v) => {
      const time = v.getTime();
      return time >= start && time <= end;
    });
  };

  return () => {
    if (panel.value === 'year') {
      return (
        <TableYear
          calendar={innerCalendar.value}
          getCellClasses={getYearClasses}
          getYearPanel={props.getYearPanel}
          onSelect={handleSelectYear}
          onUpdateCalendar={handleCalendarChange}
        />
      );
    }
    if (panel.value === 'month') {
      return (
        <TableMonth
          calendar={innerCalendar.value}
          getCellClasses={getMonthClasses}
          onSelect={handleSelectMonth}
          onUpdatePanel={handelPanelChange}
          onUpdateCalendar={handleCalendarChange}
        />
      );
    }
    return (
      <TableDate
        isWeekMode={props.type === 'week'}
        showWeekNumber={props.showWeekNumber}
        titleFormat={props.titleFormat}
        calendar={innerCalendar.value}
        getCellClasses={getDateClasses}
        getWeekActive={getWeekActive}
        onSelect={handleSelectDate}
        onUpdatePanel={handelPanelChange}
        onUpdateCalendar={handleCalendarChange}
        onDateMouseEnter={props.onDateMouseEnter}
        onDateMouseLeave={props.onDateMouseLeave}
      />
    );
  };
}

export const calendarProps = keys([
  'type',
  'value',
  'defaultValue',
  'defaultPanel',
  'disabledDate',
  'getClasses',
  'calendar',
  'multiple',
  'partialUpdate',
  'showWeekNumber',
  'titleFormat',
  'getYearPanel',
  'onDateMouseEnter',
  'onDateMouseLeave',
  'onCalendarChange',
  'onPanelChange',
  'onUpdate:value',
  'onPick',
]);

export default defineVueComponent(Calendar, calendarProps);