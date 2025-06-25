import { inject, computed, provide, shallowRef } from 'vue';
import { getWeek } from 'date-format-parse';
import { getLocale } from './locale';
import { isPlainObject, mergeDeep } from './util/base';

const localeContextKey = 'datepicker_locale';
const prefixClassKey = 'datepicker_prefixClass';
const getWeekKey = 'datepicker_getWeek';

export function useLocale() {
  return inject(localeContextKey, shallowRef(getLocale()));
}

export function provideLocale(lang) {
  const locale = computed(() => {
    if (isPlainObject(lang.value)) {
      return mergeDeep(getLocale(), lang.value);
    }
    return getLocale(lang.value);
  });

  provide(localeContextKey, locale);

  return locale;
}

export function providePrefixClass(value) {
  provide(prefixClassKey, value);
}

export function usePrefixClass() {
  return inject(prefixClassKey, 'mx');
}

export function provideGetWeek(value) {
  provide(getWeekKey, value);
}

export function useGetWeek() {
  return inject(getWeekKey, getWeek);
}