import { ref, watchEffect } from 'vue';
import Calendar, { calendarProps } from '../calendar/calendar';
import TimePanel, { timePanelProps } from '../time/panel';
import { usePrefixClass } from '../context';
import { pick } from '../util/base';
import { assignTime, getValidDate, startOfDay } from '../util/date';
import { keys, withDefault, defineVueComponent } from '../util/vue';
import { useTimePanelVisible } from './visible';

function DateTime(originalProps) {
  const props = withDefault(originalProps, {
    disabledTime: () => false,
    defaultValue: startOfDay(new Date()),
  });

  const currentValue = ref(props.value);

  watchEffect(() => {
    currentValue.value = props.value;
  });

  const { openTimePanel, closeTimePanel, timeVisible } = useTimePanelVisible(props);

  const handleSelect = (date, type) => {
    if (type === 'date') {
      openTimePanel();
    }
    let datetime = assignTime(date, getValidDate(props.value, props.defaultValue));
    if (props.disabledTime(new Date(datetime))) {
      datetime = assignTime(date, props.defaultValue);
      if (props.disabledTime(new Date(datetime))) {
        currentValue.value = datetime;
        return;
      }
    }
    props['onUpdate:value']?.(datetime, type);
  };

  return () => {
    const prefixClass = usePrefixClass();

    const calendarProp = {
      ...pick(props, calendarProps),
      multiple: false,
      type: 'date',
      value: currentValue.value,
      ['onUpdate:value']: handleSelect,
    };

    const timeProps = {
      ...pick(props, timePanelProps),
      showTimeHeader: true,
      value: currentValue.value,
      ['onUpdate:value']: props['onUpdate:value'],
      onClickTitle: closeTimePanel,
    };

    return (
      <div class={`${prefixClass}-date-time`}>
        <Calendar {...calendarProp} />
        {timeVisible.value && <TimePanel {...timeProps} />}
      </div>
    );
  };
}

export const datetimeBaseProps = keys([
  'showTimePanel',
  'onShowTimePanelChange',
]);

export const datetimeProps = [
  ...datetimeBaseProps,
  ...calendarProps,
  ...timePanelProps,
];

export default defineVueComponent(DateTime, datetimeProps);