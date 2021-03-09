<template>
  <div class="home">
    <TheNavbar />

    <b-container class="mt-5">
      <!-- <h1 class="display-4 text-center">Stuck on a big decision?</h1> -->

      <TheScorebar v-model="score" />

      <TheQuestionInput v-model="question"/>

      <b-row>
        <BaseList
          title="Negatives"
          :list="cons"
          @insert="addToList(cons, $event)"
          @remove="removeFromList(cons, $event)"
        />

        <BaseList
          title="Positives"
          :list="pros"
          @insert="addToList(pros, $event)"
          @remove="removeFromList(pros, $event)"
        />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import TheQuestionInput from "@/components/TheQuestionInput";
import TheScorebar from "@/components/TheScorebar";
import BaseList from "@/components/BaseList";

export default {
  name: "Home",
  components: {
    BaseList,
    TheQuestionInput,
    TheScorebar,
    TheNavbar
  },

  data() {
    return {
      question: undefined,
      pros: [],
      cons: [],
    };
  },

  computed: {
    score() {
      let prosWeight = this.pros.reduce((total, el) => (total += el.weight), 0);
      let consWeight = this.cons.reduce((total, el) => (total += el.weight), 0);

      let proScore = prosWeight + this.pros.length;
      let conScore = consWeight + this.cons.length;

      return (proScore * 100) / (proScore + conScore);
    },
  },

  methods: {
    addToList (array, event) {
      let argument = Object.assign({}, event);
      array.push(argument);
      // console.log(array, argument);
    },

    removeFromList (array, event) {
      console.log(event);
      array.splice(event, 1);
    },
  },
};
</script>
