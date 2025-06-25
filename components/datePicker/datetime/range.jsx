import { ref, watchEffect } from 'vue';
import { datetimeBaseProps } from './datetime';
import TimeRange, { timeRangeProps } from '../time/range';
import CalendarRange, { calendarRangeProps } from '../calendar/range';
import { usePrefixClass } from '../context';
import { pick } from '../util/base';
import { assignTime, isValidRangeDate, startOfDay } from '../util/date';
import { withDefault, defineVueComponent } from '../util/vue';
import { useTimePanelVisible } from './visible';

function DateTimeRange(originalProps) {
  const props = withDefault(originalProps, {
    defaultValue: startOfDay(new Date()),
    disabledTime: () => false,
  });

  const currentValue = ref(props.value);

  watchEffect(() => {
    currentValue.value = props.value;
  });

  const { openTimePanel, closeTimePanel, timeVisible } = useTimePanelVisible(props);

  const handleSelect = (dates, type) => {
    if (type === 'date') {
      openTimePanel();
    }

    const defaultValues = Array.isArray(props.defaultValue)
      ? props.defaultValue
      : [props.defaultValue, props.defaultValue];

    let datetimes = dates.map((date, i) => {
      const time = isValidRangeDate(props.value) ? props.value[i] : defaultValues[i];
      return assignTime(date, time);
    });

    if (datetimes[1].getTime() < datetimes[0].getTime()) {
      datetimes = [datetimes[0], datetimes[0]];
    }

    if (datetimes.some(props.disabledTime)) {
      datetimes = dates.map((date, i) => assignTime(date, defaultValues[i]));
      if (datetimes.some(props.disabledTime)) {
        currentValue.value = datetimes;
        return;
      }
    }

    props['onUpdate:value']?.(datetimes, type);
  };

  return () => {
    const prefixClass = usePrefixClass();

    const calendarProp = {
      ...pick(props, calendarRangeProps),
      type: 'date',
      value: currentValue.value,
      ['onUpdate:value']: handleSelect,
    };

    const timeProps = {
      ...pick(props, timeRangeProps),
      showTimeHeader: true,
      value: currentValue.value,
      ['onUpdate:value']: props['onUpdate:value'],
      onClickTitle: closeTimePanel,
    };

    return (
      <div class={`${prefixClass}-date-time-range`}>
        <CalendarRange {...calendarProp} />
        {timeVisible.value && <TimeRange {...timeProps} />}
      </div>
    );
  };
}

export const datetimeRangeProps = [
  ...datetimeBaseProps,
  ...timeRangeProps,
  ...calendarRangeProps,
];

export default defineVueComponent(DateTimeRange, datetimeRangeProps);