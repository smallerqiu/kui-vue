import { usePrefixClass, useLocale } from '../context';
import { chunk } from '../util/base';
import { createDate } from '../util/date';
import { TableHeader } from './header';

export function TableMonth({
  calendar,
  getCellClasses,
  onSelect,
  onUpdateCalendar,
  onUpdatePanel,
}) {
  const prefixClass = usePrefixClass();
  const locale = useLocale().value;
  const months = locale.months || locale.formatLocale.monthsShort;

  const getDate = (month) => {
    return createDate(calendar.getFullYear(), month);
  };

  const handleClick = (evt) => {
    const target = evt.currentTarget;
    const month = target.getAttribute('data-month');
    onSelect(getDate(parseInt(month, 10)));
  };

  return (
    <div class={`${prefixClass}-calendar ${prefixClass}-calendar-panel-month`}>
      <TableHeader type="month" calendar={calendar} onUpdateCalendar={onUpdateCalendar}>
        <button
          type="button"
          class={`${prefixClass}-btn ${prefixClass}-btn-text ${prefixClass}-btn-current-year`}
          onClick={() => onUpdatePanel('year')}
        >
          {calendar.getFullYear()}
        </button>
      </TableHeader>
      <div class={`${prefixClass}-calendar-content`}>
        <table class={`${prefixClass}-table ${prefixClass}-table-month`}>
          {chunk(months, 3).map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => {
                const month = i * 3 + j;
                return (
                  <td
                    key={j}
                    class={['cell', getCellClasses(getDate(month))]}
                    data-month={month}
                    onClick={handleClick}
                  >
                    <div>{cell}</div>
                  </td>
                );
              })}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}