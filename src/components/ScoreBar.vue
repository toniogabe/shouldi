<template>
  <div>
    <b-progress
      :value="value"
      :max="100"
      show-progress
      animated
      height="2rem"
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
