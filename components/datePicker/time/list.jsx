
import { ScrollbarVertical } from '../scrollbar';
import { usePrefixClass } from '../context';

export function FixedList(props) {
  const prefixClass = usePrefixClass();

  return (
    <ScrollbarVertical>
      {props.options.map((item) => (
        <div
          key={item.text}
          class={[`${prefixClass}-time-option`, props.getClasses(item.value, 'time')]}
          onClick={() => props.onSelect(item.value, 'time')}
        >
          {item.text}
        </div>
      ))}
    </ScrollbarVertical>
  );
}