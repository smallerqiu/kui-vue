import { defineComponent, ref } from 'vue'
import { List } from './scrollitem'

export default defineComponent({
  props: {
    value: Object,
    disabledTime: Function,
  },
  setup(ps) {

    let { $H, $m, $s } = ps.value || { $H: null, $m: null, $s: null }
    const items = len => new Array(len).fill("").map((_, v) => v)

    return () => {
      return (
        <div class="k-calendar-time-picker">
          <List items={items(24)} type="time" disabledTime={ps.disabledTime} value={$H} />
          <List items={items(60)} type="time" disabledTime={ps.disabledTime} value={$m} />
          <List items={items(60)} type="time" disabledTime={ps.disabledTime} value={$s} />
        </div>
      )
    }
  }
})