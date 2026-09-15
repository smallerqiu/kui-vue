<template>
  <Space vertical block size="large">
    <Space align="center" wrap>
      <strong>Language</strong>
      <RadioGroup v-model="lang" type="button">
        <RadioButton value="en">English</RadioButton>
        <RadioButton value="zh">中文</RadioButton>
        <RadioButton value="de">Deutsch</RadioButton>
      </RadioGroup>
    </Space>

    <ConfigProvider :locale="locale">
      <div class="locale-grid">
        <Card title="Date and time" bordered>
          <Space vertical block>
            <DatePicker />
            <DatePicker mode="dateRange" />
            <DatePicker mode="time" />
          </Space>
        </Card>

        <Card title="Selection" bordered>
          <Space vertical block>
            <div class="locale-control"><Select :options="[]" /></div>
            <div class="locale-control"><TreeSelect :tree-data="[]" /></div>
          </Space>
        </Card>

        <Card class="locale-wide" title="Data feedback" bordered>
          <Space vertical block>
            <div class="locale-overflow">
              <Page :total="85" show-total show-sizer show-elevator />
            </div>
            <Table :columns="columns" :data="[]" />
          </Space>
        </Card>

        <Card class="locale-wide" title="Overlay" bordered>
          <Button @click="visible = true">Open Modal</Button>
          <Modal v-model="visible" title="Locale preview">
            The buttons and other built-in text follow the current locale.
          </Modal>
        </Card>
      </div>
    </ConfigProvider>
  </Space>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import de from "kui-vue/locale/de";
import en from "kui-vue/locale/en";
import zh from "kui-vue/locale/zh-CN";
import { computed, ref, watch } from "vue";

import "dayjs/locale/de";
import "dayjs/locale/zh-cn";

type Language = "en" | "zh" | "de";

const lang = ref<Language>("en");
const visible = ref(false);
const locales = { en, zh, de };
const locale = computed(() => locales[lang.value]);
const dayjsLocales: Record<Language, string> = {
  en: "en",
  zh: "zh-cn",
  de: "de",
};
const columns = [
  { title: "Name", key: "name" },
  { title: "Age", key: "age" },
];

watch(
  lang,
  (value) => {
    dayjs.locale(dayjsLocales[value]);
  },
  { immediate: true },
);
</script>

<style scoped>
.locale-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.locale-control {
  width: 100%;
}

.locale-control :deep(> *) {
  width: 100%;
}

.locale-wide {
  min-width: 0;
  grid-column: 1 / -1;
}

.locale-overflow {
  overflow-x: auto;
}

@media (max-width: 720px) {
  .locale-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
