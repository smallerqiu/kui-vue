<template>
  <div style="padding: 130px 60px 48px">
    <FlameWrap
      :color="[1, 0.28, 0.08]"
      :intensity="0.85"
      :height="120"
      :speed="0.55"
      :sparks="2"
      :smoke="0.6"
      :radius="18"
    >
      <Card :style="{ padding: '20px', height: '120px' }">
        <h3 style="margin: 0 0 8px">Warm flame</h3>
        <p style="margin: 0; color: var(--kui-color-text-secondary)">
          可以调整颜色、火焰高度、火星、烟雾和燃烧速度。
        </p>
      </Card>
    </FlameWrap>
  </div>
</template>
