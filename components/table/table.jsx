import Empty from '../empty'
import Icon from '../icon'
import Spin from '../spin'
import { Checkbox } from '../checkbox'
import { Radio } from '../radio'
import ExtendTable from './extend'
import { sortFixedCol, hasChild, sortColumnsOnline } from './utils'


export default {
  name: 'Table',
  props: {
    bordered: Boolean,
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
    width: Number,
    height: Number,
    data: { type: Array, default: () => [] }, // 表格数据
    columns: { type: Array, default: () => [] }, // 表格类目
    loading: Boolean,
  },
  data() {
    return {
      scrollType: 'left',
      filters: {},
      scrollFocus: 'body',
    }
  },
  mounted() {
    this.renderEnd = true
    this.resetHeight()
    window.addEventListener('resize', this.autoResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.autoResize)
  },
  updated() {
    this.autoResize()
  },
  render(h) {
    let { $slots, data, $scopedSlots, loading, height, width } = this
    // bordered = true
    const { header, footer } = $slots
    let isTableFixed = width || height
    const content = [], tbody = [], tbodyL = [], tbodyR = [];

    //custom head
    if (header) {
      content.push(<div class="k-table-header" > {header}</div>)
    }

    const isFixedHeader = height

    let expandNode = $scopedSlots['expandedRowRender']

    //重新排序

    let { columns, hasFixed } = sortFixedCol(this.columns)

    //reset custom header
    columns.forEach(col => {
      if (col.renderHeader) {
        col.$title = col.renderHeader(h, col.title)
      } else if ($scopedSlots[`header-${col.key}`]) {
        col.$title = $scopedSlots[`header-${col.key}`](col.title)
      }
    })

    let _columns = columns

    if (hasChild(this.columns)) {
      _columns = sortColumnsOnline(columns)
    }

    let checkAll = data.filter(x => x._checked).length == data.length && data.length > 0;

    let indeterminate = data.filter(x => x._checked).length > 0 && !checkAll;
    //Set Data 
    data.forEach((d, i) => {
      let tr = [], trL = [], trR = [];
      // d._checked = d._checked || false
      // d._disabled = d._disabled || false


      _columns.forEach((c, j) => {
        // $scopedSlots[c.key]({ text: d[c.key] })
        if (c.key || c.type) {
          let $scope = d[c.key]

          let props = {
            class: [{
              "k-table-cell-ellipsis": c.ellipsis,
              'k-table-cell-selection': c.type == 'selection',
              [c.className]: c.className
            }],
            attrs: {
              title: c.ellipsis ? d[c.key] : null
            },
          }
          if (c.render) {
            let scope = c.render(h, d, i, c.key)

            // let { children, attrs } = c.render($scope, d, i)
            let { children, attrs } = scope
            if (attrs) {
              props = Object.assign(props, { attrs })
              $scope = children || $scope
            } else {
              $scope = scope
            }
          } else if ($scopedSlots[c.key]) {
            $scope = $scopedSlots[c.key](d[c.key], d, c)
          } else if (c.type == 'selection') {
            let props = {
              props: {
                disabled: d._disabled,
                checked: d._checked,
              },
              on: {
                change: e => this.onSelect(d, e, c.checkType)
              }
            }
            $scope = c.checkType == 'radio' ? <Radio {...props} /> : <Checkbox {...props} />
          }

          if (c.ellipsis) {
            isTableFixed = true
          }

          if (props.attrs.rowSpan !== 0 && props.attrs.colSpan !== 0) {
            tr.push(h('td', props, [!c.fixed ? $scope : null]))  //or
            // tr.push(<td {...props}>{$scope}</td>)
          }
          if (c.fixed == 'left') {
            trL.push(h('td', props, [$scope]))
          }

          if (c.fixed == 'right') {
            trR.push(h('td', props, [$scope]))
          }
        }
      })
      if (expandNode) {
        tr.unshift(<td class="k-table-row-expand-icon-cell"><Icon onClick={e => this.onExpand(d)} type={d._expanded ? 'remove' : 'add'} /></td>)
      }
      let trProps = {
        class: { 'k-table-row-hover': d._hover },
        key: (d.key || i).toString(),
      }
      if (hasFixed) {
        trProps.on = {
          mouseenter: () => {
            this.$set(d, '_hover', true)
          },
          mouseleave: () => {
            this.$set(d, '_hover', false)
          }
        }
      }
      if (tr.length) {
        tbody.push(<tr {...trProps}>{tr}</tr>)
      }
      if (trL.length) {
        tbodyL.push(<tr {...trProps}>{trL}</tr>)
      }
      if (trR.length) {
        tbodyR.push(<tr {...trProps}>{trR}</tr>)
      }

      if (expandNode) {
        tbody.push(<tr v-show={d._expanded} class="k-table-expand-row"><td></td><td colSpan={_columns.length}>{expandNode(d)}</td></tr>)
      }
    })

    if (tbodyL.length) {
      const props = {
        props: {
          columns: columns.filter(x => x.fixed == 'left'),
          body: tbodyL,
          mode: 'left',
          height,
          indeterminate,
          checkAll,
        },
        ref: 'leftTable',
        on: {
          scroll: this.fixedScroll,
          sorter: this.sorter,
          'select-all': this.onSelectAll,
          mouseenter: () => this.scrollFocus = `fixed-left`,
          mouseleave: () => this.scrollFocus = 'body'
        }
      }
      content.push(<ExtendTable {...props} />)
    }
    if (tbodyR.length) {
      const props = {
        props: {
          columns: columns.filter(x => x.fixed == 'right'),
          body: tbodyR,
          mode: 'right',
          height,
          indeterminate,
          checkAll,
        },
        ref: 'rightTable',
        on: {
          scroll: this.fixedScroll,
          sorter: this.sorter,
          'select-all': this.onSelectAll,
          mouseenter: e => {
            this.scrollFocus = `fixed-right`
          },
          mouseleave: e => {
            this.scrollFocus = 'body'
          }
        }
      }
      content.push(<ExtendTable {...props} />)
    }

    let mainProps = {
      props: {
        mode: 'main',
        columns: columns,
        columns2: _columns,
        body: tbody,
        height,
        indeterminate,
        checkAll,
        width,
        hasExpand: expandNode != null
      },
      ref: 'mainTable',
      on: {
        scroll: this.scroll,
        sorter: this.sorter,
        'select-all': this.onSelectAll,
        // resize: this.resetHeight
      }
    }
    content.push(<ExtendTable {...mainProps} />)

    const rootProps = {
      class: ["k-table", {
        'k-table-fixed': isTableFixed,
        'k-table-sm': this.size == 'small',
        'k-table-lg': this.size == 'large',
        'k-table-fixed-header': isFixedHeader,
        'k-table-bordered': this.bordered,
        [`k-table-scroll-${this.scrollType}`]: width
      }]
    }

    if (!data || !data.length) {
      content.push(<Empty />)
    }
    //custom footer
    if (footer) {
      content.push(<div class="k-table-footer">{footer}</div>)
    }
    if (loading) {
      content.push(<Spin />)
    }
    return (<div {...rootProps}>{content}</div >)
  },

  methods: {
    sorter(item) {
      let { key, _order } = item
      this.$emit('change', this.filters, { key, order: _order })
    },
    autoResize() {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.resetHeight()
      }, 300);
    },
    resetHeight() {
      let { mainTable, leftTable, rightTable } = this.$refs
      if (!this.renderEnd || !mainTable) return
      let headHeight = mainTable.$refs.head.offsetHeight
      let leftChild = [], rightChild = [];

      if (leftTable) {
        leftTable.$refs.head.firstChild.style.height = `${headHeight}px`
        leftChild = leftTable.$refs.tbody.children
        //   if (leftTable.$refs.body && this.width) {
        //     leftTable.$refs.body.style.height = `${this.height - scrollBarHeight}px`
        //   }
      }

      if (rightTable) {
        rightTable.$refs.head.firstChild.style.height = `${headHeight}px`
        rightChild = rightTable.$refs.tbody.children
        //   if (rightTable.$refs.body && this.width) {
        //     rightTable.$refs.body.style.height = `${this.height - scrollBarHeight}px`
        //   }
      }

      const mainChild = mainTable.$refs.tbody.children
      // reset tbody's height
      for (let i = 0; i < mainChild.length; i++) {
        let leftHeight = (leftChild[i] || {}).offsetHeight || 0
        let mainHeight = mainChild[i].offsetHeight
        let rightHeight = (rightChild[i] || {}).offsetHeight || 0
        let maxHeight = Math.max(leftHeight, mainHeight, rightHeight)
        if (leftHeight && leftHeight < maxHeight) {
          leftChild[i].style.height = `${maxHeight}px`
        }
        if (rightHeight && rightHeight < maxHeight) {
          rightChild[i].style.height = `${maxHeight}px`
        }
        if (mainHeight < maxHeight) {
          mainChild[i].style.height = `${maxHeight}px`
        }
      }

    },
    onExpand(item) {
      this.$set(item, '_expanded', !item._expanded)
    },
    onSelect(item, e, type) {
      let checked = e.target.checked
      let checkedItem, keys;
      console.log(item)
      if (type == 'radio') {
        this.data.forEach(obj => {
          this.$set(obj, '_checked', obj.key == item.key)
        })
        checkedItem = item
        keys = item.key
      } else {
        this.$set(item, '_checked', checked)
        checkedItem = this.data.filter(x => x._checked == true)
        keys = checkedItem.map(x => x.key).join()
      }

      this.$emit('on-select', item, checked, checkedItem)
      this.$emit('on-change', keys, checkedItem, e)
      // console.log(checkCount, this.indeterminate, this.checkAll, this.data.length)
    },
    onSelectAll(e) {
      let { checked } = e.target
      this.selectAll(checked, e)
    },
    selectAll(checked, e) {
      this.data.forEach(d => {
        !d._disabled && this.$set(d, '_checked', checked)
      })
      // this.indeterminate = false
      let checkData = checked ? this.data.filter(x => x._checked) : []
      this.$emit('on-select-all', checked, checkData)

      let keys = checkData.map(x => x.key).join()

      this.$emit('on-change', keys, checkData, e)
      this.checkAll = checked
    },
    fixedScroll({ target }) {
      let { mainTable, leftTable, rightTable } = this.$refs
      if (this.scrollFocus == 'fixed-right') {
        mainTable.$refs.body && mainTable.$refs.body.scrollTo(mainTable.$refs.body.scrollLeft, target.scrollTop)
        leftTable && leftTable.$refs.body && leftTable.$refs.body.scrollTo(leftTable.$refs.body.scrollLeft, target.scrollTop)
      }
    },
    scroll({ target }) {
      let { mainTable, leftTable, rightTable } = this.$refs

      let { scrollLeft, scrollTop } = target
      let min = 0, max = target.scrollWidth - target.offsetWidth;
      // console.log(min, scrollLeft, max)
      if (scrollLeft > min && scrollLeft < max) {
        this.scrollType = 'middle'
      } else if (scrollLeft == min) {
        this.scrollType = 'left'
      } else if (scrollLeft >= max) {
        this.scrollType = 'right'
      }

      //同步thead scroll
      if (mainTable && mainTable.$refs.thead) {
        mainTable.$refs.thead.scrollTo(scrollLeft, 0)
      }
      if (this.scrollFocus == 'body') {
        leftTable && leftTable.$refs.body && leftTable.$refs.body.scrollTo(0, scrollTop);
        rightTable && rightTable.$refs.body && rightTable.$refs.body.scrollTo(0, scrollTop);
      }

    }
  }
}