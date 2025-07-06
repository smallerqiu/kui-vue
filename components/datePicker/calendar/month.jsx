import { defineComponent, ref } from 'vue'
import List from './scrollitem'

export default defineComponent({
  props: {
    value: Object,
    disabledDate: Function,
  },
  setup(ps) {
    return () => {
      let { $M } = ps.value || { $M: null }
      const items = len => new Array(len).fill("").map((_, v) => v)

      return <div class="k-calendar-years">
        <List items={items(12)} value={$M} type="month" disabledTime={ps.disabledDate} />
      </div>
    }
  }
})