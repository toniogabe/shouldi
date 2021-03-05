<template>
  <div>
    <b-progress
      :value="value"
      :max="100"
      show-progress
      height="3rem"
    ></b-progress>
  </div>
</template>

<script>
export default {
  name: "ScoreBar",
  props: {
    value: {
      type: Number,
      default: 0
    }

  }
};
</script>
