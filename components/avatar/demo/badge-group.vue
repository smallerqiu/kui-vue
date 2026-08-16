<template>
  <Space vertical block>
    <Space>
      <Badge :count="1">
        <Avatar shape="square" :icon="User" />
      </Badge>
      <Badge dot>
        <Avatar shape="square" :icon="User" />
      </Badge>
    </Space>
    <Space vertical>
      <AvatarGroup size="small">
        <Avatar>U</Avatar>
        <Avatar>UI</Avatar>
        <Avatar src="https://cdn.chuchur.com/img/chick.jpeg" />
        <Avatar src="https://cdn.chuchur.com/img/monkey.jpeg" />
      </AvatarGroup>
      <AvatarGroup>
        <Avatar>U</Avatar>
        <Avatar>USER</Avatar>
        <Avatar src="https://cdn.chuchur.com/img/icons/apple-icon-57x57.png" />
        <Avatar style="color: #f51212; background-color: #ffc57d"> U </Avatar>
        <Avatar style="background-color: #d06868" :icon="Heart" />
        <Avatar src="https://cdn.chuchur.com/img/chick.jpeg" />
        <Avatar src="https://cdn.chuchur.com/img/monkey.jpeg" />
      </AvatarGroup>
      <Slider :min="4" :max="20" v-model="spacing" />
      <AvatarGroup size="large" :spacing="spacing" :max-count="4">
        <Avatar>U</Avatar>
        <Avatar>UI</Avatar>
        <Avatar src="https://cdn.chuchur.com/img/chick.jpeg" />
        <Avatar src="https://cdn.chuchur.com/img/monkey.jpeg" />
        <Avatar :icon="Heart" />
      </AvatarGroup>
    </Space>
  </Space>
</template>
<script setup lang="ts">
import { Heart, User } from "kui-icons";
import { ref } from "vue";
const spacing = ref(4);
</script>
