import { defineComponent, ref } from 'vue'
import List from './scrollitem'

export default defineComponent({
  props: {
    value: Object,
    disabledDate: Function,
  },
  setup(ps) {
    const items = (a) => Array.from({ length: 201 }, (_, i) => a - 100 + i);

    return () => {
      let { $y } = ps.value || { $y: null }
      let year = new Date().getFullYear()
      return <div class="k-calendar-years">
        <List items={items(year)} value={$y} type="year" disabledTime={ps.disabledTime} />
      </div>
    }
  }
})