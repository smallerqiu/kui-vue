<template>
  <Space vertical>
    <Button @click="show1 = true" type="primary">Draggable</Button>
    <Button @click="show2 = true" type="primary">Center-aligned</Button>
    <Button @click="show3 = true" type="primary">Top 200px</Button>
    <Button @click="show4 = true" type="primary">Maximize</Button>
    <Button @click="show5 = true" type="primary">No overlay</Button>
    <Button @click="show6 = true" type="primary">No footer</Button>

    <Modal title="Draggable" v-model="show1" draggable @ok="show1 = false">
      {{ text }}
    </Modal>

    <Modal title="Centered" v-model="show2" centered @ok="show2 = false">
      {{ text }}
    </Modal>

    <Modal title="Top 200px" v-model="show3" :top="200" @ok="show3 = false">
      {{ text }}
    </Modal>

    <Modal title="Maximized" v-model="show4" maximized @ok="show4 = false">
      {{ text }}
    </Modal>

    <Modal
      title="Click mask dont't be close"
      v-model="show5"
      :mask="false"
      :mask-closable="false"
      @ok="show5 = false"
    >
      {{ text }}
    </Modal>

    <Modal title="No footer" v-model="show6" :footer="false" @ok="show6 = false">
      {{ text }}
    </Modal>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);
const show4 = ref(false);
const show5 = ref(false);
const show6 = ref(false);
const text = `A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; `;
</script>
