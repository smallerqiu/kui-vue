import { computed, ref, watchEffect } from 'vue';
import { usePrefixClass } from '../context';
import {
  diffCalendarMonths,
  isValidDate,
  isValidRangeDate,
  setMonth,
  startOfDay,
} from '../util/date';
import Calendar, { calendarProps } from './calendar';
import { defineVueComponent, withDefault } from '../util/vue';

const inRange = (date, range) => {
  const value = date.getTime();
  let [min, max] = range.map((v) => v.getTime());
  if (min > max) {
    [min, max] = [max, min];
  }
  return value > min && value < max;
};

function CalendarRange(originalProps) {
  const props = withDefault(originalProps, {
    defaultValue: new Date(),
    type: 'date',
  });

  const prefixClass = usePrefixClass();

  const defaultValues = computed(() => {
    let values = Array.isArray(props.defaultValue)
      ? props.defaultValue
      : [props.defaultValue, props.defaultValue];
    values = values.map((v) => startOfDay(v));
    if (isValidRangeDate(values)) {
      return values;
    }
    return [new Date(), new Date()].map((v) => startOfDay(v));
  });

  const innerValue = ref([new Date(NaN), new Date(NaN)]);
  watchEffect(() => {
    if (isValidRangeDate(props.value)) {
      innerValue.value = props.value;
    }
  });

  const handlePick = (date, type) => {
    const [startValue, endValue] = innerValue.value;
    if (isValidDate(startValue) && !isValidDate(endValue)) {
      if (startValue.getTime() > date.getTime()) {
        innerValue.value = [date, startValue];
      } else {
        innerValue.value = [startValue, date];
      }
      props['onUpdate:value']?.(innerValue.value, type);
    } else {
      innerValue.value = [date, new Date(NaN)];
    }
  };

  const defaultCalendars = ref([new Date(), new Date()]);
  const calendars = computed(() => {
    return isValidRangeDate(props.calendar) ? props.calendar : defaultCalendars.value;
  });

  const calendarMinDiff = computed(() => {
    if (props.type === 'year') return 10 * 12;
    if (props.type === 'month') return 1 * 12;
    return 1;
  });

  const updateCalendars = (dates, index) => {
    const diff = diffCalendarMonths(dates[0], dates[1]);
    const gap = calendarMinDiff.value - diff;
    if (gap > 0) {
      const anotherIndex = index === 1 ? 0 : 1;
      dates[anotherIndex] = setMonth(
        dates[anotherIndex],
        (v) => v + (anotherIndex === 0 ? -gap : gap)
      );
    }
    defaultCalendars.value = dates;
    props.onCalendarChange?.(dates, index);
  };

  const updateCalendarStart = (date) => {
    updateCalendars([date, calendars.value[1]], 0);
  };

  const updateCalendarEnd = (date) => {
    updateCalendars([calendars.value[0], date], 1);
  };

  watchEffect(() => {
    const dates = isValidRangeDate(props.value) ? props.value : defaultValues.value;
    updateCalendars(dates.slice(0, 2));
  });

  const hoveredValue = ref(null);
  const handleMouseEnter = (v) => (hoveredValue.value = v);
  const handleMouseLeave = () => (hoveredValue.value = null);

  const getRangeClasses = (cellDate, currentDates, classnames) => {
    const outerClasses = props.getClasses
      ? props.getClasses(cellDate, currentDates, classnames)
      : [];
    const classes = Array.isArray(outerClasses) ? outerClasses : [outerClasses];
    if (/disabled|active/.test(classnames)) return classes;
    if (currentDates.length === 2 && inRange(cellDate, currentDates)) {
      classes.push('in-range');
    }
    if (
      currentDates.length === 1 &&
      hoveredValue.value &&
      inRange(cellDate, [currentDates[0], hoveredValue.value])
    ) {
      return classes.concat('hover-in-range');
    }
    return classes;
  };

  return () => {
    const calendarRange = calendars.value.map((calendar, index) => {
      const calendarProps = {
        ...props,
        calendar,
        value: innerValue.value,
        defaultValue: defaultValues.value[index],
        getClasses: getRangeClasses,
        partialUpdate: false,
        multiple: false,
        ['onUpdate:value']: handlePick,
        onCalendarChange: index === 0 ? updateCalendarStart : updateCalendarEnd,
        onDateMouseLeave: handleMouseLeave,
        onDateMouseEnter: handleMouseEnter,
      };
      return <Calendar {...calendarProps}></Calendar>;
    });

    return <div class={`${prefixClass}-calendar-range`}>{calendarRange}</div>;
  };
}

export const calendarRangeProps = calendarProps;

export default defineVueComponent(CalendarRange, calendarRangeProps);