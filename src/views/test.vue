<template>
  <Space>
    <Avatar :icon="HeartOutline" />
    <Avatar>
      <Icon :type="HeartOutline" />
    </Avatar>
    <Avatar>U</Avatar>
    <Avatar>USER</Avatar>
    <Avatar src="https://cdn.chuchur.com/img/icons/apple-icon-57x57.png" />
    <Avatar style="color: #f51212; background-color: #ffc57d">
      U
    </Avatar>
    <Avatar style="background-color:#d06868" :icon="HeartOutline" />
    <br/>
    <br/>
    <Avatar src="https://cdn.chuchur.com/img/chick.jpeg" :size="50"/>
    <Avatar src="https://cdn.chuchur.com/img/monkey.jpeg" shape="square"/>
  </Space>
</template>
<script setup>
import { HeartOutline } from "kui-icons"
</script>

