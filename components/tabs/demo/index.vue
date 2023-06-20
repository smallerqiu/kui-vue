<script>
import Info from './info.md'
import Base from './base.md'
import Disabled from './disabled.md'
// import Centered from './centered.md'
import Icon from './icon.md'
import Extra from './extra.md'
import Card from './card.md'
import Closable from './closable.md'
import Sample from './sample.md'

import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-tabs">
        <Info />
        <Base />
        <Disabled />
         {/*<Centered />*/}
        <Icon />
        <Extra />
        <Card />
        <Closable />
        <Sample />
        <CN />
      </div>
    )
  }
}

</script> 
 