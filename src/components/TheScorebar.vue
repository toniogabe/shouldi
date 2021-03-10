<template>
  <div class="my-5 text-center">

    <h1 class="display-4 my-5 line-break">{{ scoreTitle }}</h1>

    <b-row align-v="center">
      <b-col cols="1">
        <b-icon icon="hand-thumbs-down" scale="1.5" variant="danger"></b-icon>
      </b-col>
      <b-col class="pr-0">

        <b-progress
          :value="100 - value"
          :max="100"
          :height="height"
          style="transform: rotate(180deg)"
          variant="danger"
        ></b-progress>

      </b-col>
      <b-col class="pl-0">

        <b-progress
          :value="value"
          :max="100"
          :height="height"
          style
          variant="success"
        ></b-progress>

      </b-col>
      <b-col cols="1">
        <b-icon icon="hand-thumbs-up" scale="1.5" variant="success"></b-icon>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "TheScorebar",
  props: {
    value: {
      type: Number,
      default: -1
    },
    height: {
      type: String,
      default: '1rem'
    }

  },

  computed: {
    scoreTitle () {
      if (this.value > 95) return 'What are you waiting for?';
      if (this.value < 5) return 'Totally NOPE!';
      if (this.value == 50) return 'On the fence!';
      if (this.value > 80) return 'Just DO IT!';
      if (this.value > 60) return 'Maybe you should do it.';
      if (this.value > 40) return 'Almost.. try add some arguments.';
      if (this.value > 20) return 'It better not.';
      if (this.value >= 5) return "Don't do it.";

      return 'Stuck with a decision? \n Add some pros and cons!';
    }
  }
};</script>
