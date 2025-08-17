import { defineComponent, ref } from 'vue'
import List from './scrollitem'

export default defineComponent({
  props: {
    value: Object,
    disabledDate: Function,
  },
  setup(ps, { emit }) {
    const select = (item) => {
      // console.log(item)
      emit('setYear', item)
    }
    const items = (a) => Array.from({ length: 201 }, (_, i) => a - 100 + i);

    return () => {
      let { $y } = ps.value || { $y: null }
      const thisYear = new Date().getFullYear()
      let currentYear = ps.current || $y || thisYear
      // return <div class="k-calendar-years">
      return <List items={items(thisYear)} onSelect={select} current={currentYear} value={$y} type="years" disabledTime={ps.disabledDate} />
      // </div>
    }
  }
})