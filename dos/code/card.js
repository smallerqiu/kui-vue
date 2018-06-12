let code = {}
code.base = `<Card title="卡片标题" icon="android-favorite-outline">
  <span slot="extra" @click="$Message.info('刚刚摇了下')">摇一摇</span>
  <p>内容随便写， 欢迎使用</p>
  <p>内容随便写， 欢迎使用</p>
  <p>内容随便写， 欢迎使用</p>
  <p>内容随便写， 欢迎使用</p>
  <p>内容随便写， 欢迎使用</p>
  <p>内容随便写， 欢迎使用</p>
</Card>`

code.border = `<Card title="卡片标题" icon="android-favorite-outline" border>
  <span slot="extra">摇一摇</span>
  <p>内容随便写， 欢迎使用</p>
  <p>内容随便写， 欢迎使用</p>
  <p>内容随便写， 欢迎使用</p>
  <p>内容随便写， 欢迎使用</p>
  <p>内容随便写， 欢迎使用</p>
  <p>内容随便写， 欢迎使用</p>
</Card>`
export default code