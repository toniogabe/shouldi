<template>
  <div class="home">
    <TheNavbar />

    <b-container class="mt-5">
      <TheScorebar v-model="score" />
      <TheQuestionInput v-model="question" />

      <b-row>
        <arguments-list
          v-model="cons"
          title="Negatives"
          @insert="addToList(cons, $event)"
          @remove="removeFromList(cons, $event)"
        ></arguments-list>

        <arguments-list
          v-model="pros"
          title="Positives"
          @insert="addToList(pros, $event)"
          @remove="removeFromList(pros, $event)"
        ></arguments-list>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import TheQuestionInput from "@/components/TheQuestionInput";
import TheScorebar from "@/components/TheScorebar";
import ArgumentsList from "@/components/ArgumentsList";

export default {
  name: "Home",
  components: {
    ArgumentsList,
    TheQuestionInput,
    TheScorebar,
    TheNavbar
  },

  data() {
    return {
      question: undefined,
      pros: [],
      cons: []
    };
  },

  computed: {
    score() {
      let prosWeight = this.pros.reduce((total, el) => (total += el.weight), 0);
      let consWeight = this.cons.reduce((total, el) => (total += el.weight), 0);

      let proScore = prosWeight + this.pros.length;
      let conScore = consWeight + this.cons.length;

      return (proScore * 100) / (proScore + conScore);
    }
  },

  methods: {
    addToList(array, event) {
      let argument = Object.assign({}, event);
      array.push(argument);
    },

    removeFromList(array, event) {
      array.splice(event, 1);
    }
  }
};
</script>
