<cn>
#### 位置
通过 `placement`控制方向, 位置有十二个方向。
</cn>

```vue
<template>
  <Flex style="width:300px" vertical align="center">
    <Space compact>
      <Poptip placement="top-left">
        <Button>TL</Button>
        <template slot="content">
          <p>{{ tip }}</p>
          <p>{{ tip }}</p>
        </template>
      </Poptip>
      <Poptip placement="top">
        <Button>Top</Button>
        <template slot="content">
          <p>{{ tip }}</p>
          <p>{{ tip }}</p>
        </template>
      </Poptip>
      <Poptip placement="top-right">
        <Button>TR</Button>
        <template slot="content">
          <p>{{ tip }}</p>
          <p>{{ tip }}</p>
        </template>
      </Poptip>
    </Space>
    <Flex justify="space-between" style="width:100%;padding:10px 0">
      <Space vertical compact>
        <Poptip placement="left-top">
          <Button>LT</Button>
          <template slot="content">
            <p>{{ tip }}</p>
            <p>{{ tip }}</p>
          </template>
        </Poptip>
        <Poptip placement="left">
          <Button>Left</Button>
          <template slot="content">
            <p>{{ tip }}</p>
            <p>{{ tip }}</p>
          </template>
        </Poptip>
        <Poptip placement="left-bottom">
          <Button>LB</Button>
          <template slot="content">
            <p>{{ tip }}</p>
            <p>{{ tip }}</p>
          </template>
        </Poptip>
      </Space>

      <Space vertical compact>
        <Poptip placement="right-top">
          <Button>RT</Button>
          <template slot="content">
            <p>{{ tip }}</p>
            <p>{{ tip }}</p>
          </template>
        </Poptip>
        <Poptip placement="right">
          <Button>Right</Button>
          <template slot="content">
            <p>{{ tip }}</p>
            <p>{{ tip }}</p>
          </template>
        </Poptip>
        <Poptip placement="right-bottom">
          <Button>RB</Button>
          <template slot="content">
            <p>{{ tip }}</p>
            <p>{{ tip }}</p>
          </template>
        </Poptip>
      </Space>
    </Flex>
    <Space compact>
      <Poptip placement="bottom-left">
        <Button>BL</Button>
        <template slot="content">
          <p>{{ tip }}</p>
          <p>{{ tip }}</p>
        </template>
      </Poptip>
      <Poptip placement="bottom">
        <Button>Bottom</Button>
        <template slot="content">
          <p>{{ tip }}</p>
          <p>{{ tip }}</p>
        </template>
      </Poptip>
      <Poptip placement="bottom-right">
        <Button>BR</Button>
        <template slot="content">
          <p>{{ tip }}</p>
          <p>{{ tip }}</p>
        </template>
      </Poptip>
    </Space>
  </Flex>
</template>
<script>
export default {
  data() {
    return {
      tip: '明月几时有,把酒问青天!',
    }
  }
}
</script>
```