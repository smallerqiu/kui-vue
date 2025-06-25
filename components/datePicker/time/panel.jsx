import { format } from 'date-format-parse';
import { ref, onMounted, watch, watchEffect } from 'vue';
import { useLocale, usePrefixClass } from '../context';
import { getValidDate, startOfDay } from '../util/date';
import { getScrollParent } from '../util/dom';
import { Columns } from './columns';
import { FixedList } from './list';
import { getColumnOptions, getFixedOptions } from './getOptions';
import { defineVueComponent, keys, withDefault } from '../util/vue';

const scrollTo = (element, to, duration = 0) => {
  if (duration <= 0) {
    requestAnimationFrame(() => {
      element.scrollTop = to;
    });
    return;
  }
  const difference = to - element.scrollTop;
  const tick = (difference / duration) * 10;
  requestAnimationFrame(() => {
    const scrollTop = element.scrollTop + tick;
    if (scrollTop >= to) {
      element.scrollTop = to;
      return;
    }
    element.scrollTop = scrollTop;
    scrollTo(element, to, duration - 10);
  });
};

function TimePanel(originalProps) {
  const props = withDefault(originalProps, {
    defaultValue: startOfDay(new Date()),
    format: 'HH:mm:ss',
    timeTitleFormat: 'YYYY-MM-DD',
    disabledTime: () => false,
    scrollDuration: 100,
  });

  const prefixClass = usePrefixClass();
  const locale = useLocale();

  const formatDate = (date, fmt) => {
    return format(date, fmt, { locale: locale.value.formatLocale });
  };

  const innerValue = ref(new Date());
  watchEffect(() => {
    innerValue.value = getValidDate(props.value, props.defaultValue);
  });

  const isDisabledTimes = (value) => {
    if (Array.isArray(value)) {
      return value.every((v) => props.disabledTime(new Date(v)));
    }
    return props.disabledTime(new Date(value));
  };

  const isDisabledHour = (date) => {
    const value = new Date(date);
    return isDisabledTimes([
      value.getTime(),
      value.setMinutes(0, 0, 0),
      value.setMinutes(59, 59, 999),
    ]);
  };

  const isDisabledMinute = (date) => {
    const value = new Date(date);
    return isDisabledTimes([
      value.getTime(),
      value.setSeconds(0, 0),
      value.setSeconds(59, 999),
    ]);
  };

  const isDisabledAMPM = (date) => {
    const value = new Date(date);
    const minHour = value.getHours() < 12 ? 0 : 12;
    const maxHour = minHour + 11;
    return isDisabledTimes([
      value.getTime(),
      value.setHours(minHour, 0, 0, 0),
      value.setHours(maxHour, 59, 59, 999),
    ]);
  };

  const isDisabled = (date, type) => {
    if (type === 'hour') return isDisabledHour(date);
    if (type === 'minute') return isDisabledMinute(date);
    if (type === 'ampm') return isDisabledAMPM(date);
    return isDisabledTimes(date);
  };

  const handleSelect = (value, type) => {
    if (!isDisabled(value, type)) {
      const date = new Date(value);
      innerValue.value = date;
      if (!isDisabledTimes(date)) {
        props['onUpdate:value']?.(date, type);
      }
    }
  };

  const getClasses = (cellDate, type) => {
    if (isDisabled(cellDate, type)) return 'disabled';
    if (cellDate.getTime() === innerValue.value.getTime()) return 'active';
    return '';
  };

  const container = ref();

  const scrollToSelected = (duration) => {
    if (!container.value) return;
    const elements = container.value.querySelectorAll('.active');
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const scrollElement = getScrollParent(element, container.value);
      if (scrollElement) {
        scrollTo(scrollElement, element.offsetTop, duration);
      }
    }
  };

  onMounted(() => scrollToSelected(0));

  watch(innerValue, () => scrollToSelected(props.scrollDuration), { flush: 'post' });

  return () => {
    let content;
    if (props.timePickerOptions) {
      content = (
        <FixedList
          onSelect={handleSelect}
          getClasses={getClasses}
          options={getFixedOptions({
            date: innerValue.value,
            format: props.format,
            option: props.timePickerOptions,
            formatDate,
          })}
        />
      );
    } else {
      content = (
        <Columns
          options={getColumnOptions(innerValue.value, props)}
          onSelect={handleSelect}
          getClasses={getClasses}
        />
      );
    }

    return (
      <div class={`${prefixClass}-time`} ref={container}>
        {props.showTimeHeader && (
          <div class={`${prefixClass}-time-header`}>
            <button
              type="button"
              class={`${prefixClass}-btn ${prefixClass}-btn-text ${prefixClass}-time-header-title`}
              onClick={props.onClickTitle}
            >
              {formatDate(innerValue.value, props.timeTitleFormat)}
            </button>
          </div>
        )}
        <div class={`${prefixClass}-time-content`}>{content}</div>
      </div>
    );
  };
}

export const timePanelProps = keys([
  'value',
  'defaultValue',
  'format',
  'timeTitleFormat',
  'showTimeHeader',
  'disabledTime',
  'timePickerOptions',
  'hourOptions',
  'minuteOptions',
  'secondOptions',
  'hourStep',
  'minuteStep',
  'secondStep',
  'showHour',
  'showMinute',
  'showSecond',
  'use12h',
  'scrollDuration',
  'onClickTitle',
  'onUpdate:value',
]);

export default defineVueComponent(TimePanel, timePanelProps);