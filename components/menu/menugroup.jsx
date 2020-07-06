
export default {
  name: "MenuGroup",
  props: {
    title: { type: String, required: true }
  },
  render() {
    return (
      <li class="k-menu-item-group">
        <div class="k-menu-item-group-title">{this.title}</div>
        <ul class="k-menu-item-group-list">
          {this.$slots.default}
        </ul>
      </li>
    )
  },
  methods: {
  },
}; 
