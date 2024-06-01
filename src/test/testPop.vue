<template>
  <div style="width: 800px;height: 800px;">


    <!-- top -->
    <Poptip :placement="placement">
      <Button>TL1</Button>
      <template slot="content">
        <p>{{ tip }}</p>
        <p>{{ tip }}</p>
      </template>
    </Poptip>

    <!-- top right -->
    <div style="position: absolute;top:0;right: 0;">
      <Poptip :placement="placement">
        <Button>TL3</Button>
        <template slot="content">
          <p>{{ tip }}</p>
          <p>{{ tip }}</p>
        </template>
      </Poptip>
    </div>

    <!-- left bottom -->
    <div style="position: absolute;bottom: 0;">
      <Poptip :placement="placement">
        <Button>TL2</Button>
        <template slot="content">
          <p>{{ tip }}</p>
          <p>{{ tip }}</p>
        </template>
      </Poptip>
    </div>



    <!-- bottom right -->

    <div style="position: absolute;bottom:0;right: 0;">
      <Poptip :placement="placement">
        <Button>TL4</Button>
        <template slot="content">
          <p>{{ tip }}</p>
          <p>{{ tip }}</p>
        </template>
      </Poptip>
    </div>
    <!-- center -->
    <div style="position: absolute;top:600px;left: 220px;">
      <Poptip :placement="placement">
        <Button style="width: 520px;">TL1</Button>
        <template slot="content">
          <p>{{ tip }}</p>
          <p>{{ tip }}</p>
        </template>
      </Poptip>
    </div>

    <div style="position: absolute;left: 200px;top:100px">

      <RadioGroup direction="vertical" :options="options" v-model="placement">

      </RadioGroup>
    </div>
    <!--     
    <div style="margin-left:70px;white-space: nowrap;">
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
    </div>
    <div style="float:left;height:125px;width:70px;">
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
    </div>
    <div style="margin-left:310px;height:125px;width:70px;">
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
    </div>
    <div style="margin-left:70px;white-space: nowrap;">
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
    </div> -->
  </div>
</template>
<script>

export default {
  data() {
    return {
      tip: '明月几时有,把酒问青天!明月几时有,把酒问青天!',
      title: '明月几时有,把酒问青天!明月几时有,把酒问青天!',
      placement: 'left',
      options: [
        { label: 'TopLeft', value: 'top-left' },
        { label: 'Top', value: 'top' },
        { label: 'TopRight', value: 'top-right' },
        { label: 'LeftTop', value: 'left-top' },
        { label: 'Left', value: 'left' },
        { label: 'LeftBottom', value: 'left-bottom' },
        { label: 'RightTop', value: 'right-top' },
        { label: 'Right', value: 'right' },
        { label: 'RightBottom', value: 'right-bottom' },
        { label: 'BottomLeft', value: 'bottom-left' },
        { label: 'Bottom', value: 'bottom' },
        { label: 'BottomRight', value: 'bottom-right' },
      ]
    };
  },
}
</script>
