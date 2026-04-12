<template>
  <Space>
    <Poptip title="Title">
      <template #content>
        <p>See the light through the mist!</p>
        <p>See the light through the mist!</p>
      </template>
      <Button type="primary">Hover me</Button>
    </Poptip>
    <Poptip title="Title" trigger="focus">
      <template #content>
        <p>See the light through the mist!</p>
        <p>See the light through the mist!</p>
      </template>
      <Button type="primary">Focus</Button>
    </Poptip>
    <Poptip title="Title" trigger="click">
      <template #content>
        <p>See the light through the mist!</p>
        <p>See the light through the mist!</p>
      </template>
      <Button type="primary">Click me</Button>
    </Poptip>
  </Space>
</template>