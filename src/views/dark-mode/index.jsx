import Info from './basic.md'
import Mode from './mode.md'
import Local from './local.md'
// import LocalEg from './local-eg.md'
export default {
  setup() {
    return () => (
      <div>
        <Info />
        <Mode />
        <Local />
        {/* <LocalEg /> */}
      </div>
    )
  }
}
