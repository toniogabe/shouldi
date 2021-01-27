<template>
  <div>
    <h1>im here</h1>
    <b-list-group-item v-for="item in list" :key="item">
      {{ item.title }}
    </b-list-group-item>
  </div>
</template>

<script>
export default {
  name: "BaseList",
  props: {
    list: Array
  }
};
</script>
