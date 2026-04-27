<template>
  <Space>
    <Poptip title="Title">
      <template #content>
        <p>See the light through the mist!</p>
      </template>
      <Button type="primary">Hover me</Button>
    </Poptip>
    <Poptip dark>
      <template #content>
        <p>See the light through the mist!</p>
        <p>See the light through the mist!</p>
      </template>
      <Button type="primary">No title</Button>
    </Poptip>
  </Space>
</template>