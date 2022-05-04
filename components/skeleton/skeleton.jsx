export default {
  props: {
    animated: Boolean,
    avatar: [Boolean, Object],
    loading: Boolean,
    title: { type: Number, default: 35 },
    delay: { type: Number, default: 500 },
    rows: { type: Number, default: 3 }
  },
  watch: {
    loading(v) {
      this.show = v

      if (v) {
        this.show = v
      } else {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.show = v
        }, this.delay);
      }
    }
  },
  data() {
    return {
      show: this.loading
    }
  },
  methods: {
    renderAvatar(avatar) {
      if (!avatar) return null;
      let size = 'large', shape = 'circle';
      if (typeof avatar == 'object') {
        if (avatar.size) size = avatar.size
        if (avatar.shape) shape = avatar.shape
      }
      let props = {
        class: ['k-skeleton-avatar', {
          'k-skeleton-avatar-lg': size == 'large',
          'k-skeleton-avatar-sm': size == 'small',
          'k-skeleton-avatar-circle': shape == 'circle',
          'k-skeleton-avatar-square': shape == 'square',
        }]
      }
      return <div class="k-skeleton-header">
        <span {...props}></span>
      </div>
    },
    renderContent(title, rows) {
      let lines = new Array(rows).fill('')
      return (
        <div class="k-skeleton-content">
          {title > 0 ? <div class="k-skeleton-title" style={`width:${title}%`}></div> : null}
          <ul class="k-skeleton-paragraph">
            {lines.map(() => <li />)}
          </ul>
        </div>
      )
    }
  },
  render() {
    let { animated, show, title, avatar, rows } = this

    let props = {
      class: ['k-skeleton', {
        'k-skeleton-animated': animated
      }]
    }
    let nodeAvatar = this.renderAvatar(avatar)
    let nodeContent = this.renderContent(title, rows)
    let child = this.$slots.default
    return (
      <div {...props}>
        {child ? !show ? child : [nodeAvatar, nodeContent] : [nodeAvatar, nodeContent]}
      </div>
    )
  }
}