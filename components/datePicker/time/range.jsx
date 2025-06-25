import { watchEffect, ref } from 'vue';
import { usePrefixClass } from '../context';
import { isValidRangeDate, startOfDay } from '../util/date';
import { defineVueComponent, withDefault } from '../util/vue';
import TimePanel, { timePanelProps } from './panel';

function TimeRange(originalProps) {
  const props = withDefault(originalProps, {
    defaultValue: startOfDay(new Date()),
    disabledTime: () => false,
  });

  const prefixClass = usePrefixClass();

  const innerValue = ref([new Date(NaN), new Date(NaN)]);

  watchEffect(() => {
    if (isValidRangeDate(props.value)) {
      innerValue.value = props.value;
    } else {
      innerValue.value = [new Date(NaN), new Date(NaN)];
    }
  });

  const emitChange = (type, index) => {
    const finalType = type === 'time' ? 'time-range' : type;
    props['onUpdate:value']?.(innerValue.value, finalType, index);
  };

  const handleSelectStart = (date, type) => {
    innerValue.value[0] = date;
    if (!(innerValue.value[1].getTime() >= date.getTime())) {
      innerValue.value[1] = date;
    }
    emitChange(type, 0);
  };

  const handleSelectEnd = (date, type) => {
    innerValue.value[1] = date;
    if (!(innerValue.value[0].getTime() <= date.getTime())) {
      innerValue.value[0] = date;
    }
    emitChange(type, 1);
  };

  const disabledStartTime = (date) => {
    return props.disabledTime(date, 0);
  };

  const disabledEndTime = (date) => {
    return date.getTime() < innerValue.value[0].getTime() || props.disabledTime(date, 1);
  };

  return () => {
    const defaultValues = Array.isArray(props.defaultValue)
      ? props.defaultValue
      : [props.defaultValue, props.defaultValue];

    return (
      <div class={`${prefixClass}-time-range`}>
        <TimePanel
          {...{ ...props, ['onUpdate:value']: handleSelectStart }}
          value={innerValue.value[0]}
          defaultValue={defaultValues[0]}
          disabledTime={disabledStartTime}
        />
        <TimePanel
          {...{ ...props, ['onUpdate:value']: handleSelectEnd }}
          value={innerValue.value[1]}
          defaultValue={defaultValues[1]}
          disabledTime={disabledEndTime}
        />
      </div>
    );
  };
}

export const timeRangeProps = timePanelProps;

export default defineVueComponent(TimeRange, timeRangeProps);