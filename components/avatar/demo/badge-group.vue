<template>
  <Space>
    <Badge :count="1">
      <Avatar shape="square" :icon="User" />
    </Badge>
    <Badge dot>
      <Avatar shape="square" :icon="User" />
    </Badge>
  </Space>
  <br />
  <br />
  <Space>
    <AvatarGroup>
      <Avatar>U</Avatar>
      <Avatar>USER</Avatar>
      <Avatar src="https://cdn.chuchur.com/img/icons/apple-icon-57x57.png" />
      <Avatar style="color: #f51212; background-color: #ffc57d"> U </Avatar>
      <Avatar style="background-color: #d06868" :icon="Heart" />
      <Avatar src="https://cdn.chuchur.com/img/chick.jpeg" />
      <Avatar src="https://cdn.chuchur.com/img/monkey.jpeg" />
    </AvatarGroup>
  </Space>
</template>
<script setup lang="ts">
import { Heart, User } from "kui-icons";
</script>
