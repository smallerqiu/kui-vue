<template>
  <Result
    status="500"
    title="Something Went Wrong."
    subTitle="Sorry we ran into some issues, please try again later."
  >
    <template #extra>
      <Button type="primary">Back Home</Button>
      <Button>Try Again</Button>
    </template>
  </Result>
</template>
