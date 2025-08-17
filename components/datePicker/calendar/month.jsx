import { defineComponent, ref } from 'vue'
import List from './scrollitem'

export default defineComponent({
  props: {
    value: Object,
    disabledDate: Function,
    current: Number,
  },
  setup(ps, { emit }) {
    const select = (item) => {
      emit('setMonth', item)
    }
    const items = len => new Array(len).fill("").map((_, v) => v + 1)

    return () => {
      const thisMonth = new Date().getMonth()
      let { $M } = ps.value || { $M: null }
      let currentMonth = (ps.current || $M || thisMonth) + 1
      // console.log(items(12), ps.current)
      // return <div class="k-calendar-months">
      return <List fix={true} items={items(12)} onSelect={select} current={currentMonth} value={$M} type="months" disabledTime={ps.disabledDate} />
      // </div>
    }
  }
})