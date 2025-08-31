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
      emit('setMonth', item - 1, 'month')
    }
    const items = len => new Array(len).fill("").map((_, v) => v + 1)

    return () => {
      // const thisMonth = new Date().getMonth()
      const { $M } = ps.value || { $M: null }
      let value = $M !== undefined ? $M + 1 : null
      return <List fix={true} items={items(12)} onSelect={select} current={ps.current + 1} value={value} type="months" disabledTime={ps.disabledDate} />
    }
  }
})