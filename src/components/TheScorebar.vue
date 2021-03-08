<template>
  <div class="my-5">

    <h4>{{ scoreTitle }}</h4>

    <b-row v-show="value != undefined">
      <b-col class="pr-0">

        <b-progress
          :value="100 - value"
          :max="100"
          height="3rem"
          style="transform: rotate(180deg)"
        ></b-progress>

      </b-col>
      <b-col class="pl-0">

        <b-progress
          :value="value"
          :max="100"
          height="3rem"
          style
        ></b-progress>

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

      return 'Nothing to work with. Add some pros and cons!';
    }
  }
};</script>
