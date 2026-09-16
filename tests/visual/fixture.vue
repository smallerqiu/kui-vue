<template>
  <ConfigProvider :locale="locale" :size="size" :theme="theme">
    <main class="visual-fixture" :style="{ minHeight: fixtureMinHeight }">
      <h1>KUI visual regression</h1>
      <section class="visual-grid">
        <article>
          <h2>Controls</h2>
          <Space vertical block>
            <DatePicker />
            <DatePicker mode="time" />
            <Select v-model="selected" :options="options" />
            <Input placeholder="Input" />
          </Space>
        </article>
        <article>
          <h2>Form</h2>
          <Form :model="form" :label-col="{ span: 7 }" :wrapper-col="{ span: 17 }">
            <FormItem label="Name" :rules="{ required: true }">
              <Input v-model="form.name" />
            </FormItem>
            <FormItem label="Type"><Select v-model="form.type" :options="options" /></FormItem>
          </Form>
        </article>
        <article>
          <h2>Tree</h2>
          <Tree :data="treeData" :expanded-keys="['fruit']" />
        </article>
        <article class="visual-wide">
          <h2>Pagination</h2>
          <Page :total="85" show-sizer show-elevator />
        </article>
        <article class="visual-wide">
          <h2>Table</h2>
          <Table :columns="columns" :data="rows" bordered striped />
        </article>
      </section>
    </main>
  </ConfigProvider>
</template>

<script setup lang="ts">
import de from "../../components/locale/de";
import en from "../../components/locale/en";
import zh from "../../components/locale/zh-CN";
import type { SizeType, ThemeType } from "../../components";
import { reactive, ref } from "vue";

const params = new URLSearchParams(location.search);
const size = (params.get("size") || "medium") as SizeType;
const theme = (params.get("theme") || "fill") as ThemeType;
const fixtureMinHeight = size === "small" ? "802px" : undefined;
const locales = { en, zh, de };
const locale = locales[(params.get("lang") || "zh") as keyof typeof locales] || zh;
document.documentElement.setAttribute("theme-mode", params.get("dark") === "1" ? "dark" : "light");

const selected = ref("apple");
const options = [
  { label: "Apple", value: "apple" },
  { label: "Orange", value: "orange" },
];
const form = reactive({ name: "KUI", type: "apple" });
const treeData = [
  {
    title: "Fruit",
    key: "fruit",
    children: [
      { title: "Apple", key: "apple" },
      { title: "Orange", key: "orange" },
    ],
  },
];
const columns = [
  { title: "Name", key: "name" },
  { title: "Age", key: "age" },
  { title: "Address", key: "address" },
];
const rows = [{ key: "1", name: "KUI", age: 6, address: "Wuhan" }];
</script>

<style>
html,
body {
  min-width: 960px;
  margin: 0;
  background: var(--kui-color-bg);
  color: var(--kui-color-text);
}

.visual-fixture {
  box-sizing: border-box;
  width: 960px;
  padding: 24px;
}

.visual-fixture h1,
.visual-fixture h2 {
  margin: 0 0 16px;
}

.visual-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.visual-grid article {
  min-width: 0;
  padding: 16px;
  border: 1px solid var(--kui-color-border);
  border-radius: var(--kui-border-radius);
}

.visual-wide {
  grid-column: 1 / -1;
}
</style>
