import { format } from 'date-format-parse';
import { usePrefixClass, useLocale, useGetWeek } from '../context';
import { chunk } from '../util/base';
import { getCalendar } from '../util/date';
import { TableHeader } from './header';

export function TableDate({
  calendar,
  isWeekMode,
  showWeekNumber,
  titleFormat,
  getWeekActive,
  getCellClasses,
  onSelect,
  onUpdatePanel,
  onUpdateCalendar,
  onDateMouseEnter,
  onDateMouseLeave,
}) {
  const prefixClass = usePrefixClass();
  const getWeekNumber = useGetWeek();
  const locale = useLocale().value;

  const {
    yearFormat,
    monthBeforeYear,
    monthFormat = 'MMM',
    formatLocale,
  } = locale;

  const firstDayOfWeek = formatLocale.firstDayOfWeek || 0;
  let days = locale.days || formatLocale.weekdaysMin;
  days = days.concat(days).slice(firstDayOfWeek, firstDayOfWeek + 7);

  const year = calendar.getFullYear();
  const month = calendar.getMonth();
  const dates = chunk(getCalendar({ firstDayOfWeek, year, month }), 7);

  const formatDate = (date, fmt) => {
    return format(date, fmt, { locale: formatLocale });
  };

  const handlePanelChange = (panel) => {
    onUpdatePanel(panel);
  };

  const getCellDate = (el) => {
    const index = el.getAttribute('data-index');
    const [row, col] = index.split(',').map((v) => parseInt(v, 10));
    return new Date(dates[row][col]);
  };

  const handleCellClick = (evt) => {
    onSelect(getCellDate(evt.currentTarget));
  };

  const handleMouseEnter = (evt) => {
    if (onDateMouseEnter) {
      onDateMouseEnter(getCellDate(evt.currentTarget));
    }
  };

  const handleMouseLeave = (evt) => {
    if (onDateMouseLeave) {
      onDateMouseLeave(getCellDate(evt.currentTarget));
    }
  };

  const yearLabel = (
    <button
      type="button"
      class={`${prefixClass}-btn ${prefixClass}-btn-text ${prefixClass}-btn-current-year`}
      onClick={() => handlePanelChange('year')}
    >
      {formatDate(calendar, yearFormat)}
    </button>
  );

  const monthLabel = (
    <button
      type="button"
      class={`${prefixClass}-btn ${prefixClass}-btn-text ${prefixClass}-btn-current-month`}
      onClick={() => handlePanelChange('month')}
    >
      {formatDate(calendar, monthFormat)}
    </button>
  );

  showWeekNumber = typeof showWeekNumber === 'boolean' ? showWeekNumber : isWeekMode;

  return (
    <div
      class={[
        `${prefixClass}-calendar ${prefixClass}-calendar-panel-date`,
        { [`${prefixClass}-calendar-week-mode`]: isWeekMode },
      ]}
    >
      <TableHeader type="date" calendar={calendar} onUpdateCalendar={onUpdateCalendar}>
        {monthBeforeYear ? [monthLabel, yearLabel] : [yearLabel, monthLabel]}
      </TableHeader>
      <div class={`${prefixClass}-calendar-content`}>
        <table class={`${prefixClass}-table ${prefixClass}-table-date`}>
          <thead>
            <tr>
              {showWeekNumber && <th class={`${prefixClass}-week-number-header`}></th>}
              {days.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dates.map((row, i) => (
              <tr
                key={i}
                class={[
                  `${prefixClass}-date-row`,
                  { [`${prefixClass}-active-week`]: getWeekActive(row) },
                ]}
              >
                {showWeekNumber && (
                  <td
                    class={`${prefixClass}-week-number`}
                    data-index={`${i},0`}
                    onClick={handleCellClick}
                  >
                    <div>{getWeekNumber(row[0])}</div>
                  </td>
                )}
                {row.map((cell, j) => (
                  <td
                    key={j}
                    class={['cell', getCellClasses(cell)]}
                    title={formatDate(cell, titleFormat)}
                    data-index={`${i},${j}`}
                    onClick={handleCellClick}
                    onMouseenter={handleMouseEnter}
                    onMouseleave={handleMouseLeave}
                  >
                    <div>{cell.getDate()}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}