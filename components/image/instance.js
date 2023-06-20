import Vue from 'vue'
import Preview from './preview'

export default function createInstance({ type }) {
  let instance = new Vue({
    methods: {
      show({ data, src, index, showPanel, slots, on, _globle = true, type }) {
        this.type = type
        this.src = src
        if (Array.isArray(data) && data.length) {
          this.data = data
          this.src = src || data[index || 0]
          this.showSwitch = true
        } else {
          this.showSwitch = false
          this.data = []
          this.src = src
        }

        if (on !== undefined) {
          this.on = on || {}
        }
        if (slots !== undefined) {
          this.slots = slots || {}
        }
        if (showPanel !== undefined) {
          this.showPanel = showPanel
        }
        this.visible = true
        this._globle = _globle
      },
      destroy() {
        let instance = this.$children[0]
        if (instance) {
          instance.visible = false
          Vue.prototype.preview = null
          clearTimeout(this.timer)
          this.timer = setTimeout(e => {
            instance.$destroy()
            setTimeout(() => {
              document.body.removeChild(this.$el)
            });
          }, 300)
        }
      },
      togglePanel() {
        this.showPanel = !this.showPanel
      }
    },
    data() {
      return {
        src: '',
        visible: false,
        data: null,
        showSwitch: false,
        showPanel: false,
        slots: {},
        type: type || '',
        on: {},
        _globle: false
      }
    },
    render() {
      let { src, visible, showSwitch, data, showPanel, slots, _globle, type } = this
      // console.log(type)
      const imageProps = {
        props: {
          origin: src,
          value: visible,
          showSwitch,
          data, showPanel: showPanel,
          globle: _globle,
          type
        },
        on: {
          input: val => {
            this.visible = val
          },
          close: () => {
            this.on.close && this.on.close()
            this.destroy()
          },
          'toggle-panel': (value) => {
            this.showPanel = value
            this.on.togglePanel && this.on.togglePanel(value)
          },
          switch: (index) => {
            this.on.switch && this.on.switch(index)
          },
          // show: () => this.$emit('show')
        }
      }
      return <Preview {...imageProps}>
        <template slot="tool">{slots.tool}</template>
        <template slot="panel">{slots.panel}</template>
      </Preview>
    }
  })
  const component = instance.$mount()
  document.body.appendChild(component.$el)
  Vue.prototype.preview = instance
  return instance;
}