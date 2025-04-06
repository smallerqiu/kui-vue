<script lang="jsx">
import Info from './base.md'
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

</script>