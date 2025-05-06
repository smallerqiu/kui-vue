<cn>
#### 位置
通过 `placement`控制方向, 位置有十二个方向。
</cn>

```vue
<template>
  <Flex style="width:300px" vertical align="center">
    <Space compact>
      <Poptip placement="top-left" :title="title">
        <Button>TL</Button>
        <template #content>
          <p>{{ tip }}</p>
          <p>{{ tip }}</p>
        </template>
      </Poptip>
      <Poptip placement="top" :title="title">
        <Button>Top</Button>
        <template #content>
          <p>{{ tip }}</p>
          <p>{{ tip }}</p>
        </template>
      </Poptip>
      <Poptip placement="top-right" :title="title">
        <Button>TR</Button>
        <template #content>
          <p>{{ tip }}</p>
          <p>{{ tip }}</p>
        </template>
      </Poptip>
    </Space>
    <Flex justify="space-between" style="width:100%;padding:10px 0">
      <Space vertical compact>
        <Poptip placement="left-top" :title="title">
          <Button>LT</Button>
          <template #content>
            <p>{{ tip }}</p>
            <p>{{ tip }}</p>
          </template>
        </Poptip>
        <Poptip placement="left" :title="title">
          <Button>Left</Button>
          <template #content>
            <p>{{ tip }}</p>
            <p>{{ tip }}</p>
          </template>
        </Poptip>
        <Poptip placement="left-bottom" :title="title">
          <Button>LB</Button>
          <template #content>
            <p>{{ tip }}</p>
            <p>{{ tip }}</p>
          </template>
        </Poptip>
      </Space>

      <Space vertical compact>
        <Poptip placement="right-top" :title="title">
          <Button>RT</Button>
          <template #content>
            <p>{{ tip }}</p>
            <p>{{ tip }}</p>
          </template>
        </Poptip>
        <Poptip placement="right" :title="title">
          <Button>Right</Button>
          <template #content>
            <p>{{ tip }}</p>
            <p>{{ tip }}</p>
          </template>
        </Poptip>
        <Poptip placement="right-bottom" :title="title">
          <Button>RB</Button>
          <template #content>
            <p>{{ tip }}</p>
            <p>{{ tip }}</p>
          </template>
        </Poptip>
      </Space>
    </Flex>
    <Space compact>
      <Poptip placement="bottom-left" :title="title">
        <Button>BL</Button>
        <template #content>
          <p>{{ tip }}</p>
          <p>{{ tip }}</p>
        </template>
      </Poptip>
      <Poptip placement="bottom" :title="title">
        <Button>Bottom</Button>
        <template #content>
          <p>{{ tip }}</p>
          <p>{{ tip }}</p>
        </template>
      </Poptip>
      <Poptip placement="bottom-right" :title="title">
        <Button>BR</Button>
        <template #content>
          <p>{{ tip }}</p>
          <p>{{ tip }}</p>
        </template>
      </Poptip>
    </Space>
  </Flex>
</template>
<script setup>
const tip = '明月几时有,把酒问青天!'
const title = "标题"
</script>
```