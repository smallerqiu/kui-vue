import { defineComponent, ref } from 'vue'
import List from './scrollitem'

export default defineComponent({
  props: {
    value: Object,
    disabledTime: Function,
    current: Object,
  },
  setup(ps) {

    let { $H, $m, $s } = ps.value || { $H: null, $m: null, $s: null }
    const items = len => new Array(len).fill("").map((_, v) => v)
    const select = (item, type) => {
      emit('setTime', item, type)
    }
    return () => {
      return (
        <div class="k-calendar-time-picker">
          <List items={items(24)} onSelect={(item) => select(item, 'h')} fix={true} type="time" current={ps.current.$H} disabledTime={ps.disabledTime} value={$H} />
          <List items={items(60)} onSelect={(item) => select(item, 'm')} fix={true} type="time" current={ps.current.$m} disabledTime={ps.disabledTime} value={$m} />
          <List items={items(60)} onSelect={(item) => select(item, 's')} fix={true} type="time" current={ps.current.$s} disabledTime={ps.disabledTime} value={$s} />
        </div>
      )
    }
  }
})