import { usePrefixClass } from '../context';
import { Button } from '../button';
import { setMonth, setYear } from '../util/date';

export function TableHeader(props, { slots }) {
  const { type, calendar, onUpdateCalendar } = props;
  const prefixClass = usePrefixClass();

  const lastMonth = () => {
    onUpdateCalendar(setMonth(calendar, (v) => v - 1));
  };

  const nextMonth = () => {
    onUpdateCalendar(setMonth(calendar, (v) => v + 1));
  };

  const lastYear = () => {
    onUpdateCalendar(setYear(calendar, (v) => v - 1));
  };

  const nextYear = () => {
    onUpdateCalendar(setYear(calendar, (v) => v + 1));
  };

  const lastDecade = () => {
    onUpdateCalendar(setYear(calendar, (v) => v - 10));
  };

  const nextDecade = () => {
    onUpdateCalendar(setYear(calendar, (v) => v + 10));
  };

  return (
    <div class={`${prefixClass}-calendar-header`}>
      <Button
        value="double-left"
        onClick={type === 'year' ? lastDecade : lastYear}
      />
      {type === 'date' && <Button value="left" onClick={lastMonth} />}
      <Button
        value="double-right"
        onClick={type === 'year' ? nextDecade : nextYear}
      />
      {type === 'date' && <Button value="right" onClick={nextMonth} />}
      <span class={`${prefixClass}-calendar-header-label`}>
        {slots.default?.()}
      </span>
    </div>
  );
}