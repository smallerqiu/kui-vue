<template>
  <div class="config-demo">
    <Space wrap>
      <Button @click="toggleLocale">locale: {{ language === "zh" ? "zh-CN" : "en" }}</Button>
      <Button @click="cycleSize">size: {{ size }}</Button>
      <Button @click="cycleTheme">theme: {{ theme }}</Button>
      <Button @click="cycleShape">shape: {{ shape }}</Button>
    </Space>

    <div ref="popupHost" class="config-scope">
      <ConfigProvider
        :locale="locale"
        :size="size"
        :theme="theme"
        :shape="shape"
        :get-popup-container="getPopupContainer"
      >
        <Space vertical>
          <section>
            <h4>Global appearance and locale</h4>
            <Form :model="model" layout="vertical">
              <FormItem label="Keyword">
                <Input v-model="model.keyword" placeholder="Inherited Input" />
              </FormItem>
              <FormItem label="Framework">
                <Select :options="[]" />
              </FormItem>
              <FormItem label="Date">
                <DatePicker />
              </FormItem>
            </Form>
            <Space wrap>
              <Button>Button</Button>
              <Tag>Tag</Tag>
              <Page :total="80" :page="2" show-sizer show-elevator />
            </Space>
          </section>

          <Card title="Popup container">
            <p>The Select overlay is mounted in this dashed area instead of document.body.</p>
            <Select v-model="model.popup" :options="options" placeholder="Open popup" />
          </Card>

          <ConfigProvider size="large" theme="fill" shape="round">
            <section class="nested-scope">
              <h4>嵌套 ConfigProvider</h4>
              <Space wrap>
                <Button>Nested Button</Button>
                <Input placeholder="Large fill round" />
                <Tag>Nested Tag</Tag>
              </Space>
            </section>
          </ConfigProvider>

          <section>
            <h4>组件属性优先</h4>
            <Button size="large" theme="fill" shape="circle">Local</Button>
          </section>
        </Space>
      </ConfigProvider>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import en from "kui-vue/locale/en";
import zhCN from "kui-vue/locale/zh-CN";
import type { ShapeType, SizeType, ThemeType } from "../../const/types";
import "dayjs/locale/zh-cn";

const popupHost = ref<HTMLElement | null>(null);
const language = ref<"zh" | "en">("zh");
const locale = computed(() => (language.value === "zh" ? zhCN : en));
const size = ref<SizeType>("small");
const theme = ref<ThemeType>("outline");
const shape = ref<ShapeType>("square");
const model = reactive<{ keyword: string; popup?: string }>({
  keyword: "",
});
const options = [
  { label: "Vue", value: "vue" },
  { label: "React", value: "react" },
];

const getPopupContainer = () => popupHost.value ?? document.body;
const toggleLocale = () => {
  language.value = language.value === "zh" ? "en" : "zh";
};
const cycleSize = () => {
  const values: SizeType[] = ["small", "medium", "large"];
  size.value = values[(values.indexOf(size.value) + 1) % values.length];
};
const cycleTheme = () => {
  const values: ThemeType[] = ["outline", "fill", "plain"];
  theme.value = values[(values.indexOf(theme.value) + 1) % values.length];
};
const cycleShape = () => {
  const values: ShapeType[] = ["square", "round", "circle"];
  shape.value = values[(values.indexOf(shape.value) + 1) % values.length];
};
</script>

<style scoped>
.config-demo > .k-space {
  margin-bottom: 16px;
}

.config-scope {
  position: relative;
  padding: 16px;
  border: 1px dashed var(--kui-color-border);
  border-radius: var(--kui-border-radius);
}

section h4 {
  margin-bottom: 12px;
}

.k-form {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.k-form-item {
  margin-bottom: 8px;
}

.k-input,
.k-select,
.k-date-picker {
  width: 100%;
}

.k-card {
  max-width: 560px;
}

.k-card p {
  margin-bottom: 12px;
  color: var(--kui-color-text-description);
}

.nested-scope {
  padding: 16px;
  background: var(--kui-color-bg-component);
  border-radius: var(--kui-border-radius);
}

@media (max-width: 720px) {
  .k-form {
    grid-template-columns: 1fr;
  }
}
</style>
