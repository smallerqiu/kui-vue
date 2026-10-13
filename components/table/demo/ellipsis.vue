<template>
  <Space vertical>
    <Space>
      <Switch v-model="global" />
      <span>表格级 ellipsis</span>
    </Space>
    <!-- 容器压到 480px，列宽不够才看得到省略号。 -->
    <div style="max-width: 480px">
      <Table :data="data" :columns="columns" :ellipsis="global" row-key="key" />
    </div>
  </Space>
</template>

<script setup lang="ts">
import type { Column } from "kui-vue";
import { ref } from "vue";

/**
 * 单元格内容超出列宽时截断成省略号：表格级 `ellipsis` 一次管所有列，列上的 `ellipsis` 覆盖它，
 * 那一列想留完整内容就写 `ellipsis: false`（kui-react 行为相同）。
 *
 * 悬停提示默认就有，但只在真的被截断时才弹（没截断的格子不会多出气泡），内容默认是截断的那段文本。
 */
const data = [
  {
    key: "1",
    title: "把双仓的表格样式对齐到同一份 LESS",
    owner: "Qiu",
    note: "固定列的宽度基准、相邻固定列的 sticky 偏移、滚动条槽位的占位三处必须用同一份数据，少同步一处就会在临界宽度上露馅，横向能滚的距离也会跟着变。",
  },
  {
    key: "2",
    title: "分组表头 + 固定列 + scroll.y",
    owner: "Ann",
    note: "分组表头配上固定列和纵向滚动时，边框、圆角和右下角的空白块最容易出问题，表头分栏之后每格的裁剪范围不同，得逐个组合回归。",
  },
  {
    key: "3",
    title: "虚拟滚动窗口",
    owner: "Bob",
    note: "虚拟滚动的窗口起点要按总行数钳上界，否则滚过头会渲染出一段空窗口，保留区高度也会算错，滚动条跟着突然抖动一下。",
  },
];

const columns: Column[] = [
  // 没有 `ellipsis`：跟着表格级走，单行截断。
  { title: "任务", key: "title", width: 160 },
  // 这一列单独关掉：负责人一般很短，被截断反而难看。
  { title: "负责人", key: "owner", width: 100, ellipsis: false },
  // 说明截到三行，提示换成指定内容。
  {
    title: "说明",
    key: "note",
    width: 200,
    ellipsis: { rows: 3, tooltip: "完整说明请进需求单" },
  },
];

const global = ref(true);
</script>
