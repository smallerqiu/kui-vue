<template>
  <div>
    <Rate disabled :value="2.5" allowHalf />
    <br />
    <br />
    <Rate disabled :value="3.3"/>
    <br />
    <br />
    <Rate disabled :value="8.5" show-score :count="10"/>
  </div>
</template>
