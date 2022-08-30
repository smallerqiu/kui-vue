<script>
import Info from './info.md'
import Base from './base.md'
import FileList from './file-list.md'
import Accept from './accept.md'
import Exceed from './exceed.md'
import Custom from './custom.md'
import Directory from './directory.md'
import Picture from './picture.md'
import Avatar from './avatar.md'
import Draggable from './draggable.md'
import Form from './form.md'

import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-upload">
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
 