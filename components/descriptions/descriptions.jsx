import { getChild } from "../_tool/utils"
import Item from "./descriptionsItem"
export default {
  props: {
    bordered: Boolean,
    column: { type: Number, default: 3 },
    layout: { type: String, default: 'horizontal' },
    title: String,
    extra: String,
    size: { type: String, default: 'default' }
  },
  methods: {
    getprops(vnode) {
      let { children, propsData } = vnode.componentOptions
      return { children, ...propsData }
    },
    rendreBody() {
      let { $slots, column, bordered, layout } = this
      let child = getChild($slots.default)
      // let count = child.length
      // let row = parseInt(count / column)

      // console.log(child)
      let rows = { 0: [] }, len = 0, temps = [], v = 0;

      for (let i = 0; i < child.length; i++) {
        let { children, label, span = 1 } = this.getprops(child[i])
        let row = rows[len] || []
        let vertical = layout == 'vertical'

        let temp = (vertical ? temps[v] : temps[len]) || 0

        let cols = bordered && !vertical ? column * 2 : column
        // console.log(temp, span, cols)


        if (i == child.length - 1) {
          if (bordered) {
            span = cols - temp - (vertical ? 0 : 1)
          } else if (temp < cols) {
            span = cols - temp
          }
        }

        if (vertical) {
          // console.log(temp, span, cols)
          let row2 = rows[len + 1] || []

          if (temp < cols) {
            row.push(<Item label={label} span={span} type="label" layout={layout} bordered={bordered} />)
            row2.push(<Item span={span} layout={layout} bordered={bordered} >{children}</Item>)
            rows[len] = row
            rows[len + 1] = row2
            temps[v] = temp + span
          } else if (temp >= cols) {
            len += 2
            v += 1
            rows[len] = []
            rows[len + 1] = []
            temps[v] = temp + span
            rows[len].push(<Item label={label} span={span} type="label" layout={layout} bordered={bordered} />)
            rows[len + 1].push(<Item span={span} layout={layout} bordered={bordered} >{children}</Item>)
          }
          if (temps[v] >= cols) {
            len += 2
            v += 1
          }

        } else {

          if (bordered) {
            if (temp < cols) {
              row.push(<Item label={label} bordered={bordered} span={1} type="label" />,
                <Item span={span} bordered={bordered}>{children}</Item>)
              rows[len] = row
              temps[len] = temp + span + 1
            } else if (temp >= cols) {
              len += 1
              rows[len] = []
              temps[len] = span + 1
              rows[len].push(<Item label={label} bordered={bordered} span={1} type="label" />,
                <Item span={span} bordered={bordered}>{children}</Item>)
            }
            if (temps[len] >= cols) {
              len += 1
            }
          } else {
            if (temp < cols) {
              row.push(<Item label={label} span={span}>{children}</Item>)
              rows[len] = row
              temps[len] = temp + span
            } else if (temp >= cols) {
              len += 1
              rows[len] = []
              temps[len] = temp + span
              rows[len].push(<Item label={label} span={span}>{children}</Item>)
            }
            if (temps[len] >= cols) {
              len += 1
            }
          }
        }


      }
      let trs = []
      for (let tr in rows) {
        // console.log(tr)
        trs.push(<tr class="k-descriptions-row">{rows[tr]}</tr>)
      }
      return (<table>{trs}</table>)
    }
  },
  render() {
    let { bordered, layout, size, title, extra, $slots } = this
    let props = {
      class: [
        'k-descriptions',
        {
          'k-descriptions-vertical': layout == 'vertical',
          'k-descriptions-bordered': bordered,
          'k-descriptions-middle': size == 'middle',
          'k-descriptions-sm': size == 'small',
        }
      ]
    }
    extra = extra || $slots.extra
    return (
      <div {...props}>
        <div class="k-descriptions-header">
          <div class="k-descriptions-title">{title || $slots.title}</div>
          {extra ? <div class="k-descriptions-extra">{extra}</div> : null}
        </div>
        <div class="k-descriptions-view">
          {this.rendreBody()}
        </div>
      </div>
    )
  }
}