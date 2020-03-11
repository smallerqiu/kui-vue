<script>
import Info from './info'
import Base from './base.md'
import Circle from './circle.md'
import Dynamic from './dynamic.md'
import Dashboard from './dashboard.md'
import Color from './color.md'

import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Circle />
        <Dashboard />
        <Dynamic />
        <Color />
        <CN class="typo" />
      </div>
    )
  }
}
</script> 