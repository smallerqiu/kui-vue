<template>
  <Space vertical block>
    <Input
      placeholder="Please input"
      clearable
      @change="events.change"
      @keypress="events.keypress"
      @keyup="events.keyup"
      @keydown="events.keydown"
      @keydown.enter="events.keydownEnter"
      @blur="events.blur"
      @focus="events.focus"
    >
    </Input>
    <TextArea
      placeholder="Please input"
      @change="events.change"
      @keypress="events.keypress"
      @keyup="events.keyup"
      @keydown="events.keydown"
      @keydown.enter="events.keydownEnter"
      @blur="events.blur"
      @focus="events.focus"
    />
  </Space>
</template>
<script setup lang="ts">
import { message } from "kui-vue";
const events = {};
["focus", "blur", "change", "keypress", "keyup", "keydown", "keydownEnter"].forEach((type) => {
  events[type] = function (e) {
    message.info(type);
    console.log(type, e.target.value);
  };
});
</script>
