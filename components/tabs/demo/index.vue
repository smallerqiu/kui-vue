<script>
import Info from './info'
import Base from './base'
import Disabled from './disabled'
// import Centered from './centered'
import Icon from './icon'
import Extra from './extra'
import Card from './card'
import Closable from './closable'
import Sample from './sample'

import CN from '../index.md'
export default {
  render() {
    return (
      <div class="switch-demo">
        <Info class="typo" />
        <Base />
        <Disabled />
         {/*<Centered />*/}
        <Icon />
        <Extra />
        <Card />
        <Closable />
        <Sample />
        <CN class="typo" />
      </div>
    )
  }
}

</script> 
 