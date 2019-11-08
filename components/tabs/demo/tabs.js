let code = {}

code.base = `<Checkbox v-model="animated">animated</Checkbox>
<Tabs :value="3" :animated="animated">
  <TabPane label="Tab1" name="1">我是内容1....</TabPane>
  <TabPane label="Tab2" name="2">我是内容2....</TabPane>
  <TabPane label="Tab3" name="3">我是内容3....</TabPane>
</Tabs>
<script>
export default {
  data() {
    return {
      animated:true,
    }
  }
}
</script>`

code.disabled = `<Tabs>
  <TabPane label="Tab1">我是内容1....</TabPane>
  <TabPane label="Tab2" disabled>我是内容2....</TabPane>
  <TabPane label="Tab3">我是内容3....</TabPane>
</Tabs>`

code.icon = `<Tabs>
  <TabPane label="Tab1" icon="logo-windows">我是内容1....</TabPane>
  <TabPane label="Tab2" icon="logo-apple">我是内容2....</TabPane>
  <TabPane label="Tab3" icon="logo-android">我是内容3....</TabPane>
</Tabs>`
code.card = `<Tabs card>
  <TabPane label="Tab1" icon="logo-windows">我是内容1....</TabPane>
  <TabPane label="Tab2" icon="logo-apple">我是内容2....</TabPane>
  <TabPane label="Tab3" icon="logo-android">我是内容3....</TabPane>
  <Button slot="extra" mini>Action</Button>
</Tabs>`

code.closable =`<Tabs card closable>
  <TabPane :label="'Tab '+n" v-for="n in m" :closable="n!=1" :key="n">我是内容{{n}}....</TabPane>
  <Button slot="extra" mini @click="m++">+</Button>
</Tabs>
<script>
export default {
  data() {
    return {
      m:3,
    }
  }
}
</script>`

code.sample = `<Tabs :value="1" sample>
  <TabPane label="TabTitle 1" name="1">
    <p>我是内容1....</p>
    <p>我是内容1....</p>
    <p>我是内容1....</p>
  </TabPane>
  <TabPane label="TabTitle 2" name="2">
    <p>我是内容2....</p>
    <p>我是内容2....</p>
    <p>我是内容2....</p>
  </TabPane>
  <TabPane label="TabTitle 3" name="3">
    <p>我是内容2....</p>
    <p>我是内容2....</p>
    <p>我是内容2....</p>
  </TabPane>
</Tabs>`

export default code