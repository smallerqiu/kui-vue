<script>
import Info from './info'
import Base from './base'
import FileList from './file-list'
import Accept from './accept'
import Exceed from './exceed'
import Custom from './custom'
import Directory from './directory'
import Picture from './picture'
import Avatar from './avatar'
import Draggable from './draggable'
import Form from './form'

import CN from '../index.md'
export default {
  render() {
    return (
      <div class="switch-demo">
        <Info class="typo" />
        <Base />
        <FileList />
        <Directory />
        <Accept />
        <Exceed />
        <Custom />
        <Picture />
        <Avatar />
        <Draggable/>
        <Form />
        <CN class="typo" />
      </div>
    )
  }
}

</script> 
 