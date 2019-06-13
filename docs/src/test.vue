 
<!--单独调试组件专用-->
 
<template>
  <div style="padding:300px;">
    <!-- <DatePicker format="YYYY-MM-DD HH:mm:ss" v-model="e"></DatePicker> -->
    <!-- <AAA v-for="x in a" :key="x.x"></AAA> -->
    <Dropdown>
      <Button @click="t">tttttt</Button>
      <DropdownMenu slot="list">
        <DropdownItem>wrewrew</DropdownItem>
        <DropdownItem selected>wrewrew</DropdownItem>
        <DropdownItem disabled>wrewrew</DropdownItem>
        <DropdownItem>wrewrew</DropdownItem>
        <DropdownItem divided>wrewrew</DropdownItem>
        <DropdownItem>wrewrew</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <br />
    <Dropdown trigger="click">
      <a>test</a>
      <DropdownMenu slot="list">
        <DropdownItem>wrewrew</DropdownItem>
        <DropdownItem>wrewrew</DropdownItem>
        <DropdownItem>wrewrew</DropdownItem>
        <DropdownItem>wrewrew</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <br />
    <br />
    <br />
    <Dropdown :visible="tt">
      <a>test</a>
      <div slot="list" style="height:200px;width:200px;background:#fff;">
        fsadfsdfsdfs
        <Button @click="tt=false">hshshsh</Button>
      </div>
    </Dropdown>
  </div>
</template>

<script>
import AAA from './components/test'
export default {
  components: { AAA },
  data() {
    return {
      e: [Date.now(), Date.now()],
      // e:Date.now(),
      // e:['2019-12-12','2019-12-11'],
      tt: true,
      a: [],
      te: true,
      b: ['2019-10-10 10:10:10', '2019-10-10 10:10:10']
    }
  },
  mounted() {

  },
  methods: {
    t() {
      this.a.push({ x: Math.floor(Math.random() * 99999) + 's' })
    }
  }
}
</script>

