<template>
  <Space style="max-width:520px;" vertical block>
    <code>show %</code>
    <Slider :tipFormatter="(v) => `${v}%`" :modelValue="20" />
    <code>hide tooltip</code>
    <Slider :tooltipVisible="false" :modelValue="20" />
    <code>show tooltip for ever</code>
    <Slider :modelValue="70" :tooltipVisible="true" />
  </Space>
</template>