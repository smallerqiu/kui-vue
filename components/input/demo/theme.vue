<template>
  <Space vertical block>
    <Checkbox label="Circle" v-model="isCircle" @change="setShape" />
    <Input placeholder="Please input" :shape="shape" />
    <Input placeholder="Disabled" disabled :shape="shape" />
    <Input placeholder="Please input" :icon="Search" :shape="shape" />
    <Input placeholder="Please input" :clearable="false" :shape="shape" @search="onSearch" />
    <br />
    <div v-for="tier in tiers" :key="tier" class="tier">
      <code>theme: {{ tier }}</code>
      <TextArea :theme="tier" :rows="2" placeholder="Please input" />
      <Input :theme="tier" addon-before="https://" placeholder="Please input" />
    </div>
  </Space>
</template>
<script setup lang="ts">
import { Search } from "kui-icons";
import { message, type ChangeEvent, type ThemeType } from "kui-vue";
import { ref } from "vue";

// An input paints all six tiers, and the tier lands on the box itself: `fill` — what it does when nobody
// writes a theme — plates it, `outline` and `dashed` put a solid or dashed edge on it instead, `plain` leaves
// it bare, `solid` plates it on the primary and inverts the typed text, the placeholder and the icons, and
// `underlined` keeps only the bottom rule. A text area and an input with an addon are drawn from the same
// arms, so they take the same tiers. The addon is the group's own surface: a group that is not `fill` borders
// the addon it wraps, which is why the second row of each pair reads differently from the first.
const tiers: ThemeType[] = ["fill", "outline", "plain", "solid", "dashed", "underlined"];

const isCircle = ref();
const shape = ref();
const setShape = ({ checked }: ChangeEvent) => {
  shape.value = checked ? "circle" : null;
};
const onSearch = (value: string) => {
  message.info(`Search: ${value}`);
};
</script>

<style scoped>
.tier {
  display: grid;
  gap: 4px;
}
</style>
