<script>
import Info from './info'
import Base from './base.md'
import Group from './group.md'
import Animated from './animated.md'
import Child from './child.md'
import List from './list.md'
import Items from './items.md'
import Custom from './custom.md'

import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-progress">
        <Info class="typo" />
        <Base />
        <Group />
        <Animated />
        <Child />
        <List />
        <Items />
        <Custom />
        <CN class="typo" />
      </div>
    )
  }
}
</script>